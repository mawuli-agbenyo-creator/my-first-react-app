import React from 'react';

import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';




function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    name: "Task 1",
    text: "Task 1 text",
    day : 'Feb 5th at 2:30pm',
    reminder: true
    
    
  }, 
  {
    id: 2,
    name: "Task 2",
    text: "Task 2 text",
    day : 'Feb 6th at 3:30pm',
    reminder: true
  },
  {
    id: 3,
    name: "Task 3",
    text: "Task 3 text",
    day : 'Feb 7th at 4:30pm',
    reminder: false
  
  },
  {
    id: 4,
    name: "Task 4",
    text: "Task 4 text",
    day : 'Feb 8th at 5:30pm',
    reminder: true
  }])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

//Toggle Reminder
const toggleReminder = (id) => {
  console.log('hello');
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  
  
}
  return (
    <div className="container">
     <Header title="Task Tracker" />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Task To Show"}
    </div>
  );
}

export default App;
