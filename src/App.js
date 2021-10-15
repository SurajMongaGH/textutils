import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert"
//import About from './Components/About'
import { useState } from "react";
//mport {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  const [alert, setAlert] = useState(null)
  const [Mode, setMode] = useState('light')

  const showAlert=(message,type)=>{
    setAlert({msg:message,Type:type})
    setTimeout(()=>{setAlert(null)

    },1000)
  }

  const toogleMode=()=>{
    if (Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#374c6d';
      showAlert('Dark mode enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled','success')
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        {/* <Switch>
        
        <Route exact path="/"> */}
        <TextForm title="Enter the text to analyze" showAlert={showAlert} mode={Mode} />
        {/* </Route>
        <Route exact path="/about">
            <About/>
      </Route>
        
      </Switch> */}
      </div>
    {/* </Router> */}
   
    </>
  );
}

export default App;
