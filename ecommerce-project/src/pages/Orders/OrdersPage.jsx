import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header.jsx';
import './OrdersPage.css';
import { OrdersGrid } from './OrdersGrid.jsx';
import { OrdersHeader } from './OrdersHeader.jsx';

export function OrdersPage({ cart,loadCart }) {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await axios.get('/api/orders?expand=products');
			setOrders(response.data);
		};
		getProducts();
	}, []);
	return (
		<>
			<Header cart={cart} />

			<div className="orders-page">
				<div className="page-title">Your Orders</div>

				<div className="orders-grid">
					{orders.map((order) => {
						return (
							<div key={order.id} className="order-container">
								<OrdersHeader order={order} />
								<OrdersGrid order={order} loadCart = {loadCart}/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
