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
min-height: 400px;
padding: 2rem 1rem;
background: #fafafa;
border-radius: 20px;
box-shadow: 3px 5px 10px #d7d7d7;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
margin-bottom: 4rem;
`;

const Badge = styled.div`
width: 120px;
height: 120px;
background: #fafafa;
box-shadow: 3px 5px 10px #d7d7d7;
border-radius: 50%;
margin: 24px 20px;
position: relative;
&:hover {
    background: rgba(65, 109, 234, 0.1);
}
`;

const BadgeCount = styled.div`
font-size: 0.9rem;
font-weight: bold;
position: absolute;
left: 50%;
bottom: -2rem;
transform: translateX(-50%);
`;

function BadgeList() {
    return ( 
        <Container>
            <Wrapper>
                <Section>
                    <Title>특별 한정 배지</Title>
                    <BadgeWrapper>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                    </BadgeWrapper>
                </Section>
                <Section>
                    <Title>목표 달성 배지</Title>
                    <BadgeWrapper>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                        <Badge>
                            <BadgeCount>1</BadgeCount>
                        </Badge>
                    </BadgeWrapper>
                </Section>
            </Wrapper>
        </Container>
     );
}

export default BadgeList;