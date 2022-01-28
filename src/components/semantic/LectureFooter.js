import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GetDatabase from "../function/GetDatabase";

const LectureFooterStyle = styled.div`
    .current{
        color: #EC8B5E;
    }
    .LectureFooter_list{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        padding: 0;
        margin-block-end: 0;
        margin-block-start: 1.3em;
    }
    .LectureFooter_list_li{
        flex: 0.03;
        display: flex;
        justify-content: center;
    }
    .pointer{
        cursor: pointer;
        width: 16px;
        height: 16px;
        padding: 3px
    }
    #arrow{
        cursor: pointer;
        width: 16px;
        height: 16px;
        padding: 3px 
    }
`

const LectureFooter = (props) => {
    const [data, setData] = useState();
    const arr = [];
    let i = 0;
    let bool = false;
    let leftArrowKey = '';
    let rightArrowKey = '';
    let endCheck = 0;

    useEffect(() => {
        GetDatabase(setData);
    }, [])
    if(data !== undefined){
        for(let key2 in data[props.key1]){
            if(bool){
                rightArrowKey = key2;
                bool = false;
            }
            if(key2 === "default"){
                break;
            }
            i++;
            if(key2 === props.key2){
                {i === 1 ? arr.unshift(<img className="pointer" src="/img/fast-backward.png"></img>) : arr.unshift(<a href={`/Lecture${props.key1}/${leftArrowKey}`}><img src="/img/fast-backward.png" id="arrow"></img></a>)}
                arr.push(<li className="LectureFooter_list_li"><a className="current" href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
                bool = true;
                endCheck = i;
                continue
            }
            arr.push(<li className="LectureFooter_list_li"><a href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
            leftArrowKey = key2;
        }
        {endCheck === i ? arr.push(<img className="pointer" src="/img/fast-forward.png"></img>) : arr.push(<a href={`/Lecture${props.key1}/${rightArrowKey}`}><img src="/img/fast-forward.png" id="arrow"></img></a>)}
        
    }

    return(
        <LectureFooterStyle>
            <ul className="LectureFooter_list">
                {arr}
            </ul>
        </LectureFooterStyle>
    )
}

export default LectureFooter;