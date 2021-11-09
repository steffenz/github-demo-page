import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";

const GlobalStyles = createGlobalStyle`
    html, body, * {
        margin: 0;
        padding:0;
    }
    html {
        font-size:10px;
    }

    body {
        font-family: "Comic Sans MS", "Comic Sans", "Comic Relief", sans-serif;
        font-size:1.4rem;
        color: #fff;
        overflow:hidden;
    }
`;

const Wrapper = styled.section`
    text-align: center;
    width:80%;
    height:100vh;
`


interface Props {
    children: React.ReactChild
}

const FakeFrames = styled.div`
    display: flex;
`


export default function Layout({ children }: Props): React.ReactElement {
    return(
        <FakeFrames>
        <GlobalStyles/>
        <Sidebar/>
            <Wrapper>
                {children}
            </Wrapper>
        </FakeFrames>
    )
}