import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/header/header';
import Dashboard from './Pages/hero/hero';
import Courses from './Pages/Courses/Courses';
import Learning from './Pages/Learning/Learning';
import Events from './Pages/Events/Events';
import Account from './Pages/Account/Account';
import Help from './Pages/Help/Help';

function App() {
  const [value, setValue] = useState(0);
  const max = 60;

  const handleClick = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  return (
    <div className="App">
      <Header value={value} max={max} />
      <Routes>
        <Route path='/dashboard' element={<Dashboard   value={value} max={max} />}/>
        <Route path='/courses' element={<Courses />} />
        <Route path='/event' element={<Events />} />
        <Route path='/learning' element={<Learning />} />
        <Route path='/account' element={<Account />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
