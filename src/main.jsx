import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import {Provider} from "react-redux"
import { getQuotes } from './features/quotes/quoteSlice.js'
import { getSeries } from './features/series/seriesSlice.js'

store.dispatch(getQuotes())
store.dispatch(getSeries())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
