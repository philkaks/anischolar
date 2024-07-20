import { db } from "../Config/firebase.config";
import { collection } from "firebase/firestore";

const photosCollection = collection(db, "photos");
const blogsCollection = collection(db, "blogs");
const studentsCollection = collection(db, "students");
const peopleCollection = collection(db, "people");
const logosCollection = collection(db, "logos");


export {photosCollection, blogsCollection, studentsCollection, peopleCollection, logosCollection}



