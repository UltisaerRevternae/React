import { updateTodos } from "../Global/storage"

const editTodo = (id, e, todos, setTodos) => {
  const editTodo = todos.map((value) => {
    if (value.id === id) {
      value.text = e.target.value
      return value
    }
    return value
  })
  updateTodos(editTodo, setTodos)
}

export { editTodo} 