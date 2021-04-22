import "./App.css";
import React, {
  button,
  useEffect,
  useMemo,
  useState,
  useContext,
  useRef,
} from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";
import Tooltip from '@material-ui/core/Tooltip';
import ResourceDisplay from './components/ResourceDisplay'
import MultiplierDisplay from './components/MultiplierDisplay'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperSmall: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize:"10px"
  },
}));

function App() {
  const classes = useStyles();
  const [foodValue, setFoodValue] = useState(1);
  const [foodIncomeRate, setFoodIncomeRate]=useState("0/s");
  const [woodValue, setWoodValue] = useState(0);
  const [woodIncomeRate, setWoodIncomeRate] = useState("0/s");
  const [stoneValue, setStoneValue] = useState(0);
  const [stoneIncomeRate, setStoneIncomeRate] = useState("0/s");
  const [metalValue, setMetalValue] = useState(0);
  const [metalIncomeRate, setMetalIncomeRate] = useState("0/s");
  const foodValueRef = useRef(foodValue);
  foodValueRef.current = foodValue;

  const [fieldValue, setFieldValue] = useState({
    value: 0,
    initialPrice: {foodCost:1, woodCost:0, peasantCost:0},
    currentPrice: {foodCost:1, woodCost:0, peasantCost:0},
    foodMultiplier: 10,
    priceIncreaseModifier: 1.30,
  });
  const [forestValue, setForestValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    woodMultiplier: 10,
    priceIncreaseModifier: 1.07,
  });
  const [outcropValue, setOutcropValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    stoneMultiplier: 10,
    priceIncreaseModifier: 1.07,
  });
  const [prospectValue, setDepositValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    metalMultiplier: 10,
    priceIncreaseModifier: 1.07,
  });

  const [peasantValue, setPeasantValue] = useState({
    value: 0,
    initialPrice: {foodCost:1, woodCost:0, peasantCost:0},
    currentPrice: {foodCost:1, woodCost:0, peasantCost:0},
    foodIncome: 0.5,
    priceIncreaseModifier: 1.07,
  });
  const peasantValueRef = useRef(peasantValue);
  peasantValueRef.current = peasantValue;

  const [tickingBool, setTickBool] = useState(false);

  function handleBuyItem(itemValue, setState) {
    var amountPurchasing=1; //will make a control and variable later
    var costs = calcItemCost(itemValue, amountPurchasing);
    console.log("handling buy checking equals", itemValue);
    if(costs.foodCost<=foodValue && costs.woodCost<=woodValue && costs.peasantCost<=peasantValue.value)
    {
      console.log("handling the buy");
    setFoodValue(foodValue - costs.foodCost);
    setWoodValue(woodValue - costs.woodCost);
    //newPeasantValue
    setPeasantValue({...peasantValue, 
      value: peasantValue.value-costs.peasantCost});
    setState({...itemValue,
      value:itemValue.value+amountPurchasing})
    }
    if (!tickingBool) {
      constantTick();
      setTickBool(true);
    }
  }

  function calcItemCost(itemValue, amountPurchase)
  {
    var currentOwned = itemValue.value;
    //have to calc for every resource
    
    var totalCost = {}
    for (var resource in itemValue.initialPrice)
    {
      totalCost[resource] = Math.ceil(itemValue.initialPrice[resource] 
        *((Math.pow(itemValue.priceIncreaseModifier, currentOwned)
        *(Math.pow(itemValue.priceIncreaseModifier, amountPurchase)-1))/(itemValue.priceIncreaseModifier-1))*100)/100;
    }
    console.log("final costs", totalCost);
    return totalCost;
  }

  function constantTick() {
    console.log("tick");
    calculateIncome();
    setTimeout(constantTick, 1000);
  }

  function calculateIncome() {
    //calc income for each resource individually
    foodIncome();
    //woodIncome();
   // stoneIncome();
    //metalIncome();
  }
  function foodIncome() {
    var foodIncome =
      peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setFoodValue(foodValueRef.current + foodIncome);
    var foodIncomeStr = foodIncome+"/s";
    setFoodIncomeRate(foodIncomeStr);
  }
  function woodIncome() {
    var foodIncome =
      peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setFoodValue(foodValueRef.current + foodIncome);
  }
  function stoneIncome() {
    var foodIncome =
      peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setFoodValue(foodValueRef.current + foodIncome);
  }
  function metalIncome() {
    var foodIncome =
      peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setFoodValue(foodValueRef.current + foodIncome);
  }

  return (
    <div className="App">
      {/* <InfoGrid value1={peasantValue} value2={foodValue} value3={valuethree} ></InfoGrid> */}
      {/* <GameMaster/> */}

      <div className={classes.root}>
        <ResourceDisplay classes={classes} 
        food={foodValue} foodrate={foodIncomeRate} 
        wood={woodValue} woodrate={woodIncomeRate} 
        stone={stoneValue} stonerate={stoneIncomeRate} 
        metal={metalValue} metalrate={metalIncomeRate}></ResourceDisplay>

        <Grid
          container
          spacing={10}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
          <Tooltip disableFocusListener disableTouchListener title="Peasants generate resources, and are trained to be workers">
            <Paper className={classes.paper}>
              <FaceIcon /> Peasants: {peasantValue.value}
              <IconButton
                onClick={() => {
                  handleBuyItem(peasantValue, setPeasantValue);
                }}>
                <AddIcon />
              </IconButton>
            </Paper>
            </Tooltip>
          </Grid>
        </Grid>
        
        <MultiplierDisplay classes={classes}
        field={fieldValue} setfield={setFieldValue}
        forest={forestValue} 
        outcrop={outcropValue}
        prospect={prospectValue}
        handleBuyItem={handleBuyItem}>
        </MultiplierDisplay>

          <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>Farmers: {fieldValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Woodsmen: {forestValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Quarrymen: {outcropValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Prospector: {prospectValue.value}</Paper>
          </Grid>
          </Grid>
        {/* <Grid item xs={3}> */}
        {/* <Paper className={classes.paper}>itemThree {value3}</Paper> */}
        {/* </Grid> */}
      </div>
    </div>
  );
}

export default App;
