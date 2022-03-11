import React from 'react';

function Goal() {

    const deleteHandler = () => {
        console.log('delete')
    }

    return ( 
        <div className='goal-page'>
            <div className='container'>
                <div className='goal-wrapper'>
                    <div className='goal-title goal'>목표명</div>
                    <div className='goal-desc goal'>설명</div>
                    <div className='goal-date goal'>기간</div>
                    <form>
                        <label>오늘의 목표 체크</label>
                        <input type='checkbox' />
                        <button>인증글 쓰기</button>
                    </form>
                    <div className='goal-progress'></div>
                    <div className='goal-charts'></div>
                    <div className='button-wrapper'>
                        <button type='button' onClick={deleteHandler}>포기</button>
                    </div>
                </div>    
                <div className='post-wrapper'>
                    <div className='post'>
                        <a href='#'>
                            <h4>post title</h4>
                            <p>post date</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Goal;