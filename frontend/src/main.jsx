import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { About, Cart, Checkout, Contact, FAQ, ProductDetail, Products, Login } from './pages'
import App from './App'
import './index.css'
import { Footer, Header } from './components'
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
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </Provider>
  </React.StrictMode>,
)
