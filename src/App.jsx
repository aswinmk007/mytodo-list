
import './App.css'
import Addtodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Totalitems from './components/Totalitems'

function App() {

  return (
    <>
      <h1 className='text-center'>My Todo List</h1>
      <Addtodo/>
      <Todolist/>
      <Totalitems/>
    </>
  )
}

export default App
