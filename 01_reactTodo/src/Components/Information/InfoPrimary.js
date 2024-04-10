const InfoPrimary = ({text, user, label, accion}) => {
  return (
    <div className="InfoPrimary_Content" onClick={accion}>
      <h1>{text} {user}</h1>
      <p>{label}</p>
    </div>
  )
}

export { InfoPrimary }