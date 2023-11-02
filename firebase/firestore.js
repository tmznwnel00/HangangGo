import firebaseDB from "./firebaseDB";
import { getFirestore } from "firebase/firestore"

const fireStore = getFirestore(firebaseDB.firebaseApp)
export default fireStore