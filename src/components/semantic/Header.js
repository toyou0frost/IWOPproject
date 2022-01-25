import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; // 1. styled components 호출

import GoogleAuth from "../function/GoogleBtn";
import GetDatabase from "../function/GetDatabase";

// 2. const 파일명Style = styled.div`` 형태로 열고 백틱 안쪽에 css 코드 작성
// #2E3C7E #FBEAEB
const HeaderStyle = styled.div` 
    ul{
        padding: 0;
    }
    .Header_main{
        width: 100vw;
        height: 6vh;
        display: flex;
        padding: 3vh 0vh;
        background-color: #2E3C7E;
        /* align-items: center; */
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
    .Header_center_hover{
        background-color: #2E3C7E;
    }
    .Header_center_hover > ul > li > a {
        color: white;
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
    let j = 0;

    for(let key1 in data){
        i++;
    }

    const hover_li = Array.from(Array(i), () => Array(0).fill(null));
    const hover_num = Array.from(Array(i), () => Array(0).fill(null));
    
    i = 0;

    console.log(hover_li)
    useEffect(() => {
        GetDatabase(setData);
    }, [])

    for (let key1 in data) {
        j = 0;
        num.push(key1);
        for(let key2 in data[key1]){
            if(key2 === "default"){
                break;
            }
            hover_num[i].push(key2);
            hover_li[i].push(<li><Link to={`/Lecture${num[i]}/${hover_num[i][j]}`}>{hover_num[i][j]}</Link></li>);
            j++;
        }
        console.log(hover_li);
        li.push(<li>Lecture {num[i]}<div className="Header_center_hover"><ul>{hover_li[i]}</ul></div></li>);
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