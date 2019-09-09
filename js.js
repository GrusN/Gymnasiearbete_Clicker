let points = 0;                         // Poäng
let clickAdder = 3;                     // Hur många poäng som läggs till per klick
let addvar = 5;                         // Hur många poäng som läggs till per fabrk
let factories = 0                       // Antal fabriker
let factorycost = 10                    // Fabrikens baskostnad

function pointClick(){                  // Lägger till poäng per klick och visar antal poäng i consolen
    points = points + clickAdder;
    console.log(points);
};

function removePoints() {               // Tar bort factorycost's värde från totala poäng
    points = points - factorycost;
    }

function raiseCost(){                   // Höjer factorycost
    factorycost = factorycost * 1.2;
    
    }

function addFactories() {               // Lägger till fabrik
    factories = factories + 1;
    removePoints();
    raiseCost();
}



window.setInterval(function(){          // Lägger till poäng varje sekund och loggar samtidigt totalpoäng
points = points + addvar * factories;
console.log(points);
}, 1000);