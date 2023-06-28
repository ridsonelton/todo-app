import {BsTrash} from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';

export default function TodoCard(props){
    const {children, edit, handleAddEdit,edittedValue, setEdittedValue, todoKey , hanleEditTodo, handleDelete} = props;
    return(
        <div className="p-2 sm:p-3 relative border border-ternary border-solid flex items-stretch rounded-lg">
           <div className="flex-1 flex">
            {!(edit === todoKey) ? <>{children}</> : (
                <input type="text " className='bg-inherit flex-1 outline-none text-green-700' value={edittedValue} onChange={(e)=>setEdittedValue(e.target.value)}/>
            )}
            {/* {children} */}

            </div>
            <div className='flex gap-4 items-center pr-3'>
            {(edit === todoKey) ?
            <AiOutlineCheck onClick={hanleEditTodo} className='duration-300 hover:scale-125 cursor-pointer' />
            :<FaPencilAlt onClick={handleAddEdit(todoKey)} className='duration-300 hover:rotate-45 cursor-pointer'/> }
            <BsTrash onClick={handleDelete(todoKey)} className='text-lg duration-300 hover:scale-125 cursor-pointer'/>
            </div>

        </div>
    )
}