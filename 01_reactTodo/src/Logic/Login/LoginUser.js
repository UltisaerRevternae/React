import { useContext } from "react";
import { ButtonPrimary } from "../../Components/Button/ButtonPrimary";
import { InfoPrimary } from "../../Components/Information/InfoPrimary";
import { GlobalContext } from "../../Context/global";

const LoginUser = ({isNew, user }) => {
  const { setPage } = useContext(GlobalContext);

  if (isNew) {
    return (
      <>
        <InfoPrimary text={"Task management & to do list"} />
        <ButtonPrimary
          text={"Let’s Start"}
          accion={() => setPage("HOME")}
        />
      </>
    );
  }
  return (
    <InfoPrimary
      text={"Welcome"}
      user={user}
      label={"look yout tasks"}
      accion={() => setPage("HOME")}
    />
  );
};
export { LoginUser };
