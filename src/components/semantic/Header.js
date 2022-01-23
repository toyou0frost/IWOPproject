import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; // 1. styled components 호출

import GoogleAuth from "../function/GoogleBtn";
import GetDatabase from "../function/GetDatabase";

// 2. const 파일명Style = styled.div`` 형태로 열고 백틱 안쪽에 css 코드 작성
// #2E3C7E #FBEAEB
const HeaderStyle = styled.div` 

    .Header_main{
        width: 100vw;
        height: 6vh;
        display: flex;
        padding: 3vh 0vh;
        background-color: #2E3C7E;
        align-items: center;
        color: #FBEAEB;
    }
    .Header_right{
        flex: 1;
    }
    .Header_center{
        flex: 2;
        color: #FBEAEB;
    }
    .Header_center > ul{
        display: flex;
        padding: 0;
        margin: 0;
    }
    .Header_center > ul > li > a {
        color: #FBEAEB;
    }
    .Header_left{
        flex: 0.3;
    }
`

const Header = () => {
    const [data, setData] = useState();
    const num = [];
    const li = [];
    let i = 0;

    useEffect(() => {
        GetDatabase(setData);
    }, [])

    for (var key in data) {
        num.push(key);
        li.push(<li><Link to={`/Lecture${num[i]}`}>Lecture {num[i]}</Link></li>);
        i++;
    }

    return(
        <HeaderStyle>
            <div className="Header_main">
                <div className="Header_right">
                    <Link to={'/'}><img src="" alt="logo" /></Link>
                </div>
                <div className="Header_center">
                    <ul>
                        {li}
                        &nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/LectureProduction'}>강의 제작</Link>
                    </ul>
                </div>  
                <div className="Header_left">
                    <GoogleAuth />
                </div>
            </div>
        </HeaderStyle>
    ) 
}

export default Header;