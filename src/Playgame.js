
import React, { useState } from 'react'
//import SelectPlayer from './SelectPlayer'
import ResultsContainer from './ResultContainer'

function Playgame() {

    const [Player, setPlayer] = useState("")
    const [Computer, setComputer] = useState("")
    const [Turn, setTurn] = useState(1)
    const [GameState, setGameState] = useState([])
    const [Result, setResult] = useState("gameplay")
    const [Allow ,setAllow] = useState("yes")


   const handleSelect = (choice) =>  {

		if (choice === "X") {
				setPlayer ("X")
				setComputer ("O")
       
			   reset();
		}
		else if (choice === "O") {
			
				setPlayer("O")
				setComputer("X")
			
			reset();
		}

	}

    const reset = () => {
            setAllow ('yes')
			setTurn (1)
			setGameState([])
            setResult("gameplay")
        
        document.getElementById("selectMenu").style.display = "none";
		document.getElementById(1).innerHTML  = null;
		document.getElementById(2).innerHTML  = null;
		document.getElementById(3).innerHTML  = null;
		document.getElementById(4).innerHTML  = null;
		document.getElementById(5).innerHTML  = null;
		document.getElementById(6).innerHTML  = null;
		document.getElementById(7).innerHTML  = null;
		document.getElementById(8).innerHTML  = null;
		document.getElementById(9).innerHTML  = null;
    }

    const handlePlay = (id) =>{
		var turn = Turn;
		var player = Player;
		var computer = Computer;
		// var initialGameState = state.initialGameState;
		var status = GameState.slice();
		
		// Player's selection is modified:

		if ((document.getElementById(id).innerHTML.length === 0) && (Allow === "yes") && (Result === "gameplay")) {

		document.getElementById(id).innerHTML = player;

		status[id] = player;
            setGameState(status)
            setAllow("no")
		// Computer algorithm is triggered:
		if (turn === 5) {
			tieGame();
		}

		// If player moves in the center, computer plays a corner 1 // Else, computer plays 
		else if (turn === 1) {
			if ((status[1] === player) || (status[3] === player) || (status[7] === player) || (status[9] === player)) {
				computerPlay(5, status, computer);
			}
			else if (status[5] === undefined) { computerPlay(5, status, computer); }
			else if (status[1] === undefined) { computerPlay(1, status, computer); }
			else if (status[9] === undefined) { computerPlay(9, status, computer); }
		}

		else { computerWin(status, player, computer); }

		setTurn(Turn + 1)

		}
    }
    
   const computerWin = (status, player, computer) =>{
		if ((status[1] === computer) && (status[4] === computer) && (status[7] === undefined)) { computerPlay(7, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[3] === undefined)) { computerPlay(3, status, computer, false); } 
		else if ((status[1] === computer) && (status[5] === computer) && (status[9] === undefined)) { computerPlay(9, status, computer, false); }
		else if ((status[9] === computer) && (status[5] === computer) && (status[1] === undefined)) { computerPlay(1, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[5] === undefined)) { computerPlay(5, status, computer, false); }
		else if ((status[4] === computer) && (status[5] === computer) && (status[6] === undefined)) { computerPlay(6, status, computer, false); }
    else if ((status[7] === computer) && (status[5] === computer) && (status[3] === undefined)) { computerPlay(3, status, computer, false); }
    else if ((status[3] === computer) && (status[5] === computer) && (status[7] === undefined)) { computerPlay(7, status, computer, false); } 
		else if ((status[6] === computer) && (status[5] === computer) && (status[4] === undefined)) { computerPlay(4, status, computer, false); } 
		else if ((status[2] === computer) && (status[5] === computer) && (status[8] === undefined)) { computerPlay(8, status, computer, false); } 
		else if ((status[5] === computer) && (status[8] === computer) && (status[2] === undefined)) { computerPlay(2, status, computer, false); } 
		else if ((status[3] === computer) && (status[6] === computer) && (status[9] === undefined)) { computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[3] === undefined)) { computerPlay(3, status, computer, false); } 
		else if ((status[1] === computer) && (status[3] === computer) && (status[2] === undefined)) { computerPlay(2, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[4] === undefined)) { computerPlay(4, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[5] === undefined)) { computerPlay(5, status, computer, false); }
		else if ((status[5] === computer) && (status[6] === computer) && (status[4] === undefined)) { computerPlay(4, status, computer, false); }
		else if ((status[1] === computer) && (status[4] === computer) && (status[6] === computer) && (status[5] === undefined)) { computerPlay(5, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[9] === computer) && (status[8] === undefined)) { computerPlay(8, status, computer, false); }
		else if ((status[1] === computer) && (status[7] === computer) && (status[8] === computer) && (status[9] === undefined)) { computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[8] === computer) && (status[7] === undefined)) { computerPlay(7, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[5] === computer) && (status[8] === undefined)) { computerPlay(8, status, computer, false); }
		else if ((status[1] === computer) && (status[5] === computer) && (status[8] === computer) && (status[2] === undefined)) { computerPlay(2, status, computer, false); }
		else if ((status[1] === computer) && (status[2] === computer) && (status[8] === computer) && (status[5] === undefined)) { computerPlay(5, status, computer, false); }	
		else if ((status[1] === computer) && (status[3] === computer) && (status[6] === computer) && (status[9] === undefined)) { computerPlay(9, status, computer, false); }
		else if ((status[1] === computer) && (status[6] === computer) && (status[9] === computer) && (status[3] === undefined)) { computerPlay(3, status, computer, false); }
		else if ((status[1] === computer) && (status[9] === computer) && (status[3] === computer) && (status[6] === undefined)) { computerPlay(6, status, computer, false); }	
		else if ((status[3] === computer) && (status[5] === computer) && (status[6] === undefined)) { computerPlay(6, status, computer, false); }	
		else { stopOpponent(status, player, computer); }
	}
	const stopOpponent =(status, player, computer) => {
		if ((status[1] === player) && (status[3] === player) && (status[5] === computer) && (status[2] === undefined)) { computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[5] === computer) && (status[4] === undefined)) { computerPlay(4, status, computer); }
		else if ((status[7] === player) && (status[9] === player) && (status[5] === computer) && (status[8] === undefined)) { computerPlay(8, status, computer); }		
		else if ((status[3] === player) && (status[9] === player) && (status[6] === computer) && (status[6] === undefined)) { computerPlay(6, status, computer); }
		else if ((status[1] === player) && (status[9] === player) && (status[5] === computer) && (status[2] === undefined)) { computerPlay(2, status, computer); }
 		else if ((status[8] === player) && (status[6] === player) && (status[5] === computer) && (status[7] === undefined)) { computerPlay(7, status, computer); }
		else if ((status[7] === player) && (status[3] === player) && (status[5] === computer) && (status[6] === undefined)) { computerPlay(6, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[3] === undefined) && (status[4] === computer)) { computerPlay(3, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[7] === undefined) && (status[2] === computer)) { computerPlay(7, status, computer); }
 		else if ((status[1] === computer) && (status[5] === player) && (status[9] === player) && (status[3] === undefined)) { computerPlay(3, status, computer); }
		else if ((status[2] === player) && (status[5] === player) && (status[8] === undefined)) { computerPlay(8, status, computer); }
		else if ((status[2] === player) && (status[8] === player) && (status[5] === undefined)) { computerPlay(5, status, computer); }
		else if ((status[3] === player) && (status[9] === player) && (status[6] === undefined)) { computerPlay(6, status, computer); }
		else if ((status[3] === player) && (status[6] === player) && (status[9] === undefined)) { computerPlay(9, status, computer); }
		else if ((status[3] === player) && (status[5] === player) && (status[7] === undefined)) { computerPlay(7, status, computer); }
		else if ((status[6] === player) && (status[9] === player) && (status[3] === undefined)) { computerPlay(3, status, computer); }
		else if ((status[5] === player) && (status[7] === player) && (status[3] === undefined)) { computerPlay(3, status, computer); }
		else if ((status[4] === player) && (status[5] === player) && (status[6] === undefined)) { computerPlay(6, status, computer); }
		else if ((status[4] === player) && (status[6] === player) && (status[5] === undefined)) { computerPlay(5, status, computer); }							
		else if ((status[5] === player) && (status[6] === player) && (status[4] === undefined)) { computerPlay(4, status, computer); }
		else if ((status[7] === player) && (status[8] === player) && (status[9] === undefined)) { computerPlay(9, status, computer); }
		else if ((status[8] === player) && (status[9] === player) && (status[7] === undefined)) { computerPlay(7, status, computer); }
		else if ((status[7] === player) && (status[9] === player) && (status[8] === undefined)) { computerPlay(8, status, computer); }
		else if ((status[3] === player) && (status[7] === player) && (status[5] === undefined)) { computerPlay(5, status, computer); }
		else if ((status[1] === player) && (status[2] === player) && (status[3] === undefined)) { computerPlay(3, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[2] === undefined)) { computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[3] === player) && (status[2] === undefined)) { computerPlay(2, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[4] === undefined)) { computerPlay(4, status, computer); }
		else if ((status[1] === player) && (status[4] === player) && (status[7] === undefined)) { computerPlay(7, status, computer); }
		else if ((status[1] === player) && (status[5] === player) && (status[9] === undefined)) { computerPlay(9, status, computer); }
		else if ((status[1] === player) && (status[9] === player) && (status[5] === undefined)) { computerPlay(5, status, computer); }
		else if ((status[1] === player) && (status[7] === player) && (status[4] === undefined)) { computerPlay(4, status, computer); }				

		else { randomPlay(status, computer); }
	}
	const randomPlay= (status, computer) => {
		console.log('random play');
		for (var i = 1; i < status.length; i++) {
			if (status[i] === undefined) {
				computerPlay(i, status, computer);
				break;
			}
		}
	}
    const computerPlay = (index, status, computer, winning) => {
        setTimeout(() => {
           document.getElementById(index).innerHTML = computer;
				status[index] = Computer;
                setAllow("yes")
           
				 if (winning === true) {
					winGame();
				}
				if (winning === false) {
					setAllow("no")
					loseGame();
				} 
        },250);
		
	}
	const winGame=()=> {
		setTimeout(() => setResult("Good Job, You Won"), 250);
	}
	const tieGame=()=> {
		setTimeout(() => setResult("Good Job, You Tied"), 250);
	}
    const loseGame = () => {
        setTimeout(() => setResult("You Lost"), 250);
    }
    
    const replay=()=> {
		reset();
		document.getElementById("selectMenu").style.display = "block";
	}

    return (
        <div>
				<div className = "selectPlayer" id = "selectMenu">
					<p>Choose your side:</p>
					<div className = "sides">
						<div onClick = {(e) =>handleSelect("X",e)} className = "chooseSide">X</div>
						<div onClick = {(e) =>handleSelect("O",e)} className = "chooseSide">O</div>
					</div>
				</div>
				<ResultsContainer
				    result = {Result}
                    replay={replay}
            />
				<div className = "container">
					<div className = "gameBox" id = "1" onClick = {(e) =>handlePlay(1 ,e)}></div>
					<div className = "gameBox" id = "2" onClick = {(e) =>handlePlay(2 ,e)}></div>
					<div className = "gameBox" id = "3" onClick = {(e) =>handlePlay(3 ,e)}></div>
					<div className = "gameBox" id = "4" onClick = {(e) =>handlePlay(4 ,e)}></div>
					<div className = "gameBox" id = "5" onClick = {(e) =>handlePlay(5 ,e)}></div>
					<div className = "gameBox" id = "6" onClick = {(e) =>handlePlay(6 ,e)}></div>
					<div className = "gameBox" id = "7" onClick = {(e) =>handlePlay(7 ,e)}></div>
					<div className = "gameBox" id = "8" onClick = {(e) =>handlePlay(8 ,e)}></div>
					<div className = "gameBox" id = "9" onClick = {(e) =>handlePlay(9 ,e)}></div>
				</div>
			</div>
    )
}

export default Playgame

