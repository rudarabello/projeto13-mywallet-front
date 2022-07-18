import styled from "styled-components";


export default function CategoryItemSecondary({description}) {
    return (
        <Line>
            <Description>{description}</Description>
        </Line>
    );
}

const Line = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-left: 3px;

`;
const Description = styled.div`
justify-content: flex-start;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left: 30px;
color: #000000;
`;