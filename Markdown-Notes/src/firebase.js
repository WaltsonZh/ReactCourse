import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDLc09mfq9QcpKAJr6E9cUdm_EY9-pu1Zg',
    authDomain: 'react-notes-e920a.firebaseapp.com',
    projectId: 'react-notes-e920a',
    storageBucket: 'react-notes-e920a.appspot.com',
    messagingSenderId: '436126658923',
    appId: '1:436126658923:web:6bcd5c52382432818adc2e',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const notesCollection = collection(db, 'notes')