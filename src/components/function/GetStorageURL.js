import { getStorage, ref, getDownloadURL } from "firebase/storage";

function GetStorageURL(lectureNum, lectureNumRoma){
    console.log(lectureNum, lectureNumRoma);
    // const storage = getStorage();
    // getDownloadURL(ref(storage, `Lecture/${lectureNum}/${lectureNumRoma}/${lectureNumRoma}.pdf`))
    // .then((url) => {
    //     return url;
    // })
    // .catch((error) => {
    //     return false;
    // });
}

export default GetStorageURL;