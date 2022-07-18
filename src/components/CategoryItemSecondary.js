import styled from "styled-components";


export default function CategoryItemSecondary({category, subcategory}) {
    return (
        <Line>
            <Description1>{category}</Description1>
            <Description2>{subcategory}</Description2>
        </Line>
    );
}

const Line = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-left: 3px;

`;
const Description1 = styled.div`
display: flex;
justify-content: flex-start;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left: 10px;
color: #000000;
`;
const Description2 = styled.div`
display: flex;
justify-content: flex-start;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left: 35px;
color: #000000;
`;