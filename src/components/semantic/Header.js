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
        height: 6vh;
        display: flex;
        padding: 3vh 0vh;
        background-color: #279ed0;
        color: #FCF6F5;
    }
    .Header_left{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .Header_center{
        flex: 2;
        color: #FCF6F5;
        /* display: grid; */
        align-items: center;
    }
    .Header_center > ul > a{
        font-weight: 800;
        color: #FCF6F5;
    }
    .Header_center > ul{
        display: flex;
        align-content: center;
    }
    .Header_center > ul > li{
        margin: 0 1.5vh;
        font-family: 'KOTRAHOPE';
        font-size: 1.2em;
        z-index: 100;
    }
    .Header_center > ul > li:hover 
    .Header_center_hover{
        max-height: 100%;
        transition: max-height 0.3s;
    }
    .Header_center_hover:hover{
        max-height: 100%;
        transition: max-height 0.3s;    
    }
    .Header_center_hover{
        max-height: 0;
        overflow: hidden;
        background-color: rgba(92, 169, 202, 0.6);
        transition: max-height 0.3s;
        font-family: 'KOTRAHOPE';
    }
    .Header_center_hover > ul > li > a {
        color: white;
    }
    .Header_center_hover_li{
        padding: 0.3vh 0.5vh;
        font-size: 1em;
    }
    .Header_right{
        flex: 0.3;
        display: flex;
        align-items: center;
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
            hover_li[i].push(<li className="Header_center_hover_li"><Link to={`/Lecture${num[i]}/${hover_num[i][j]}`}>{hover_num[i][j]}</Link></li>);
            j++;
        }
        li.push(<li>Lecture {num[i]}<div className="Header_center_hover"><ul>{hover_li[i]}</ul></div></li>);
        i++;
    }

    return(
        <HeaderStyle>
            <div className="Header_main">
                <div className="Header_left">
                    <Link to={'/'}><img src="" alt="logo" /></Link>
                </div>
                <div className="Header_center">
                    <ul>
                        {li}
                        &nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/LectureProduction'}>강의 제작</Link>
                    </ul>
                </div>  
                <div className="Header_right">
                    <GoogleAuth />
                </div>
            </div>
        </HeaderStyle>
    ) 
}

export default Header;