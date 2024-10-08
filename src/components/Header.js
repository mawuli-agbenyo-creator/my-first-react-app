
import React from 'react';

import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAddTask }) => {
  // console.log(onAdd);
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
      color={!showAddTask ? 'green' : 'red'} 
      text="Add" onClick={onAdd}  showAddTask={showAddTask}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black',

// }

export default Header
