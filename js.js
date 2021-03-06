alert("Aliens have waged war on earth! The only way to restore world peace is to pay them off, but no person on earth has enough money! You have been given a mission, as the worlds greatest entrepeneur, to gather ten billion dollars to pay the aliens. The fate of earth rests on your shoulders, good luck."); //Textruta som dyker upp när sidan laddas, introduktion till spelets handling
let points = 0;                          // Poäng

let howmany = 1;                        // Värde som ändras mellan 1, 10 och 100 beroende på vilken knapp man valt.

let mouse = {
    count: 0,                           // Antal
    cost: 3,                            // Grundkostnad
    addvar: 1,                          // Hur många poäng per antal
    inflation: 1.5,                     // Hur mycket priset ökar per köp
    modified: 0                         // Kostnad för nästa köp (räknas ut innan köp)
}

let factory = {
    count: 0,
    cost: 90,
    addvar: 5,
    inflation: 1.1,
    modified: 0
}

let factoryV2 = {
    count: 0,
    cost: 909,
    addvar: 10,
    inflation: 1.1,
    modified: 0
}

let bank = {
    count: 0,
    cost: 9090.5,
    addvar: 100,
    inflation: 1.1,
    modified: 0
}

let powerCost = {
    //mouse
    mouse1: 5000,
    mouse2: 50000,
    mouse3: 1000000,
    mouse4: 50000000,
    //factory
    factory1: 30000,
    factory2: 140000,
    factory3: 2000000,
    factory4: 200000000,
    //factoryV2
    factoryV21: 50000,
    factoryV22: 200000,
    factoryV23: 5000000,
    factoryV24: 500000000,
    //bank
    bank1: 100000,
    bank2: 400000,
    bank3: 10000000,
    bank4: 1000000000,
    //sista uppgradering
    win: 10000000000
}

let powerBought = {
    //mouse
    mouse1: 0,
    mouse2: 0,
    mouse3: 0,
    mouse4: 0,
    //factory
    factory1: 0,
    factory2: 0,
    factory3: 0,
    factory4: 0,
    //factoryV2
    factoryV21: 0,
    factoryV22: 0,
    factoryV23: 0,
    factoryV24: 0,
    //bank
    bank1: 0,
    bank2: 0,
    bank3: 0,
    bank4: 0,
    win: 0
}

let hide = 1;                       //Används till funktionen hideTool()

let hideTrueFalse = true;           //Används till funktionen hideTool()

function reload() {                 // Laddar om sidan
    location.reload();
}

function hideTool() {               //Används för att gömma/visa ToolTips-rutan
    hide++;
    if (hide % 2 == 0) {
        hideTrueFalse = false;
    } else {
        hideTrueFalse = true;
    }

}

function ppcTool() {                // Används för att visa specifik information i Tooltips-rutan
    document.getElementById("toolH2").innerHTML = "Buying mouse";
    document.getElementById("toolP").innerHTML = "Buy to make the mouse get more points per click";
}

function ppsTool() {               // Används för att visa specifik information i Tooltips-rutan
    document.getElementById("toolH2").innerHTML = "Buying buildings";
    document.getElementById("toolP").innerHTML = "Buy to get more points every second";
}

function toolX() {                // Används för att visa specifik information i Tooltips-rutan
    document.getElementById("toolH2").innerHTML = "1x/10x/100x";
    document.getElementById("toolP").innerHTML = "Allows you to buy 1, 10 or 100 mice and buildings at once";
}

function howMany(number) {              // Ändrar värdet på howmany till det nummer som skickas från knapparna x1/x10/x100
    howmany = number;
}

