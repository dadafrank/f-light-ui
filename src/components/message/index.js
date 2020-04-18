import React from 'react'
import './index.css'

const Message = {
	success: (msg, time = 2000) => {
		createMethod(msg , time, 'f-message-success')
	},
	error: (msg, time = 2000) => {
		createMethod(msg , time, 'f-message-error')
	},
	warning: (msg, time = 2000) => {
		createMethod(msg , time, 'f-message-warning')
	}
}

const createMethod = (msg, time, name) => {
	// 创建dom
	const div = document.createElement('div')
	div.innerHTML = msg
	div.classList.add('f-message')
	div.classList.add(name)
	document.body.appendChild(div)
	// 获取dom并修改属性值
	const list = document.querySelectorAll(`.${name}`)
	const item = list[list.length - 1]
	const width = getComputedStyle(item).width.split('px')[0] / 2
	item.style.marginLeft = - width + 'px'
	item.style.top = 20 + 'px'
	// 清除som
	setTimeout(() => {
		const item = document.querySelector(`.${name}`)
		document.body.removeChild(item)
	}, time)
}

export default Message;