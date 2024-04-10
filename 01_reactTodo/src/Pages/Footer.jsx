import { ButtonIcons } from "../Components/Button/ButtonIcons";
import btnCompleted from "../Assets/btnCompleted.svg";
import btnPending from "../Assets/btnPending.svg";
import btnAdd from "../Assets/btnAdd.svg";
import btnUser from "../Assets/btnUser.svg";
import btnHome from "../Assets/btnHome.svg";
import React, { useContext } from "react";
import { SectionContext } from "../Context/section";
import { GlobalContext } from "../Context/global";

const Footer = () => {
  const { setTodosFilter } = useContext(SectionContext);
  const { setPage, setOpenModal } = useContext(GlobalContext);
  const btnHomeSet = (filter) => {
    setPage("HOME");
    setTodosFilter(filter);
  };

  return (
    <div className="FooterContainer">
      <ButtonIcons icon={btnCompleted} accion={() => btnHomeSet("COMPLETED")} />
      <ButtonIcons icon={btnPending} accion={() => btnHomeSet("PENDING")} />
      <ButtonIcons icon={btnAdd} accion={() => setOpenModal(true)} />
      <ButtonIcons icon={btnUser} accion={() => setPage("ACCOUNT")} />
      <ButtonIcons icon={btnHome} accion={() => btnHomeSet("HOME")} />
    </div>
  );
};

export { Footer };
