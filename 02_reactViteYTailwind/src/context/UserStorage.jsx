import { useEffect, useState } from "react";

const defaultDataAccountUser = {
  email: "",
  name: "",
  password: "",
};
const UserStorage = () => {
  const [isNewUser, setNewUser] = useState(true);
  const [isSignInUser, setSignInUser] = useState(false);
  const [accountUser, setAccountUser] = useState(false);

  useEffect(() => {
    const userNew = !localStorage.getItem("user") ? true : false;
    setNewUser(userNew);
    if (userNew) {
      setAccountUser(defaultDataAccountUser);
    } else {
      setAccountUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [isNewUser]);

  return {
    isNewUser,
    setNewUser,
    isSignInUser,
    setSignInUser,
    setAccountUser,
    accountUser,
  };
};

export { UserStorage };
