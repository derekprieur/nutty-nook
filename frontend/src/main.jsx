import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { Cart, Checkout, ProductDetail, Products } from './pages'
import App from './App'
import './index.css'
import { Header } from './components'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
