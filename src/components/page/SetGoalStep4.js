import React from 'react';
import { useForm } from 'react-hook-form';

function SetGoalStep4({handleFormvalue, submitGoals}) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return ( 
        <div className='set-goals'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='set-goals-title'>
                    <h2 className='main-title'>목표 설정</h2>
                    <h3 className='sub-title'>
                        4 / 5 단계
                        <br />
                        일주일 중 실행할 목표 실천 횟수를 지정해주세요.
                    </h3>
                </div>
                <div className='set-goals-content'>
                    <select {...register('weekCount', {required : true})}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>
                    <div className='desc'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='button-wrapper'>
                        <button>다 음</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default SetGoalStep4;