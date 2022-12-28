import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyCQBymCMWNxgzE2JUYIRzyNRnkRN2tVZi0',
  authDomain: 'react-crud-3e78f.firebaseapp.com',
  databaseURL: 'https://react-crud-3e78f-default-rtdb.firebaseio.com',
  projectId: 'react-crud-3e78f',
  storageBucket: 'react-crud-3e78f.appspot.com',
  messagingSenderId: '70624068947',
  appId: '1:70624068947:web:4fda7cf01d65c27dcc4da6',
  measurementId: 'G-LQDFQX2VWD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
