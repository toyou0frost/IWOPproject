import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Header from "../semantic/Header";
import { UserData } from "../Object/UserData";
import GetDatabase from "../function/GetDatabase";
import SetDatabase from "../function/SetDatabase";
import MainPage from "./MainPage";

const LectureProductionStyle = styled.div` 
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 88vh;
    }
    span{
        color: gray;
        font-size: 12px;   
        padding-right: 10px;
    }
    .header{
        display: flex;
        align-items: center;
        height: 15vh;
        pointer-events: none;
    }
    .header > *{
        pointer-events: all;
        z-index: 0;
    }
    .header > select{
        width: 10vw;
        height: 46px;
    }
    .header > input{
        width: 65vw;
        height: 40px;
    }
    .header > input:focus{
        outline: 0;
    }
    .header > select:focus{
        outline: 0;
    }
    .input{
        height: 60vh;
    }
    textarea{
        width: 75vw;
        height: 60vh;
        resize: none;
        padding: 3px;
    }
    textarea:focus{
        outline: 0;
    }
    .submit{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75vw;
        height: 10vh;
    }

`

const LectureProduction = () => {
    const navigate = useNavigate();
    const [pdf, setPdf] = useState('');
    const [data, setData] = useState('');
    const [lectureNum, setLectureNum] = useState('');
    const [lectureNumRoma, setLectureNumRoma] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const num = [];
    const lectureI = [];
    const lectureII = [];
    const lectureIII = [];
    const lectureIV = [];
    const lectureV = [];

    useEffect(() => {
        if(UserData.userName === ""){
            navigate('/');
            alert("로그인 후 이용해 주세요.");
        }
    }, )

    useEffect(() => {
        changeToRoma();
    }, [lectureNum])

    useEffect(() => {
        GetDatabase(setData);
    }, [])

    function romanize (romaNum) {
        if (isNaN(romaNum))
            return NaN;
        var digits = String(+romaNum).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }

    for (var key in data) {
        num.push(key);
        switch (key) {
            case "I":
                for(var key_I in data[key]){
                    lectureI.push(key_I);
                }
                break;
            case "II":
                for(var key_II in data[key]){
                    lectureII.push(key_II);
                }
                break;
            case "III":
                for(var key_III in data[key]){
                    lectureIII.push(key_III);
                }
                break;
            case "IV":
                for(var key_IV in data[key]){
                    lectureIV.push(key_IV);
                }
                break;
            case "V":
                for(var key_V in data[key]){
                    lectureV.push(key_V);
                }
                break;
            default:
                break;
        }
    }

    const upload = () => {
        if(UserData.userName === ""){
            navigate('/');
            alert("로그인 후 이용해 주세요.");
            return
        }
        const lecturer = UserData.userName;
        if(!isPass()){
            alert("양식을 맞춰 주세요.");
            return;
        }
        SetDatabase(lectureNum, lectureNumRoma, lecturer, title, text);
        const storage = getStorage();
        if(pdf === ""){
            alert("강의 등록 완료!");
            navigate('/');
            return;
        }
        const storageRef = ref(storage, `/Lecture/${lectureNum}/${lectureNum}_${lectureNumRoma}/` + `${lectureNum}_${lectureNumRoma}.pdf`);
        uploadBytes(storageRef, pdf).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        alert("강의 등록 완료!");
        navigate('/');
    }

    function isPass(){
        if(lectureNum === "") return false;
        if(lectureNumRoma === "") return false;
        if(title === "") return false;
        if(text === "") return false;
        return true;
    }
    
    function changeToRoma(){
        switch (lectureNum) {
            case "I":
                setLectureNumRoma(romanize(lectureI.length));
                break;
            case "II":
                setLectureNumRoma(romanize(lectureII.length));
                break;
            case "III":
                setLectureNumRoma(romanize(lectureIII.length));
                break;
            case "IV":
                setLectureNumRoma(romanize(lectureIV.length));
                break;
            case "V":
                setLectureNumRoma(romanize(lectureV.length));
                break;
            default:
                break;
        }
    }

    return(
        <LectureProductionStyle>
            <div>
                <Header />
                <div class="main">
                    <div class="header">
                        <select onChange={(e) => {if(e.target.value !== "0") return setLectureNum(e.target.value);}}>
                            <option value="0">Lecture</option>
                            <option value={num[0]}>{num[0]}</option>
                            <option value={num[1]}>{num[1]}</option>
                            <option value={num[2]}>{num[2]}</option>
                            <option value={num[3]}>{num[3]}</option>
                            <option value={num[4]}>{num[4]}</option>
                        </select>
                        <input type="text" placeholder="강의 명" onChange={(e) => {setTitle(e.target.value)}} />
                    </div>

                    <div class="input">
                        <textarea cols="30" rows="10" placeholder="강의 내용" onChange={(e) => {setText(e.target.value)}}></textarea>
                    </div>

                    <div class="submit">
                        <div>
                            <span>PDF 파일 등록</span>
                            <input type="file" accept=".pdf" onChange={(e)=>{setPdf(e.target.files[0])}} />
                        </div>
                        <input type="button" value="강의 등록" onClick={upload} />
                    </div>
                </div>
            </div>
        </LectureProductionStyle>
    )
}

export default LectureProduction;