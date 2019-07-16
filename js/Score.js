var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
    this.myCash = 150;
    this.towerHealth = 100;
    this.damage = 100;
    this.myUpgrade = "UpgradeNone";
    this.myColor = "white";
    this.winCondition = false;
    this.loseCondition = false;
};

Score.setScore = function (score, cash) {
    this.myCash += cash;
    this.myScore += score;
    if(this.myScore >= 50000){
        this.winCondition = true;
        gameOn = false;
    }
};

Score.setHealth = function () {
    this.towerHealth -= 5;
    if (this.towerHealth === 0)
    {
        gameOn = false;
        this.loseCondition = true;
    }
};

Score.upgradeCheck = function () {
    if (this.myScore >= 6500 && this.myCash >= 500 && this.myUpgrade === "UpgradeNone") {
        return "&nbspPress&nbspU";
    }
    if (this.myScore >= 15000 && this.myCash >= 1200 && this.myUpgrade === "UpgradeEasy") {
        return "&nbspPress&nbspU";
    }
    if (this.myScore >= 26000 && this.myCash >= 1300 && this.myUpgrade === "UpgradeMedium") {
        return "&nbspPress&nbspU";
    }
    if (this.myScore >= 39800 && this.myCash >= 1400 && this.myUpgrade === "UpgradeHard") {
        return "&nbspPress&nbspU";
    }
    if (this.myUpgrade === "UpgradeSuper"){
        return "&nbspMaximum";
    }
    else{
        return "&nbspNo";
    }
};

Score.upgrade = function(){
    if (this.myScore >= 6500 && this.myCash >= 500 && this.myUpgrade === "UpgradeNone"){
        this.myUpgrade = "UpgradeEasy";
        this.myCash -= 500;
        this.damage = Math.ceil(this.damage*1.2);
        this.myColor = "yellow";
    }
    if (this.myScore >= 15000 && this.myCash >= 1200 && this.myUpgrade === "UpgradeEasy"){
        this.myUpgrade = "UpgradeMedium";
        this.myCash -= 1200;
        this.damage = Math.ceil(this.damage*1.3);
        this.myColor = "orange";
    }
    if (this.myScore >= 26000 && this.myCash >= 1300 && this.myUpgrade === "UpgradeMedium"){
        this.myUpgrade = "UpgradeHard";
        this.myCash -= 1300;
        this.damage = Math.ceil(this.damage*1.4);
        this.myColor = "red";
    }
    if (this.myScore >= 39800 && this.myCash >= 1400 && this.myUpgrade === "UpgradeHard"){
        this.myUpgrade = "UpgradeSuper";
        this.myCash -= 1300;
        this.damage = Math.ceil(this.damage*1.5);
        this.myColor = "violet";
    }
};

Score.getScore = function () {
    return this.myScore;
};

Score.getDamage = function(){
    return this.damage;
};

Score.getCash = function () {
    return this.myCash;
};

Score.getHealth = function () {
    return this.towerHealth;
};