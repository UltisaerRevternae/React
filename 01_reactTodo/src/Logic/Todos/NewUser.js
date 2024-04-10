import { ButtonIcons } from "../../Components/Button/ButtonIcons"
import { ItemsContainer } from "../../Components/Items/ItemsContainer"
import { TitlePrimary } from "../../Components/Title/TitlePrimary"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import btnAddComplete from '../../Assets/btnAddComplete.svg'
import { useContext } from "react"
import { editUserData, getUser } from "../../Global/storage"
import { GlobalContext } from "../../Context/global"

const NewUser = () => {
  const { setOpenModal } = useContext(GlobalContext)
  const nameUser = !!getUser().nickName ? getUser().nickName : 'user'

  return (
    <div className="Container">
      <TitlePrimary>Create Todo</TitlePrimary>

      <ItemsContainer>
        <section className="NewUser_content">
          <TitleSecondary text={`Welcome ${nameUser} you no have a todos, you can create one Try!`} />
          <ButtonIcons icon={btnAddComplete} accion={() => {
            setOpenModal(true)
            editUserData('hasTodos', true)
          }} />
        </section>
      </ItemsContainer>
    </div>
  )
}

export { NewUser }