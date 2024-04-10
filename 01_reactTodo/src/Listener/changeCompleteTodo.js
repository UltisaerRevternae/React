import { updateTodos } from "../Global/storage"

const changeCompleteTodo = (id, todos, setTodos) => {
  const changeTodos = todos.map((value) => {
    if (value.id === id) {
      value.completed = !value.completed
      return value
    }
    return value
  })
  updateTodos(changeTodos, setTodos)
}

export { changeCompleteTodo } 