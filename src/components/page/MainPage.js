import React from "react";
import styled from 'styled-components'

import Header from "../semantic/Header";

const MainPageStyled = styled.div`
    .mainpage_main > h1{
        font-family: "LEIXO";
        color: #279ed0;
        font-size: 6em;
        margin-bottom: 5vh;
    }
    .mainpage_main > p{
        color: #279ed0;
        font-family: 'KOTRAHOPE';
        margin-block-start: 0;
    }
    @font-face{
        font-family: 'LEIXO';
        src: url('/assets/LEIXO.ttf') format('truetype'),
        url('/assets/LEIXO.eot') format('embedded-opentype');
    }
    .mainpage_main{
        width: 100vw;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const MainPage = () => {
    return(
        <MainPageStyled>    
            <Header />
            <div className="mainpage_main">    
                <h1>
                    W O P E D U
                </h1>
                <p>
                    IWOP EDUCATION
                </p>
            </div>
        </MainPageStyled>
    )
}

export default MainPage;