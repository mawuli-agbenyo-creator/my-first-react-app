import React from 'react';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';





function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data);
    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data);
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

//Toggle Reminder
const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()


  console.log('hello');
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task))
  
  
}

//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
  // console.log(task);
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}
  return (
    <Router>
    <div className="container">
     <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} showAddTask={showAddTask} /> : "No Task To Show"}
     {/* <Route path='/about' Component={About}/> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
