import React from 'react'
import'./button.css'


const Button = (props) => {
    const name=props?.name;
    const buttonFunc=props?.buttonFunc;
    console.log(props)
  return (
    <div onClick={ ()=> buttonFunc()} className='button'>
        {name}
      
    </div>
  )
}

export default Button
