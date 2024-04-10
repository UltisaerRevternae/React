const ButtonIcons = ({ accion, icon, className}) => {
  return (
    <button className={`ButtonIcons ${className}`} onClick={accion}>
      <img src={icon} alt="button dinamic icon"></img>
    </button>
    )
}

export { ButtonIcons }