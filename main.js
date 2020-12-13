//import * from './classes';

startingGenerators = {
  food: new resource("Food", 0, 0, 1, 1, false, {}, {}),
  wood: new resource("Wood", 0, 0, 1, 1, false, {}, {}),
  stone: new resource("Stone", 0, 0, 1, 1, false, {}, {}),
  metal: new resource("Metal", 0, 0, 1, 1, false, {}, {}),
  goods: new resource("Goods", 0, 0, 1, 1, false, {}, {}),
  //workers / level 0
  peasant: new resource("Peasant", 1, 1, 1, 1, true, {
    baseCost: {
      food: 1
    },
    costIncreaseModifier: {
      food: 1.07
    }
  }, {
    peasant: {
      baseProduction: 0.1,
      productionMiltiplier: 0
    },
    food: {
      baseProduction: 0.5,
      productionMiltiplier: 1
    }
  }),
  farmer: new resource("Farmer", 1, 0, 1, 1, true, {
    baseCost: {
      food: 1
    },
    costIncreaseModifier: {
      food: 1.2
    }
  }, {
    food: {
      baseProduction: 1,
      productionMiltiplier: 1
    }
  }),
  lumberer: new resource("Lumberer", 1, 0, 1, 1, true, {
    baseCost: {
      food: 1
    },
    costIncreaseModifier: {
      food: 1.3
    }
  }, {
    wood: {
      baseProduction: 1,
      productionMiltiplier: 1
    }
  }),
  quarryWorker: new resource("QuarryWorker", 1, 0, 1, 1, true, {
    baseCost: {
      food: 1
    },
    costIncreaseModifier: {
      food: 1.47
    }
  }, {
    stone: {
      baseProduction: 1,
      productionMiltiplier: 1
    }
  }),
  prospector: new resource("Prospector", 1, 0, 1, 1, true, {
    baseCost: {
      food: 50
    },
    costIncreaseModifier: {
      food: 1.5
    }
  }, {
    metal: {
      baseProduction: 1,
      productionMiltiplier: 1
    }
  }),
  artisan: new resource("Artisan", 1, 0, 1, 1, true, {
    baseCost: {
      food: 100
    },
    costIncreaseModifier: {
      food: 1.7
    }
  }, {
    goods: {
      baseProduction: 1,
      productionMiltiplier: 1
    }
  }),
} //end starting generators

var currentGenerators = startingGenerators;
var resourcesTemplate = _.template($("#resourcesTemplate").html());
updateResources();

var cashOnHandDisplayElement = document.getElementById("cashOnHandSpan");
var addCashButtonElement = document.getElementById("buttonIncreaseCash")
var unpopularBlogCostIncomeDisplayElement = document.getElementById("pennyStockCostIncome");
var lowStockCostIncomeDisplayElement = document.getElementById("lowStockCostIncome");
var mediumStockCostIncomeDisplayElement = document.getElementById("mediumStockCostIncome");
var highStockCostIncomeDisplayElement = document.getElementById("highStockCostIncome");

var pennyStockPriceMod = 1;
var lowStocksPriceMod = 1;
var mediumStocksPriceMod = 1;
var highStocksPriceMod = 1;

var cashOnHand = 0;
var greedOnHand = 0;
var politicalInfluenceOnHand = 0;
var securityOnHand = 0;
var tickRate = 2000;
var tickVariable;
var timerIsOn = false;
var userBankBalance = 0;
var user
var userIncome = 1;

var greed;

//elements

function startTick() {

  if (!timerIsOn) {
    timerIsOn = true;
    tickMaster();
  }
  return;
}

function stopTick() {
  clearTimeout(tickVariable);
  timerIsOn = false;
  return;
}

function changeTickRate(newTickRate) {
  tickRate = newTickRate;
  return;
}

function tickMaster() {
  //  console.log("tickRate", tickRate);
  tickIncomeStep();
  tickDisplayStep();
  tickVariable = setTimeout(tickMaster, tickRate);
}

function purchaseStock(level) {
  if (cashOnHand < stockArray[level].currentPrice) {
    console.log("error, not enough funds");
    cashOnHandDisplayElement.style.color = "red";
    setTimeout(function() {
      cashOnHandDisplayElement.style.color = "black"
    }, 1000);
  } else {
    cashOnHand -= stockArray[level].currentPrice;
    userHeldStocks[level] += 1;
  calculateNewPrice(stockArray[level]);
  //  updateCostIncomeDisplay(pennyStocksCostIncomeDisplayElement, pennyStocks);
}
return;
}

function calculateNewPrice(stockObject) {

}

function increaseCash(amount) {
  cashOnHand = cashOnHand + amount;
  let displayCash = formatCashOnHand(cashOnHand);
  cashOnHandDisplayElement.innerHTML = displayCash;
  return;
  //  refresh();
}

function tickIncomeStep() {
  //add income to cash on hand
  increaseCash(calculateTotalIncome());
}

function calculateTotalIncome() {
  let totalIncome = 0;
  //calculate all stock income first
  totalIncome += calculateStockIncome();
  return totalIncome;
}

function calculateStockIncome() {
  let sum = 0;
  for (let stock in userHeldStocks) {
    sum = sum + userHeldStocks[stock].cashIncome;
  }
  return sum;
}

function updateCostIncomeDisplay(element, entity) {
  let costIncome = "$" + entity.initialPrice + "/ $" + entity.cashIncome;
  element.innerHTML = costIncome;
}

function formatCashOnHand(amount) {
  //console.log("amount", amount);
  var base = amount.toString();
  base = "$" + base;
  let final = formatNumberWithCommas(base);
  //  console.log("base", base);
  return final;
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function tickDisplayStep() {
  for (let stock in stockArray) {
    updateCostIncomeDisplay(stockDisplayArray[stock], stockArray[stock]);
  }
  //updateCostIncomeDisplay(pennyStocksCostIncomeDisplayElement, pennyStocks);
}

function updateResources() {
  var firstRow = resourcesTemplate({
    ownedFood: formatNumberWithCommas(currentGenerators.food.getOwned()),
    ownedWood: formatNumberWithCommas(currentGenerators.wood.getOwned()),
    ownedStone: formatNumberWithCommas(currentGenerators.stone.getOwned()),
    ownedMetal: formatNumberWithCommas(currentGenerators.metal.getOwned()),
  });

  $("#resourcesTableContainer").html(firstRow);

}
