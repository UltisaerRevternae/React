import { ButtonPrimary } from "../Components/Button/ButtonPrimary";
import { imagesIcons } from "../Global/images";

const SelectIconsPage = ({ setOpenIcons, iconSelect , setIconSelect }) => {
  
  const icons = imagesIcons;
  const renderIcons = () => {
    return icons.map((value) => (
      <div key={value}>
        <img
          src={value}
          alt="Icon of user select"
          value={value}
          onClick={() => setIconSelect(value)}
        />
      </div>
    ));
  };
  return (
    <>
      <div className="SelectIconsLayout">
        <div className="SelectIconsLayout_Container">
          {renderIcons()}
          <section className="SelectIconsLayout_Major">
            <img src={iconSelect} alt="" />
          </section>
        </div>

        <ButtonPrimary text={"Confirm"} accion={() => {
          setOpenIcons(false)
        }} />
      </div>
    </>
  );
};

export { SelectIconsPage };
