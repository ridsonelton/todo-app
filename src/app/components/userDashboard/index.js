import { useAuth } from '@/app/context/authContext'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import TodoCard from '../todoCard'
import {doc, setDoc, deleteField} from 'firebase/firestore'
import { db } from '../../../../firebase'
import useFetchTodos from '@/app/hooks/fetchTodos'

export default function UserDashboard() {
  const {userInfo,currentUser} = useAuth()
  const [edit,setEdit] = useState(null)
  const [todo,setTodo] = useState('')
  const [edittedValue,setEdittedValue] = useState('')


  const {todos,loading,error, setTodos} = useFetchTodos()

  useEffect(() =>{
    if(!userInfo || Object.keys(userInfo).length===0){
      setAddTodo(true)
    }
  },[userInfo])

  async function handleAddTodo(){
    if(!todo){return}
    const newKey = Object.keys(todos).length===0 ? 1 : Math.max(...Object.keys(todos))+1
    setTodos({...todos,[newKey]:todo})
    const userRef = doc(db,'users',currentUser.uid)
    await setDoc(userRef,{
      'todos':{
        [newKey]:todo
      }
    },{merge:true})
    setTodo('')
  }

 async function hanleEditTodo(){
    if(!edittedValue){return}
    const newKey = edit
    setTodos({...todos,[newKey]:edittedValue})

    const userRef = doc(db,'users',currentUser.uid)
    await setDoc(userRef,{
      'todos':{
        [newKey]:edittedValue
      }
    },{merge:true})
    setEdit(null)
    setEdittedValue('')
  }

  function handleAddEdit(todoKey){
    return ()=> {

      setEdit(todoKey)
      setEdittedValue(todos[todoKey])
    }
      

  }

  function handleDelete(todoKey){
    return async ()=> {
      const tempObject = {...todos}
      delete tempObject[todoKey]
      setTodos(tempObject)
      const userRef = doc(db,'users',currentUser.uid)
    await setDoc(userRef,{
      'todos':{
        [todoKey]:deleteField()
      }
    },{merge:true})
    }
  }

  return (
    <div className='w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm:gap-5 flex-1'>
       
      <div className='flex items-stretch '>

      <input type="text" placeholder='Enter Todo' value={todo} onChange={(e)=>setTodo(e.target.value)} className={`outline-none p-2 rounded-l-lg flex-1`} />
      <button onClick={handleAddTodo} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-ternary text-white font-medium text-base duration-300 hover:opacity-40 rounded-r-lg'>ADD</button>
      </div>
      {loading && <div className='flex-1 grid place-items-center'>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl'/>
        </div>}
      {(userInfo && !loading) &&( <>
        {Object.keys(todos).map((todo,i)=>{
          return (
            <TodoCard handleDelete={handleDelete} hanleEditTodo={hanleEditTodo} key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue} >
              {todos[todo]}
            </TodoCard>
          )
        })}
      </>)} 
      {/* {!addTodo && <button onClick={()=>{setAddTodo(true)}} className=' py-2 text-center text-red-900 border-2 border-solid border-red-900 font-medium text-lg uppercase hover:opacity-50 rounded-lg'>Add TODO</button>} */}
    </div>
  )
}
