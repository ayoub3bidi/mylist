import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_XVDuGvW_cVjhvyWtSDA5QHa3mF1SegU",
    authDomain: "mylist-f82d6.firebaseapp.com",
    projectId: "mylist-f82d6",
    storageBucket: "mylist-f82d6.appspot.com",
    messagingSenderId: "704084685664",
    appId: "1:704084685664:web:081a78cb02aa331006e405"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }