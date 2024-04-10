const ButtonPrimary = ({text, accion}) => {
  return (
    <button className="ButtonPrimary_button buttons" onClick={accion}>{text}</button>
  )
}

export { ButtonPrimary }