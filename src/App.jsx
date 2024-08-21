import {useState} from 'react'

import './App.css'


function App() {

  const [color, setColor] = useState('')
  
  return (
 
    
    <div className="container d-flex justify-content-center align-items-center " style={{ backgroundColor: color,height:'100vh',width:'1000vh'}}>
    
 <button className='btn btn-secondary ' onClick={() => {setColor('grey')}}>Grey</button>
      <button className='btn btn-primary ms-3' onClick={() => {setColor('blue')}}>Blue </button>
      <button className='btn btn-danger ms-3' onClick={() => {setColor('red')}}>Red</button>
      <button className='btn btn-success ms-3' onClick={() => {setColor('green')}}>Green</button>
      <button className='btn btn-dark ms-3' onClick={() => {setColor('black')}}>Black</button>
    </div>

  )
}

export default App
