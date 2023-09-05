import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { Portfolio } from './Portfolio.jsx'
import './index.css';
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <Portfolio />
    </Provider>
  </React.StrictMode>,
)
