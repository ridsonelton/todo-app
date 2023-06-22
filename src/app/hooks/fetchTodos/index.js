import { useState,useEffect,useRef } from "react"
import {doc,getDoc} from 'firebase/firestore'
import { db } from "../../../../firebase"
import { useAuth } from "@/app/context/authContext"

export default function useFetchTodos(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)
    
    const {currentUser} = useAuth()
    useEffect(() =>{
        async function fetchData(){
        try{
            const docRef = doc(db,'users',currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTodos(docSnap.data().todos)
              } else{
                setTodos({});
              }
              
        }catch(err){
            setError('failed to load')
        } finally{
            setLoading(false)
        }
        }
        fetchData()
    },[])

    return {loading,error,todos , setTodos}
}