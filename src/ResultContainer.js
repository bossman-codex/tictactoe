import React from 'react'

function ResultContainer({result,replay}) {
    
		var style = {
			display: "none"
		}
		if (result !== "gameplay") {
			style = {
				display: "block"
			}
		}
		return (
				<div className = "gameEnd" id = "gameEndMenu" style = {style} >
					<h1>{result}</h1>
					<button className = "replay" onClick = {replay}>Play again?</button>
				</div>
			)
}

export default ResultContainer
