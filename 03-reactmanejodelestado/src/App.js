import { UseState } from './UseState';
import { ClassState } from './ClassState';
import './App.css';

function App() {
  return (
    <div className='App transition-all grid place-content-center h-screen w-screen overflow-hidden grid-rows-2 relative'>
      <UseState
        name="UseState"
      />
      <ClassState
        name="ClassState"
      />
      <button 
      className='transition-colors absolute top-2 right-2 w-16 h-8 bg-slate-800 rounded-lg dark:bg-slate-300'
      onClick={() => {
          document.documentElement.classList.toggle('dark')
      }}
      >
        
      </button>
    </div>
  );
}

export default App;
