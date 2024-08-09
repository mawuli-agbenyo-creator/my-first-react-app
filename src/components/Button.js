import React from 'react';


const Button = ({color, text, onClick, showAddTask}) => {
   
  return (
    <button onClick={onClick}  style={{backgroundColor: color}} className='btn'>{!showAddTask ? text : "Close"}</button>
  )
}


Button.defaultProps = {
    color: 'steelblue',
    text: 'Click me'
}
export default Button
