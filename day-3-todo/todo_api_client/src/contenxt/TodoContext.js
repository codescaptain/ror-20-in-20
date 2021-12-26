import axios from 'axios'
import {useState, useEffect, createContext} from 'react'
const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const [filterText, setFilterText] = useState('');
  const [todos, setTodos] = useState([])
  const URI = 'http://localhost:3001/api/v1/';
  useEffect(() => {
    const getTodos = async () => {
      await axios.get(`${URI}todos`)
      .then((r) => setTodos(r.data))
      .catch(e => console.log(e))
    }
    getTodos();
  }, [])

  /*
    @params task String
  */
  const addTodo = async (task) => {
    await axios.post(`${URI}todos`, {task})
    .then((r) => setTodos([...todos,{task: r.data.task, id:r.data.id}]))
    .catch((error) => console.log(error));
  }

  /*
    @params id Integer
  */
  const deleteTodo = async (id) => {
    await axios.delete(`${URI}todos/${id}`)
    .then((r) => setTodos(todos.filter(todo => todo.id !== id)))
    .catch((e) => console.log(e))
  }

  /*
    @params task String
    @params id Integer
  */
  const updateTodo = async (task, id) => {
    await axios.put(`${URI}todos/${id}`, {task})
    .then((r) => {
      const newTodo = todos.map(todo => todo.id === id ? {task,id} : todo );
      setTodos(newTodo)
    })
    .catch((e) => console.log(e))
  }

  /*
  @params task String
  */
  const searchTask = todos.filter((item) => {
    return Object.keys(item).some((key => {
        return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    }))
});





  const values = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    searchTask,
    setFilterText
  }

  return (
    <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
  )
}

export default TodoContext;