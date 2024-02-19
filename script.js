// Initialize score
var score = 0;
var beatcost = 15;
var beats = 0;
var melodyCost = 100; 
var melodies = 0; 
var clickingPower = 1; 




function buybeat() { 
  if(score >= beatcost) { 
    score = score - beatcost; 
    beats = beats + 1; 
    beatcost = Math.round(beatcost * 1.15);
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("beatcost").innerHTML = beatcost;
    document.getElementById("beats").innerHTML = beats;
  }
}


function buyMelody() { 
    if(score >= melodyCost) { 
      score = score - melodyCost; 
      melodies = melodies + 1; 
      melodyCost = Math.round(melodyCost * 1.15);
      
      document.getElementById("score").innerHTML = score;
      document.getElementById("melodyCost").innerHTML = melodyCost;
      document.getElementById("melodies").innerHTML = melodies;
    }
  }

function addToScore(amount) {
   score = score + amount;
   document.getElementById("score").innerHTML = score;
};

setInterval (function() { 
    score = score + beats; 
    score = score + melodies * 5; 
    document.getElementById("score").innerHTML = score;
}, 1000); //1000ms = 1 sec 




