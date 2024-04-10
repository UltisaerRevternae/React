import { getTodos, updateTodos } from "../Global/storage";

const ListenerAddTodo = (value, id, setTodos) => {
  const newTodos = {
    completed: false,
    id: id,
    text: value
  }
  const allTodos = getTodos()
  allTodos.push(newTodos)
  
  updateTodos(allTodos, setTodos);
}

export { ListenerAddTodo } 