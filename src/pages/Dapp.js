import Header from '../components/Header'
import PersonalInfo from '../components/PersonalInfo'
import CollectibleList from '../components/CollectibleList'
import Recruit from '../components/Recruit'
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import clsx from 'clsx';
import React, { useState, useEffect } from 'react'
import map from "../artifacts/deployments/map.json"
import { getEthereum } from "../getEthereum"
import Web3 from "web3"

const namehash = require("eth-ens-namehash")

const data = {
    _id: 0,
    address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    isArmed: false,
    price: 298654571194,
    power: 1000

}
const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    green: {
        backgroundColor: '#E8F7E8',
        position: 'fixed',
        width: '100%',
        height: '100%'
    },
    red: {
        backgroundColor: '#FFE5ED'
    }
}))
export default function Dapp() {
    
    const classes = useStyles();

    const [setting, setSetting] = useState({
        web3: null,
        ethereum: null,
        accounts: null,
        chainid: null,
    })
    const [contractInfo, setContractInfo] = useState({
        enhrContract: null,
        armyContract: null,
        enhrDecimals: 0,
    })
    const [balance, setBalance] = useState(0)
    const [minionList, setMinionList] = useState({})
    const [minionInfo, setMinionInfo] = useState([])
    const [state, setState] = useState({
        quote: "ETH",
        base: "USD",
        minionID: 0,
    })
    const [checked, setChecked] = useState(false)
    const armyType = checked ? "FaunaArmy" : "FloraArmy";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ethereum = await getEthereum()
                const accounts = await ethereum.request({ method: 'eth_accounts' });
                const chainid = parseInt(await ethereum.request({ method: 'eth_chainId' }))
                const web3 = new Web3(ethereum)
                setSetting({
                    web3: web3,
                    ethereum: ethereum,
                    accounts: accounts,
                    chainid: chainid
                })
                // console.log('success')
                // console.log('web3', web3)
                // console.log('etheruem', ethereum)
                // console.log('accounts', accounts)
                // console.log('chainid', chainid)
            } catch (e) {
                console.log(`Could not enable accounts. Interaction with contracts not available.
            Use a modern browser with a Web3 plugin to fix this issue.`)
                console.log(e)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const loadInitialContracts = async () => {
            const { chainid } = setting
            console.log("chainid:", chainid)
            let chain = "dev";
            if (chainid <= 42) {
                chain = chainid.toString()
            }
            const enhrContract = await loadContract(chain, "ArmyEnhancer", 1)
            const armyContract = await loadContract(chain, armyType, 0)

            if (!enhrContract || !armyContract) {
                return
            }
            const enhrDecimals = await enhrContract.methods.decimals().call()
            setContractInfo({
                enhrContract: enhrContract,
                armyContract: armyContract,
                enhrDecimals: enhrDecimals
            })


        }
        const { web3, ethereum, accounts, chainid } = setting
        if (web3 && ethereum && accounts && chainid) {
            loadInitialContracts()
        }


    }, [setting,checked])

    useEffect(() => {
        const fetchData = async () => {
            const { accounts } = setting
            const { enhrContract, enhrDecimals, armyContract } = contractInfo
            if (accounts && enhrContract && enhrDecimals && armyContract) {
                console.log(accounts)

                await enhrGetBalance()
                await armyGetList()
            }
        }
        fetchData()
    }, [contractInfo])
    const loadContract = async (chain, contractName, which) => {
        // Load a deployed contract instance into a web3 contract object
        const { web3 } = setting

        // Get the address of the most recent deployment from the deployment map
        let address
        try {
            address = map[chain][contractName][which]
        } catch (e) {
            console.log(`Couldn't find any deployed contract "${contractName}" on the chain (ID: "${chain}").`)
            return undefined
        }

        // Load the artifact with the specified address
        let contractArtifact
        try {
            contractArtifact = await import(`../artifacts/deployments/${chain}/${address}.json`)
        } catch (e) {
            console.log(`Failed to load contract artifact "../artifacts/deployments/${chain}/${address}.json"`)
            return undefined
        }

        return new web3.eth.Contract(contractArtifact.abi, address)
    }

    const enhrGetBalance = async () => {
        const { accounts } = setting
        const { enhrContract, enhrDecimals } = contractInfo
        if (accounts.length === 0) {
            return
        }
        const enhrBalance = ((await enhrContract.methods.balanceOf(accounts[0]).call()) / 10 ** enhrDecimals).toFixed(2)
        setBalance(enhrBalance)
    }

    const armyGetList = async () => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        if (accounts.length === 0) {
            return
        }
        const minionIDs = await armyContract.methods.getMinionIDs(accounts[0]).call()
        let minionList = {}
        for (let id of minionIDs) {
            minionList[id] = Object.values(await armyContract.methods.getMinionInfo(id).call())
            minionList[id].push(await armyContract.methods.tokenURI(id).call()) 
        }
        console.log(minionList)
        setMinionList(minionList)
    }
    const onRecruit = async (quote, base) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        let success;
        try {
            const pairNode = namehash.hash(`${quote}-${base}.data.eth`)

            armyContract.methods.recruit(pairNode).send({ from: accounts[0] })
                .on("receipt", () => {
                    armyGetList()
                })
                .on("error", (err) => {
                    console.log(err)
                })
            success = true
        }
        catch (err) {
            console.log(err)
            success = false
        }
        return success

    }

    const onTrain = async (e) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        e.preventDefault()
        const pid = parseInt(e.currentTarget.value)
        armyContract.methods.train(pid).send({ from: accounts[0] })
            .on("receipt", () => {
                armyGetList()
            })
            .on("error", (err) => {
                console.log(err)
            })
    }

    const onArm = async (e) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        e.preventDefault()
        const pid = parseInt(e.currentTarget.value)
        armyContract.methods.arm(pid).send({ from: accounts[0] })
            .on("receipt", () => {
                armyGetList()
            })
            .on("error", (err) => {
                console.log(err)
            })
    }

    const onSell = async (e) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        e.preventDefault()
        const pid = parseInt(e.currentTarget.value)
        armyContract.methods.liberate(pid).send({ from: accounts[0] })
            .on("receipt", () => {
                armyGetList()
                enhrGetBalance()
            })
            .on("error", (err) => {
                console.log(err)
            })
    }

    const onBoost = async (e) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        e.preventDefault()
        const pid = parseInt(e.currentTarget.value)
        armyContract.methods.reinforce(pid).send({ from: accounts[0] })
            .on("receipt", () => {
                armyGetList()
                enhrGetBalance()
            })
            .on("error", (err) => {
                console.log(err)
            })
    }

    const onHeal = async (e) => {
        const { accounts } = setting
        const { armyContract } = contractInfo
        e.preventDefault()
        const pid = parseInt(e.currentTarget.value)
        armyContract.methods.recover(pid).send({ from: accounts[0] })
            .on("receipt", () => {
                armyGetList()
                enhrGetBalance()
            })
            .on("error", (err) => {
                console.log(err)
            })
    }

    const handleChecked = () => {
        setChecked(!checked)
    }
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    console.log("MinionList:",minionList)
    return (
        <>
            <div className={clsx(classes.green, {
                [classes.red]: checked
            })}>
                <CssBaseline />
                <Header checked={checked} toggleChecked={handleChecked} />

                <div className={classes.appBarSpacer} />
                <Box display='flex'
                    flexDirection='row'
                    style={{
                        padding: 30, marginLeft: 100, width: '90%',
                    }}
                >
                    <Box>
                        <Box display='flex' flexDirection='column' style={{ gap: 25 }}>
                            <PersonalInfo balance={balance} address={setting.accounts ? setting.accounts[0] : ""} />
                            <CollectibleList
                                checked={checked}
                                list={minionList}
                                onArm={onArm}
                                onTrain={onTrain}
                                onBoost={onBoost}
                                onHeal={onHeal}
                                onSell={onSell} />
                        </Box>
                    </Box>
                    <Box style={{ marginLeft: 50 }}>
                        <Typography variant='h6' style={{ paddingLeft: 20, marginBottom: 20 }}>Recruit Minion</Typography>
                        <Recruit onRecruit={onRecruit} />
                    </Box>
                </Box>
            </div>
        </>

    )
}
