import "./App.css";
import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import ResourceDisplay from "./components/ResourceDisplay";
import MultiplierDisplay from "./components/MultiplierDisplay";
import Slider from "@material-ui/core/Slider";
import WorkerDisplay from "./components/WorkerDisplay";
import Background from "./img/peasantBackground.png";
import MainBackground from "./img/mainBackground.jpg";
import Banner from "./components/Banner.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import AppBar from '@material-ui/core/AppBar';
//import TabPanel from ""

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  banner: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperSmall: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "10px",
  },
  foodCardActive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Wheat",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/xv.png')",
    borderColor: "Green",
    border: "Solid",
  },
  foodCard: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Wheat",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/xv.png')",
    //borderColor: "Green",
    border: "Solid",
  },
  foodCardInactive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Grey",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/xv.png')",
    borderColor: "Grey",
    border: "Solid",
  },
  woodCard: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Sienna",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/tileable-wood-colored.png')",
    border: "Solid",
  },
  woodCardActive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Sienna",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/tileable-wood-colored.png')",
    borderColor: "Green",
    border: "Solid",
  },
  woodCardInactive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Grey",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/tileable-wood-colored.png')",
    borderColor: "Grey",
    border: "Solid",
  },
  stoneCard: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "SlateGray",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')",
    border: "Solid",
  },
  stoneCardActive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "SlateGray",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')",
    borderColor: "Green",
    border: "Solid",
  },
  stoneCardInactive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Grey",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')",
    borderColor: "Grey",
    border: "Solid",
  },
  metalCard: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Silver",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')",
    border: "Solid",
  },
  metalCardActive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Silver",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')",
    borderColor: "Green",
    border: "Solid",
  },
  metalCardInactive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Grey",
    opacity: 1,
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')",
    borderColor: "Grey",
    border: "Solid",
  },
  peasantCardActive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Wheat",
    opacity: 1,
    backgroundImage: `url(${Background})`,
    borderColor: "Green",
    border: "Solid",
  },
  peasantCardInactive: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "Grey",
    opacity: 1,
    backgroundImage: `url(${Background})`,
    borderColor: "Grey",
    border: "Solid",
  },
  transBox: {
    margin: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "1px solid black",
    // opacity: "0.6",
  },
}));

