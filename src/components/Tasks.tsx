import React from 'react'
import Task from './Task'
interface task{
    id: number,
    text: string,
    day: string,
    reminder: boolean
}
interface Props{
    tasks: Array<task>,
    deleteTask: Function,
    toggleReminder:Function
}
const Tasks:React.FC<Props> = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <div>   
            {tasks.map((task)=><Task key = {task.id} task = {task} deleteTask = {deleteTask} toggleReminder = {toggleReminder}/>)}
        </div>
    )
}

export default Tasks
