import { useContext, useEffect, useState } from "react";
import { UserStorageContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";

const EditAccount = () => {
  const navigate = useNavigate();
  const { isNewUser, accountUser, setNewUser } = useContext(UserStorageContext);
  const [newDataUser, setNewDataUser] = useState(accountUser);
  const [warning, setWarnig] = useState({ type: false });

  useEffect(() => {
    if (isNewUser) {
      navigate("/Shopi/sign_in");
    }
  }, [isNewUser, navigate]);

  const editAccountData = () => {

    const accountData = document.querySelectorAll(
      ".accountDataInfoEdit span input"
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

    localStorage.setItem('user' , JSON.stringify(data))
    setNewUser(data)
    navigate('/Shopi/')
  };


  const handleDataUserChange = (type, value) => {
    setNewDataUser({ ...newDataUser, [type]: value });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-1 max-w-96 min-w-80 h-auto rounded-lg shadow-lg px-6 py-12">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Edit Account</h1>
          <p className="font-light">Change the data you need</p>
        </div>

        <div className="accountDataInfoEdit flex flex-col gap-2">
          <span className="font-medium flex h-8 items-center">
            <p className="w-32">User</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder={accountUser.user}
              value={newDataUser.user}
              onChange={(e) => handleDataUserChange("user", e.target.value)}
            />
          </span>

          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Email</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder={accountUser.email}
              value={newDataUser.email}
              onChange={(e) => handleDataUserChange("email", e.target.value)}
            />
          </span>

          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Password</p>
            <input
              className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500 focus:outline-none"
              placeholder={accountUser.password}
              value={newDataUser.password}
              onChange={(e) => handleDataUserChange("password", e.target.value)}
            />
          </span>
        </div>

        <button
          className={"mt-8 w-full rounded-lg py-1 px-6 bg-gray-200 font-medium"}
          onClick={() => editAccountData()}
        >
          Confirm
        </button>

        {!warning.type && (
          <div className="w-72 font-light text-sm leading-none text-center mt-6 mx-auto">
            {warning.message}
          </div>
        )}
      </div>
    </Layout>
  );
};

export { EditAccount };
