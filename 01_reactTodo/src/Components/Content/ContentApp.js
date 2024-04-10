const ContentApp = ({ onLogin, onAccount, onHome, page }) => {

  return (
    <div className='ContentApp'>
      {page === 'LOGIN' && onLogin()}
      {page === 'ACCOUNT' && onAccount()}
      {page === 'HOME' && onHome()}
    </div>)
}

export { ContentApp }