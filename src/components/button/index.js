import React from 'react'
import './index.css'

function Button (props) {
    return (
        <button
            onClick={() => {
                if (!props.onClick) {
                    return
                }
                props.onClick()
            }}
            className={
                `f-button ${props.type === 'warning' ? 'f-button-warning ' : ''}` + props.className
            }
        >
            {
                props.children === '' ? '按钮' : props.children
            }
        </button>
    )
}

export default Button;