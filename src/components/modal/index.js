import React from 'react'
import './index.css'

function Modal (props) {
    return (
        <div
            className="f-modal-body"
            style={{ display: props.visible ? 'flex' : 'none' }}
            onClick={() => {
                props.cancelOpera()
            }}
        >
            <div
                className="f-modal-body-container"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="f-modal-body-container-header">
                    <span style={{ color: '#4A4A4A', fontSize: 15 }}>{props.title ? props.title : '标题'}</span>
                </div>
                <div className="f-modal-body-container-body">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;