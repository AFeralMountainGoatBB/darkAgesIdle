class resource {
  constructor(name, level, ownedAmount, generatorMultiplier, resourceMultiplier,
     generatorFlag,  costObject, generatorObjectDictionary)
  {
    this.name = name;
    this.level = level;
    this.ownedAmount = ownedAmount;
    //generatorMultiplier is the multiplier to this generator's production
    this.generatorMultiplier = generatorMultiplier;
    //resourceMultiplier is the multiplier to the production of other generators producing this one
    this.resourceMultiplier = resourceMultiplier;
    this.generatorFlag = generatorFlag;
    this.costObject=costObject;
    this.generatorObjectDictionary = generatorObjectDictionary;
  }

  getOwned(){
    return this.ownedAmount;
  }

}
