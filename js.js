let points = 0;                          // Poäng
let howmany = 1;                        // Värde som ändras mellan 1, 10 och 100 beroende på vilken knapp man valt.
let mouse = {
    count: 0,                            // Antal
    cost: 5,                            // Kostnad
    addvar: 1,                          // Hur många poäng per antal
    inflation: 1.5,                      // HUr mycket priset ökar per köp
    modified: 0
}
let factory = {
    count: 0,
    cost: 100,
    addvar: 5,
    inflation: 1.1,
    modified: 0
}
let factoryV2 = {
    count: 0,
    cost: 1000,
    addvar: 10,
    inflation: 1.1,
    modified: 0
}

let bank = {
    count: 0,
    cost: 100000,
    addvar: 100,
    inflation: 1.1,
    modified: 0
}

let powerCost = {
    //mouse
    mouse1: 10,
    mouse2: 10,
    mouse3: 10,
    mouse4: 10,
    //factory
    factory1: 10,
    factory2: 10,
    factory3: 10,
    factory4: 10,
    //factoryV2
    factoryV21: 10,
    factoryV22: 10,
    factoryV23: 10,
    factoryV24: 10,
    //bank
    bank1: 10,
    bank2: 10,
    bank3: 10,
    bank4: 10,
    win: 10
}

function howMany(number) {              // Ändrar värdet på howmany till det nummer som skickas från knappar.
    howmany = number;
}

function choosePower(power) {
    switch (power) {
        //mus upgrade
        case 1:
            mouse.addvar = mouse.addvar * 2;
            points = points - powerCost.mouse1;
            break;

        case 2:
            mouse.addvar = mouse.addvar * 5;
            points = points - powerCost.mouse2;
            break;

        case 3:
            mouse.addvar = mouse.addvar * 10;
            points = points - powerCost.mouse3;
            break;

        case 4:
            mouse.addvar = mouse.addvar * 20;
            points = points - powerCost.mouse4;
            break;

        //factory upgrade
        case 5:
            factory.addvar = factory.addvar * 2;
            points = points - powerCost.factory1;
            break;

        case 6:
            factory.addvar = factory.addvar * 5;
            points = points - powerCost.factory2;
            break;

        case 7:
            factory.addvar = factory.addvar * 10;
            points = points - powerCost.factory3;
            break;

        case 8:
            factory.addvar = factory.addvar * 20;
            points = points - powerCost.factory4;
            break;

        //factoryV2 upgrade

        case 9:
            factoryV2.addvar = factoryV2.addvar * 2;
            points = points - powerCost.factoryV21;
            break;

        case 10:
            factoryV2.addvar = factoryV2.addvar * 5;
            points = points - powerCost.factoryV22;
            break;

        case 11:
            factoryV2.addvar = factoryV2.addvar * 10;
            points = points - powerCost.factoryV23;
            break;

        case 12:
            factoryV2.addvar = factoryV2.addvar * 20;
            points = points - powerCost.factoryV24;
            break;

        //bank upgrade

        case 13:
            bank.addvar = bank.addvar * 2;
            points = points - powerCost.bank1;
            break;

        case 14:
            bank.addvar = bank.addvar * 5;
            points = points - powerCost.bank2;
            break;

        case 15:
            bank.addvar = bank.addvar * 10;
            points = points - powerCost.bank3;
            break;

        case 16:
            bank.addvar = bank.addvar * 20;
            points = points - powerCost.bank4;
            break;
    }
}

function multipleMousePrice() {
    mouse.modified = mouse.cost;
    for (let i = 1; i <= howmany; i++) {
        mouse.modified = mouse.modified * mouse.inflation;
        mouse.modified = Math.ceil(mouse.modified);
    }
}

function multipleFactoryPrice() {
    factory.modified = factory.cost;
    for (let i = 1; i <= howmany; i++) {
        factory.modified = factory.modified * factory.inflation;
        factory.modified = Math.ceil(factory.modified);
    }
}

function multipleFactoryV2Price() {
    factoryV2.modified = factoryV2.cost;
    for (let i = 1; i <= howmany; i++) {
        factoryV2.modified = factoryV2.modified * factoryV2.inflation;
        factoryV2.modified = Math.ceil(factoryV2.modified);
    }
}

function multipleBankPrice() {
    bank.modified = bank.cost;
    for (let i = 1; i <= howmany; i++) {
        bank.modified = bank.modified * bank.inflation;
        bank.modified = Math.ceil(bank.modified);
    }
}

function givePoints(amount) {           //Cheat vi kan använda för att testa om saker funkar utan att behöva klicka en massa
    points = points + amount;
}

