const playGame = (() => {
    const winningPlayer = document.getElementById("winning-player");
    const choices = document.querySelectorAll(".choice");
    const winner = document.getElementById("winner");
    
    choices.forEach(choice);
    
    let circlesTurn = false;
    
    function winCon() {
        if (choices[0].value == "x" && choices[1].value == "x" && choices[2].value == "x" ||
        choices[3].value == "x" && choices[4].value == "x" && choices[5].value == "x" ||
        choices[6].value == "x" && choices[7].value == "x" && choices[8].value == "x" ||
        choices[0].value == "x" && choices[4].value == "x" && choices[8].value == "x" ||
        choices[2].value == "x" && choices[4].value == "x" && choices[6].value == "x" ||
        choices[0].value == "x" && choices[3].value == "x" && choices[6].value == "x" ||
        choices[1].value == "x" && choices[4].value == "x" && choices[7].value == "x" ||
        choices[2].value == "x" && choices[5].value == "x" && choices[8].value == "x") {
            
            winner.style.visibility = "visible";
            winningPlayer.textContent = "X Wins!"
        
        } else if (choices[0].value == "o" && choices[1].value == "o" && choices[2].value == "o" ||
        choices[3].value == "o" && choices[4].value == "o" && choices[5].value == "o" ||
        choices[6].value == "o" && choices[7].value == "o" && choices[8].value == "o" ||
        choices[0].value == "o" && choices[4].value == "o" && choices[8].value == "o" ||
        choices[2].value == "o" && choices[4].value == "o" && choices[6].value == "o" ||
        choices[0].value == "o" && choices[3].value == "o" && choices[6].value == "o" ||
        choices[1].value == "o" && choices[4].value == "o" && choices[7].value == "o" ||
        choices[2].value == "o" && choices[5].value == "o" && choices[8].value == "o") {
           
            winner.style.visibility = "visible";
            winningPlayer.textContent = "O Wins!"
        
        }   
    };
    
    function choice(pick) {
        pick.addEventListener("click", game, { once: true });
        
        function game() {
            if (circlesTurn == false) {
                pick.textContent = "x";
                pick.value = "x"
                circlesTurn = true;                                                     
            } else if (circlesTurn == true) {
                pick.textContent = "o";
                pick.value = "o"
                circlesTurn = false;
            };
            winCon();
        };
    };
})();