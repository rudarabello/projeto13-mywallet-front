import React from 'react'
import styled from 'styled-components'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';


function Footer() {
  return (
    <Container>
      <Contact>
        <a href='https://github.com/rudarabello'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/ruda-rabello-da-silva/'><BsLinkedin /></a>
        <a href='https://twitter.com/rudarabello'><BsTwitter /></a>
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
`;
const CopyRights = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
color: #FFFFFF;
margin-top: 10px;
margin-bottom: 10px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
line-height: 22px;
font-size: 12px;
a{
  color: #FFFFFF;
}
span{
  font-size: 10px;
}

`;