function choosePower(power) {           //Väljer vilken upppgradering som ska köpas beroende på vilken knapp som klickas och köper den
    switch (power) {
        //mus upgrade
        case 1:
            mouse.addvar = mouse.addvar * 2;
            points = points - powerCost.mouse1;
            powerBought.mouse1 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 2:
            mouse.addvar = mouse.addvar * 5;
            points = points - powerCost.mouse2;
            powerBought.mouse2 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 3:
            mouse.addvar = mouse.addvar * 10;
            points = points - powerCost.mouse3;
            powerBought.mouse3 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 4:
            mouse.addvar = mouse.addvar * 20;
            points = points - powerCost.mouse4;
            powerBought.mouse4 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        //factory upgrade
        case 5:
            factory.addvar = factory.addvar * 2;
            points = points - powerCost.factory1;
            powerBought.factory1 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 6:
            factory.addvar = factory.addvar * 5;
            points = points - powerCost.factory2;
            powerBought.factory2 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 7:
            factory.addvar = factory.addvar * 10;
            points = points - powerCost.factory3;
            powerBought.factory3 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 8:
            factory.addvar = factory.addvar * 20;
            points = points - powerCost.factory4;
            powerBought.factory4 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        //factoryV2 upgrade

        case 9:
            factoryV2.addvar = factoryV2.addvar * 2;
            points = points - powerCost.factoryV21;
            powerBought.factoryV21 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 10:
            factoryV2.addvar = factoryV2.addvar * 5;
            points = points - powerCost.factoryV22;
            powerBought.factoryV22 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 11:
            factoryV2.addvar = factoryV2.addvar * 10;
            points = points - powerCost.factoryV23;
            powerBought.factoryV23 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 12:
            factoryV2.addvar = factoryV2.addvar * 20;
            points = points - powerCost.factoryV24;
            powerBought.factoryV24 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        //bank upgrade

        case 13:
            bank.addvar = bank.addvar * 2;
            points = points - powerCost.bank1;
            powerBought.bank1 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 14:
            bank.addvar = bank.addvar * 5;
            points = points - powerCost.bank2;
            powerBought.bank2 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 15:
            bank.addvar = bank.addvar * 10;
            points = points - powerCost.bank3;
            powerBought.bank3 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 16:
            bank.addvar = bank.addvar * 20;
            points = points - powerCost.bank4;
            powerBought.bank4 = 1;
            if (document.getElementById('upgAudio').paused) {
                document.getElementById('upgAudio').play();
            }
            else {
                document.getElementById('upgAudio').currentTime = 0;
            }
            break;

        case 17:
            powerBought.win = 1;
            if (document.getElementById('winAudio').paused) {
                document.getElementById('winAudio').play();
            }
            else {
                document.getElementById('winAudio').currentTime = 0;
            }
    }
}

function multipleMousePrice() {                             // Räknar ut kostnaden av att upgradera musen innan köp
    mouse.modified = mouse.cost;
    for (let i = 1; i <= howmany; i++) {
        mouse.modified = mouse.modified * mouse.inflation;
        mouse.modified = Math.ceil(mouse.modified);
    }
}

function multipleFactoryPrice() {                           // Räknar ut kostnaden av att köpa Factory innan köp
    factory.modified = factory.cost;
    for (let i = 1; i <= howmany; i++) {
        factory.modified = factory.modified * factory.inflation;
        factory.modified = Math.ceil(factory.modified);
    }
}

function multipleFactoryV2Price() {                         // Räknar ut kostnaden av att köpa Mine innan köp
    factoryV2.modified = factoryV2.cost;
    for (let i = 1; i <= howmany; i++) {
        factoryV2.modified = factoryV2.modified * factoryV2.inflation;
        factoryV2.modified = Math.ceil(factoryV2.modified);
    }
}

function multipleBankPrice() {                              // Räknar ut kostnaden av att köpa Bank innan köp
    bank.modified = bank.cost;
    for (let i = 1; i <= howmany; i++) {
        bank.modified = bank.modified * bank.inflation;
        bank.modified = Math.ceil(bank.modified);
    }
}

