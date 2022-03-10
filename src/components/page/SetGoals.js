import React, { useState } from 'react';
import SetGoalStep2 from './SetGoalStep2';
import SetGoalStep1 from './SetGoalStep1';
import SetGoalStep3 from './SetGoalStep3';
import SetGoalStep4 from './SetGoalStep4';
import SetGoalStep5 from './SetGoalStep5';

function SetGoals() {

    const [goals, setGoals] = useState({
        goalTitle : '',
        totalcount : '',
        startDay : '',
        endDay : '',
        weekCount : ''
    });

    return (
        <div className='container'>
            <SetGoalStep1 />
            <SetGoalStep2 />
            <SetGoalStep3 />
            <SetGoalStep4 />
            <SetGoalStep5 />
        </div>
    );
}

export default SetGoals;