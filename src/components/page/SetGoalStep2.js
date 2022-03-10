import React from 'react';

function SetGoalStep2({handleFormvalue, submitGoals}) {
    return ( 
        <div className='set-goals'>
            <form onSubmit={submitGoals}>
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
                        <input type='radio' name='totalCount' value='basic' onChange={handleFormvalue} /> 60일
                    </label>
                    <label>
                        <input type='radio' name='totalCount' value='custom' onChange={handleFormvalue} /> 사용자 지정
                    </label>
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
                    <button>다 음</button>
                </div>
            </form>
        </div>
     );
}

export default SetGoalStep2;