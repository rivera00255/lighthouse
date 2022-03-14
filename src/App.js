import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/page/goal/Detail';
import SetGoal from './components/page/setGoal/SetGoal';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SetGoal step='1' />} />
          <Route path='/set/2' element={<SetGoal step='2' />} />
          <Route path='/set/3' element={<SetGoal step='3' />} />
          <Route path='/set/4' element={<SetGoal step='4' />} />
          <Route path='/set/5' element={<SetGoal step='5' />} />
          <Route path='/goal' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
