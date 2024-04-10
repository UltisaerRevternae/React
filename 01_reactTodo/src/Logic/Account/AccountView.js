import { TitleSecondary } from "../../Components/Title/TitleSecondary"
import { getUser } from "../../Global/storage"
import { Footer } from "../../Pages/Footer"

const AccountView = () => {
  const user = getUser()
  return (
    <>
      <div className="AccountView_container">
        <div className="AccountView_navbar">
          <img src={user.icon} alt="" />
          <TitleSecondary text={user.nickName} />
        </div>

        <div className="AccountView_info">
          <div>{user.nickName}</div>
          <div>{user.password}</div>
          <div>{user.language}</div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export { AccountView }