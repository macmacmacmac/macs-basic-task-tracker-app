import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import SearchBar from './components/SearchBar'
import {useState} from 'react'
import React from 'react';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [keyword, setKeyword] = useState('');
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
    },
    {
      id:         4,
      text:       "Do laundry",
      day:        "Overmorrow at 9:00am",
      reminder:   false
    },
    {
      id:         5,
      text:       "Cut down on caffeine",
      day:        "Overmorrow at 8:00am",
      reminder:   true
    },
    {
      id:         6,
      text:       "Firebase workshop",
      day:        "Overmorrow at 12:00am",
      reminder:   false
    },
  ]);
  const [displayTasks, setDisplayTasks] = useState(tasks);
  const toggleAddTask = () =>{
    setShowAddTask(!showAddTask)
  }
  const addTask: Function = (task:{id: number, text: string, day: string, reminder: boolean}) => {
    const taskID = tasks[tasks.length-1].id+1
    const newTask = {taskID,...task}
    setTasks([...tasks,newTask]);
    console.log(tasks);
  }
  const deleteTask = (taskID: number) =>{
    setTasks(tasks.filter((task)=>task.id !== taskID))
  }
  const toggleReminder = (taskID: number) => {
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
      <Header title = "Mac's To-do list!" onAdd = {toggleAddTask}/>
      {showAddTask&&<AddTask addTask = {addTask}/>}
      <SearchBar keyword = {keyword} setKeyword = {setKeyword}/>
      <p>Double click on task to enable reminder!</p>
      { tasks.length>0?
          <Tasks 
            tasks = {tasks.filter(task => task.text.includes(keyword))} 
            deleteTask = {deleteTask} 
            toggleReminder = {toggleReminder}
          />
          : <p>no tasks to show</p>
      }
    </div>
  );
}


export default App