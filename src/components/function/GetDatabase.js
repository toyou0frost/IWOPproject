import React, { useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

import app from "../../firebase";

const GetDatabase = (setData) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Lecture`)).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            setData(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
    });
}

export default GetDatabase;