
import React from 'react';

import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle, showAddTask }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
      <h3>
        {task.text} {!showAddTask ? <FaTimes style={FaTimesStyle} onClick={() => onDelete(task.id)}  /> : ""}
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

const FaTimesStyle = {
    color: 'red',
    // backgroundColor: 'black',
    cursor: 'pointer'

}
export default Task
