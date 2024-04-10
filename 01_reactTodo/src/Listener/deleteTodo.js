import { updateTodos } from "../Global/storage"

const deleteTodo = (id, todos, setTodos) => {
  const newTodos = todos.filter((value) => value.id !== id)
  updateTodos(newTodos, setTodos)
}

export { deleteTodo } 