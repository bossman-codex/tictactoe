import React from 'react'

function SelectPlayer({handleSelect}) {
    return (
				<div className = "selectPlayer" id = "selectMenu">
					<p>Choose your side:</p>
					<div className = "sides">
						<div onClick = {handleSelect("X")} className = "chooseSide">X</div>
						<div onClick = {handleSelect("O")} className = "chooseSide">O</div>
					</div>
				</div>
			)
}

export default SelectPlayer
