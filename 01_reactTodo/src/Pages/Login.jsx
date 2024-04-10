import { getUser } from "../Global/storage";
import { LoginUser } from "../Logic/Login/LoginUser";
const user = getUser();

const Login = () => {
  return (
    <div className="LoginUser_Content">
      <LoginUser isNew={user.isNew} user={user.nickName} />
    </div>
  );
};
export { Login };
