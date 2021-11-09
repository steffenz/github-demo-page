import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Page = styled.section`
  background: url(${withPrefix('/gfx/bg/bg3.jpg')}) repeat-y;
  background-size: cover;
  height:100%;
`

export default function Memes(){

  return(
    <Layout>
      <Page>
        <h1>UNDER CONSTRUCTIONZ</h1>
      </Page>
    </Layout>
  )
}