import React from 'react'
import './display.css'

const Display = (props) => {
    return (
        <div class="display">
            {props.count}
        </div>
    );
}

export default Display