import styled from "styled-components";


export default function TransactionItem({date, description, value}) {
    return (
        <Line>
            <Date>{date.slice(0,-5)}</Date>
            <Description>{description}</Description>
            <Value>R$ {value}</Value>
        </Line>
    );
}

const Line = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding-left: 3px;

`;
const Date = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
display: flex;
justify-items: flex-start;

`;
const Description = styled.div`
justify-content: flex-start;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
`;
const Value = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;
padding-right: 3px;
`;