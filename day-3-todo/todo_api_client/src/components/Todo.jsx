import TodoContext from '../contenxt/TodoContext'
import {useContext, useState} from 'react'
const Todo = ({todo}) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const {deleteTodo, updateTodo} = useContext(TodoContext)
  const [task, setTask] = useState('')
  const handleUpdate = (task, id) => {
    console.log(task, id);
    updateTodo(task, id);
    setTask('');
    setIsUpdate(false);
  }
  return (
    <div className="singleTodo">
      <div className="todoId">
        {todo.id}
      </div>
      <div className="todoTask">
      {todo.task}
      </div>
      <div className="todoActions">
        {
          isUpdate ? 
          (
            <>
            <input
            value={task}
            onChange={(e) => setTask(e.target.value)} 
            type="text"  />
            <button className="btn-update" onClick={() => handleUpdate(task, todo.id)}>Uptdate</button>
            <button className="btn-cancel" onClick={() => setIsUpdate(!isUpdate)}>Cancel</button>
            </>
          ) 
          : 
          (
            <>
              <button className="btn-edit" onClick={() => setIsUpdate(!isUpdate)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)} className="btn-delete">Delete</button>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Todo