function pointClick() {                  // Lägger till poäng per klick
    points = points + mouse.addvar;
    if (document.getElementById('myAudio').paused) {
        document.getElementById('myAudio').play();
    }
    else {
        document.getElementById('myAudio').currentTime = 0;
    }
};

function upgradeMouse() {                //Uppgraderar musen, tar bort kostnad från totala points och höjer kostnad.
    mouse.cost = mouse.modified;
    mouse.count = mouse.count + howmany;
    points = points - mouse.cost;
    mouse.addvar = mouse.addvar + howmany;
    if (document.getElementById('mouseAudio').paused) {
        document.getElementById('mouseAudio').play();
    }
    else {
        document.getElementById('mouseAudio').currentTime = 0;
    }
}

function addFactories() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad.
    factory.cost = factory.modified;
    factory.count = factory.count + howmany;
    points = points - factory.cost;
    if (document.getElementById('factoryAudio').paused) {
        document.getElementById('factoryAudio').play();
    }
    else {
        document.getElementById('factoryAudio').currentTime = 0;
    }

}

function addFactoriesV2() {               // Lägger till fabrikV2, tar bort kostnad från totala poäng och höjer kostnad.
    factoryV2.cost = factoryV2.modified;
    factoryV2.count = factoryV2.count + howmany;
    points = points - factoryV2.cost;
}

function addBanks() {                   // Lägger till bank, tar bort kostnad från totala poäng och höjer kostnad.
    bank.cost = bank.modified;
    bank.count = bank.count + howmany;
    points = points - bank.cost;
    if (document.getElementById('bankAudio').paused) {
        document.getElementById('bankAudio').play();
    }
    else {
        document.getElementById('bankAudio').currentTime = 0;
    }
}

window.setInterval(function () {          // Lägger till poäng från fabriker varje sekund
    points = points + (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count) + (bank.addvar * bank.count);
}, 1000);


