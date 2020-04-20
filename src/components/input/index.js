import React from 'react'
import './index.css'

function Input ({ onChange, type = 'text' }) {
    return (
        <input
            className="f-input"
            onChange={(e) => {
                onChange(e)
            }}
            type={type}
        />
    )
}

export default Input;