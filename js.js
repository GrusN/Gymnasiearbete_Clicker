let points = 0;                         // Poäng
let addvar = 5;                         // Hur många poäng som läggs till per fabrk
let factories = 0;                       // Antal fabriker
let factorycost = 10;                    // Fabrikens baskostnad
let mouseLevel = 0;                     //Antal musuppgraderingar
let mousecost = 5;                      //Musuppgraderingens baskostnad
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



window.setInterval(function(){          // Lägger till poäng från fabriker varje sekund
points = points + addvar * factories;
}, 1000);


window.setInterval(function(){          //Allt inom kodblocket körs varje millisekund
    pps = addvar * factories;                               //Räknar ut hur många poäng som läggs till per sekund av fabrikerna             
    points = Math.ceil(points);                             //Avrundar points till heltal
    factorycost = Math.ceil(factorycost);                   //Avrundar factorycost till heltal
        document.getElementById('ppc').innerText = "Points per click: " + clickAdder;                   //Dessa fyra uppdaterar ppc, totalpoäng, antal fabriker och fabrikkostnad i html.
        document.getElementById('total').innerText = "Points: " + points + " (" + pps + " per second)";
        document.getElementById('totalfactories').innerText = "Factories: " + factories;
        document.getElementById('costfactory').innerText = "Factory cost: " + factorycost;

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
    }, 1);

