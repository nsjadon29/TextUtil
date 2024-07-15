import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
import Alert from './components/Alert'
// import About from './components/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  let [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }

  let toggleMode1=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode1} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextBox showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />  
      </div>
    </>
  )
}

export default App
