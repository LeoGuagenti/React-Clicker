import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div class="buttonContainer">
            <button onClick={props.onClick}>{props.content}</button>
        </div>
    );
}

export default Button