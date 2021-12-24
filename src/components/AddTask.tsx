import React from 'react'
import {useState} from 'react'
import Task from './Task'
interface Props {
    addTask: Function
}
const AddTask:React.FC<Props>= ({addTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        if(!text){
            alert('Please add a task')
            return
        }
        
        addTask({text, day, reminder});

        console.log("success!")
        setText('')
        setDay('');
        setReminder(false);;
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className ='form-control'>
                <label>Task</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Task'
                    value = {text}
                    onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className ='form-control'>
                <label>Day and Time</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Day Time'
                    value = {day}
                    onChange = {(e)=>setDay(e.target.value)}/>
            </div>
            <div className ='form-control form-control-check'>
                <label>Reminder ? </label>
                <input 
                    type = 'checkbox'
                    checked = {reminder}
                    onChange = {(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <div>
                <input className = 'btn btn-block' type = 'submit' value = 'Save Task'/>
            </div>
        </form>
    )
}

export default AddTask