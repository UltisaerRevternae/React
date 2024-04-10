import { createContext, useState } from "react";
import { getUser } from "../Global/storage";
import { imagesIcons } from "../Global/images";

const IconsContext = createContext()

const IconsContextProvider = ({ children }) => {
  const userIsNew = getUser().isNew === undefined ? true : getUser().isNew;

  const [iconSelect, setIconSelect] = useState(imagesIcons[Math.floor(Math.random() * imagesIcons.length)])
  const [newUser, setNewUser] = useState(userIsNew)

  return (
    <IconsContext.Provider
      value={{
        iconSelect,
        setIconSelect,
        newUser,
        setNewUser
      }}>
      {children}
    </IconsContext.Provider>
  )
}
export { IconsContext, IconsContextProvider }