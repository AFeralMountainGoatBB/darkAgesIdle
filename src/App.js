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
import GameMaster from "./GameMaster";
import InfoGrid from "./components/InfoGrid.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [foodValue, setFoodValue] = useState(1);
  const [woodValue, setWoodValue] = useState(0);
  const [stoneValue, setStoneValue] = useState(0);
  const [metalValue, setMetalValue] = useState(0);
  const foodValueRef = useRef(foodValue);
  foodValueRef.current = foodValue;

  const [fieldValue, setFieldValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    foodMultiplier: 1,
    priceIncreaseModifier: 1.07,
  });
  const [forestValue, setForestValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    woodMultiplier: 1,
    priceIncreaseModifier: 1.07,
  });
  const [outcropValue, setOutcropValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    stoneMultiplier: 1,
    priceIncreaseModifier: 1.07,
  });
  const [prospectValue, setDepositValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    metalMultiplier: 1,
    priceIncreaseModifier: 1.07,
  });

  const [peasantValue, setPeasantValue] = useState({
    value: 0,
    initialPrice: 1,
    currentPrice: 1,
    foodIncome: 1,
    priceIncreaseModifier: 1.07,
  });
  const peasantValueRef = useRef(peasantValue);
  peasantValueRef.current = peasantValue;

  const [tickingBool, setTickBool] = useState(false);

  function handleBuyPeasants() {
    var currentPeasantCost = peasantValueRef.current.currentPrice;
    var currentFoodValue = foodValueRef.current;
    // console.log("handle click", currentFoodValue, currentPeasantCost);
    if (currentFoodValue >= currentPeasantCost) {
      var newFoodValue = currentFoodValue - currentPeasantCost;
      // console.log("yes food value greater");
      var newPeasantValue = peasantValueRef.current.value + 1;
      var newPeasantCost = Math.ceil(
        peasantValueRef.current.currentPrice *
          peasantValueRef.current.priceIncreaseModifier
      );
      setFoodValue(newFoodValue);
      setPeasantValue({
        ...peasantValue,
        value: newPeasantValue,
        currentPrice: newPeasantCost,
      });
    }

    if (!tickingBool) {
      constantTick();
      setTickBool(true);
    }
  }

  function constantTick() {
    // setPeasantValue(peasantValueRef.current+1);
    console.log("tick");
    calculateIncome();
    setTimeout(constantTick, 1000);
    // setTimeout(()=>{setPeasantValue(peasantValue+1)}, 1000);
  }

  function calculateIncome() {
    //calc income for food
    foodIncome();
    //woodIncome();
   // stoneIncome();
    //metalIncome();
  }
  function foodIncome() {
    var foodIncome =
      peasantValueRef.current.foodIncome * peasantValueRef.current.value;
    setFoodValue(foodValueRef.current + foodIncome);
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
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Food: {foodValue}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Wood: {woodValue}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Stone: {stoneValue}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Metal: {metalValue}</Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={10}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <FaceIcon /> Peasants: {peasantValue.value}
              <IconButton
                onClick={() => {
                  handleBuyPeasants();
                }}
              >
                <AddIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>Field: {fieldValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Forest: {forestValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Outcrop: {outcropValue.value}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Prospect: {prospectValue.value}</Paper>
          </Grid>
          </Grid>

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
