import React from 'react'
import Todoitem from './Todoitem'

function Todolist() {

  const todo = [
    { id: 1 , title: 'todo1', complete: false},
    { id: 1 , title: 'todo1', complete: false},
    { id: 1 , title: 'todo1', complete: false},
  ]
  return (
    <>
      <ul>
        <Todoitem/>
      </ul>
    </>
  )
}

export default Todolist