import React, { useState } from 'react';
import './App.css';
import { Button, Message, Modal, Input } from './components'

function App() {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<div>
			<div className='div_container'>
				<p>
					按钮组件
				</p>
				<Button>
					按钮
				</Button>
				<div className="space_div"></div>
				<Button type="warning">
					按钮
				</Button>
			</div>
			<div className='div_container'>
				<p>
					Message组件
				</p>
				<Button
					onClick={() => {
						Message.success('这是一条正确的提示')
					}}
				>
					正确提示
				</Button>
				<div className="space_div"></div>
				<Button
					onClick={() => {
						Message.error('这是一条错误的提示')
					}}
					type='warning'
				>
					错误提示
				</Button>
				<div className="space_div"></div>
				<Button
					onClick={() => {
						Message.warning('这是一条警告的提示')
					}}
				>
					警告提示
				</Button>
				<div className="space_div"></div>
				<Button
					onClick={() => {
						Message.warning('这是一条警告的提示', 5000)
					}}
					type='warning'
				>
					五秒后关闭的提示
				</Button>
			</div>
			<div className='div_container'>
				<p>
					Modal组件
				</p>
				<Button
					onClick={() => {
						setModalVisible(true)
					}}
				>
					打开Modal
				</Button>
				<Modal
					visible={modalVisible}
					cancelOpera={() => {
						setModalVisible(false)
					}}
				>
					需要自己写foot
				</Modal>
			</div>
			<div className='div_container'>
				<p>
					Input组件
				</p>
				<Input
					onChange={(e) => {
						console.log(e.target.value)
					}}
				/>
			</div>
		</div>
	);
}

export default App;
