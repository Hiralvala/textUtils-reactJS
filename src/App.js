import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import  Alert  from './Alert';
import { useState } from 'react';
import About from './About'

function App() {

  const [mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>
  {
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#525252'
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <div className="App">
      <Navbar title="Textutils" aboutText="about" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      </div>

      {/* <About/> */}
    </div>
  );
}

export default App;
