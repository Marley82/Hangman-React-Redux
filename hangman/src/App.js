import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Help from './components/help';
import Nav from './components/navBar';
import { Routes, Route} from "react-router-dom"; 
import './App.css';

//main app holding components (what else to comment!?)

function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Routes>
     <Route exact path="/" element={<Main />}/>
     <Route path="/help" element={<Help />}/>
    </Routes>
    </div>
  );
}

export default App;