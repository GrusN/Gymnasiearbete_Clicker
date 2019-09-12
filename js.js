let points = 0;                          // Poäng
let addvar = 5;                          // Hur många poäng som läggs till per fabrk
let addvarV2 = 10;                          // Hur många poäng som läggs till per fabrk
let factories = 0;                       // Antal fabriker
let factorycost = 10;                    // Fabrikens baskostnad
let factoriesV2 = 0;                     // Antal fabriker
let factorycostV2 = 100;                 // Fabrikens baskostnad
let mouseLevel = 0;                      // Antal musuppgraderingar
let mousecost = 5;                       // Musuppgraderingens baskostnad
let clickAdder = 1;                      // Hur många poäng som läggs till per klick


function pointClick(){                  // Lägger till poäng per klick och visar antal poäng i consolen
    points = points + clickAdder;
    console.log(points);
};

function upgradeMouse(){                //Uppgraderar musen, tar bort kostnad från totala points och höjer kostnad med 10%.
    mouseLevel = mouseLevel + 1;
    points = points - mousecost;
    clickAdder = clickAdder + mouseLevel;
    mousecost = mousecost * 1.1;

}

function addFactories() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad med 10%.
    factories = factories + 1;
    points = points - factorycost;
    factorycost = factorycost * 1.1;
}

function addFactoriesV2() {               // Lägger till fabrik, tar bort kostnad från totala poäng och höjer kostnad med 10%.
    factoriesV2 = factoriesV2 + 1;
    points = points - factorycostV2;
    factorycostV2 = factorycostV2 * 1.1;
}

window.setInterval(function(){          // Lägger till poäng från fabriker varje sekund
points = points + (addvar * factories) + (addvarV2 * factoriesV2);
}, 1000);


window.setInterval(function(){          //Allt inom kodblocket körs varje millisekund
    pps = (addvar * factories) + (addvarV2 * factoriesV2);                               //Räknar ut hur många poäng som läggs till per sekund av fabrikerna
    points = Math.ceil(points);                             //Avrundar points till heltal
    factorycost = Math.ceil(factorycost);                   //Avrundar factorycost till heltal
    factorycostV2 = Math.ceil(factorycostV2);                   //Avrundar factorycost till heltal
        document.getElementById('ppc').innerText = "Points per click: " + clickAdder;                   //Dessa fyra uppdaterar ppc, totalpoäng, antal fabriker och fabrikkostnad i html.
        document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
        document.getElementById('totalfactories').innerText = "Factories: " + factories;
        document.getElementById('costfactory').innerText = "Factory cost: " + factorycost;
        document.getElementById('totalfactoriesV2').innerText = "FactoriesV2: " + factoriesV2;
        document.getElementById('costfactoryV2').innerText = "Factory costV2: " + factorycostV2;

    if (points >= factorycost){                             //Ändrar färg och klickbarhet på knapp beroende på om man har råd att köpa en fabrik.
        document.getElementById('buyfactory').style.backgroundColor = "darkcyan";
        document.getElementById('buyfactory').style.pointerEvents = "auto";
        document.getElementById('buyfactory').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactory').style.backgroundColor = "darkred";
        document.getElementById('buyfactory').style.pointerEvents = "none"
        document.getElementById('buyfactory').style.cursor = "url";

    }

    if (points >= factorycostV2){                             //Ändrar färg och klickbarhet på knapp beroende på om man har råd att köpa en fabrikV2.
        document.getElementById('buyfactoryV2').style.backgroundColor = "darkcyan";
        document.getElementById('buyfactoryV2').style.pointerEvents = "auto";
        document.getElementById('buyfactoryV2').style.cursor = "pointer";
    }
    else {
        document.getElementById('buyfactoryV2').style.backgroundColor = "darkred";
        document.getElementById('buyfactoryV2').style.pointerEvents = "none"
        document.getElementById('buyfactoryV2').style.cursor = "url";

    }

    if (points >=mousecost){                                //Ändrar färg och klickbarhet på knapp beroende på om man har råd att uppgradera musen.
        document.getElementById('upgrademouse').style.backgroundColor = "darkcyan";
        document.getElementById('upgrademouse').style.pointerEvents = "auto"
        document.getElementById('upgrademouse').style.cursor = "pointer";

    }
    else {
        document.getElementById('upgrademouse').style.backgroundColor = "darkred";
        document.getElementById('upgrademouse').style.pointerEvents = "none"
        document.getElementById('upgrademouse').style.cursor = "url";
    }
    if (points > factorycostV2){
        document.getElementById('totalfactoriesV2').style.visibility = "visible";
        document.getElementById('costfactoryV2').style.visibility = "visible";
        document.getElementById('buyfactoryV2').innerHTML = "Buy A FactoryV2";
    }
    }, 1);

