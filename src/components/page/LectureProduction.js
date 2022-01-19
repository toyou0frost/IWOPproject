import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

import Header from "../semantic/Header";
import { UserData } from "../Object/UserData";

const LectureProduction = () => {
    const navigate = useNavigate();
    const [pdf, setPdf] = useState('');

    useEffect(() => {
        if(UserData.userName === ""){
            navigate('/')
        }
    }, )


    const upload = () => {
        if(UserData.userName === ""){
            navigate('/')
            return
        }
        const storage = getStorage();
        const storageRef = ref(storage, "/Lecture/I/" + pdf.name);
        uploadBytes(storageRef, pdf).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    return(
        <div>
            <Header />
            <input type="file" accept=".pdf" onChange={(e)=>{setPdf(e.target.files[0])}} />
            <input type="button" value="PDF업로드" onClick={upload} />
        </div>
    )
}

export default LectureProduction;