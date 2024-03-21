import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../Reddux/todoSlice'

function Addtodo() {
  const [value,setvalue] = useState('')
  const dispatch = useDispatch()

  const handlesubmit = (e)=>{
    e.preventDefault()
    if(value){
      dispatch(addtodo({
        title: value
      }))
    }

  }
  return (
    <div className='d-flex'>
    <form onClick={handlesubmit} className='d-flex'>
        
            <input onChange={(e)=>setvalue(e.target.value)} type="text" className='form-control mb-2' placeholder='Add todo...' />
            <button  className='btn btn-info ms-2'>Submit</button>
        
    </form>
    </div>
  )
}

export default Addtodo