import Header from './components/Header.js';
import Button from './components/Button.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js'
import {useState} from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id:         1,
        text:       "Finish this task tracker project",
        day:        "Today at 9:00pm",
        reminder:   true
    },
    {
        id:         2,
        text:       "Code Review",
        day:        "Tomorrow at 10:00pm",
        reminder:   true
    },
    {
        id:         3,
        text:       "Dentist Appointment",
        day:        "Tomorrow at 12:00am",
        reminder:   false
    }
  ]);
  const toggleAddTask = () =>{
    setShowAddTask(!showAddTask)
  }
  const addTask = (task) => {
    const taskID = tasks[tasks.length-1].id+1
    const newTask = {taskID,...task}
    setTasks([...tasks,newTask]);
    console.log(tasks);
  }
  const deleteTask = (taskID) =>{
    setTasks(tasks.filter((task)=>task.id !== taskID))
  }
  const toggleReminder = (taskID) => {
    setTasks(
      tasks.map((task)=> task.id === taskID ? {
        ...task, reminder : !task.reminder 
      }
        : task
      ))

      // tasks.map((task)=>
      //   task.id===taskID?
      //     {
      //       id  : task.id,
      //       text: task.text,
      //       day : task.day,
      //       reminder: !task.reminder
      //     }
      //   : task
      // ))
  }
  return(
    <div className = 'container'>
      <Header title = "Mac's Task Tracker" onAdd = {toggleAddTask}/>
      {showAddTask&&<AddTask addTask = {addTask}/>}
      <p>Double click on task to set reminder!</p>
      { tasks.length>0?
          <Tasks tasks = {tasks} deleteTask = {deleteTask} toggleReminder = {toggleReminder}/>
          : <p>no tasks to show</p>
      }
    </div>
  );
}


export default App