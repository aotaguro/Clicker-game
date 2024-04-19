// Initialize score
var score = 0;
var beatcost = 15;
var beats = 0;
var melodyCost = 100;
var melodies = 0;
var clickingPower = 1;
var tempoCost = 1000; 
var tempos = 0; 



function buybeat() {
    if (score >= beatcost) {
        score = score - beatcost;
        beats = beats + 1;
        beatcost = Math.round(beatcost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("beatcost").innerHTML = beatcost;
        document.getElementById("beats").innerHTML = beats;
        updateScorePerSecond();
    }
}


function buyMelody() {
    if (score >= melodyCost) {
        score = score - melodyCost;
        melodies = melodies + 1;
        melodyCost = Math.round(melodyCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("melodyCost").innerHTML = melodyCost;
        document.getElementById("melodies").innerHTML = melodies;
        updateScorePerSecond();
    }
}
function buyTempo() {
    if (score >= tempoCost) {
        score = score - tempoCost;
        tempos = tempos + 1;
        tempoCost = Math.round(tempoCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("tempoCost").innerHTML = tempoCost;
        document.getElementById("tempos").innerHTML = tempos;
        updateScorePerSecond();
    }
}


function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
};


function updateScorePerSecond() {
    vibespersecond = beats + melodies * 5 + tempos * 70;
    document.getElementById("vibespersecond").innerHTML = vibespersecond;
}


setInterval(function () {
    score = score + beats;
    score = score + melodies * 5;
    score = score + tempos * 70;  
    document.getElementById("score").innerHTML = score;

    document.title = score + " Vibes - Vibe Clicker";
}, 1000); //1000ms = 1 sec 




