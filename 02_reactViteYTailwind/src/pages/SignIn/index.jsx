import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { UserStorageContext } from "../../context";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { isNewUser, accountUser } = useContext(UserStorageContext);
  // const [warning, setWarnig] = useState({});
  const navigate = useNavigate();

  const disabledStyles = (dataType) => {
    if (dataType) {
      return "bg-gray-200 font-medium shadow-none";
    }
  };

  const loginUser = () => {
    // if (isNewUser) {
    //   setWarnig({
    //     message: "Log in",
    //     description: "you need create account",
    //     type: true,
    //   });
    //   return;
    // }
    navigate("/Shopi/");
  };

  const signUpUser = () => {
    // if (!isNewUser) {
    //   setWarnig({
    //     message: "Sign Up",
    //     description: "you have a existing account",
    //     type: true,
    //   });
    //   return;
    // }
    navigate("/Shopi/sign_in/create_account");
  };
  return (
    <Layout>
      <div className="flex flex-col gap-1 max-w-96 min-w-80 h-auto rounded-lg shadow-lg px-6 py-12">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Login</h1>
          <p className="font-light">
            Welcome back, Please login to your account
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Email</p>
            <p className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500">
              {accountUser.email}
            </p>
          </span>

          <span className="font-medium flex h-8 items-center">
            <p className="w-32">Password</p>
            <p className=" bg-gray-200 w-full flex h-8 rounded-lg py-1 px-6 text-gray-500">
              {accountUser.password}
            </p>
          </span>
        </div>

        <div className="flex gap-2 font-light mt-8">
          {!isNewUser && (
            <>
              <button
                className={`w-full rounded-lg py-1 px-6  shadow-md ${disabledStyles(
                  isNewUser
                )}`}
                onClick={() => loginUser()}
              >
                Log in
              </button>
              <button
                className={`w-full rounded-lg py-1 px-6  shadow-md ${disabledStyles(
                  !isNewUser
                )}`}
                onClick={() => navigate("/Shopi/sign_in/edit_account")}
              >
                Edit
              </button>
            </>
          )}

          {isNewUser && (
            <button
              className={`w-full rounded-lg py-1 px-6  shadow-md ${disabledStyles(
                !isNewUser
              )}`}
              onClick={() => signUpUser()}
            >
              Sign Up
            </button>
          )}
        </div>
        {/* {warning.message && (
          <div className="w-72 font-light text-sm leading-none text-center mt-6 mx-auto">
            Warning this button {warning.message} is disabled because{" "}
            {warning.description}{" "}
          </div>
        )} */}
      </div>
    </Layout>
  );
};

export { SignIn };
