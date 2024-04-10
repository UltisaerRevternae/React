import iconBack from '../../Assets/iconBack.svg'
import { useContext, useState } from "react"
import { ButtonPrimary } from "../../Components/Button/ButtonPrimary"
import { SelectIcons } from "../../Components/Content/SelectIcons"
import { EditInput } from "../../Components/Input/EditInput"
import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import { Warning } from "../../Components/Information/Warning"
import { warningInputs } from "../../Listener/warningInputs"
import { IconsContext } from "../../Context/icons"
import { ButtonIcons } from "../../Components/Button/ButtonIcons"
import { GlobalContext } from '../../Context/global'

const dataCreateAccount = [
  { text: 'Full Name', placeholder: "Enter your full name" },
  { text: 'Nickname', placeholder: "What's your nickname" },
  { text: 'Password', placeholder: "*********" },
  { text: 'Language', placeholder: "English?" },
]

const AccountCreate = () => {
  const { iconSelect, setNewUser} = useContext(IconsContext)
  const { setPage } = useContext(GlobalContext)
  const [warning, setWarning] = useState(false)

  const successCreateAccount = () => {
    const success = warningInputs('.AccountCreate_Section div input', setWarning, iconSelect)
    if (success) setNewUser(false)
  }
  return (
    <>
      <ButtonIcons 
        icon={iconBack} 
        accion={() => setPage('HOME')}
        className = {'AccountCreate_Back'}
      />
      <TitleSecondary text={'Create Account'} />
      <SelectIcons img={iconSelect} isSelect={true}/>
      <section className="AccountCreate_Section">
        {dataCreateAccount.map((data, index) => {
          return <EditInput text={data.text} key={index} placeholder={data.placeholder}/>
        })}
      </section>

      <ButtonPrimary
        text={'Create Account'}
        accion = {() => successCreateAccount()}
      />

      { warning && <Warning text={'The information is no completed'}/>}
    </>
  )
}

export { AccountCreate }