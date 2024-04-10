import { TitleSecondary } from "../Title/TitleSecondary"

const EditInput = ({ accion, value, placeholder, text, className }) => {

  return (
    <div>
      <TitleSecondary text={text}/>
      <input className={`input ${className}`}
        onChange={accion}
        value={value}
        placeholder={placeholder}>
      </input>
    </div>
  )
}

export { EditInput }