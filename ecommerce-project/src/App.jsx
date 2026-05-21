import { Routes, Route } from 'react-router'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { HomePage } from './pages/Homepage.jsx'
import { CheckOut } from './pages/CheckoutPage/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage.jsx' 
import { ErrorPage } from './pages/Errorpage.jsx'
import './App.css'

function App() {

  const [cart,setCart] = useState([])

  useEffect(() => {

     axios.get('/api/cart-items?expand=product')
     .then((response) => {
      setCart(response.data)
     })

  },[])

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckOut cart = {cart}/>} />
      <Route path = 'orders' element = {<OrdersPage cart = {cart}/>} />
      <Route path='tracking' element = {<TrackingPage/>} />
      <Route path='*' element = {<ErrorPage/>}/>
    </Routes>
  )
}

export default App
