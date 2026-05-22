import {useState,useEffect} from 'react'
import axios from 'axios'
import {Header} from '../../components/Header.jsx'
import './OrdersPage.css'
import {OrdersGrid} from './OrdersGrid.jsx'
import { OrdersHeader } from './OrdersHeader.jsx'


export function OrdersPage({cart}){
    const [orders,setOrders] = useState([])

    useEffect(() => {
      axios.get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data)
      })
    } ,[])
    return(
        <>
      <Header cart = {cart}/>

    <div className = "orders-page">
      <div className = "page-title">Your Orders</div>

      <div className = "orders-grid">
        {orders.map((order) => {
          return(
        <div key = {order.id} className = "order-container">
          <OrdersHeader order = {order}/>
          <OrdersGrid order = {order} />
        </div>

          )
        })}
      </div>
    </div>
        
        </>
    )
}