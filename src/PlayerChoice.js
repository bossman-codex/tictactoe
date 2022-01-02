import React from 'react'
import {Link} from "react-router-dom"

function PlayerChoice() {
    return (
        <div>
            <p>Play With:</p>
            <Link to="play">
                <button>Computer</button>
            </Link>
            <button>Self</button>
        </div>
    )
}

export default PlayerChoice
