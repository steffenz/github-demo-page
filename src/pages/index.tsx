import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";


const Page = styled.section`
  background: url('/gfx/bg/bg1.jpg') repeat-y;
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
      <img src="/gfx/gifs/fireborder.gif"/>
      <img src="/gfx/gifs/playstation.gif"/>
      <br/>

      <img src="/gfx/gifs/cat.gif"/>

      <p>THIS PAGE IS UNDER CONSTRUCTIONZ I WILL COMES WITH MOAR STUFF LATER KTHXBYE</p>

      <br/><br/>
      <img src="/gfx/gifs/vorncrash.gif"/>
      </Page>
    </Layout>
  )
}