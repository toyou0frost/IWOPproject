import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import GoogleAuth from "../function/GoogleBtn";
import GetDatabase from "../function/GetDatabase";

const HeaderStyle = styled.div`
    .Header_main{
        display: flex;
        padding: 3vh 0.5vh;
        background-color: #ccc;
    }
    .Header_right{
        flex: 1;
    }
    .Header_center{
        flex: 2;
    }
    .Header_center > ul{
        display: flex;
        padding: 0;
        margin: 0;
    }
    .Header_left{
        flex: 1;
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