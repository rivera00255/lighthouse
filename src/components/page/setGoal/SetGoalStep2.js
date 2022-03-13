import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
width: 1200px;
margin: 0 auto;
`;

const Setting = styled.div`
width: 90%;
min-height: 80vh;
margin: 10vh auto;
background: #fafafa;
border-radius: 40px;
box-shadow: 4px 8px 24px #d7d7d7;
`;

const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
`;

const MainTitle = styled.h2`
text-align: center;
box-sizing: border-box;
padding: 4rem 0 2rem 0;
`;

const SubTitle = styled.h3`
margin: 2rem 0;
`;

const Input = styled.input`
padding: 0.2rem 0.5rem;
width: 3rem;
border-radius: 20px;
`;

const ErrorMessage = styled.div`
font-size: 0.8rem;
margin: 0.5rem 0 0 1rem;
color: #888;
`;

const Desc = styled.div`
width: 100%;
margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 1rem 0;
`;

const Button = styled.button`
padding: 0.5rem 3rem;
border: none;
box-shadow: 3px 4px 8px #b7b7b7;
background: #416dea;
color: #fff;
font-weight: bold;
border-radius: 30px;
margin: 1rem 0;
&:hover {
    box-shadow: none;
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
}
&:active {
    box-shadow: none;
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
    box-shadow: 3px 4px 10px #bbb;
}
`;


function SetGoalStep2() {

    const navigate = useNavigate();

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const watchCountType = watch('countType');
    const watchCountNum = watch('totalCount');

    const onSubmit = data => {
        // console.log(data);
        navigate('/set/3');
    };


    return ( 
        <Container>
            <Setting>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <MainTitle>목표 설정</MainTitle>
                        <SubTitle>
                            2 / 5 단계
                            <br />
                            목표 기간을 선택하세요.
                        </SubTitle>
                        <label>
                            <input type='radio' value='basic' {...register('countType', { required: true })} /> 60일
                            <input type='hidden' value='60' {...register('totalCount')} />
                        </label>
                        <label>
                            <input type='radio' value='custom' {...register('countType', { required: true })} /> 사용자 지정
                            {watchCountType === 'custom' && 
                                <Input type='number' {...register('totalCount', {
                                    required: true,
                                    min : 7,
                                    max : 365
                                })}></Input> 
                            }
                        </label>
                        <ErrorMessage>
                            {errors.countType?.type === 'required' && '기간을 선택해 주세요.'}
                            {(watchCountType === 'custom' && watchCountNum < 7) && '목표 기간을 최소 7일 이상으로 지정해 주세요.'}
                            {(watchCountType === 'custom' && watchCountNum > 365) && '목표 기간을 최대 365일 이하로 지정해 주세요.'}
                        </ErrorMessage>
                        <Desc>
                            의사 존 맥스웰은 우리의 뇌가 새로운 행동에 익숙해지는데 걸리는 
                            최소한의 시간에 관해 이야기합니다.<br/> 새로운 습관에 적응해 자동으로 
                            실천하기까지는 약 60여일의 시간이 필요합니다.<br/> 기본 60일 또는 원하는 
                            실천 기간을 선택해주세요.
                        </Desc>
                        <ButtonWrapper>
                            <Button>다 음</Button>
                        </ButtonWrapper>
                    </Wrapper>
                </form>
            </Setting>
        </Container>
     );
}

export default SetGoalStep2;