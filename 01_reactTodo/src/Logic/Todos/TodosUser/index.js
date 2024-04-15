import React, { useCallback, useContext } from "react"
import { SectionContext } from "../../../Context/section"
import { TodosFiltered } from "./TodosFiltered"
import { TodosInformation } from "./TodosInformation"
import { getUser } from "../../../Global/storage"
import { TodosRenderCongratulations, TodosRenderItems, TodosStorageListener, TodosUserHeader } from "./TodosRender"
import { Search } from "../../../Components/Input/Search"
import { ItemsContainer } from "../../../Components/Items/ItemsContainer"

const TodosUser = () => {
  const [state, setState] = React.useState({
    loading: true,
    error: false,
    searchValue: ''
  })
  
  const setLoading = useCallback((value) => {
    setState((prev) => ({ ...prev, loading: value }));
  }, []);
  
  const setError = useCallback((value) => {
    setState((prev) => ({ ...prev, error: value }));
  }, []);
  
  const onSearch = (e) => setState({...state, searchValue: e.target.value})

  const { todos, setTodos, todosFilter } = useContext(SectionContext)

  const dataTodosFiltered = TodosFiltered({
    searchValue: state.searchValue,
    loading : state.loading,
    setLoading,
    setError,
    todos,
    setTodos,
    todosFilter,
  })

  const {
    todosCompleted,
    todosTotal,
    isTodosExisting,
    isTodosFinished,
    isTodosCompletedAll,
    isTodosIncompleted,
    nickName
  } = {
    ...TodosInformation({
      todos,
      loading: state.loading,
      error: state.error,
      getUser: getUser()
    })
  }

  const SeccionPageTitleOpcions = {
    'ALL': 'Home',
    'COMPLETED': 'Completed Todos',
    'PENDING': 'Pending Todos'
  };

  const SeccionPageTitle = SeccionPageTitleOpcions[todosFilter] || 'Home';

  return (
    <>
      <div className="Container">

        <TodosUserHeader
          onLoading={state.loading}
          onError={state.error}
          isCompleted={{ isTodosCompletedAll, nickName }}
          isPending={{ isTodosIncompleted, todosCompleted, todosTotal, SeccionPageTitle }}
        />

        <Search
          accion={onSearch}
          value={state.searchValue}
        />

        <ItemsContainer>
          {isTodosExisting && <TodosRenderItems dataTodosFiltered={dataTodosFiltered} todos={todos} setTodos={setTodos} nickName={nickName}/>}
          {isTodosFinished && <TodosRenderCongratulations nickName={nickName} />}
        </ItemsContainer>

        <TodosStorageListener setLoading = { setLoading }/>

      </div >
    </>
  )
}

export { TodosUser }