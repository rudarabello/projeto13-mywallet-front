import React from 'react';
import styled from 'styled-components';
import Github from '../assets/1.png';
import Link from '../assets/2.png';
import Twitter from '../assets/3.png';


function Footer() {
  return (
    <Container>
      <Contact>
        <a aria-label="Github" href="https://github.com/rudarabello" rel="noopener noreferrer">
        <img alt="Github" src={Github}/></a>
        <a aria-label="Github" href="https://www.linkedin.com/in/ruda-rabello-da-silva/" rel="noopener noreferrer">
        <img alt="Github" src={Link}/></a>
        <a aria-label="Github" href="https://twitter.com/rudarabello" rel="noopener noreferrer">
        <img alt="Github" src={Twitter}/></a>
      </Contact>
      <CopyRights>
        <span>Develop by © Rudá Rabello. All Rights Reserved.</span>
      </CopyRights>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #A328D6;
height: 100%;

`;
const Contact = styled.div`
width: 300px;
display: flex;
flex-direction: row;
justify-content: space-around;
font-size: 32px;
margin-top: 20px;
text-decoration: none;
color:#000000 ;
`;
const CopyRights = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
color: #f1f1f1;
margin-top: 10px;
margin-bottom: 10px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
line-height: 22px;
font-size: 12px;
span{
  font-size: 10px;
}

`;