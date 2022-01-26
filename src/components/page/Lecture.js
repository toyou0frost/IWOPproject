import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../semantic/Header";
import { UserData } from "../Object/UserData";
import GetDatabase from "../function/GetDatabase";
import GetStorageURL from "../function/GetStorageURL";

const LectureStyle = styled.div`
    .Lecture_header{
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid gray;
        pointer-events: none;
    }
    .Lecture_header > div > h2{
        font-family: 'KOTRAHOPE';
        padding-left: 1vh;
    }
    .Lecture_header_left{
        flex: 0.5;
    }
    .Lecture_header_center{
        flex: 2;
    }
    .Lecture_header_right{
        flex: 0.3;
    }
    .Lecture_main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .Lecture_main > iframe{
        width: 110vh;
        height: 60vh;
    }
`

const Lecture = () => {
    const [data, setData] = useState();
    const idx = window.location.href.split("Lecture")[1];
    const key1 = idx.split("/")[0];
    const key2 = idx.split("/")[1];
    // const iframe_url = "https://firebasestorage.googleapis.com/v0/b/iwopproject.appspot.com/o/Lecture%2FIV%2FIV_II%2FIV_II.pdf?alt=media&token=ac13c6ed-33a5-4e25-af95-f7111c3b965b"
    const iframe_url = GetStorageURL(key1, key2);
    let title;
    let lecturer;
    let text;
    
    console.log(iframe_url)

    if(data !== undefined){
        title = data[key1][key2].Title;
        lecturer = data[key1][key2].Lecturer;  
        text = data[key1][key2].Text;  
    }

    // useEffect(() => {
    //     GetDatabase(setData);
    // })
    

    return(
        <LectureStyle>
            <Header />
            <div className="Lecture">
                <div className="Lecture_header">
                    <div className="Lecture_header_left">
                        <h2>{idx}</h2>
                    </div>
                    <div className="Lecture_header_center">
                        <h2>{title}</h2>
                    </div>
                    <div className="Lecture_header_right">
                        <h2>{lecturer}</h2>
                    </div>
                </div>
                <div className="Lecture_main">
                    <iframe src={iframe_url} frameBorder="0"></iframe>
                    <p>{text}</p>
                </div>
            </div>
        </LectureStyle>
    )
}

export default Lecture;