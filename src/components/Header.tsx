import React from 'react'
import Button from './Button'
import {useState} from 'react'
interface Props{
    title: string,
    onAdd: Function
}
const Header:React.FC<Props> = ({title = "default title", onAdd}) => {
    const [isAdd, setIsAdd] = useState(true)
    const enableAddTask = () => {
        onAdd();
        setIsAdd(!isAdd)
    }
    return (
        <header className = 'header'>
            <h1> {title} </h1>
            <Button 
                text = {isAdd?'add':'close'} 
                color = {isAdd?'green':'red'}
                onClick = {enableAddTask} 
            />
        </header>
    )
}

export default Header   