function pointClick() {                                     // Lägger till poäng per klick samt spelar ljud
    points = points + mouse.addvar;
    if (document.getElementById('myAudio').paused) {
        document.getElementById('myAudio').play();
    }
    else {
        document.getElementById('myAudio').currentTime = 0;
    }
};

function upgradeMouse() {                                   //Uppgraderar musen, drar kostnaden från points samt spelar ljud
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

function addFactories() {                                 // Lägger till fabrik, tar bort kostnaden från points samt spelar ljud
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

function addFactoriesV2() {                              // Lägger till Mine, tar bort kostnaden från points samt spelar ljud
    factoryV2.cost = factoryV2.modified;
    factoryV2.count = factoryV2.count + howmany;
    points = points - factoryV2.cost;
    if (document.getElementById('mineAudio').paused) {
        document.getElementById('mineAudio').play();
    }
    else {
        document.getElementById('mineAudio').currentTime = 0;
    }
}

function addBanks() {                                   // Lägger till Bank, tar bort kostnaden från points samt spelar ljud
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

window.setInterval(function () {          //Allt inom detta kodblock körs varje millisekund
    pps = (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count) + (bank.addvar * bank.count);      //Räknar ut hur många poäng som läggs till per sekund av fabrikerna
    points = Math.ceil(points);                             //Avrundar points till heltal
    document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
    document.getElementById('ppc').innerText = "Points per click: " + mouse.addvar;   //Dessa sju rader uppdaterar ppc, points, pps, mouse.cost, factory.count/cost, factoryV2.count/cost i html.
    document.getElementById('totalfactories').innerText = "Factories: " + factory.count + " (" + (factory.count * factory.addvar) + " points per second)";
    document.getElementById('totalfactoriesV2').innerText = "Mines: " + factoryV2.count + " (" + (factoryV2.count * factoryV2.addvar) + " points per second)";
    document.getElementById('totalbanks').innerText = "Banks: " + bank.count + " (" + (bank.count * bank.addvar) + " points per second)";
    document.getElementById('mousecost').innerText = "Mouse Cost--: " + mouse.modified;
    document.getElementById('costfactory').innerText = "Factory cost: " + factory.modified;
    document.getElementById('costfactoryV2').innerText = "Mine cost---: " + factoryV2.modified;
    document.getElementById('costbanks').innerText = "Bank cost---: " + bank.modified;

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

    if (points >= factory.cost) {                                   // Gör Factory synlig när man har råd med den
        document.getElementById('totalfactories').style.visibility = "visible";
        document.getElementById('costfactory').style.visibility = "visible";
        document.getElementById('buyfactory').innerHTML = "Buy A Factory";
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

    if (points >= factoryV2.cost) {                              // Gör Mine synlig när man har råd med den
        document.getElementById('totalfactoriesV2').style.visibility = "visible";
        document.getElementById('costfactoryV2').style.visibility = "visible";
        document.getElementById('buyfactoryV2').innerHTML = "Buy A Mine";
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

    if (howmany == 1) {                                                 // Ändrar färg på x1/x10/x100-knapp till vit om den är vald
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
    if (points >= powerCost.mouse1) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('mouseupg1').innerHTML = "Mouse x2";
    }

    if (points >= powerCost.mouse2) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('mouseupg2').innerHTML = "Mouse x5";
    }

    if (points >= powerCost.mouse3) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('mouseupg3').innerHTML = "Mouse x10";
    }

    if (points >= powerCost.mouse4) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('mouseupg4').innerHTML = "Mouse x20";
    }

    if (points >= powerCost.factory1) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('factoryupg1').innerHTML = "Factory x2";
    }

    if (points >= powerCost.factory2) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('factoryupg2').innerHTML = "Factory x5";
    }

    if (points >= powerCost.factory3) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('factoryupg3').innerHTML = "Factory x10";
    }

    if (points >= powerCost.factory4) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('factoryupg4').innerHTML = "Factory x20";
    }

    if (points >= powerCost.factoryV21) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('v2upg1').innerHTML = "Mine x2";
    }

    if (points >= powerCost.factoryV22) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('v2upg2').innerHTML = "Mine x5";
    }

    if (points >= powerCost.factoryV23) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('v2upg3').innerHTML = "Mine x10";
    }

    if (points >= powerCost.factoryV24) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('v2upg4').innerHTML = "Mine x20";
    }

    if (points >= powerCost.bank1) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('bankupg1').innerHTML = "Bank x2";
    }

    if (points >= powerCost.bank2) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('bankupg2').innerHTML = "Bank x5";
    }

    if (points >= powerCost.bank3) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('bankupg3').innerHTML = "Bank x10";
    }

    if (points >= powerCost.bank4) {                               // Gör text synlig när man har råd med uppgradering
        document.getElementById('bankupg4').innerHTML = "Bank x20";
    }

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

    if (powerBought.mouse1 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('mouseupg1').style.opacity = "0.5";
        document.getElementById('mouseupg1').style.pointerEvents = "none";
        document.getElementById('mouseupg1').style.cursor = "url";
        document.getElementById('mouseupg1').innerHTML = "Bought";
    }

    if (powerBought.mouse2 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('mouseupg2').style.opacity = "0.5";
        document.getElementById('mouseupg2').style.pointerEvents = "none";
        document.getElementById('mouseupg2').style.cursor = "url";
        document.getElementById('mouseupg2').innerHTML = "Bought";
    }

    if (powerBought.mouse3 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('mouseupg3').style.opacity = "0.5";
        document.getElementById('mouseupg3').style.pointerEvents = "none";
        document.getElementById('mouseupg3').style.cursor = "url";
        document.getElementById('mouseupg3').innerHTML = "Bought";
    }

    if (powerBought.mouse4 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('mouseupg4').style.opacity = "0.5";
        document.getElementById('mouseupg4').style.pointerEvents = "none";
        document.getElementById('mouseupg4').style.cursor = "url";
        document.getElementById('mouseupg4').innerHTML = "Bought";
    }

    if (powerBought.factory1 == 1) {                           //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('factoryupg1').style.opacity = "0.5";
        document.getElementById('factoryupg1').style.pointerEvents = "none";
        document.getElementById('factoryupg1').style.cursor = "url";
        document.getElementById('factoryupg1').innerHTML = "Bought";
    }

    if (powerBought.factory2 == 1) {                            //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('factoryupg2').style.opacity = "0.5";
        document.getElementById('factoryupg2').style.pointerEvents = "none";
        document.getElementById('factoryupg2').style.cursor = "url";
        document.getElementById('factoryupg2').innerHTML = "Bought";
    }

    if (powerBought.factory3 == 1) {                            //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('factoryupg3').style.opacity = "0.5";
        document.getElementById('factoryupg3').style.pointerEvents = "none";
        document.getElementById('factoryupg3').style.cursor = "url";
        document.getElementById('factoryupg3').innerHTML = "Bought";
    }

    if (powerBought.factory4 == 1) {                            //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('factoryupg4').style.opacity = "0.5";
        document.getElementById('factoryupg4').style.pointerEvents = "none";
        document.getElementById('factoryupg4').style.cursor = "url";
        document.getElementById('factoryupg4').innerHTML = "Bought";
    }

    if (powerBought.factoryV21 == 1) {                          //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('v2upg1').style.opacity = "0.5";
        document.getElementById('v2upg1').style.pointerEvents = "none";
        document.getElementById('v2upg1').style.cursor = "url";
        document.getElementById('v2upg1').innerHTML = "Bought";
    }

    if (powerBought.factoryV22 == 1) {                          //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('v2upg2').style.opacity = "0.5";
        document.getElementById('v2upg2').style.pointerEvents = "none";
        document.getElementById('v2upg2').style.cursor = "url";
        document.getElementById('v2upg2').innerHTML = "Bought";
    }

    if (powerBought.factoryV23 == 1) {                          //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('v2upg3').style.opacity = "0.5";
        document.getElementById('v2upg3').style.pointerEvents = "none";
        document.getElementById('v2upg3').style.cursor = "url";
        document.getElementById('v2upg3').innerHTML = "Bought";
    }

    if (powerBought.factoryV24 == 1) {                          //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('v2upg4').style.opacity = "0.5";
        document.getElementById('v2upg4').style.pointerEvents = "none";
        document.getElementById('v2upg4').style.cursor = "url";
        document.getElementById('v2upg4').innerHTML = "Bought";
    }

    if (powerBought.bank1 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('bankupg1').style.opacity = "0.5";
        document.getElementById('bankupg1').style.pointerEvents = "none";
        document.getElementById('bankupg1').style.cursor = "url";
        document.getElementById('bankupg1').innerHTML = "Bought";
    }

    if (powerBought.bank2 == 1) {                             //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('bankupg2').style.opacity = "0.5";
        document.getElementById('bankupg2').style.pointerEvents = "none";
        document.getElementById('bankupg2').style.cursor = "url";
        document.getElementById('bankupg2').innerHTML = "Bought";
    }

    if (powerBought.bank3 == 1) {                            //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('bankupg3').style.opacity = "0.5";
        document.getElementById('bankupg3').style.pointerEvents = "none";
        document.getElementById('bankupg3').style.cursor = "url";
        document.getElementById('bankupg3').innerHTML = "Bought";
    }    

    if (powerBought.bank4 == 1) {                              //Gör uppgradering oklickbar och genomskinlig när den är köpt
        document.getElementById('bankupg4').style.opacity = "0.5";
        document.getElementById('bankupg4').style.pointerEvents = "none";
        document.getElementById('bankupg4').style.cursor = "url";
        document.getElementById('bankupg4').innerHTML = "Bought";
    }

    if (powerBought.win == 1) {                                //Visar "win-screen" när sista uppgraderingen är köpt
        document.getElementById('winscreen').style.visibility = "visible";
    }

    if (hideTrueFalse == false) {                              //Visar/gömmer ToolTip-ruta om knappen är klickad
        document.getElementById("tooltipRam").style.visibility = "visible";
        document.getElementById("tooltipInneRam").style.visibility = "visible";
        document.getElementById("toolHead").style.visibility = "visible";
        document.getElementById("toolPpc").style.visibility = "visible";
        document.getElementById("toolPps").style.visibility = "visible";
        document.getElementById("toolX").style.visibility = "visible";
        document.getElementById("toolH2").style.visibility = "visible";
        document.getElementById("toolP").style.visibility = "visible";
        document.getElementById("toolHide").style.backgroundColor = "red";
        document.getElementById("toolHide").innerHTML = "Close tool tips";

    } else {
        document.getElementById("tooltipRam").style.visibility = "hidden";
        document.getElementById("tooltipInneRam").style.visibility = "hidden";
        document.getElementById("toolHead").style.visibility = "hidden";
        document.getElementById("toolPpc").style.visibility = "hidden";
        document.getElementById("toolPps").style.visibility = "hidden";
        document.getElementById("toolX").style.visibility = "hidden";
        document.getElementById("toolH2").style.visibility = "hidden";
        document.getElementById("toolP").style.visibility = "hidden";
        document.getElementById("toolHide").style.backgroundColor = "rgb(128, 199, 48)";
        document.getElementById("toolHide").innerHTML = "Tool Tips";
        document.getElementById("toolH2").innerHTML = "";
        document.getElementById("toolP").innerHTML = "";

    }

    multipleMousePrice();       //Körs för att räkna ut priset på musen
    multipleFactoryPrice();     //Körs för att räkna ut priset på musen
    multipleFactoryV2Price();   //Körs för att räkna ut priset på musen
    multipleBankPrice();
}, 1);

