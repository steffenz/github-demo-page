
import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
interface Props {
    children?: React.ReactChild[]
}

const StyledWrapper = styled.nav`
    background: url('/gfx/bg/bg0.jpg') repeat-y;
    width:20%;
    height:100vh;
    border-right:1px solid;
    overflow-y: scroll;
    text-align: center;
    padding-top:25px;
    padding:20px;

    #menuHeaderImg {
        width:200px;
        padding-bottom:25px;
    }

    #chainBorder {
        padding: 20px 0px 20px;
        width:250px;
    }
`

const MainMenu = styled.ul`
    list-style: none;

    li{
        padding-bottom:25px;
        font-size:1.8rem;
    }
`

const alertShit = () => ( alert('ITS ONLY GAME, WHY U HEFF TO BE MAD'))


export default function Sidebar({ children }: Props): React.ReactElement {
    console.log(children);
    return(
        <StyledWrapper>

            <img id="menuHeaderImg" src="/gfx/headers/linker.gif"/>

            <MainMenu>
                <li>
                    <Link to="/">HOMEZ</Link>
                </li>
                <li>
                    <Link to="/quotes">QUOTE-O-RAMA</Link>
                </li>
                <li>
                    <Link to="/guestbook">GUETZBOOKS</Link>
                </li>
                <li>
                    <Link to="/memes">ITS A MEME, ME-MIO</Link>
                </li>
                <li>
                    <a href="#" onClick={() => confirm('ELSKA HAMBURGER')}>HAMBORGAR</a>
                </li>
            </MainMenu>

            <img id="chainBorder" src="/gfx/gifs/chainborder.gif"/>
<br/>
            <p style={{ color: 'yellow'}}>Y U NO DOWNLOAD</p><br/>
            <img onClick={alertShit} src="/gfx/badges/winamp-miniban.gif"/>
            <img onClick={alertShit} src="/gfx/badges/notepad.gif"/>
            <img onClick={alertShit} src="/gfx/badges/2cows.gif"/>
            <img onClick={alertShit} src="/gfx/badges/dukenow.gif"/>
            <img onClick={alertShit} src="/gfx/badges/winrar.gif"/>
            <img onClick={alertShit} src="/gfx/badges/ie_logo.gif"/>
            <img onClick={alertShit} src="/gfx/badges/netscape.gif"/>
            
            <br/><br/>
            
            <img onClick={ () => alert('₍ᐢ.  ̫.ᐢ₎')}src="/gfx/gifs/pika.gif"/>

        </StyledWrapper>
    )
}