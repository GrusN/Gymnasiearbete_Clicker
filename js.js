let points = 0;                          // Poäng
let factory = {
    count:0,                            //Antal
    cost: 10,                           //Kostnad
    addvar: 5                           //Hur många poäng per antal
}
let factoryV2 = {
    count:0,
    cost: 100,
    addvar: 10
}
let mouse = {
    count:0,
    cost: 5,
    addvar: 1
}

function pointClick(){                  // Lägger till poäng per klick
    points = points + mouse.addvar;
};

function upgradeMouse(){                //Uppgraderar musen, tar bort kostnad från totala points och höjer kostnad med 10%.
    mouse.count = mouse.count + 1;
    points = points - mouse.cost;
    mouse.addvar = mouse.addvar + 1;
    mouse.cost = mouse.cost * 1.1;

}

function addFactories() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad med 10%.
    factory.count = factory.count + 1;
    points = points - factory.cost;
    factory.cost = factory.cost * 1.1;
}

function addFactoriesV2() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad med 10%.
    factoryV2.count = factoryV2.count + 1;
    points = points - factoryV2.cost;
    factoryV2.cost = factoryV2.cost * 1.1;
}

window.setInterval(function(){          // Lägger till poäng från fabriker varje sekund
points = points + (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count);
}, 1000);


window.setInterval(function(){          //Allt inom kodblocket körs varje millisekund
    pps = (factory.addvar * factory.count) + (factoryV2.addvar * factoryV2.count);      //Räknar ut hur många poäng som läggs till per sekund av fabrikerna
    points = Math.ceil(points);                             //Avrundar points till heltal
    mouse.cost = Math.ceil(mouse.cost);                     //Avrundar mouse.cost till heltal
    factory.cost = Math.ceil(factory.cost);                 //Avrundar factory.cost till heltal
    factoryV2.cost = Math.ceil(factoryV2.cost);             //Avrundar factoryV2.cost till heltal
        document.getElementById('ppc').innerText = "Points per click: " + mouse.addvar;   //Dessa sju rader uppdaterar ppc, points, pps, mouse.cost, factory.count/cost, factoryV2.count/cost i html.
        document.getElementById('mousecost').innerText = "Mouse Upgrade Cost: " + mouse.cost;
        document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
        document.getElementById('totalfactories').innerText = "Factories: " + factory.count;
        document.getElementById('costfactory').innerText = "Factory cost: " + factory.cost;
        document.getElementById('totalfactoriesV2').innerText = "FactoriesV2: " + factoryV2.count;
        document.getElementById('costfactoryV2').innerText = "Factory costV2: " + factoryV2.cost;


    if (points >= factory.cost){                             //Ändrar färg och klickbarhet på knapp beroende på om man har råd att köpa en fabrik.
        document.getElementById('buyfactory').style.backgroundColor = "darkcyan";
        document.getElementById('buyfactory').style.pointerEvents = "auto";
        document.getElementById('buyfactory').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactory').style.backgroundColor = "darkred";
        document.getElementById('buyfactory').style.pointerEvents = "none"
        document.getElementById('buyfactory').style.cursor = "url";

    }

    if (points >= factoryV2.cost){                             //Ändrar färg och klickbarhet på knapp beroende på om man har råd att köpa en fabrikV2.
        document.getElementById('buyfactoryV2').style.backgroundColor = "darkcyan";
        document.getElementById('buyfactoryV2').style.pointerEvents = "auto";
        document.getElementById('buyfactoryV2').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactoryV2').style.backgroundColor = "darkred";
        document.getElementById('buyfactoryV2').style.pointerEvents = "none"
        document.getElementById('buyfactoryV2').style.cursor = "url";

    }

    if (points >=mouse.cost){                                //Ändrar färg och klickbarhet på knapp beroende på om man har råd att uppgradera musen.
        document.getElementById('upgrademouse').style.backgroundColor = "darkcyan";
        document.getElementById('upgrademouse').style.pointerEvents = "auto"
        document.getElementById('upgrademouse').style.cursor = "pointer";

    }
    else {
        document.getElementById('upgrademouse').style.backgroundColor = "darkred";
        document.getElementById('upgrademouse').style.pointerEvents = "none"
        document.getElementById('upgrademouse').style.cursor = "url";
    }
    if (points > factoryV2.cost){
        document.getElementById('totalfactoriesV2').style.visibility = "visible";
        document.getElementById('costfactoryV2').style.visibility = "visible";
        document.getElementById('buyfactoryV2').innerHTML = "Buy A FactoryV2";
    }
    }, 1);

