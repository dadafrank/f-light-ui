import React from 'react'
import './index.css'

function Button (props) {
    return (
        <button
            onClick={() => {
                props.onClick()
            }}
            className={
                "f-button " + props.className
            }
        >
            {
                props.children
            }
        </button>
    )
}

export default Button;