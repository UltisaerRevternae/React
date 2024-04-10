import React, { useMemo } from "react"
import { getTodos } from "../../../Global/storage"

const TodosFiltered = ({
  searchValue,
  setLoading,
  setError,
  todos,
  setTodos,
  todosFilter,
  loading
}) => {

  React.useEffect(() => {
    try {
      setTimeout(() => {
        setTodos(getTodos())
        setLoading(false)
      }, 400)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, [setTodos, setLoading, setError, loading])

  const todosPages = useMemo(() => {
    const filterMap = {
      'ALL': () => todos,
      'COMPLETED': ({ completed }) => completed,
      'PENDING': ({ completed }) => !completed
    };

    const filterFunction = filterMap[todosFilter] || (() => true);

    return todos.filter(filterFunction);
  }, [todos, todosFilter]);

  const filterTodosBySearch = useMemo(() => {
    return todosPages.filter(({ text }) => (
      text.toLowerCase().includes
        (searchValue.toLowerCase())
    ))
  }, [searchValue, todosPages])

  return filterTodosBySearch
}

export { TodosFiltered }
