import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 1200px;
margin: 0 auto;
`;

const Wrapper = styled.div`
width: 100%;
`;

const Section = styled.section`
width: 90%;
margin: 0 auto;
text-align: center;
`;

const Title = styled.h3`
margin: 2rem 0 1rem 0;
`;

const BadgeWrapper = styled.div`
width: 800px;
height: 400px;
background: #fafafa;
border-radius: 20px;
box-shadow: 3px 5px 10px #d7d7d7;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 0 auto;
margin-bottom: 4rem;
`;

const Badge = styled.div`
width: 100px;
height: 100px;
background: #416dea;
border-radius: 50%;
margin: 40px 20px;
`;

function BadgeList() {
    return ( 
        <Container>
            <Wrapper>
                <Section>
                    <Title>특별 한정 배지</Title>
                    <BadgeWrapper>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                    </BadgeWrapper>
                </Section>
                <Section>
                    <Title>목표 달성 배지</Title>
                    <BadgeWrapper>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                        <Badge></Badge>
                    </BadgeWrapper>
                </Section>
            </Wrapper>
        </Container>
     );
}

export default BadgeList;