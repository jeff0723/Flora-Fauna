import React from 'react'
import { AppBar, Toolbar, Box, Button, Container, Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/image/Logo.png'
import Overlap from '../assets/image/Overlap.png'
import Background from '../assets/image/Background.jpg'
import Wallet from '../assets/image/Wallet.svg'
import Collection from '../assets/image/Collection.svg'
import Label from '../assets/image/Label.svg'
import Image from '../assets/image/Image.svg'
import { Link } from "react-router-dom";
import fauna_1 from '../assets/image/fauna_1.png'
import fauna_2 from '../assets/image/fauna_2.png'
import fauna_3 from '../assets/image/fauna_3.png'
import fauna_4 from '../assets/image/fauna_4.png'
import fauna_5 from '../assets/image/fauna_5.png'
import flora_1 from '../assets/image/flora_1.png'
import flora_2 from '../assets/image/flora_2.png'
import flora_3 from '../assets/image/flora_3.png'
import flora_4 from '../assets/image/flora_4.png'
import flora_5 from '../assets/image/flora_5.png'

// const card = [fauna_1, flora_1, fauna_2, flora_2, fauna_3, flora_3, fauna_4, flora_4, fauna_5, flora_5]
const card = [flora_1, flora_2, flora_3, flora_4, flora_5,fauna_1, fauna_2, fauna_3, fauna_4, fauna_5, ]

const useStyles = makeStyles((theme) => ({
    header: {
        maxWidth: 1600
    },
    logo: {
        heigh: 40,
        width: 100,
    },
    bodyLeft: {
        marginLeft: 150,
        padding: "150px 88px 88px 152px"
    },
    main: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 40%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 48,
        maxWidth: 560,
    },
    subheading: {
        marginTop: 40,
        fontSize: 36,
        color: "#373737",
        maxWidth: 560
    },
    summary: {
        marginTop: 40,
        fontWeight: 500,
        fontSize: 24,
        color: "#575c61",
        maxWidth: 560,
        marginBottom: 40
    },
    button: {
        textTransform: 'none',
        background: "#5C1FA6",
        color: "#FFFFFF",
        boderRadius: 8,
        fontWeight: "bold",
        padding: "12px 24px"
    },
    overlap: {
        height: 1000,
        width: 1000
    },
    h2: {
        fontWeight: "bold",
        fontSize: 36,
    },
    svg: {
        height: 40,
        width: 40
    },
    p_title: {
        fontWeight: 600,
        fontSize: 20,
        color: '#04111d',
        marginTop: 10,
        marginBottom: 10

    },
    p_body: {
        fontSize: 16,
        color: "#707a83"
    }

}))
export default function Home() {
    const classes = useStyles()
    return (
        <div>
            <AppBar style={{ background: "#FFFFFF", boxShadow: 'none', }}>
                <Toolbar>
                    <Container maxWidth="lg">
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.header} >
                            <Box flexGrow={1}>
                                <img src={Logo} alt='logo' className={classes.logo} />
                            </Box>
                            <Box>
                                <Button variant='contained'
                                    className={classes.button}
                                    style={{
                                        marginTop: 10,
                                    }}
                                    component={Link} to="/Dapp"
                                >
                                    Play Now
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Toolbar>

            </AppBar>
            <main>
                <Toolbar />
                <section className={classes.main} style={{ height: 830,marginBottom:50}}>

                    <Box display='flex' flexDirection='row'>
                        <Box className={classes.bodyLeft}>
                            <Typography className={classes.title}>People trade NFT</Typography>
                            <Typography className={classes.title}> We trade to mint NFT</Typography>
                            <Typography className={classes.subheading}>Welcome to a New World of Upgradable NFT</Typography>
                            <Typography className={classes.summary}>Over <span style={{ color: "#5c1fa6" }}>4 million transaction</span> happen every day, seizing these opportunities to become a trading artist. Find your potential. Have a meaningful trading journey. Change the ecosytem of NFT.</Typography>
                            <Button
                                variant='contained'
                                className={classes.button}
                                component={Link} to="/Dapp">
                                Play Now
                            </Button>
                        </Box>
                        <Box>
                            <img src={Overlap} alt='overlap' className={classes.overlap} />

                        </Box>
                    </Box>
                </section>
                <Divider />
                <div style={{ height: 430, marginTop: 50 }}>
                    <Container maxWidth="lg">
                        <Typography variant='h2' className={classes.h2} style={{ textAlign: "center" }}>Create and sell your NFTs</Typography>
                        <Grid container justifyContent="center" spacing={3} style={{ marginTop: 50 }}>
                            <Grid item lg={3} style={{ textAlign: "center" }}>
                                <img src={Wallet} alt='Wallet' className={classes.svg}></img>
                                <Typography className={classes.p_title}>Set up your wallet
                                </Typography>
                                <Typography className={classes.p_body}>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</Typography>
                            </Grid>
                            <Grid item lg={3} style={{ textAlign: "center" }}>
                                <img src={Collection} alt='Collection' className={classes.svg}></img>
                                <Typography className={classes.p_title}>Create your collection
                                </Typography>
                                <Typography className={classes.p_body}>Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</Typography>
                            </Grid>
                            <Grid item lg={3} style={{ textAlign: "center" }}>
                                <img src={Image} alt='NFT' className={classes.svg}></img>
                                <Typography className={classes.p_title}>Add your NFTs
                                </Typography>
                                <Typography className={classes.p_body}>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</Typography>

                            </Grid>
                            <Grid item lg={3} style={{ textAlign: "center" }}>
                                <img src={Label} alt='Label' className={classes.svg}></img>
                                <Typography className={classes.p_title}>List them for sale
                                </Typography>
                                <Typography className={classes.p_body}>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!

                                </Typography>

                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Divider />
                <div style={{ height: 430, marginBottom: 50, marginTop: 50 }}>
                    <Typography variant='h2' className={classes.h2} style={{ textAlign: "center", marginBottom: 50 }}>Explore Collectibles</Typography>
                    <Container maxWidth='lg'>
                        <Box display='flex' flexDirection='row' overflow="visible" style={{ flexWrap: 'no-wrap', overflowX: "scroll", gap: 5 }}>
                            {card.map((item) => (
                                <img src={item} alt='card' style={{ width: 300, height: 300 }} />
                            ))}

                        </Box>
                    </Container>
                </div>
            </main>
        </div>
    )
}
