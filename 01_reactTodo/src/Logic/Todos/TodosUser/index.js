import React, { useContext } from "react"
import { SectionContext } from "../../../Context/section"
import { TodosFiltered } from "./TodosFiltered"
import { TodosInformation } from "./TodosInformation"
import { getUser } from "../../../Global/storage"
import { TodosRenderCongratulations, TodosRenderItems, TodosStorageListener, TodosUserHeader } from "./TodosRender"
import { Search } from "../../../Components/Input/Search"
import { ItemsContainer } from "../../../Components/Items/ItemsContainer"
import { ListenerSearchTodos } from "../../../Listener/searchTodos"

const TodosUser = () => {

  const [searchValue, setSearchValue] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const { todos, setTodos, todosFilter } = useContext(SectionContext)

  const dataTodosFiltered = TodosFiltered({
    searchValue,
    setLoading,
    setError,
    todos,
    setTodos,
    todosFilter,
    loading
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
      loading,
      error,
      getUser: getUser()
    })
  }

  const handleSearch = (e) => ListenerSearchTodos(e, setSearchValue);

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
          onLoading={loading}
          onError={error}
          isCompleted={{ isTodosCompletedAll, nickName }}
          isPending={{ isTodosIncompleted, todosCompleted, todosTotal, SeccionPageTitle }}
        />

        <Search
          accion={(e) => handleSearch(e)}
          value={searchValue}
        />

        <ItemsContainer>
          {isTodosExisting && <TodosRenderItems dataTodosFiltered={dataTodosFiltered} todos={todos} setTodos={setTodos} nickName={nickName}/>}
          {isTodosFinished && <TodosRenderCongratulations nickName={nickName} />}
        </ItemsContainer>

        <TodosStorageListener setLoading = { setLoading }/>
        {/* <TodosConfirmStorage 
          setLoading = { setLoading }
        /> */}

      </div >
    </>
  )
}

export { TodosUser }