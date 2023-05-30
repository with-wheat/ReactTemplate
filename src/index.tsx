import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'

import { ThemeProvider } from 'styled-components'
import theme from '@/assets/css/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
