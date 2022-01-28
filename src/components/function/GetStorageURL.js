import { getStorage, ref, getDownloadURL } from "firebase/storage";

function GetStorageURL(lectureNum, lectureNumRoma, setIframe_url){
    const storage = getStorage();
    getDownloadURL(ref(storage, `Lecture/${lectureNum}/${lectureNumRoma}/${lectureNumRoma}.pdf`))
    .then((url) => {
        // console.log(url);
        setIframe_url(url);
    })
    .catch((error) => {
        console.log(error);
        setIframe_url(false);
    })
}

export default GetStorageURL;