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
    }
    .LectureFooter_list_li{
        flex: 0.03;
    }
`

const LectureFooter = (props) => {
    const [data, setData] = useState();
    const arr = [];
    let i = 0;

    useEffect(() => {
        GetDatabase(setData);
    }, [])
    if(data !== undefined){
        for(let key2 in data[props.key1]){
            if(key2 === "default"){
                break;
            }
            i++;
            if(key2 === props.key2){
                arr.push(<li className="LectureFooter_list_li"><a className="current" href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
                continue
            }
            arr.push(<li className="LectureFooter_list_li"><a href={`/Lecture${props.key1}/${key2}`}>{i}</a></li>);
        }
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