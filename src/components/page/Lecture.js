import React from "react";

import Header from "../semantic/Header";
import { UserData } from "../Object/UserData";

const Lecture = () => {
    let idx = window.location.href.split("Lecture")[1];
    
    return(
        <div>
            <Header />
        </div>
    )
}

export default Lecture;