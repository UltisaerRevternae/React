import React from 'react'
import iconDelete from '../../Assets/iconDelete.svg'
import iconComplete from '../../Assets/iconComplete.svg'
import { stateTodo } from '../../Listener/stateTodo'
const Item = ({ text, completed, accionChange, accionDelete, accionEdit, accionToggle }) => {

  return (
    <div className={`ItemComplete ItemComplete_${completed}`}>
      <img
        className='ItemIconComplete'
        src={iconComplete}
        alt='Icon complete'
        onClick={accionChange}
      />
      <section 
        onDoubleClick={accionToggle} 
        onKeyDown={(e) => {if(e.code === 'Enter') stateTodo(e)}}
        onBlur={(e) => stateTodo(e)}
      >
        <label >{text}</label>
        <input 
          className='hidden' 
          placeholder={text} 
          onChange={accionEdit}
        />
      </section>
      <img
        className='ItemIconDelete'
        src={iconDelete}
        alt='Icon delete'
        onClick={accionDelete}  
      />
    </div>

  )
}

export { Item }