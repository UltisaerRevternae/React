import { imagesIcons } from "./images"

const ItemsStorage = {
  USER: 'user', 
  TODOS: 'todos'
}

const getDataStorage = ({ nameItem, defaultItem}) => {
  const data = localStorage.getItem(nameItem)
  if (!data) {
    return defaultItem
  }
  return JSON.parse(data)
}

const updateDataStorage = ({ nameItem, dataItem, setStateItem} ) => {
  setStateItem(dataItem)
  localStorage.setItem(nameItem, JSON.stringify(dataItem))
}

const getImageUser = () => {
  try {
    const data = JSON.parse(localStorage.getItem('user'))
    return data.icon
  } catch (e) {
    return imagesIcons[parseInt(Math.random() * imagesIcons.length)]
  }

}
const getUser = () => getDataStorage({ nameItem: ItemsStorage.USER , defaultItem: { isNew: true, hasTodos: false }})
const getTodos = () => getDataStorage({ nameItem: ItemsStorage.TODOS, defaultItem: []})
const updateTodos = (data, state) => updateDataStorage({ nameItem: ItemsStorage.TODOS , dataItem: data, setStateItem: state})

const editUserData = (editValue, data) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const newData = {...user , [editValue]: data}
  localStorage.setItem('user' , JSON.stringify(newData))
}
export { getUser , getTodos, updateTodos, getImageUser, editUserData}

