import React from 'react'

function Button (props) {
    const fButton = {
        width: '70px',
        height: '30px',
        backgroundColor: 'skyblue',
        outLine: 'none',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        letterSpacing: '2px',
        cursor: 'pointer'
    }
    return (
        <div>
            <button
                style={fButton}
                onClick={() => {
                    props.onClick()
                }}
                className={
                    "f-button " + props.className
                }
            >
                {
                    props.children === '' ? '按钮' : props.children
                }
            </button>
        </div>
    )
}

export default Button;