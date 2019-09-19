let points = 0;                          // Poäng
let howmany = 1;                        // Värde som ändras mellan 1, 10 och 100 beroende på vilken knapp man valt.
let mouse = {
    count:0,                            // Antal
    cost: 5,                            // Kostnad
    addvar: 1,                          // Hur många poäng per antal
    inflation: 1.5                      // HUr mycket priset ökar per köp
}
let factory = {
    count:0,                            
    cost: 100,                           
    addvar: 5,                           
    inflation: 1.1
}
let factoryV2 = {
    count:0,
    cost: 1000,
    addvar: 10,
    inflation: 1.1
}

let bank = {
    count: 0,
    cost: 100000,
    addvar: 100,
    inflation: 1.1
}

function howMany(number) {              // Ändrar värdet på howmany till det nummer som skickas från knappar.
    howmany = number;
}

function givePoints(amount) {           //Cheat vi kan använda för att testa om saker funkar utan att behöva klicka en massa
points = points + amount;
}

function pointClick(){                  // Lägger till poäng per klick
    points = points + mouse.addvar;
};

function upgradeMouse(){                //Uppgraderar musen, tar bort kostnad från totala points och höjer kostnad.
    mouse.count = mouse.count + 1;
    points = points - mouse.cost;
    mouse.addvar = mouse.addvar + 1;
    mouse.cost = mouse.cost * mouse.inflation;

}

function addFactories() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad.
    factory.count = factory.count + 1;
    points = points - factory.cost;
    factory.cost = factory.cost * factory.inflation;
}

function addFactoriesV2() {               // Lägger till fabrikV2, tar bort kostnad från totala poäng och höjer kostnad.
    factoryV2.count = factoryV2.count + 1;
    points = points - factoryV2.cost;
    factoryV2.cost = factoryV2.cost * factoryV2.inflation;
}

function addBanks() {                   // Lägger till bank, tar bort kostnad från totala poäng och höjer kostnad.
    bank.count = bank.count + 1;
    points = points - bank.cost;
    bank.cost = bank.cost * bank.inflation;
}

window.setInterval(function(){          // Lägger till poäng från fabriker varje sekund
points = points + (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count) + (bank.addvar * bank.count);
}, 1000);


window.setInterval(function(){          //Allt inom kodblocket körs varje millisekund
    pps = (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count) + (bank.addvar * bank.count);      //Räknar ut hur många poäng som läggs till per sekund av fabrikerna
    points = Math.ceil(points);                             //Avrundar points till heltal
    mouse.cost = Math.ceil(mouse.cost);                     //Avrundar mouse.cost till heltal
    factory.cost = Math.ceil(factory.cost);                 //Avrundar factory.cost till heltal
    factoryV2.cost = Math.ceil(factoryV2.cost);             //Avrundar factoryV2.cost till heltal
    bank.cost = Math.ceil(bank.cost);                       //Avrundar bank.cost till heltal
        document.getElementById('ppc').innerText = "Points per click: " + mouse.addvar;   //Dessa sju rader uppdaterar ppc, points, pps, mouse.cost, factory.count/cost, factoryV2.count/cost i html.
        document.getElementById('mousecost').innerText = "Mouse Upgrade Cost: " + mouse.cost;
        document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
        document.getElementById('totalfactories').innerText = "Factories: " + factory.count;
        document.getElementById('costfactory').innerText = "Factory cost: " + factory.cost;
        document.getElementById('totalfactoriesV2').innerText = "FactoriesV2: " + factoryV2.count;
        document.getElementById('costfactoryV2').innerText = "Factory costV2: " + factoryV2.cost;
        document.getElementById('totalbanks').innerText = "Banks: " + bank.count;
        document.getElementById('costbanks').innerText = "Bank cost: " + bank.cost;


    if (points >= factory.cost){                             //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en fabrik.
        document.getElementById('buyfactory').style.opacity = "1";
        document.getElementById('buyfactory').style.pointerEvents = "auto";
        document.getElementById('buyfactory').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactory').style.opacity = "0.3";
        document.getElementById('buyfactory').style.pointerEvents = "none"
        document.getElementById('buyfactory').style.cursor = "url";

    }

    if (points >= factoryV2.cost){                             //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en fabrikV2.
        document.getElementById('buyfactoryV2').style.opacity = "1";
        document.getElementById('buyfactoryV2').style.pointerEvents = "auto";
        document.getElementById('buyfactoryV2').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactoryV2').style.opacity = "0.3";
        document.getElementById('buyfactoryV2').style.pointerEvents = "none"
        document.getElementById('buyfactoryV2').style.cursor = "url";

    }

    if (points >=mouse.cost){                                //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att uppgradera musen.
        document.getElementById('upgrademouse').style.opacity = "1";
        document.getElementById('upgrademouse').style.pointerEvents = "auto"
        document.getElementById('upgrademouse').style.cursor = "pointer";

    }
    else {
        document.getElementById('upgrademouse').style.opacity = "0.3";
        document.getElementById('upgrademouse').style.pointerEvents = "none"
        document.getElementById('upgrademouse').style.cursor = "url";
    }
    if (points >= factoryV2.cost){                          // Gör factoryV2 synlig när man har råd med den
        document.getElementById('totalfactoriesV2').style.visibility = "visible";
        document.getElementById('costfactoryV2').style.visibility = "visible";
        document.getElementById('buyfactoryV2').innerHTML = "Buy A FactoryV2";
    }

    if (points >=bank.cost){                               //Ändrar genomskinlighet och klickbarhet på knapp beroende på om man har råd att köpa en bank.      
        document.getElementById('buybank').style.opacity = "1";
        document.getElementById('buybank').style.pointerEvents = "auto"
        document.getElementById('buybank').style.cursor = "pointer";

    }
    else {
        document.getElementById('buybank').style.opacity = "0.3";
        document.getElementById('buybank').style.pointerEvents = "none"
        document.getElementById('buybank').style.cursor = "url";
    }
    if (points >= bank.cost){                               // Gör bank synlig när man har råd med den
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

    }, 1);

