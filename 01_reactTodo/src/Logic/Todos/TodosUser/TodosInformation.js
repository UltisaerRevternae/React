import { useMemo } from "react"

const TodosInformation = ({ todos, loading, error, getUser }) => {
  const todosCompleted = todos.filter(({ completed }) => completed).length
  const todosTotal = todos.length

  const isTodosExisting = useMemo(() => {
    return todosTotal !== 0 && !loading && !error
  }, [todosTotal, loading, error])

  const isTodosFinished = useMemo(() => {
    return todosTotal === 0 && !loading && !error;
  }, [todosTotal, loading, error]);

  const isTodosCompletedAll = useMemo(() => {
    return (todosCompleted === todosTotal) && !loading && !error;
  }, [todosCompleted, todosTotal, loading, error]);

  const isTodosIncompleted = useMemo(() => {
    return (todosTotal !== 0) && (todosTotal !== todosCompleted) && !loading && !error;
  }, [todosTotal, todosCompleted, loading, error]);

  const nickName = !!getUser.nickName ? getUser.nickName : 'User'

  return {
    todosCompleted,
    todosTotal,
    isTodosExisting,
    isTodosFinished,
    isTodosCompletedAll,
    isTodosIncompleted,
    nickName,

  }
}

export { TodosInformation }