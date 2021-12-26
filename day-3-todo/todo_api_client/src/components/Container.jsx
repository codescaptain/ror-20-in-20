import {useContext} from 'react'
import TodoContext from '../contenxt/TodoContext'
import AddTodo from './AddTodo'
import Todo from './Todo'



const Container = () => {
  const {searchTask} = useContext(TodoContext)
  return (
    <div>
      <AddTodo />
      {searchTask.map((todo,key) => (
        <Todo todo={todo} key={key}/>
      ))}
    </div>
  )
}

export default Container
