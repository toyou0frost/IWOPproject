import { getStorage, ref, getDownloadURL } from "firebase/storage";

function GetStorageURL(lectureNum, lectureNumRoma){
    const storage = getStorage();
    getDownloadURL(ref(storage, `Lecture/${lectureNum}/${lectureNumRoma}/${lectureNumRoma}.pdf`))
    .then((url) => {
        console.log(url);
        return url;
    })
    .catch((error) => {
        console.log(error);
        return false;
    })
}

export default GetStorageURL;