import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {defineCustomElements} from "my-library/loader";


// This method is already called by the autogenerated output of the stencil react wrapper
// Which causes this html to be injected into the head:
// <style data-styles="">{visibility:hidden}.hydrated{visibility:inherit}</style>
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
