import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { withPrefix } from 'gatsby';

const Page = styled.section`
  background: url(${withPrefix('/gfx/bg/bg1.jpg')}) repeat-y;
  background-size: cover;
  height:100%;
  padding-top:45px;
  marquee {
    font-size:3.2rem;
  }
`


export default function Home(){
  return(
    <Layout>
      <Page>
      <marquee>WELCUM TO MY HOMEPEIG YOU GAYS</marquee>
      <img src={withPrefix('/gfx/gifs/fireborder.gif')}/>
      <img src={withPrefix('/gfx/gifs/playstation.gif')}/>
      <br/>

      <img src={withPrefix('/gfx/gifs/cat.gif')}/>

      <p>THIS PAGE IS UNDER CONSTRUCTIONZ I WILL COMES WITH MOAR STUFF LATER KTHXBYE</p>

      <br/><br/>
      <img src={withPrefix('/gfx/gifs/vorncrash.gif')}/>
      </Page>
    </Layout>
  )
}