import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography, TextField,Paper, IconButton } from '@material-ui/core'
import Collectible from './Collectible';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

// const data = [{

//   _id: 0,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// },
// {

//   _id: 1,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// }, {

//   _id: 2,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// }, {

//   _id: 3,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// }, {

//   _id: 4,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// }, {

//   _id: 5,
//   address: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
//   isArmed: false,
//   price: 298654571194,
//   power: 1000

// },
// ]

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    maxHeight: 580,
    overflow: 'auto',
    maxWidth: 1040
  },
  search: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  paper: {
    marginTop: '20px',
    padding: '32px',
  }
}));

export default function CollectibleList(props) {
  const { checked, list, onArm, onTrain, onBoost, onHeal, onSell } = props
  const classes = useStyles();
  let data = [];
  if (list) {
    for (const key in list) {
      data.push({
        _id: key,
        address: list[key][0],
        isArmed: list[key][1],
        price: list[key][2],
        power: list[key][3],
        tokenURI: list[key][4]
      })
    }
  }
  const [ID,setID] = useState();
  return (
    <div>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" justifyContent="space-between" maxWidth={1000} >
          <Box >
            <Typography variant='h6'> Collectibles</Typography>
          </Box>
          <Box>
            <form >
            <TextField
              className={classes.search}
              placeholder='Search by ID...'
              value={ID}
              onChange={(e) => setID( e.target.value )}
            />
            <IconButton className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
            </form>

          </Box>
        </Box>
        <Grid container spacing={3} className={classes.root}>
          {data.length ? data.map((item, i) => (
            <Grid item lg={6} key={i}>
              <Collectible
                checked={checked}
                _id={item._id}
                address={item.address}
                isArmed={item.isArmed}
                price={item.price}
                power={item.power}
                tokenURI={item.tokenURI}
                onArm={onArm}
                onTrain={onTrain}
                onBoost={onBoost}
                onHeal={onHeal}
                onSell={onSell}
              />
            </Grid>
          )) :
            <Grid item lg={12}>
              <Paper className={classes.paper} style={{ minWidth: 800 }}>
                <Typography >
                  You don't have any collectible yet. Recruit a minoin to have your first one!
                </Typography>
              </Paper>
            </Grid>
          }


        </Grid>
      </Container>
    </div>
  )
}

CollectibleList.propTypes = {
  checked: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired,
  onArm: PropTypes.func.isRequired,
  onTrain: PropTypes.func.isRequired,
  onBoost: PropTypes.func.isRequired,
  onHeal: PropTypes.func.isRequired,
  onSell: PropTypes.func.isRequired
}