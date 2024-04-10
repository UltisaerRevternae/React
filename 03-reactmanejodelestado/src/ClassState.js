import React from "react";

class ClassState extends React.Component {
  render() {
    return (
<div className="grid place-content-center bg-slate-800 dark:bg-slate-300 p-6 gap-3 w-screen transition-colors">
      <div className="text-slate-100 dark:text-slate-800">
        <h2 className="text-xl font-medium">Eliminar ClassState</h2>
        <p className="font-light">Por favor escribe el codigo de Seguridad</p>
      </div>

      <div className="flex justify-center">
        <input 
          placeholder="Codigo de seguridad" 
          className="bg-slate-100 w-56 rounded-l-lg py-1 px-4 focus:outline-none"
        />
        <button
          className="bg-slate-300 dark:bg-slate-800 rounded-r-lg py-1 px-4 text-slate-800 dark:text-slate-100"
        >Comprobar</button>
      </div>
    </div>
    )
  }
}

export { ClassState }