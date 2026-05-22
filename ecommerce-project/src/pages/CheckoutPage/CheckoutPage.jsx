import { CheckoutHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary.jsx';
import axios from 'axios';
import { OrderSummary } from './OrderSummary';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';

export function CheckOut({ cart, loadCart }) {
	const [deliveryOptions, setDelivery] = useState([]);
	const [paymentSummary, setPaymentSummary] = useState([]);

	useEffect(() => {
		const getDeliveryOptions = async () => {
			let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
			setDelivery(response.data);
		};
		getDeliveryOptions();
	}, [cart]);

	useEffect(() => {
		const getPaymentSummary = async () => {
			let response = await axios.get('/api/payment-summary');
			setPaymentSummary(response.data);
		};
		getPaymentSummary();
	}, [cart]);

	return (
		<> 
			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
					<PaymentSummary paymentSummary={paymentSummary} />
				</div>
			</div>
		</>
	);
}
