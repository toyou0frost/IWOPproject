import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GetDatabase from "../function/GetDatabase";

const LectureFooterStyle = styled.div`
    .current{
        color: red;
    }
    .LectureFooter_list{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        margin-block-end: 0;
        margin-block-start: 1.3em;
    }
    .LectureFooter_list_li{
        flex: 0.03;
    }
    .pointer{
        cursor: pointer;
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
                {i === 1 ? arr.unshift(<img className="pointer" src="/img/leftArrow.png"></img>) : arr.unshift(<a href={`/Lecture${props.key1}/${leftArrowKey}`}><img src="/img/leftArrow.png"></img></a>)}
                arr.push(<li className="LectureFooter_list_li"><a className="current" href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
                bool = true;
                endCheck = i;
                continue
            }
            arr.push(<li className="LectureFooter_list_li"><a href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
            leftArrowKey = key2;
        }
        {endCheck === i ? arr.push(<img className="pointer" src="/img/rightArrow.png"></img>) : arr.push(<a href={`/Lecture${props.key1}/${rightArrowKey}`}><img src="/img/rightArrow.png"></img></a>)}
        
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