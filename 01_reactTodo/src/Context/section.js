import { createContext, useState } from 'react';
import { getUser } from '../Global/storage';

const SectionContext = createContext();
const SectionContextProvider = ({ children }) => {

  const [todos, setTodos] = useState([])
  const [hasTodos, setHasTodos] = useState(getUser().hasTodos)
  const [todosFilter, setTodosFilter] = useState('ALL')

  return (
    <SectionContext.Provider
      value={{
        todos,
        setTodos,
        hasTodos,
        setHasTodos,
        todosFilter,
        setTodosFilter,
      }}>
      {children}
    </SectionContext.Provider>
  )
}

export { SectionContext, SectionContextProvider };
