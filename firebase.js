import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDko-2UV5GLYUaVG4GE5jiD260mADR3MY8",
  authDomain: "next-todo-69839.firebaseapp.com",
  projectId: "next-todo-69839",
  storageBucket: "next-todo-69839.appspot.com",
  messagingSenderId: "220172353552",
  appId: "1:220172353552:web:86bbd2fa1f62865ae44a95",
  measurementId: "G-N20DP0WB4G"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
