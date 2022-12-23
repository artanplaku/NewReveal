import React from 'react'
import './Button.scss'

//we want 3 types of buttons: default, reverse, and google style
const buttonTypeClasses = {
    reverse: "reverse", 
    google: "google"

}


const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonTypeClasses[buttonType]}`} {...otherProps} >{children}</button>
  )
}

export default Button