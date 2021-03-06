import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { goalState } from '../../../Atom';

const Container = styled.div`
width: 1200px;
margin: 0 auto;
`;

const Setting = styled.div`
width: 90%;
min-height: 90vh;
margin: 5vh auto;
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

const InputText = styled.input`
padding: 1rem;
border: 0;
width: 800px;
border-bottom: 1px solid #000;
background: #fafafa;
::placeholder {
    color: #888;
}
&:focus {
    outline: none;
}
`;

const ErrorMessage = styled.div`
font-size: 0.8rem;
margin: 0.5rem 0 0 1rem;
color: #888;
`;

const Desc = styled.div`
width: 100%;
margin: 1rem 0;
color: ${props => props.fontColor || '#000'};
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
margin-left: ${props => props.marginLeft && '2rem'};
&:hover {
    box-shadow: none;
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
}
&:active {
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
    box-shadow: 3px 4px 10px #bbb;
}
&:disabled {
    background: linear-gradient(315deg, #cfcfcf, #707070 74%);
    box-shadow: 3px 4px 10px #bbb;
}
`;

const Label = styled.label`
margin-right: 1rem;
`;

const InputRadio = styled.input`
margin-right: 0.4rem;
`;

const InputDate = styled.input`
width: 10rem;
height: 2rem;
padding: 0 1rem;
`;

const Select = styled.select`
width: 8rem;
height: 2rem;
text-align: center;
font-size: 1rem;
`;

const GoalTitle = styled.h4`
margin: 1rem 0 0.4rem 0.8rem;
`;

const Content = styled.div`
width: 95%;
height: 4rem;
display: flex;
align-items: center;
padding-left: 2rem;
border: 1px solid #cfcfcf;
border-radius: 20px;
`;

const Strong = styled.strong`
font-weight: bold;
font-size: 1.1rem;
`;

const Textarea = styled.textarea`
margin-top: 0.5rem;
padding: 1rem;
width: 800px;
height: 80px;
border-radius: 20px;
`;


function SetGoal({step}) {

    const navigate = useNavigate();

    const [goalStep, setGoalStep] = useState(step); // ?????? ????????? ??????

    const [goal, setGoal] = useRecoilState(goalState); // set??? ?????? goalState atom??? ??????

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    // step3
    const watchStartDay = watch('startDay');
    const watchEndDay = watch('endDay');

    // startDay validation
    const today = new Date();
    const minDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`; // ?????? ????????? ?????? ?????????, ??????
    const minMaxDate = `${today.getFullYear()}-${today.getMonth() + 2}-${today.getDate()}`; // ?????? ????????? ?????? ?????????, ?????? ??????
    const watchStartDate = new Date(watchStartDay); // ???????????? ????????? ?????? ?????????

    
    // endDay validation
    const basicEndTime = watchStartDate.getTime() + (60 * 24 * 60 * 60 * 1000); // 60??? * ??? * ??? * ??? * ????????????
    const basicEndDay = new Date(basicEndTime);
    const basicEndDate = `${basicEndDay.getFullYear()}-${basicEndDay.getMonth() + 1}-${basicEndDay.getDate()}`; // ?????? 60??? ?????? endDay
    
    const endDayMin = new Date(`${watchStartDate.getFullYear()}-${watchStartDate.getMonth() + 1}-${watchStartDate.getDate() + 6}`);
    const endDayMinDate = `${endDayMin.getFullYear()}-${endDayMin.getMonth() + 1}-${endDayMin.getDate()}`; // ?????? ????????? ???????????? ?????? ?????????, ????????? 7??? ??????
    const maxDate = `${watchStartDate.getFullYear() + 1}-${watchStartDate.getMonth() + 1}-${watchStartDate.getDate()}`; // ??????????????? ?????? 1??? ?????? ?????????

    const totalTime = new Date(watchEndDay) - new Date(watchStartDay); // ?????? ????????? - ?????? ?????????
    const totalDate = (totalTime / 1000 / 60 / 60 / 24) + 1; // ?????? ??????(????????????, ???, ???, ???)
    
    const onSubmit = data => {
        // console.log(data);
        setGoal({
            ...goal,
            goalTitle : data.goalTitle,
            totalCount : (data.totalCount === '' && parseInt(step) >= 3) ? totalDate : data.totalCount,
            startDay : data.startDay,
            endDay : (data.totalCount === '60' && parseInt(step) >= 3) ? basicEndDate : data.endDay,
            weekCount : data.weekCount,
            goalDesc : data.goalDesc
        });
        
        if(step === '5') {
            setGoalStep('1');
            navigate('/');
        } else {
            setGoalStep(prev => (parseInt(prev) + 1).toString);
            navigate(`/set/${parseInt(step)+1}`);
        }
        // console.log(totalDate);
    };
    console.log(goal);

    const resetGoal = () => {
        // navigate('/');
        console.log('reset');
    };


    return(
        <Container>
            <Setting>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <MainTitle>?????? ??????</MainTitle>
                        {
                            step === '1' && <>
                                <SubTitle>
                                    1 / 5 ??????
                                    <br />
                                    ????????? ???????????????.
                                </SubTitle>
                                <InputText type='text' placeholder='????????? ???????????????' {...register('goalTitle', {
                                    required : true,
                                    pattern : /^[A-Za-z???-???0-9]{2,40}$/
                                })}></InputText>
                                <ErrorMessage>
                                    {errors.goalTitle?.type === 'required' && '????????? ????????? ??????????????????.'}
                                </ErrorMessage>
                                <Desc>
                                    ??????????????? ?????? ?????? ??? ????????? ???????????????.<br/>
                                    ???????????? ?????? ????????? ???????????? ???????????? ?????? ????????????.<br/>
                                    (40?????? ????????? ??????????????????.)
                                </Desc>
                                <ButtonWrapper>
                                    <Button>??? ???</Button>
                                </ButtonWrapper>
                            </>
                        }
                        {
                            step === '2' && <>
                                <SubTitle>
                                    2 / 5 ??????
                                    <br />
                                    ?????? ????????? ???????????????.
                                </SubTitle>
                                <Label>
                                    <InputRadio type='radio' value='60' {...register('totalCount', { required: true })} />60???
                                </Label>
                                <Label>
                                    <InputRadio type='radio' value='' {...register('totalCount', { required: true })} />????????? ??????
                                </Label>
                                <ErrorMessage>
                                    {errors.totalCount?.type === 'required' && '????????? ????????? ?????????.'}
                                </ErrorMessage>
                                <Desc>
                                    ?????? ??? ???????????? ????????? ?????? ????????? ????????? ?????????????????? ????????? 
                                    ???????????? ????????? ?????? ??????????????????.<br/> ????????? ????????? ????????? ???????????? 
                                    ????????????????????? ??? 60????????? ????????? ???????????????.<br/> ?????? 60??? ?????? ????????? 
                                    ?????? ????????? ??????????????????.
                                </Desc>
                                <ButtonWrapper>
                                    <Button>??? ???</Button>
                                </ButtonWrapper>
                            </>
                        }
                        {
                            (step === '3' && goal.totalCount === '') && <>
                                <SubTitle>
                                    3 / 5 ??????
                                    <br />
                                    ?????? ???????????? ???????????? ??????????????????.
                                </SubTitle>
                                <Label>
                                    <InputDate type='date' {...register('startDay' , {
                                        required : true,
                                        min : minDate,
                                        max : minMaxDate
                                    })} />
                                </Label>
                                <Label>
                                    <InputDate type='date' {...register('endDay' , {
                                        required : true,
                                        min : endDayMinDate,
                                        max : maxDate
                                    })} />
                                </Label>
                                <ErrorMessage>
                                    {errors.startDay?.type === 'required' && '???????????? ????????? ?????????.'}
                                    {errors.startDay?.type === 'min' && '???????????? ???????????? ?????? ???????????????.'}
                                    {errors.startDay?.type === 'max' && '???????????? ???????????? ?????? ????????? ??????????????????.'}<br/>
                                    {errors.endDay?.type === 'required' && '???????????? ????????? ?????????.'}
                                    {errors.endDay?.type === 'min' && '?????? ????????? 7??? ?????????.'}
                                    {errors.endDay?.type === 'max' && '???????????? 1??? ????????? ????????? ?????????.'}
                                    {(watchStartDay && watchEndDay && totalDate < 7) && ' ?????? ????????? ?????? ???????????????.'}
                                </ErrorMessage>
                                <Desc>
                                    ?????? ???????????? ???????????? ????????? ???????????????.<br/>
                                    ?????? ????????? 7??? ?????? ?????? 365????????? ???????????????.
                                </Desc>
                                <ButtonWrapper>
                                    <Button disabled={totalDate < 7}>??? ???</Button>
                                </ButtonWrapper>
                            </>
                        }
                        {
                            (step === '3' && goal.totalCount === '60') && <>
                                <SubTitle>
                                    3 / 5 ??????
                                    <br />
                                    ?????? ???????????? ??????????????????.
                                </SubTitle>
                                <Label>
                                    <InputDate type='date' {...register('startDay' , {
                                        required : true,
                                        min : minDate,
                                        max : minMaxDate
                                    })} />
                                </Label>
                                <ErrorMessage>
                                    {errors.startDay?.type === 'required' && '???????????? ????????? ?????????.'}
                                    {errors.startDay?.type === 'min' && '???????????? ???????????? ?????? ???????????????.'}
                                    {errors.startDay?.type === 'max' && '???????????? ???????????? ?????? ????????? ??????????????????.'}
                                </ErrorMessage>
                                <Desc>
                                    ?????? 60?????? ?????????????????????.<br/>
                                    ?????? ???????????? ????????? ???????????????.<br/>
                                    ?????? ????????? : <Strong>{watchStartDay && basicEndDate}</Strong>
                                </Desc>
                                <ButtonWrapper>
                                    <Button>??? ???</Button>
                                </ButtonWrapper>
                            </>
                        }
                        {
                            step === '4' && <>
                                <SubTitle>
                                    4 / 5 ??????
                                    <br />
                                    ????????? ??? ????????? ?????? ?????? ????????? ??????????????????.
                                </SubTitle>
                                <Select {...register('weekCount', {required : true})}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                </Select>
                                <ErrorMessage>
                                    {errors.weekCount?.type === 'required' && '?????? ????????? ????????? ?????????.'}
                                </ErrorMessage>
                                <Desc>
                                    ?????? ????????? ?????? ?????? ?????? ????????? ???????????????.<br/>
                                    ?????? ?????? ??????????????? ?????? ????????? ???????????? ????????? ???????????????.
                                </Desc>
                                <ButtonWrapper>
                                    <Button>??? ???</Button>
                                </ButtonWrapper>
                            </>
                        }
                        {
                            step === '5' && <>
                                    <SubTitle>5 / 5 ??????</SubTitle>
                                    <GoalTitle>- ?????? ??????</GoalTitle>
                                    <Content>
                                        <p><Strong>{goal.goalTitle}</Strong></p>
                                    </Content>
                                    <GoalTitle>- ?????? ?????? ??????</GoalTitle>
                                    <Content>
                                        <p>
                                            {goal.startDay} ~ {goal.endDay} (??? <Strong>{goal.totalCount}</Strong>???)
                                        </p>
                                    </Content>
                                    <GoalTitle>- ?????? ?????? ????????????</GoalTitle>
                                    <Content>
                                        <p>???????????? <Strong>{goal.weekCount}</Strong>??? ??????</p>
                                    </Content>
                                    <GoalTitle>- ?????? ????????? ?????? ??????</GoalTitle>
                                    <Textarea {...register('goalDesc', {required : true})}></Textarea>
                                    <ErrorMessage>
                                        {errors.goalDesc?.type === 'required' && '????????? ?????? ???????????? ?????? ?????? ?????? ????????? ??????????????????.'}
                                    </ErrorMessage>
                                    <Desc fontColor={'#a9a9a9'}>
                                        ?????? ????????? ????????? ????????? ???????????????.<br/>
                                        ????????? ??????, ????????? ?????? ???????????? ????????? ?????? ????????? ?????? ??????????????????.
                                    </Desc>
                                <ButtonWrapper>
                                    <Button>??? ???</Button>
                                    <Button marginLeft type='button' onClick={resetGoal}>?????? ????????????</Button>
                                </ButtonWrapper>
                            </>
                        }
                    </Wrapper>
                </form>
            </Setting>
        </Container>
    );
}

export default SetGoal;