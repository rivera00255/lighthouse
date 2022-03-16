import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/page/goal/Detail';
import BadgeList from './components/page/badge/BadgeList';
import SetGoalStep1 from './components/page/setGoal/SetGoalStep1';
import SetGoalStep2 from './components/page/setGoal/SetGoalStep2';
import SetGoalStep3 from './components/page/setGoal/SetGoalStep3';
import SetGoalStep4 from './components/page/setGoal/SetGoalStep4';
import SetGoalStep5 from './components/page/setGoal/SetGoalStep5';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/set/1' element={<SetGoalStep1 />} />
          <Route path='/set/2' element={<SetGoalStep2 />} />
          <Route path='/set/3' element={<SetGoalStep3 />} />
          <Route path='/set/4' element={<SetGoalStep4 />} />
          <Route path='/set/5' element={<SetGoalStep5 />} />
          <Route path='/goal' element={<Detail />} />
          <Route path='/badge' element={<BadgeList /> } />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
