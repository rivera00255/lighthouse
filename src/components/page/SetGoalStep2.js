import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function SetGoalStep2() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // navigate();
    };

    return ( 
        <div className='container'>
            <div className='set-goals'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='set-goals-title'>
                        <h2 className='main-title'>목표 설정</h2>
                        <h3 className='sub-title'>
                            2 / 5 단계
                            <br />
                            목표 기간을 선택하세요.
                        </h3>
                    </div>
                    <div className='set-goals-content'>
                        <label>
                            <input type='radio' value='basic' {...register('totalcount', {required : true})} /> 60일
                        </label>
                        <label>
                            <input type='radio' value='custom' {...register('totalcount', {required : true})} /> 사용자 지정
                        </label>
                        <div className='errorMessage'>
                            {errors.totalcount?.type === 'required' && '기간을 선택해 주세요.'}
                        </div>
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
        </div>
     );
}

export default SetGoalStep2;