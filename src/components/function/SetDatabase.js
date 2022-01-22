import { getDatabase, ref, set } from "firebase/database";

function writeUserData(lectureNum, lectureNumRoma, lecturer, title, text) {
    const db = getDatabase();
    set(ref(db, `Lecture/${lectureNum}/${lectureNum}_${lectureNumRoma}`), {
        Lecturer: lecturer,
        Title: title,
        Text: text,
    });
}

export default writeUserData;