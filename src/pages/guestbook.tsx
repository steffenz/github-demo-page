import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Page = styled.section`
  background: url(${withPrefix('/gfx/bg/bg4.jpg')}) repeat-y;
  background-size: cover;
  height:100%;
  padding-top:45px;
`

export default function Guestbook(){

  return(
    <Layout>
      <Page>
        <h1>I CAN HAZ MESSAGE?</h1>
        <img src={withPrefix('/gfx/gifs/construction.gif')}/>
      </Page>
    </Layout>
  )
}