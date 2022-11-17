
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
   } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  //const [color,setColor] = useState();
  const showAlert=(message,type)=>{
  setAlert({
   msg:message,
   type:type

  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode =()=>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#050621';
    showAlert("Dark mode has been enabled","success");
   // document.title='TextConvert - Dark mode';
   }
   else{
    setMode('light');
document.body.style.backgroundColor='white';
showAlert("Light mode has been enabled","success");
//document.title='TextConvert - Light mode';
   }
   }
   /*const toggleColor = (value) => {
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
  }}*/
  
   return (
    <>
   <Router>
  <Navbar title="TextConvert" cccc="About us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/*<TextForm showAlert={showAlert} heading="Enter your text below"  mode={mode}/>*/}
 <Switch>
    
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextConvert - Word counter , Character counter , Remove extra spaces"  mode={mode}/>
         
          </Route>
        </Switch>
        
        </div>
</Router>
       
 
  </>
  );
}

export default App;
