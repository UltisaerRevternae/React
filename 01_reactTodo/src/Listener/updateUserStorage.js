import { getUser } from "../Global/storage"

const updateUserStorage = (data) => {
  const oldData = getUser()
  const newData = {
    isNew : false,
    userName : data[0],
    nickName : data[1],
    password : data[2],
    language : data[3],
    icon : data[4]
  }

  const updatedData = { ...oldData, ...newData };
  localStorage.setItem('user' , JSON.stringify(updatedData))

}
export { updateUserStorage }