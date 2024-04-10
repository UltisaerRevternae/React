import { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { UserStorageContext } from "../../context";

const CreateAccount = () => {
  const navigate = useNavigate()
  const [warning, setWarnig] = useState({ type: false });
  const { setNewUser, isNewUser } = useContext(UserStorageContext);

  useEffect(() => {
    if (!isNewUser) {
      navigate('/Shopi/sign_in')
    }
  }, [isNewUser, navigate])

  const createAccountData = () => {

    const accountData = document.querySelectorAll(
      ".accountDataInfo span input"
    );
    const isCompleteAllData = Object.values(accountData).every(
      (data) => data.value.trim() !== ""
    );
    setWarnig({
      type: isCompleteAllData,
      message: "You need complete the information for create the account",
    });
    if (!isCompleteAllData) return;

    const [user, email, password] = [...Object.values(accountData)];

    const validateEmail =
      email.value.includes("@") && email.value.includes(".");
    setWarnig({
      type: validateEmail,
      message: "Invalid email check again",
    });
    if (!validateEmail) return;

    const data = {
      isNewUser: false,
      user :  user.value,
      email : email.value,
      password : password.value,
    };

    setNewUser(false)
    localStorage.setItem('user' , JSON.stringify(data))
    navigate('/Shopi/')
  };

  return (
    <Layout>
      <div className="flex flex-col gap-1 max-w-96 min-w-80 h-auto rounded-lg shadow-lg px-6 py-12">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Create Account</h1>
          <p className="font-light">Welcome user, complete the information</p>
        </div>

        <div className="accountDataInfo flex flex-col gap-2">
          <span className="font-medium flex h-8 items-center">
            <p className="w-32">User</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder="nickname"
            />
          </span>

          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Email</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder="user@gmail.com"
            />
          </span>

          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Password</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder="*************"
            />
          </span>
        </div>

        <div className="flex gap-2 font-medium mt-8">
          <button
            className={
              "w-full h-12 bg-gray-950 text-gray-50 rounded-lg py-1 px-6  shadow-md "
            }
            onClick={() => createAccountData()}
          >
            Confirm
          </button>
        </div>
        {!warning.type && (
          <div className="w-72 font-light text-sm leading-none text-center mt-6 mx-auto">
            {warning.message}
          </div>
        )}

      </div>
    </Layout>
  );
};
export { CreateAccount };
