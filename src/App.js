import logo from './logo.svg';
import './App.css';
import React, { button, useEffect, useMemo, useState, useContext, useRef } from "react";
import Button from '@material-ui/core/Button';
import GameMaster from './GameMaster';
import InfoGrid from './components/InfoGrid.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [foodValue, setfoodValue] = useState(1);
  const foodValueRef = useRef(foodValue);
  foodValueRef.current=foodValue;
  const [peasantValue, setPeasantValue] = useState({value:0, initialPrice:1, currentPrice:1,
    foodIncome:1, priceIncreaseModifier:1.07});
  const peasantValueRef = useRef(peasantValue);
  peasantValueRef.current=peasantValue;

  const [tickingBool, setTickBool]=useState(false);

  function handleBuyPeasants(){
    var currentPeasantCost = peasantValueRef.current.currentPrice;
    var currentFoodValue = foodValueRef.current;
   // console.log("handle click", currentFoodValue, currentPeasantCost);
    if(currentFoodValue>=currentPeasantCost)
    {
      var newFoodValue = currentFoodValue-currentPeasantCost;
     // console.log("yes food value greater");
      var newPeasantValue = peasantValueRef.current.value+1;
      var newPeasantCost=Math.ceil(peasantValueRef.current.currentPrice * peasantValueRef.current.priceIncreaseModifier);
      setfoodValue(newFoodValue);
      setPeasantValue({...peasantValue, value:newPeasantValue, currentPrice:newPeasantCost});
    }
    
    if (!tickingBool)
    {
      constantTick();
      setTickBool(true);
    }
  }

  function constantTick(){
   // setPeasantValue(peasantValueRef.current+1);
    console.log("tick");
    calculateIncome();
    setTimeout(constantTick, 1000);
    // setTimeout(()=>{setPeasantValue(peasantValue+1)}, 1000);
  }
  
  function calculateIncome()
  {
    //calc income for peasants
    peasantIncome();
  }
  function peasantIncome()
  {
    var foodIncome = peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setfoodValue(foodValueRef.current+foodIncome);
  }

  return (
    <div className="App">
       {/* <InfoGrid value1={peasantValue} value2={foodValue} value3={valuethree} ></InfoGrid> */}
      {/* <GameMaster/> */}
      <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
        <Paper className={classes.paper}>Food: {foodValue}</Paper>
        </Grid> 
        <Grid item xs={3}>
        <Paper className={classes.paper}><FaceIcon/> Peasants: {peasantValue.value}<IconButton onClick={() => { handleBuyPeasants() }}><AddIcon/></IconButton></Paper>
        </Grid>
        <Grid item xs={3}>
        {/* <Paper className={classes.paper}>itemThree {value3}</Paper> */}
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
