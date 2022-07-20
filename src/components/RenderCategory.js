import styled from "styled-components";


export default function RenderCategory({category}) {
    return (
        <Line>
            <Description1>{category}</Description1>
        </Line>
    );
}

const Line = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding-left: 3px;
`;
const Description1 = styled.div`
width: 100%;
display: flex;
height: 10px;
justify-content: flex-start;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left: 10px;
color: #000000;
`;