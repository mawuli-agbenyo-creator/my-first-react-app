import React from 'react';


const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log(e);
        
    }
  return (
    <button onClick={onClick}  style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}


Button.defaultProps = {
    color: 'steelblue',
    text: 'Click me'
}
export default Button
