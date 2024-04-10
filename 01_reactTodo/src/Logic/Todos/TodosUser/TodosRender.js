import { TitleSecondary } from "../../../Components/Title/TitleSecondary";
import { changeCompleteTodo } from "../../../Listener/changeCompleteTodo"
import { deleteTodo } from "../../../Listener/deleteTodo"
import { editTodo } from "../../../Listener/editTodo"
import { toogleTodo } from "../../../Listener/toogleTodo"
import { Item } from "../../../Components/Items/Item"
import { TitlePrimary } from "../../../Components/Title/TitlePrimary";
import iconCongratulations from "../../../Assets/iconCongratulations.svg"
import trahsPopover from "../../../Assets/trahsPopover.svg"
import { useStorageListener, withStorageListener } from "../../StorageAlert";
import { Modal } from "../../../Pages/Modal";
import { ButtonPrimary } from "../../../Components/Button/ButtonPrimary";


const TodosRenderItems = ({ dataTodosFiltered, todos, setTodos, nickName, openModal }) => {

  return (
    <>
      {dataTodosFiltered.length > 0 && (
        dataTodosFiltered.map(todo => (
          <Item
            accionChange={() => changeCompleteTodo(todo.id, todos, setTodos)}
            text={todo.text}
            completed={todo.completed}
            key={todo.id}
            accionDelete={() => deleteTodo(todo.id, todos, setTodos)}
            accionEdit={(e) => editTodo(todo.id, e, todos, setTodos)}
            accionToggle={(e) => toogleTodo(e)}
          />
        ))
      )}
      {dataTodosFiltered.length === 0 && (
        <section className="ContainerCenterTodos">
          <TitleSecondary text={`${nickName} you no have todos with this description`} />
        </section>
      )}
    </>
  );
}


const TodosRenderCongratulations = ({ nickName }) => {
  return (
    <section className="ContainerCenterTodos">
      <TitleSecondary text={`${nickName} you finished everything, congratulations`} />
      <img src={iconCongratulations} alt="congratulations" />
    </section>
  )
}

const TodosUserHeader = ({
  onLoading,
  onError,
  isCompleted,
  isPending }) => {

  return (
    <>
      {onLoading && <TitlePrimary>Loading</TitlePrimary>}
      {onError && <TitlePrimary>Error</TitlePrimary>}
      {isCompleted.isTodosCompletedAll && (
        <TitlePrimary>
          Nice Job {isCompleted.nickName}
        </TitlePrimary>
      )}
      {isPending.isTodosIncompleted && <div>
        <TitlePrimary>Complete {isPending.todosCompleted} of {isPending.todosTotal} Todos</TitlePrimary>
        <TitleSecondary text={isPending.SeccionPageTitle} className={'All_SecondaryTitle'} />
      </div>}
    </>
  )
}

const TodosContainerTrahs = ({ setTodos }) => {
  return (
    <img
      className="TodosContainerTrahs"
      src={trahsPopover}
      alt="trahs"
      key={1}
      onClick={() => {
        localStorage.setItem('todos', '[]')
        setTodos([])
      }}
    />
  )
}

// HOCs
const TodosConfirm = ({ isChangeStorage, saveChangesStorage }) => {

  return (
    <div>
      {isChangeStorage && (
        <Modal>
          <div className="modalContainer">
            <div className="AddTodos_container">
              <TitleSecondary text={"The information has changed"} />
              <ButtonPrimary
                text={'Refresh'}
                accion={saveChangesStorage}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

const TodosConfirmStorage = withStorageListener(TodosConfirm)

// ReactHooks
const TodosStorageListener = ({ setLoading }) => {
  const { isChangeStorage, saveChangesStorage } = useStorageListener({setLoading})

  return (
    <div>
      {isChangeStorage && (
        <Modal>
          <div className="modalContainer">
            <div className="AddTodos_container">
              <TitleSecondary text={"The information has changed"} />
              <ButtonPrimary
                text={'Refresh'}
                accion={saveChangesStorage}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
export {
  TodosRenderItems,
  TodosRenderCongratulations,
  TodosUserHeader,
  TodosContainerTrahs,
  TodosConfirmStorage,
  TodosStorageListener
}
