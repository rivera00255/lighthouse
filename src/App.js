import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetGoalStep1 from './components/page/SetGoalStep1';
import SetGoalStep2 from './components/page/SetGoalStep2';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SetGoalStep1 />} />
          <Route path='/set/2' element={<SetGoalStep2 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
