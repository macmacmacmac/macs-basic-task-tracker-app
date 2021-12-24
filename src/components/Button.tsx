import React from 'react'

interface Props{
    text: string,
    onClick: any,
    color: string
}
const Button:React.FC<Props> = ({text,onClick,color}) => {
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
