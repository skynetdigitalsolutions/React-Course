import { CheckoutHeader } from './CheckoutHeader'
import { PaymentSummary } from './PaymentSummary.jsx'
import axios from 'axios'
import {OrderSummary} from './OrderSummary.jsx'
import {useState,useEffect} from 'react'
import './CheckoutPage.css'

export function CheckOut({cart}) {
    const [deliveryOptions,setDelivery] = useState([])
    const [paymentSummary,setPaymentSummary] = useState([])

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDelivery(response.data)
            })
        
        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data)
            })
    }, [])

    return (
        <>
            <title>CheckOut</title>
            <CheckoutHeader/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
            <OrderSummary cart = {cart} deliveryOptions = {deliveryOptions}/>
            <PaymentSummary paymentSummary = {paymentSummary}/>

                </div>
            </div>
        </>
    )
}