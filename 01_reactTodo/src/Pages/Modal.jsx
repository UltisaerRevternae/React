import React from "react"; 
import { createPortal } from "react-dom";

const Modal = ({children}) => {
  return createPortal (
    <div className="modalBackground">
      { children }
    </div>,
    document.querySelector('#modal')
  )
}

export { Modal }