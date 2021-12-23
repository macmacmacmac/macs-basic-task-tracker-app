import React from 'react'

const Button = ({text = "default button text", onClick, color}) => {
    return (
        <button 
            className = 'btn'
            onClick = {onClick}
            style = {{backgroundColor: color}}
        >
            {text}
        </button>
    )
}

export default Button
