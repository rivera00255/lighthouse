import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { goalState } from '../../../Atom';

const Container = styled.div`
width: 1200px;
margin: 20vh auto;
min-height: 100vh;
margin-bottom: 240px;
`;

const Setting = styled.div`
width: 90%;
height: 90vh;
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
font-weight: bold;
font-size: 1.4rem;
`;

const SubTitle = styled.h3`
margin: 2rem 0;
font-weight: bold;
line-height: 1.7rem;
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
margin-top: 2rem;
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

const Select = styled.select`
width: 8rem;
height: 2rem;
text-align: center;
font-size: 1rem;
`;



function SetGoalStep4() {

    const navigate = useNavigate();

    const setGoal = useSetRecoilState(goalState);
    const goal = useRecoilValue(goalState);

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        setGoal({
            ...goal,
            weekCount : data.weekCount
        });
        
        navigate('/set/5');
    };


    return(
        <Container>
            <Setting>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <MainTitle>?????? ??????</MainTitle>
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
                    </Wrapper>
                </form>
            </Setting>
        </Container>
    );
}

export default SetGoalStep4;