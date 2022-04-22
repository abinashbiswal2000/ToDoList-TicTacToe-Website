import './App.css';
import Navbar from './Components/Navbar';
import Textutils from './Components/Textutils';
import {useState} from 'react';

function App() {
  const [theme, setTheme] = useState("light")
  let style;
  if(theme === 'dark'){style = {backgroundColor: "#064276"}}
  else{style = {backgroundColor: "white"}}
  return (
    <div className="App" style={style}>
      <Navbar theme={theme} themeChangeFunction = {setTheme} />
      <br />
      <Textutils theme={theme}/>
      {/* <div className="container p-3" style={{border:"2px solid black"}}></div> */}
    </div>
  );
}

export default App;