window.setInterval(function () {          //Allt inom kodblocket körs varje millisekund
    pps = (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count) + (bank.addvar * bank.count);      //Räknar ut hur många poäng som läggs till per sekund av fabrikerna
    points = Math.ceil(points);                             //Avrundar points till heltal
    document.getElementById('ppc').innerText = "Points per click: " + mouse.addvar;   //Dessa sju rader uppdaterar ppc, points, pps, mouse.cost, factory.count/cost, factoryV2.count/cost i html.
    document.getElementById('mousecost').innerText = "Mouse Upgrade Cost: " + mouse.cost;
    document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
    document.getElementById('totalfactories').innerText = "Factories: " + factory.count;
    document.getElementById('costfactory').innerText = "Factory cost: " + factory.cost;
    document.getElementById('totalfactoriesV2').innerText = "FactoriesV2: " + factoryV2.count;
    document.getElementById('costfactoryV2').innerText = "Factory costV2: " + factoryV2.cost;
    document.getElementById('totalbanks').innerText = "Banks: " + bank.count;
    document.getElementById('costbanks').innerText = "Bank cost: " + bank.cost;


    if (points >= factory.modified) {                             //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en fabrik.
        document.getElementById('buyfactory').style.opacity = "1";
        document.getElementById('buyfactory').style.pointerEvents = "auto";
        document.getElementById('buyfactory').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactory').style.opacity = "0.3";
        document.getElementById('buyfactory').style.pointerEvents = "none"
        document.getElementById('buyfactory').style.cursor = "url";

    }

    if (points >= factoryV2.modified) {                             //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en fabrikV2.
        document.getElementById('buyfactoryV2').style.opacity = "1";
        document.getElementById('buyfactoryV2').style.pointerEvents = "auto";
        document.getElementById('buyfactoryV2').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactoryV2').style.opacity = "0.3";
        document.getElementById('buyfactoryV2').style.pointerEvents = "none"
        document.getElementById('buyfactoryV2').style.cursor = "url";

    }

    if (points >= mouse.modified) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att uppgradera musen.
        document.getElementById('upgrademouse').style.opacity = "1";
        document.getElementById('upgrademouse').style.pointerEvents = "auto"
        document.getElementById('upgrademouse').style.cursor = "pointer";

    }
    else {
        document.getElementById('upgrademouse').style.opacity = "0.3";
        document.getElementById('upgrademouse').style.pointerEvents = "none"
        document.getElementById('upgrademouse').style.cursor = "url";
    }
    if (points >= factoryV2.cost) {                          // Gör factoryV2 synlig när man har råd med den
        document.getElementById('totalfactoriesV2').style.visibility = "visible";
        document.getElementById('costfactoryV2').style.visibility = "visible";
        document.getElementById('buyfactoryV2').innerHTML = "Buy A FactoryV2";
    }

    if (points >= bank.modified) {                               //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en bank.      
        document.getElementById('buybank').style.opacity = "1";
        document.getElementById('buybank').style.pointerEvents = "auto"
        document.getElementById('buybank').style.cursor = "pointer";

    }
    else {
        document.getElementById('buybank').style.opacity = "0.3";
        document.getElementById('buybank').style.pointerEvents = "none"
        document.getElementById('buybank').style.cursor = "url";
    }
    if (points >= bank.cost) {                               // Gör bank synlig när man har råd med den
        document.getElementById('totalbanks').style.visibility = "visible";
        document.getElementById('costbanks').style.visibility = "visible";
        document.getElementById('buybank').innerHTML = "Buy A Bank";
    }
    if (howmany == 1) {                                                 // Dessa visar vilken av x1/x10/x100 som är vald.
        document.getElementById('1x').style.backgroundColor = "white";
    }
    else {
        document.getElementById('1x').style.backgroundColor = "gray";
    }
    if (howmany == 10) {
        document.getElementById('10x').style.backgroundColor = "white";
    }
    else {
        document.getElementById('10x').style.backgroundColor = "gray";
    }
    if (howmany == 100) {
        document.getElementById('100x').style.backgroundColor = "white";
    }
    else {
        document.getElementById('100x').style.backgroundColor = "gray";
    }
    //upgrades
    if (points >= powerCost.mouse1) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('mouseupg1').style.opacity = "1";
        document.getElementById('mouseupg1').style.pointerEvents = "auto"
        document.getElementById('mouseupg1').style.cursor = "pointer";

    }
    else {
        document.getElementById('mouseupg1').style.opacity = "0.3";
        document.getElementById('mouseupg1').style.pointerEvents = "none"
        document.getElementById('mouseupg1').style.cursor = "url";
    }
    if (points >= powerCost.mouse2) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('mouseupg2').style.opacity = "1";
        document.getElementById('mouseupg2').style.pointerEvents = "auto"
        document.getElementById('mouseupg2').style.cursor = "pointer";

    }
    else {
        document.getElementById('mouseupg2').style.opacity = "0.3";
        document.getElementById('mouseupg2').style.pointerEvents = "none"
        document.getElementById('mouseupg2').style.cursor = "url";
    }
    if (points >= powerCost.mouse3) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('mouseupg3').style.opacity = "1";
        document.getElementById('mouseupg3').style.pointerEvents = "auto"
        document.getElementById('mouseupg3').style.cursor = "pointer";

    }
    else {
        document.getElementById('mouseupg3').style.opacity = "0.3";
        document.getElementById('mouseupg3').style.pointerEvents = "none"
        document.getElementById('mouseupg3').style.cursor = "url";
    }
    if (points >= powerCost.mouse4) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('mouseupg4').style.opacity = "1";
        document.getElementById('mouseupg4').style.pointerEvents = "auto"
        document.getElementById('mouseupg4').style.cursor = "pointer";

    }
    else {
        document.getElementById('mouseupg4').style.opacity = "0.3";
        document.getElementById('mouseupg4').style.pointerEvents = "none"
        document.getElementById('mouseupg4').style.cursor = "url";
    }
    if (points >= powerCost.factory1) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('factoryupg1').style.opacity = "1";
        document.getElementById('factoryupg1').style.pointerEvents = "auto"
        document.getElementById('factoryupg1').style.cursor = "pointer";

    }
    else {
        document.getElementById('factoryupg1').style.opacity = "0.3";
        document.getElementById('factoryupg1').style.pointerEvents = "none"
        document.getElementById('factoryupg1').style.cursor = "url";
    }
    if (points >= powerCost.factory2) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('factoryupg2').style.opacity = "1";
        document.getElementById('factoryupg2').style.pointerEvents = "auto"
        document.getElementById('factoryupg2').style.cursor = "pointer";

    }
    else {
        document.getElementById('factoryupg2').style.opacity = "0.3";
        document.getElementById('factoryupg2').style.pointerEvents = "none"
        document.getElementById('factoryupg2').style.cursor = "url";
    }
    if (points >= powerCost.factory3) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('factoryupg3').style.opacity = "1";
        document.getElementById('factoryupg3').style.pointerEvents = "auto"
        document.getElementById('factoryupg3').style.cursor = "pointer";

    }
    else {
        document.getElementById('factoryupg3').style.opacity = "0.3";
        document.getElementById('factoryupg3').style.pointerEvents = "none"
        document.getElementById('factoryupg3').style.cursor = "url";
    }
    if (points >= powerCost.factory4) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('factoryupg4').style.opacity = "1";
        document.getElementById('factoryupg4').style.pointerEvents = "auto"
        document.getElementById('factoryupg4').style.cursor = "pointer";

    }
    else {
        document.getElementById('factoryupg4').style.opacity = "0.3";
        document.getElementById('factoryupg4').style.pointerEvents = "none"
        document.getElementById('factoryupg4').style.cursor = "url";
    }
    if (points >= powerCost.factoryV21) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('v2upg1').style.opacity = "1";
        document.getElementById('v2upg1').style.pointerEvents = "auto"
        document.getElementById('v2upg1').style.cursor = "pointer";

    }
    else {
        document.getElementById('v2upg1').style.opacity = "0.3";
        document.getElementById('v2upg1').style.pointerEvents = "none"
        document.getElementById('v2upg1').style.cursor = "url";
    }
    if (points >= powerCost.factoryV22) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('v2upg2').style.opacity = "1";
        document.getElementById('v2upg2').style.pointerEvents = "auto"
        document.getElementById('v2upg2').style.cursor = "pointer";

    }
    else {
        document.getElementById('v2upg2').style.opacity = "0.3";
        document.getElementById('v2upg2').style.pointerEvents = "none"
        document.getElementById('v2upg2').style.cursor = "url";
    }
    if (points >= powerCost.factoryV23) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('v2upg3').style.opacity = "1";
        document.getElementById('v2upg3').style.pointerEvents = "auto"
        document.getElementById('v2upg3').style.cursor = "pointer";

    }
    else {
        document.getElementById('v2upg3').style.opacity = "0.3";
        document.getElementById('v2upg3').style.pointerEvents = "none"
        document.getElementById('v2upg3').style.cursor = "url";
    }
    if (points >= powerCost.factoryV24) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('v2upg4').style.opacity = "1";
        document.getElementById('v2upg4').style.pointerEvents = "auto"
        document.getElementById('v2upg4').style.cursor = "pointer";

    }
    else {
        document.getElementById('v2upg4').style.opacity = "0.3";
        document.getElementById('v2upg4').style.pointerEvents = "none"
        document.getElementById('v2upg4').style.cursor = "url";
    }
    if (points >= powerCost.bank1) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('bankupg1').style.opacity = "1";
        document.getElementById('bankupg1').style.pointerEvents = "auto"
        document.getElementById('bankupg1').style.cursor = "pointer";

    }
    else {
        document.getElementById('bankupg1').style.opacity = "0.3";
        document.getElementById('bankupg1').style.pointerEvents = "none"
        document.getElementById('bankupg1').style.cursor = "url";
    }
    if (points >= powerCost.bank2) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('bankupg2').style.opacity = "1";
        document.getElementById('bankupg2').style.pointerEvents = "auto"
        document.getElementById('bankupg2').style.cursor = "pointer";

    }
    else {
        document.getElementById('bankupg2').style.opacity = "0.3";
        document.getElementById('bankupg2').style.pointerEvents = "none"
        document.getElementById('bankupg2').style.cursor = "url";
    }
    if (points >= powerCost.bank3) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('bankupg3').style.opacity = "1";
        document.getElementById('bankupg3').style.pointerEvents = "auto"
        document.getElementById('bankupg3').style.cursor = "pointer";

    }
    else {
        document.getElementById('bankupg3').style.opacity = "0.3";
        document.getElementById('bankupg3').style.pointerEvents = "none"
        document.getElementById('bankupg3').style.cursor = "url";
    }
    if (points >= powerCost.bank4) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('bankupg4').style.opacity = "1";
        document.getElementById('bankupg4').style.pointerEvents = "auto"
        document.getElementById('bankupg4').style.cursor = "pointer";

    }
    else {
        document.getElementById('bankupg4').style.opacity = "0.3";
        document.getElementById('bankupg4').style.pointerEvents = "none"
        document.getElementById('bankupg4').style.cursor = "url";
    }
    if (points >= powerCost.bank1) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('bankupg1').style.opacity = "1";
        document.getElementById('bankupg1').style.pointerEvents = "auto"
        document.getElementById('bankupg1').style.cursor = "pointer";

    }
    else {
        document.getElementById('bankupg1').style.opacity = "0.3";
        document.getElementById('bankupg1').style.pointerEvents = "none"
        document.getElementById('bankupg1').style.cursor = "url";
    }
    if (points >= powerCost.win) {                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd.
        document.getElementById('winupg').style.opacity = "1";
        document.getElementById('winupg').style.pointerEvents = "auto"
        document.getElementById('winupg').style.cursor = "pointer";

    }
    else {
        document.getElementById('winupg').style.opacity = "0.3";
        document.getElementById('winupg').style.pointerEvents = "none"
        document.getElementById('winupg').style.cursor = "url";
    }
    multipleMousePrice();
    multipleFactoryPrice();
    multipleFactoryV2Price();
    multipleBankPrice();
}, 1);
