import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const InitiaLization=()=>{
    initializeApp(firebaseConfig);
}

export default InitiaLization;