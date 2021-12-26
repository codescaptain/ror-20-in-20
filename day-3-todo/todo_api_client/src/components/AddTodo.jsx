import {useContext, useState} from 'react'
import TodoContext from '../contenxt/TodoContext'


const AddTodo = () => {
  const {addTodo, setFilterText} = useContext(TodoContext)
  const [task, setTask] = useState('')
  return (
    <>
    <div className="addTodo">
      <input
      value={task}
      onChange={(e) => setTask(e.target.value)} 
      type="text"  />
      <button onClick={() => addTodo(task)}>Add a Todo</button>
    </div>

    <div className="addTodo">
      <h5>Search Todo</h5>
      <input
      onChange={(e) => setFilterText(e.target.value)} 
      type="text"  />
    </div>
    </>
  )
}

export default AddTodo
