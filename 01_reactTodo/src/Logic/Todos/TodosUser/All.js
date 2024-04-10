import React, { useContext, useMemo } from "react"
import trahsPopover from "../../Assets/trahsPopover.svg"
import iconCongratulations from "../../Assets/iconCongratulations.svg"
import { ItemsContainer } from "../../Components/Items/ItemsContainer"
import { Search } from "../../Components/Input/Search"
import { TitlePrimary } from "../../Components/Title/TitlePrimary"
import { Item } from "../../Components/Items/Item"
import { ListenerSearchTodos } from "../../Listener/searchTodos"
import { changeCompleteTodo } from "../../Listener/changeCompleteTodo"
import { deleteTodo } from "../../Listener/deleteTodo"
import { getUser, getTodos } from "../../Global/storage"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import { editTodo } from "../../Listener/editTodo"
import { toogleTodo } from "../../Listener/toogleTodo"
import { SectionContext } from "../../Context/section"

const All = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const { todos, setTodos, todosFilter } = useContext(SectionContext)

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
  }, [setTodos])

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

  const completedTodos = todos.filter(({ completed }) => completed).length
  const totalTodos = todos.length

  const existingTodos = useMemo(() => {
    return totalTodos !== 0 && !loading && !error
  }, [totalTodos, loading, error])

  const finishedTodos = useMemo(() => {
    return totalTodos === 0 && !loading && !error;
  }, [totalTodos, loading, error]);

  const isCompletedAllTodos = useMemo(() => {
    return (completedTodos === totalTodos) && !loading && !error;
  }, [completedTodos, totalTodos, loading, error]);

  const isExistingTodos = useMemo(() => {
    return (totalTodos !== 0) && (totalTodos !== completedTodos) && !loading && !error;
  }, [totalTodos, completedTodos, loading, error]);

  const nickName = !!getUser().nickName ? getUser().nickName : 'User'
  const handleSearch = (e) => ListenerSearchTodos(e, setSearchValue);

  const renderTodos = () => {
    return filterTodosBySearch.map(todo => (
      <Item
        accionChange={() => changeCompleteTodo(todo.id, todos, setTodos)}
        text={todo.text}
        completed={todo.completed}
        key={todo.id}
        accionDelete={() => deleteTodo(todo.id, todos, setTodos)}
        accionEdit={(e) => editTodo(todo.id, e, todos, setTodos)}
        accionToggle={(e) => toogleTodo(e)}
      />
    ));
  };

  const renderCongratulations = () => {
    return (
      <section className="CongratulationsContainer">
        <TitleSecondary text={`${nickName} you finished everything, congratulations`} />
        <img src={iconCongratulations} alt="congratulations" />
      </section>
    )
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

        {loading && <TitlePrimary>Loading</TitlePrimary>}
        {error && <TitlePrimary>Error</TitlePrimary>}
        {isCompletedAllTodos && <TitlePrimary>Nice Job {nickName}</TitlePrimary>}
        {isExistingTodos && <div>
          <TitlePrimary>Complete {completedTodos} of {totalTodos} Todos</TitlePrimary>
          <TitleSecondary text={SeccionPageTitle} className={'All_SecondaryTitle'} />
        </div>}

        <Search
          accion={(e) => handleSearch(e)}
          value={searchValue}
        />


        {existingTodos &&
          <ItemsContainer>
            {renderTodos()}
          </ItemsContainer>}

        {finishedTodos &&
          <ItemsContainer>
            {renderCongratulations()}
          </ItemsContainer>}

        <img 
          className="TodosContainerTrahs"
          src={trahsPopover} 
          alt="trahs" 
          key={1} 
          onClick={() => {
            localStorage.setItem('todos' , '[]')
            setTodos([])
          }}
        />
      </div >
    </>

  )
}

export { All }