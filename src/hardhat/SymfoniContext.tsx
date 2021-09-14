/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { providers, Signer, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import { ArmyRank } from "./typechain/ArmyRank";
import { ArmyRank__factory } from "./typechain/factories/ArmyRank__factory";
import { ArmyEnhancer } from "./typechain/ArmyEnhancer";
import { ArmyEnhancer__factory } from "./typechain/factories/ArmyEnhancer__factory";
import BattlefieldDeployment from "./deployments/localhost/Battlefield.json";
import { Battlefield } from "./typechain/Battlefield";
import { Battlefield__factory } from "./typechain/factories/Battlefield__factory";
import FaunaArmyDeployment from "./deployments/localhost/FaunaArmy.json";
import { FaunaArmy } from "./typechain/FaunaArmy";
import { FaunaArmy__factory } from "./typechain/factories/FaunaArmy__factory";
import GreeterDeployment from "./deployments/localhost/Greeter.json";
import { Greeter } from "./typechain/Greeter";
import { Greeter__factory } from "./typechain/factories/Greeter__factory";
import FloraArmyDeployment from "./deployments/localhost/FloraArmy.json";
import { FloraArmy } from "./typechain/FloraArmy";
import { FloraArmy__factory } from "./typechain/factories/FloraArmy__factory";
import MockV3AggregatorDeployment from "./deployments/localhost/MockV3Aggregator.json";
import { MockV3Aggregator } from "./typechain/MockV3Aggregator";
import { MockV3Aggregator__factory } from "./typechain/factories/MockV3Aggregator__factory";
import MockEnsRegistryDeployment from "./deployments/localhost/MockEnsRegistry.json";
import { MockEnsRegistry } from "./typechain/MockEnsRegistry";
import { MockEnsRegistry__factory } from "./typechain/factories/MockEnsRegistry__factory";
import { ERC20 } from "./typechain/ERC20";
import { ERC20__factory } from "./typechain/factories/ERC20__factory";
import { ERC721 } from "./typechain/ERC721";
import { ERC721__factory } from "./typechain/factories/ERC721__factory";
import MockPublicResolverDeployment from "./deployments/localhost/MockPublicResolver.json";
import { MockPublicResolver } from "./typechain/MockPublicResolver";
import { MockPublicResolver__factory } from "./typechain/factories/MockPublicResolver__factory";

const emptyContract = {
    instance: undefined,
    factory: undefined
};
const defaultProvider: providers.Provider | undefined = undefined;
export const ProviderContext = React.createContext<[providers.Provider | undefined, React.Dispatch<React.SetStateAction<providers.Provider | undefined>>]>([defaultProvider, () => { }]);
const defaultCurrentAddress: string = "";
export const CurrentAddressContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([defaultCurrentAddress, () => { }]);
const defaultSigner: Signer | undefined = undefined;
export const SignerContext = React.createContext<[Signer | undefined, React.Dispatch<React.SetStateAction<Signer | undefined>>]>([defaultSigner, () => { }]);
const defaultSymfoniContext: SymfoniContextInterface = {
    currentHardhatProvider: "",
    init: () => { throw Error("Symfoni context not initialized") },
    loading: false,
    messages: [],
    providers: []
};
export const SymfoniContext = React.createContext<SymfoniContextInterface>(defaultSymfoniContext);
export const ArmyRankContext = React.createContext<SymfoniArmyRank>(emptyContract);
export const ArmyEnhancerContext = React.createContext<SymfoniArmyEnhancer>(emptyContract);
export const BattlefieldContext = React.createContext<SymfoniBattlefield>(emptyContract);
export const FaunaArmyContext = React.createContext<SymfoniFaunaArmy>(emptyContract);
export const GreeterContext = React.createContext<SymfoniGreeter>(emptyContract);
export const FloraArmyContext = React.createContext<SymfoniFloraArmy>(emptyContract);
export const MockV3AggregatorContext = React.createContext<SymfoniMockV3Aggregator>(emptyContract);
export const MockEnsRegistryContext = React.createContext<SymfoniMockEnsRegistry>(emptyContract);
export const ERC20Context = React.createContext<SymfoniERC20>(emptyContract);
export const ERC721Context = React.createContext<SymfoniERC721>(emptyContract);
export const MockPublicResolverContext = React.createContext<SymfoniMockPublicResolver>(emptyContract);

export interface SymfoniContextInterface {
    init: (provider?: string) => void;
    loading: boolean;
    messages: string[];
    currentHardhatProvider: string;
    providers: string[];
}

export interface SymfoniProps {
    autoInit?: boolean;
    showLoading?: boolean;
    loadingComponent?: React.ReactNode;
}

export interface SymfoniArmyRank {
    instance?: ArmyRank;
    factory?: ArmyRank__factory;
}

export interface SymfoniArmyEnhancer {
    instance?: ArmyEnhancer;
    factory?: ArmyEnhancer__factory;
}

export interface SymfoniBattlefield {
    instance?: Battlefield;
    factory?: Battlefield__factory;
}

export interface SymfoniFaunaArmy {
    instance?: FaunaArmy;
    factory?: FaunaArmy__factory;
}

export interface SymfoniGreeter {
    instance?: Greeter;
    factory?: Greeter__factory;
}

export interface SymfoniFloraArmy {
    instance?: FloraArmy;
    factory?: FloraArmy__factory;
}

export interface SymfoniMockV3Aggregator {
    instance?: MockV3Aggregator;
    factory?: MockV3Aggregator__factory;
}

export interface SymfoniMockEnsRegistry {
    instance?: MockEnsRegistry;
    factory?: MockEnsRegistry__factory;
}

export interface SymfoniERC20 {
    instance?: ERC20;
    factory?: ERC20__factory;
}

export interface SymfoniERC721 {
    instance?: ERC721;
    factory?: ERC721__factory;
}

export interface SymfoniMockPublicResolver {
    instance?: MockPublicResolver;
    factory?: MockPublicResolver__factory;
}

export const Symfoni: React.FC<SymfoniProps> = ({
    showLoading = true,
    autoInit = true,
    ...props
}) => {
    const [initializeCounter, setInitializeCounter] = useState(0);
    const [currentHardhatProvider, setCurrentHardhatProvider] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [signer, setSigner] = useState<Signer | undefined>(defaultSigner);
    const [provider, setProvider] = useState<providers.Provider | undefined>(defaultProvider);
    const [currentAddress, setCurrentAddress] = useState<string>(defaultCurrentAddress);
    const [fallbackProvider] = useState<string | undefined>(undefined);
    const [providerPriority, setProviderPriority] = useState<string[]>(["web3modal", "hardhat"]);
    const [ArmyRank, setArmyRank] = useState<SymfoniArmyRank>(emptyContract);
    const [ArmyEnhancer, setArmyEnhancer] = useState<SymfoniArmyEnhancer>(emptyContract);
    const [Battlefield, setBattlefield] = useState<SymfoniBattlefield>(emptyContract);
    const [FaunaArmy, setFaunaArmy] = useState<SymfoniFaunaArmy>(emptyContract);
    const [Greeter, setGreeter] = useState<SymfoniGreeter>(emptyContract);
    const [FloraArmy, setFloraArmy] = useState<SymfoniFloraArmy>(emptyContract);
    const [MockV3Aggregator, setMockV3Aggregator] = useState<SymfoniMockV3Aggregator>(emptyContract);
    const [MockEnsRegistry, setMockEnsRegistry] = useState<SymfoniMockEnsRegistry>(emptyContract);
    const [ERC20, setERC20] = useState<SymfoniERC20>(emptyContract);
    const [ERC721, setERC721] = useState<SymfoniERC721>(emptyContract);
    const [MockPublicResolver, setMockPublicResolver] = useState<SymfoniMockPublicResolver>(emptyContract);
    useEffect(() => {
        if (messages.length > 0)
            console.debug(messages.pop())
    }, [messages])

    const getProvider = async (): Promise<{ provider: providers.Provider, hardhatProviderName: string } | undefined> => {
        let hardhatProviderName = "Not set";
        let _providerPriority = [...providerPriority];
        // Fallback provider
        if (fallbackProvider && autoInit && initializeCounter === 0) {
            if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") === null) {
                _providerPriority = _providerPriority.sort((a, b) => {
                    return a === fallbackProvider ? -1 : b === fallbackProvider ? 1 : 0;
                })
            }
        }
        const provider = await _providerPriority.reduce(async (maybeProvider: Promise<providers.Provider | undefined>, providerIdentification) => {
            let foundProvider = await maybeProvider
            if (foundProvider) {
                return Promise.resolve(foundProvider)
            }
            else {
                switch (providerIdentification.toLowerCase()) {
                    case "web3modal":
                        try {
                            const provider = await getWeb3ModalProvider()
                            const web3provider = new ethers.providers.Web3Provider(provider);
                            hardhatProviderName = "web3modal";
                            return Promise.resolve(web3provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        }
                    case "hardhat":
                        try {
                            const provider = new ethers.providers.JsonRpcProvider({
                                url: "http://127.0.0.1:8545",
                            });
                            hardhatProviderName = "hardhat";
                            return Promise.resolve(provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        } default:
                        return Promise.resolve(undefined)
                }
            }
        }, Promise.resolve(undefined)) // end reduce
        return provider ? { provider, hardhatProviderName } : undefined
    };
    const getSigner = async (_provider: providers.Provider, hardhatProviderName: string): Promise<Signer | undefined> => {
        switch (hardhatProviderName) {
            case "web3modal":
                const web3provider = _provider as ethers.providers.Web3Provider
                return await web3provider.getSigner()
            case "hardhat":
                return ethers.Wallet.fromMnemonic("test test test test test test test test test test test junk").connect(_provider)
            default:
                return undefined
        }
    };
    const getWeb3ModalProvider = async (): Promise<any> => {
        const providerOptions: IProviderOptions = {

        };
        const web3Modal = new Web3Modal({
            // network: "mainnet",
            cacheProvider: false,
            providerOptions, // required
        });
        return await web3Modal.connect();
    };

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const finish = (text: string) => {
                setLoading(false)
                setMessages(old => [...old, text])
            }
            const finishWithContracts = (text: string) => {
                setArmyRank(getArmyRank(_provider, _signer))
                setArmyEnhancer(getArmyEnhancer(_provider, _signer))
                setBattlefield(getBattlefield(_provider, _signer))
                setFaunaArmy(getFaunaArmy(_provider, _signer))
                setGreeter(getGreeter(_provider, _signer))
                setFloraArmy(getFloraArmy(_provider, _signer))
                setMockV3Aggregator(getMockV3Aggregator(_provider, _signer))
                setMockEnsRegistry(getMockEnsRegistry(_provider, _signer))
                setERC20(getERC20(_provider, _signer))
                setERC721(getERC721(_provider, _signer))
                setMockPublicResolver(getMockPublicResolver(_provider, _signer))
                finish(text)
            }
            if (!autoInit && initializeCounter === 0) return finish("Auto init turned off.")
            setLoading(true)
            setMessages(old => [...old, "Initiating Symfoni React"])
            const providerObject = await getProvider() // getProvider can actually return undefined, see issue https://github.com/microsoft/TypeScript/issues/11094

            if (!subscribed || !providerObject) return finish("No provider or signer.")
            const _provider = providerObject.provider
            setProvider(_provider)
            setMessages(old => [...old, "Useing " + providerObject.hardhatProviderName])
            setCurrentHardhatProvider(providerObject.hardhatProviderName)
            const _signer = await getSigner(_provider, providerObject.hardhatProviderName);

            if (!subscribed || !_signer) return finishWithContracts("Provider, without signer.")
            setSigner(_signer)
            setMessages(old => [...old, "Useing signer"])
            const address = await _signer.getAddress()

            if (!subscribed || !address) return finishWithContracts("Provider and signer, without address.")
            setCurrentAddress(address)

            return finishWithContracts("Completed Symfoni context initialization.")
        };
        doAsync();
        return () => { subscribed = false }
    }, [initializeCounter])

    const getArmyRank = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ArmyRank__factory.connect(ethers.constants.AddressZero, _signer) : ArmyRank__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniArmyRank = {
            instance: instance,
            factory: _signer ? new ArmyRank__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getArmyEnhancer = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ArmyEnhancer__factory.connect(ethers.constants.AddressZero, _signer) : ArmyEnhancer__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniArmyEnhancer = {
            instance: instance,
            factory: _signer ? new ArmyEnhancer__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getBattlefield = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = BattlefieldDeployment.receipt.contractAddress
        const instance = _signer ? Battlefield__factory.connect(contractAddress, _signer) : Battlefield__factory.connect(contractAddress, _provider)
        const contract: SymfoniBattlefield = {
            instance: instance,
            factory: _signer ? new Battlefield__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getFaunaArmy = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = FaunaArmyDeployment.receipt.contractAddress
        const instance = _signer ? FaunaArmy__factory.connect(contractAddress, _signer) : FaunaArmy__factory.connect(contractAddress, _provider)
        const contract: SymfoniFaunaArmy = {
            instance: instance,
            factory: _signer ? new FaunaArmy__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getGreeter = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = GreeterDeployment.receipt.contractAddress
        const instance = _signer ? Greeter__factory.connect(contractAddress, _signer) : Greeter__factory.connect(contractAddress, _provider)
        const contract: SymfoniGreeter = {
            instance: instance,
            factory: _signer ? new Greeter__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getFloraArmy = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = FloraArmyDeployment.receipt.contractAddress
        const instance = _signer ? FloraArmy__factory.connect(contractAddress, _signer) : FloraArmy__factory.connect(contractAddress, _provider)
        const contract: SymfoniFloraArmy = {
            instance: instance,
            factory: _signer ? new FloraArmy__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getMockV3Aggregator = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = MockV3AggregatorDeployment.receipt.contractAddress
        const instance = _signer ? MockV3Aggregator__factory.connect(contractAddress, _signer) : MockV3Aggregator__factory.connect(contractAddress, _provider)
        const contract: SymfoniMockV3Aggregator = {
            instance: instance,
            factory: _signer ? new MockV3Aggregator__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getMockEnsRegistry = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = MockEnsRegistryDeployment.receipt.contractAddress
        const instance = _signer ? MockEnsRegistry__factory.connect(contractAddress, _signer) : MockEnsRegistry__factory.connect(contractAddress, _provider)
        const contract: SymfoniMockEnsRegistry = {
            instance: instance,
            factory: _signer ? new MockEnsRegistry__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getERC20 = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ERC20__factory.connect(ethers.constants.AddressZero, _signer) : ERC20__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniERC20 = {
            instance: instance,
            factory: _signer ? new ERC20__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getERC721 = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ERC721__factory.connect(ethers.constants.AddressZero, _signer) : ERC721__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniERC721 = {
            instance: instance,
            factory: _signer ? new ERC721__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getMockPublicResolver = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = MockPublicResolverDeployment.receipt.contractAddress
        const instance = _signer ? MockPublicResolver__factory.connect(contractAddress, _signer) : MockPublicResolver__factory.connect(contractAddress, _provider)
        const contract: SymfoniMockPublicResolver = {
            instance: instance,
            factory: _signer ? new MockPublicResolver__factory(_signer) : undefined,
        }
        return contract
    }
        ;

    const handleInitProvider = (provider?: string) => {
        if (provider) {
            setProviderPriority(old => old.sort((a, b) => {
                return a === provider ? -1 : b === provider ? 1 : 0;
            }))
        }
        setInitializeCounter(initializeCounter + 1)
    }
    return (
        <SymfoniContext.Provider value={{ init: (provider) => handleInitProvider(provider), providers: providerPriority, currentHardhatProvider, loading, messages }}>
            <ProviderContext.Provider value={[provider, setProvider]}>
                <SignerContext.Provider value={[signer, setSigner]}>
                    <CurrentAddressContext.Provider value={[currentAddress, setCurrentAddress]}>
                        <ArmyRankContext.Provider value={ArmyRank}>
                            <ArmyEnhancerContext.Provider value={ArmyEnhancer}>
                                <BattlefieldContext.Provider value={Battlefield}>
                                    <FaunaArmyContext.Provider value={FaunaArmy}>
                                        <GreeterContext.Provider value={Greeter}>
                                            <FloraArmyContext.Provider value={FloraArmy}>
                                                <MockV3AggregatorContext.Provider value={MockV3Aggregator}>
                                                    <MockEnsRegistryContext.Provider value={MockEnsRegistry}>
                                                        <ERC20Context.Provider value={ERC20}>
                                                            <ERC721Context.Provider value={ERC721}>
                                                                <MockPublicResolverContext.Provider value={MockPublicResolver}>
                                                                    {showLoading && loading ?
                                                                        props.loadingComponent
                                                                            ? props.loadingComponent
                                                                            : <div>
                                                                                {messages.map((msg, i) => (
                                                                                    <p key={i}>{msg}</p>
                                                                                ))}
                                                                            </div>
                                                                        : props.children
                                                                    }
                                                                </MockPublicResolverContext.Provider >
                                                            </ERC721Context.Provider >
                                                        </ERC20Context.Provider >
                                                    </MockEnsRegistryContext.Provider >
                                                </MockV3AggregatorContext.Provider >
                                            </FloraArmyContext.Provider >
                                        </GreeterContext.Provider >
                                    </FaunaArmyContext.Provider >
                                </BattlefieldContext.Provider >
                            </ArmyEnhancerContext.Provider >
                        </ArmyRankContext.Provider >
                    </CurrentAddressContext.Provider>
                </SignerContext.Provider>
            </ProviderContext.Provider>
        </SymfoniContext.Provider>
    )

};