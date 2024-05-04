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
function addToScore(amount, event) {
    score += amount;
    document.getElementById("score").innerHTML = score;

    // Create animation element
    var animationElement = document.createElement("div");
    animationElement.classList.add("scoreAnimation");
    animationElement.textContent = "+1";
    
    // Set position of animation element based on click coordinates
    animationElement.style.position = "absolute";
    animationElement.style.left = event.clientX + "px"; // Adjust offset as needed
    animationElement.style.top = event.clientY + "px"; // Adjust offset as needed
    
    // Append animation element to the body
    document.body.appendChild(animationElement);
    
    // Remove animation element after animation completes
    setTimeout(function() {
        animationElement.remove();
    }, 1000);
}




function updateScorePerSecond() {
    vibespersecond = beats + melodies * 5 + tempos * 70;
    document.getElementById("vibespersecond").innerHTML = vibespersecond;
}
function loadGame() {
    var saveGame = JSON.parse(localStorage.getItem("gameSave"));
    if (saveGame !== null) {
        score = saveGame.score || score;
        clickingPower = saveGame.clickingPower || clickingPower;
        beatcost = saveGame.beatcost || beatcost;
        beats = saveGame.beats || beats;
        melodies = saveGame.melodies || melodies;
        melodyCost = saveGame.melodyCost || melodyCost;
        tempoCost = saveGame.tempoCost || tempoCost;
        tempos = saveGame.tempos || tempos;
    } else {
        console.log("No saved game found.");
    }
}
function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        beatcost: beatcost,
        beats: beats,
        melodyCost: melodyCost,
        melodies: melodies,
        tempoCost: tempoCost,
        tempos: tempos
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}
window.onload = function () {
    loadGame();
    updateScorePerSecond();
    document.getElementById("score").innerHTML = score;
    document.getElementById("beatcost").innerHTML = beatcost;
    document.getElementById("beats").innerHTML = beats;
    document.getElementById("melodyCost").innerHTML = melodyCost;
    document.getElementById("melodies").innerHTML = melodies;
    document.getElementById("tempoCost").innerHTML = tempoCost;
    document.getElementById("tempos").innerHTML = tempos;
};

setInterval(function () {
    score = score + beats;
    score = score + melodies * 5;
    score = score + tempos * 70;
    document.getElementById("score").innerHTML = score;

    document.title = score + " Vibes - Vibe Clicker";
}, 1000); //1000ms = 1 sec 

setInterval(function () {
    saveGame();
}, 30000); // 3000ms = 30 sec

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which == 83) { // contr + s
        event.preventDefault();
        saveGame();
    }
}, false);

