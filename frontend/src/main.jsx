import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { About, Cart, Checkout, Contact, FAQ, ProductDetail, Products, Login, Signup, Profile, CheckoutPrompt } from './pages'
import App from './App'
import './index.css'
import { Footer, Header } from './components'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/checkout-prompt' element={<CheckoutPrompt />} />
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
