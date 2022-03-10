import React, { useState } from 'react';
import SetGoalStep2 from './SetGoalStep2';
import SetGoalStep1 from './SetGoalStep1';
import SetGoalStep3 from './SetGoalStep3';
import SetGoalStep4 from './SetGoalStep4';

function SetGoals() {

    const [formValue, setFormValue] = useState({});

    const handleFormvalue = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name] : value
        });
    }

    const submitGoals = (e) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <div className='container'>
            <SetGoalStep1 handleFormvalue={handleFormvalue} submitGoals={submitGoals} />
            <SetGoalStep2 handleFormvalue={handleFormvalue} submitGoals={submitGoals} />
            <SetGoalStep3 handleFormvalue={handleFormvalue} submitGoals={submitGoals} />
            <SetGoalStep4 handleFormvalue={handleFormvalue} submitGoals={submitGoals} />
        </div>
    );
}

export default SetGoals;