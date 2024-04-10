import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {

  const [page, setPage] = useState('LOGIN');
  const [openModal, setOpenModal] = useState(false)
  const [openIcons, setOpenIcons] = useState(false)

  return (
    <GlobalContext.Provider value={{
      page,
      openModal,
      openIcons,
      setPage,
      setOpenModal,
      setOpenIcons,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, GlobalContextProvider }