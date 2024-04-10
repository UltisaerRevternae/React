import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/styles.css';
import { App } from './App';
import { GlobalContextProvider } from './Context/global';
import { IconsContextProvider } from './Context/icons';
import { SectionContextProvider } from './Context/section';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <GlobalContextProvider>
    <SectionContextProvider>
      <IconsContextProvider>
        <App />
      </IconsContextProvider>
    </SectionContextProvider>
  </GlobalContextProvider>
);
