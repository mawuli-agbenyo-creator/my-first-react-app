import React from 'react';

import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle, showAddTask}) => {
    
  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} showAddTask={showAddTask} onToggle={onToggle}/>))}
    </>
  )
}

export default Tasks
