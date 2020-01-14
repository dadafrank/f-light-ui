import React from 'react';
import './App.css';
import { Button } from './components'

function App() {
  return (
    <div>
    	<Button onClick={() => {alert('被点击')}}>按钮</Button>
    </div>
  );
}

export default App;