function App() {
  const [tabIndex, setTabIndex] = useState('1');
  const classes = useStyles();
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const purchaseAmountRef = useRef(purchaseAmount);
  const [tickingBool, setTickBool] = useState(false);
  const [resources, setResources] = useState({
    food: {
      id: "food",
      income: "0/s",
      value: 10,
      multiplier: { global: 0, worker: 0 },
    },
    wood: {
      id: "wood",
      income: "0/s",
      value: 1,
      multiplier: { global: 0, worker: 0 },
    },
    stone: {
      id: "stone",
      income: "0/s",
      value: 1,
      multiplier: { global: 0, worker: 0 },
    },
    metal: {
      id: "metal",
      income: "0/s",
      value: 1,
      multiplier: { global: 0, worker: 0 },
    },
  });
  const resourcesRef = useRef(resources);

  const [workers, setWorkers] = useState({
    peasants: {
      id: "peasants",
      name: "Peasants",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 10 }, workers: {}, buildings: {} },
      displayCost: "food 1",
      priceIncMod: 1.07,
      income: {
        food: 1,
        wood: 0.01,
        stone: 0.001,
        metal: 0.00001,
      },
      lastTickIncome: {},
      displayIncome: "food 0/s",
      cardStyle: {
        active: classes.peasantCardActive,
        inactive: classes.peasantCardInactive,
        current: classes.peasantCardActive,
      },
    },
    farmers: {
      id: "farmers",
      name: "Farmers",
      value: 0,
      purchased: 0,
      initialCost: {
        resources: { food: 10 },
        workers: { peasants: 1 },
        buildings: {},
      },
      displayCost: "food 10, peasants 1",
      priceIncMod: 1.2,
      income: {
        food: 5,
      },
      lastTickIncome: {},
      displayIncome: "food 0/s",
      cardStyle: {
        active: classes.foodCardActive,
        inactive: classes.foodCardInactive,
        current: classes.foodCardInactive,
      },
    },
    woodsmen: {
      id: "woodsmen",
      name: "Wood Gatherer",
      value: 0,
      purchased: 0,
      initialCost: {
        resources: { food: 20, wood: 10 },
        workers: {},
        buildings: {},
      },
      displayCost: "",
      lastTickIncome: {},
      displayIncome: "food 0/s",
      priceIncMod: 1.3,
      income: {
        wood: 0.1,
      },
      cardStyle: {
        active: classes.woodCardActive,
        inactive: classes.woodCardInactive,
        current: classes.woodCardInactive,
      },
    },
    quarrymen: {
      id: "quarrymen",
      name: "Quarriers",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      displayIncome: "food 0/s",
      priceIncMod: 1.5,
      income: {
        stone: 0.1,
      },
      lastTickIncome: {},
      cardStyle: {
        active: classes.stoneCardActive,
        inactive: classes.stoneCardInactive,
        current: classes.stoneCardInactive,
      },
    },
    prospectors: {
      id: "prospectors",
      name: "Prospectors",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      displayIncome: "food 0/s",
      priceIncMod: 1.9,
      income: {
        metal: 0.1,
      },
      lastTickIncome: {},
      cardStyle: {
        active: classes.metalCardActive,
        inactive: classes.metalCardInactive,
        current: classes.metalCardInactive,
      },
    },
  });
  const workersRef = useRef(workers);

  const [buildings, setBuildings] = useState({
    fields: {
      id: "fields",
      name: "Fields",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      priceIncMod: 1.5,
      multiplier: {
        food: 0.1,
      },
      multiplierDisplay: "0%",
      updateMultiplierDisplay() {
        this.multiplierDisplay =
          Math.round(this.multiplier.food * this.value * 100) + "%";
      },
      cardStyle: {
        active: classes.foodCardActive,
        inactive: classes.foodCardInactive,
        current: classes.foodCardInactive,
      },
    },
    forests: {
      id: "forests",
      name: "Forests",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      priceIncMod: 1.8,
      multiplier: {
        wood: 0.1,
      },
      multiplierDisplay: "0%",
      updateMultiplierDisplay() {
        this.multiplierDisplay =
          Math.round(this.multiplier.wood * this.value * 100) + "%";
      },
      cardStyle: {
        active: classes.woodCardActive,
        inactive: classes.woodCardInactive,
        current: classes.woodCardInactive,
      },
    },
    outcrops: {
      id: "outcrops",
      name: "Outcrops",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      priceIncMod: 2.0,
      multiplier: {
        stone: 0.1,
      },
      multiplierDisplay: "0%",
      updateMultiplierDisplay() {
        this.multiplierDisplay =
          Math.round(this.multiplier.stone * this.value * 100) + "%";
      },
      cardStyle: {
        active: classes.stoneCardActive,
        inactive: classes.stoneCardInactive,
        current: classes.stoneCardInactive,
      },
    },
    prospects: {
      id: "prospects",
      name: "Prospects",
      value: 0,
      purchased: 0,
      initialCost: { resources: { food: 1 }, workers: {}, buildings: {} },
      displayCost: "",
      priceIncMod: 2.5,
      multiplier: {
        metal: 0.1,
      },
      multiplierDisplay: "0%",
      updateMultiplierDisplay() {
        this.multiplierDisplay =
          Math.round(this.multiplier.metal * this.value * 100) + "%";
      },
      cardStyle: {
        active: classes.metalCardActive,
        inactive: classes.metalCardInactive,
        current: classes.metalCardInactive,
      },
    },
  });
  const buildingsRef = useRef(buildings);

  const [milestones, setMilestones] = useState({
    workers: {
      "peasant 1": { achieved: false, goals: { workers: { peasants: 50 } } },
      "peasant 2": { achieved: false, goals: { workers: { peasants: 200 } } },
      "peasant 3": { achieved: false, goals: { workers: { peasants: 1000 } } },
      "field 1": { achieved: false, goals: { buildings: { fields: 1 } } },
    },
    buildings: {
      "fields 1": { achieved: false, goals: { buidlings: { fields: 1 } } },
    },
    resources: {},
  });
  const milestoneRef = useRef(milestones);
  function updateResources(newState) {
    resourcesRef.current = newState;
    setResources(newState);
  }

  function updateWorkers(newState) {
    workersRef.current = newState;
    setWorkers(newState);
  }
  function updateBuildings(newState) {
    buildingsRef.current = newState;
    setBuildings(newState);
  }
  function updateMilestones(newState) {
    milestoneRef.current = newState;
    setMilestones(newState);
  }
  function checkandUpdateMilestones() {
    var newMilestones = milestoneRef.current;
    var shouldUpdate = false;
    for (let category in milestoneRef.current) {
      for (let milestone in milestoneRef.current[category]) {
        if (milestoneRef.current[category][milestone].achieved !== true) {
          //check milestone
          if (checkMilestone(milestoneRef.current[category][milestone])) {
            newMilestones[category][milestone].achieved = true;
            shouldUpdate = true;
          }
        }
      }
    }
    if (shouldUpdate === true) {
      updateMilestones(newMilestones);
    }
  }

  function checkMilestone(milestone) {
    let goals = milestone.goals;
    let goalsMet = true;
    if (goals.workers !== undefined) {
      for (let worker in goals.workers) {
        if (workersRef.current[worker].value < goals.workers[worker]) {
          goalsMet = false;
        }
      }
    }
    if (goals.resources !== undefined) {
      for (let resource in goals.resources) {
        if (resourcesRef.current[resource].value < goals.resources[resource]) {
          goalsMet = false;
        }
      }
    }
    if (goals.buildings !== undefined) {
      for (let building in goals.buildings) {
        if (buildingsRef.current[building].value < goals.buildings[building]) {
          goalsMet = false;
        }
      }
    }
    return goalsMet;
  }

  function handleBuyItem(item) {
    var costs = calcItemCost(item);
    //console.log("handling buy checking equals", item, costs);
    //check if affordable, and calc new values
    if (checkAffordability(costs)) {
      var newItemAmount = item.value + purchaseAmount;
      var newPurchaseAmount = item.purchased + purchaseAmount;
      var newItem = {
        ...item,
        value: newItemAmount,
        purchased: newPurchaseAmount,
      };
      var newResourceValues = calcAfterBuyValues(costs);
      //set new item value to represent purchase
      var tempResources = {};
      tempResources.resources = resources;
      tempResources.workers = workers;
      tempResources.buildings = buildings;
      for (var category in newResourceValues) {
        for (var resource in newResourceValues[category]) {
          tempResources[category][resource].value =
            newResourceValues[category][resource];
        }
      }
      if (item.id in resources) {
        tempResources.resources[item.id] = newItem;
      }
      if (item.id in workers) {
        tempResources.workers[item.id] = newItem;
      }
      if (item.id in buildings) {
        tempResources.buildings[item.id] = newItem;
      }
      //set values now
      // console.log("tempResources before set", tempResources);
      updateResources({ ...resources, ...tempResources.resources });
      updateWorkers({ ...workers, ...tempResources.workers });
      updateBuildings({ ...buildings, ...tempResources.buildings });
      refreshPrices();
      refreshMultiplierDisplays();
    }

    if (!tickingBool) {
      setTickBool(true);
      constantTick();
    }
  }

  function calcAfterBuyValues(costs) {
    var newResources = {};
    var newWorkers = {};
    var newBuildings = {};
    for (var resource in costs.resources) {
      // console.log("resources in calcafterbuy", resource, resources);
      newResources[resource] =
        resources[resource].value - costs.resources[resource];
    }
    for (var worker in costs.workers) {
      newWorkers[worker] = workers[worker].value - costs.workers[worker];
    }
    for (var building in costs.buildings) {
      newBuildings[building] =
        buildings.building.value - costs.buildings[building];
    }
    var newValues = {
      resources: newResources,
      workers: newWorkers,
      buildings: newBuildings,
    };
    console.log("new values afterbuy", newValues);
    return newValues;
  }

  function refreshMultiplierDisplays() {
    let curBuildings = buildingsRef.current;
    for (let building in curBuildings) {
      curBuildings[building].updateMultiplierDisplay?.();
    }
  }

  function findItemCategory(item) {
    if (item.id in resources) {
      return resources;
    }
    if (item.id in workers) {
      return workers;
    }
    if (item.id in buildings) {
      return buildings;
    }
    return "unfound";
  }

  function checkAffordability(costs) {
    //  console.log("check affordability costs", costs);
    let curResources = resourcesRef.current;
    let curWorkers = workersRef.current;
    let curBuildings = buildingsRef.current;
    for (var resource in costs.resources) {
      if (costs.resources[resource] > curResources[resource].value) {
        //   console.log("not enough" + resource);
        return false;
      }
    }
    for (var worker in costs.workers) {
      if (costs.workers[worker] > curWorkers[worker].value) {
        // console.log("not enough" + worker);
        return false;
      }
    }
    for (var building in costs.buildings) {
      if (costs.buildings[building] > curBuildings[building].value) {
        //  console.log("not enough" + building);
        return false;
      }
    }
    return true;
  }

  function calcItemCost(item) {
    var currentPurchased = item.purchased;
    if (item.value < currentPurchased) {
      currentPurchased = item.value;
    }
    var amountToPurchase = purchaseAmountRef.current;
    var totalCost = {};
    //calc each category
    for (let category in item.initialCost) {
      totalCost[category] = {};
      //  console.log("category", category);
      for (let resource in item.initialCost[category]) {
        totalCost[category][resource] = Math.round(
          Math.ceil(
            item.initialCost[category][resource] *
              ((Math.pow(item.priceIncMod, currentPurchased) *
                (Math.pow(item.priceIncMod, amountToPurchase) - 1)) /
                (item.priceIncMod - 1))
          )
        );
      }
    }
    // console.log("final costs", item, totalCost);
    return totalCost;
  }

  function constantTick() {
    //   console.log("tick");
    runIncome();
    // runUpkeep();
    runMilestones();
    refreshPrices();
    refreshDisplayIncomes();
    setTimeout(constantTick, 1000);
  }

  function runUpkeep() {
    //calc income for each resource individually
    // resourceUpkeep();
  }

  function runIncome() {
    //calc income for each resource individually
    resourceIncome();
  }

  function runMilestones() {
    checkandUpdateMilestones();
  }

  // function resourceUpkeep() {
  //   var newResources = resourcesRef.current;
  //   var curWorkers = workersRef.current;
  //   let foodUpkeep = workerUpkeep("food", curWorkers);
  //   newResources.food.value -= foodUpkeep;
  //   newResources.food.income = foodUpkeep + "/s";
  //   let woodUpkeep = workerUpkeep("wood", curWorkers);
  //   newResources.wood.value -= woodUpkeep;
  //   newResources.wood.income = woodUpkeep + "/s";
  //   updateResources({ ...newResources });
  //   //   console.log("incometest", newResources);
  //   // stoneIncome();
  //   //metalIncome();
  //   setTickBool(false);
  // }

  function resourceIncome() {
    var newResources = resourcesRef.current;
    var curWorkers = workersRef.current;
    let foodIncome = workerIncome("food", curWorkers);
    newResources.food.value += foodIncome;
    newResources.food.income = foodIncome + "/s";
    let woodIncome = workerIncome("wood", curWorkers);
    newResources.wood.value += woodIncome;
    newResources.wood.income = woodIncome + "/s";
    updateResources({ ...newResources });
    //   console.log("incometest", newResources);
    // stoneIncome();
    //metalIncome();
  }

  function workerIncome(resource, curWorkers) {
    var multipliers = calcMultipliers(resource);
    var income = 0;
    //console.log("inside workerIncome", curWorkers);
    for (let worker in curWorkers) {
      // console.log(
      //   "workerincome ref current",
      //   worker,
      //   workersRef.current[worker].income[resource]
      // );
      if (curWorkers[worker].income[resource]) {
        // console.log("worker makes resource", worker, resource);
        //  console.log("worker makes resource", workersRef.current[worker], resource);
        let tempIncome = Math.round(
          curWorkers[worker].income[resource] *
            curWorkers[worker].value *
            multipliers.workers
        );
        income += tempIncome;
        curWorkers[worker].lastTickIncome[resource] = tempIncome;
      }
    }
    updateWorkers({ ...curWorkers });
    income = income * multipliers.global;
    // console.log("income End function", resource, income);
    return income;
  }

  function calcMultipliers(resource) {
    var global = 1;
    var workers = 1;
    for (let building in buildingsRef.current) {
      if (buildingsRef.current[building].multiplier[resource]) {
        workers +=
          buildingsRef.current[building].value *
          buildingsRef.current[building].multiplier[resource];
      }
    }
    // console.log("multiplier end function, global, workers", global, workers);
    return { workers, global };
  }

  const marks = [
    {
      value: 1,
      label: "1x",
    },
    {
      value: 5,
      label: "5x",
    },
    {
      value: 10,
      label: "10x",
    },
    {
      value: 25,
      label: "25x",
    },
    {
      value: 50,
      label: "50x",
    },
  ];
  function purchaseAmountText(value) {
    return `${value}x`;
  }
  function updatePurchaseAmount(event, newValue) {
    console.log(newValue);
    setPurchaseAmount(newValue);
    purchaseAmountRef.current = newValue;
    refreshPrices();
  }

  function refreshDisplayIncomes() {
    var newWorkers = workersRef.current;
    // console.log("newWorkers, purchaseAmount", newWorkers, purchaseAmount);
    //iterate through all items and calculate the prices
    for (let worker in newWorkers) {
      newWorkers[worker].displayIncome = formatDisplayIncome(
        newWorkers[worker]
      );
    }
    updateWorkers({ ...newWorkers });
  }

  function formatDisplayIncome(worker) {
    let workingString = "";
    for (let resource in worker.lastTickIncome) {
      if (worker.lastTickIncome[resource] > 0.5) {
        workingString +=
          resource + " " + worker.lastTickIncome[resource] + " /s ";
      }
    }
    return workingString;
  }

  function refreshPrices() {
    var newWorkers = workersRef.current;
    // console.log("newWorkers, purchaseAmount", newWorkers, purchaseAmount);
    var newBuildings = buildingsRef.current;
    //iterate through all items and calculate the prices
    for (let worker in newWorkers) {
      let workerCost = calcItemCost(newWorkers[worker]);
      if (checkAffordability(workerCost)) {
        newWorkers[worker].cardStyle.current =
          newWorkers[worker].cardStyle.active;
      } else {
        newWorkers[newWorkers[worker].id].cardStyle.current =
          newWorkers[newWorkers[worker].id].cardStyle.inactive;
      }
      newWorkers[worker].displayCost = getDisplayCost(workerCost);
    }
    updateWorkers({ ...newWorkers });
    for (let building in newBuildings) {
      let buildingCost = calcItemCost(newBuildings[building]);
      if (checkAffordability(buildingCost)) {
        newBuildings[building].cardStyle.current =
          newBuildings[building].cardStyle.active;
      } else {
        newBuildings[building].cardStyle.current =
          newBuildings[building].cardStyle.inactive;
      }
      newBuildings[building].displayCost = getDisplayCost(buildingCost);
    }
    updateBuildings({ ...newBuildings });
    // console.log("Refresh Prices", newWorkers, newBuildings);
  }

  function getDisplayCost(cost) {
    //  console.log("getDisplaycost start", cost);
    var displayString = "";
    for (let category in cost) {
      for (var resource in cost[category]) {
        displayString += resource + " " + cost[category][resource] + "  ";
      }
    }
    //  console.log("endString", displayString);
    return displayString;
  }

  function getMilestones() {
    console.log("milestones", milestoneRef.current);
  }

  return (
    <div className="App" style={{ height: "100%" }}>
      <Banner classes={classes}></Banner>
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${MainBackground})`,
          backgroundRepeat: "round",
        }}
      >
        <ResourceDisplay
          classes={classes}
          resources={resources}
        ></ResourceDisplay>

        <Grid
          container
          spacing={10}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={6}
            onClick={() => {
              handleBuyItem(workers.peasants);
            }}
          >
            <Tooltip
              disableFocusListener
              disableTouchListener
              title="Peasants generate resources, and are trained to be workers"
            >
              <Paper className={workers.peasants.cardStyle.current}>
                <div className={classes.transBox}>
                  Peasants: {workers.peasants.value}
                  <div style={{ fontSize: "x-small" }}>
                    Total income {workers.peasants.displayIncome}
                    <br></br> Cost: {workers.peasants.displayCost}
                  </div>
                </div>
              </Paper>
            </Tooltip>
          </Grid>
        </Grid>
        <TabContext value={tabIndex}>
          <div className={classes.transBox}>
          <TabList value={tabIndex} centered onChange={(e, index) => setTabIndex(index)}>
            <Tab label={"Rural Workers"} value="1" />
            <Tab label={"Peasants"} value="2"/>
            <Tab label={"City Workers"} value="3" />
            <Tab label={"Clergy"} value="4" />
            <Tab label={"Nobility"} value="5" />
          </TabList>
          </div>
          <TabPanel value="1"><MultiplierDisplay
          classes={classes}
          buildings={buildings}
          handleBuyItem={handleBuyItem}
        ></MultiplierDisplay>
        <WorkerDisplay
          classes={classes}
          workers={workers}
          handleBuyItem={handleBuyItem}
        ></WorkerDisplay>
         <Grid container   direction="row"
  justify="center"
  alignItems="center">
        <Grid item xs={6} justify="center" alignItems="center" className={classes.transBox}>
          <Slider
            defaultValue={1}
            getAriaValueText={purchaseAmountText}
            aria-labelledby="purchase-amount-slider"
            step={1}
            min={1}
            max={100}
            onChangeCommitted={updatePurchaseAmount}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <IconButton
            onClick={() => {
              getMilestones();
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid></Grid></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
        {/* <MultiplierDisplay
          classes={classes}
          buildings={buildings}
          handleBuyItem={handleBuyItem}
        ></MultiplierDisplay>

        <WorkerDisplay
          classes={classes}
          workers={workers}
          handleBuyItem={handleBuyItem}
        ></WorkerDisplay> */}
  <div className={classes.transBox}>
        <Grid item xs={6} justify="center" alignItems="center">
          <Slider
            defaultValue={1}
            getAriaValueText={purchaseAmountText}
            aria-labelledby="purchase-amount-slider"
            step={1}
            min={1}
            max={100}
            onChangeCommitted={updatePurchaseAmount}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <IconButton
            onClick={() => {
              getMilestones();
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
