import React, { useState } from "react";
import Layout from "../components/Layout";
import { getRandomQuote, Quote } from "@steffenz/random-inspirational-quote";
import styled from 'styled-components';

const Page = styled.section`
  background: url('./gfx/bg/bg2.jpg') repeat-y;
  background-size: cover;
  height:100%;
  padding-top:45px;
`

const QuoteBox = styled.div`

  width:40%;
  margin:auto;
  background: rgba(0, 0, 0, 0.5);
  padding:25px;

`

export default function Home(){

    const [ currentQuote, setCurrentQuote ] = useState<Quote>(getRandomQuote);

    const getNewQuote = () => {
        const quote = getRandomQuote();
        setCurrentQuote(quote);
    }

    

  return(
    <Layout>
      <Page>
      <QuoteBox>
      { currentQuote && <h1>{currentQuote.q}</h1>}
      </QuoteBox>
      
      <br/>

      <button onClick={getNewQuote}>Get new quote</button>
      </Page>
    </Layout>
  )
}