import styled from "styled-components";

export default function RenderSubCategory({data}) {
    return (
        <Line>
            {data.map((e, index) => {
                return (<Description2 key={index} subcategory={e.subCategoryOut} ></Description2>);
            })}
        </Line>
    );
}

const Line = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-left: 3px;

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