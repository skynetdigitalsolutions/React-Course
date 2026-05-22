import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/Home/Homepage.jsx';
import { CheckOut } from './pages/CheckoutPage/CheckoutPage.jsx';
import { OrdersPage } from './pages/Orders/OrdersPage.jsx';
import { TrackingPage } from './pages/Tracking/TrackingPage.jsx';
import { ErrorPage } from './pages/Errors/Errorpage.jsx';
import './App.css';

function App() {
	const [cart, setCart] = useState([]);

	const loadCart = async () => {
		const response = await axios.get('/api/cart-items?expand=product');
		setCart(response.data);
	};

	useEffect(() => {
		loadCart();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
			<Route path="checkout" element={<CheckOut cart={cart} loadCart = {loadCart}/>} />
			<Route path="orders" element={<OrdersPage cart={cart} />} />
			<Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
			<Route path="*" element={<ErrorPage cart={cart} />} />
		</Routes>
	);
}

export default App;
