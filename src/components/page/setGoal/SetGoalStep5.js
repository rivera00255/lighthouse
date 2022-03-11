import React from 'react';
import { useForm } from 'react-hook-form';

function SetGoalStep5() {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };

    return ( 
        <div className='container'>
            <div className='set-goals'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='set-goals-title'>
                        <h2 className='main-title'>목표 설정</h2>
                        <h3 className='sub-title'>5 / 5 단계</h3>
                    </div>
                    <div className='set-goals-content'>
                        <div className='content'>
                            <h4>나의 목표</h4>
                            <div className='goal-content'></div>
                        </div>
                        <div className='content'>
                            <h4>나의 목표 기간</h4>
                            <div className='goal-content'></div>
                        </div>
                        <div className='content'>
                            <h4>나의 목표 실행 횟수</h4>
                            <div className='goal-content'></div>
                        </div>
                        <div className='content'>
                            <h4>나의 목표에 대한 설명</h4>
                            <textarea {...register('goalDesc')}></textarea>
                        </div>
                        <div className='button-wrapper'>
                            <button>등 록</button>
                            <button type='button' className='resetBtn'>다시 등록하기</button>
                        </div>
                    </div>
                </form>   
            </div>
        </div>
     );
}

export default SetGoalStep5;