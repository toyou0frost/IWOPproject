import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../semantic/Header";
import { UserData } from "../Object/UserData";
import GetDatabase from "../function/GetDatabase";
import GetStorageURL from "../function/GetStorageURL";
import LectureFooter from "../semantic/LectureFooter";

const LectureStyle = styled.div`
    .Lecture{
        background-color: #FCF6F5;
    }
    .Lecture_header{
        display: flex;
        flex-direction: row;
        background-color: #279ed0;
        color: #FBEAEB;
        align-items: center;
        height: 6vh;
        padding: 3vh 0vh;
        /* pointer-events: none; */
    }
    .Lecture_header > div > h2{
        font-family: 'KOTRAHOPE';
        padding-left: 1vh;
    }
    .Lecture_header_left{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .Lecture_header_center{
        flex: 2;
    }
    .Lecture_header_right{
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .Lecture_main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // height: 85vh;
    }
    .Lecture_main > iframe{
        width: 110vh;
        height: 60vh;
        padding: 30px;
    }
    #text{
        white-space: pre-line;
    }
    .logo{
        font-family: "LEIXO";
        color: white;
        margin-left: 1vh;
    }
`

const Lecture = (props) => {
    const [data, setData] = useState();
    const [iframe_url, setIframe_url] = useState();
    const idx = window.location.href.split("Lecture")[1];
    const key1 = idx.split("/")[0];
    const key2 = idx.split("/")[1];
    GetStorageURL(key1, key2, setIframe_url);
    let title;
    let lecturer;
    let text;

    if(data !== undefined){
        title = data[key1][key2].Title;
        lecturer = data[key1][key2].Lecturer;  
        text = data[key1][key2].Text;  
    }

    useEffect(() => {

    })

    useEffect(() => {
        GetDatabase(setData);
    }, [])

    return(
        <LectureStyle>
            {/* <Header/> */}
            <div className="Lecture">
                <div className="Lecture_header">
                    <div className="Lecture_header_left">
                        <Link to={'/'}>
                            <h1 className="logo">
                                WOPEDU
                            </h1>
                        </Link>
                    </div>
                    <div className="Lecture_header_center">
                        <h2>{title}</h2>
                    </div>
                    <div className="Lecture_header_right">
                        <h2>{lecturer}</h2>
                    </div>
                </div>
                <div className="Lecture_main">
                    {iframe_url === false ? "" : <iframe src={iframe_url} frameBorder="0"></iframe>}
                    <div id="text">{text}</div>
                </div>
                <LectureFooter key1={key1} key2={key2}/>
            </div>
        </LectureStyle>
    )
}

export default Lecture;