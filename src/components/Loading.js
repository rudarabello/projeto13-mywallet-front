import styled from "styled-components";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
margin: 0 auto ;
`;
export default function Loading() {
    return (
        <StyledLoading>
            <FadeLoader loading color="#ffffff" css={override}  height={25} width={8} radius={50} margin={25} />
        </StyledLoading>
    );
};

const StyledLoading = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
`


