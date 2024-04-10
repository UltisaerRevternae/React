import { TodosUser } from "../Logic/Todos/TodosUser"
import { Footer } from "../Pages/Footer"
import { NewUser } from "../Logic/Todos/NewUser"

const Home = ({ hasTodos }) => {
  return (
    <>
      {!hasTodos && <NewUser/>}
      {hasTodos && <TodosUser/>}
      <Footer/>
    </>
  )
}

export { Home }
