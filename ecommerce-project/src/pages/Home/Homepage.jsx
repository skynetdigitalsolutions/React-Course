import './Homepage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';

export function HomePage({ cart, loadCart }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getResponse = async () => {
			const response = await axios.get('/api/products');
			setProducts(response.data);
		};

		getResponse();
	}, []);

	return (
		<>
			<Header cart={cart} />

			<div className="home-page">
				<ProductsGrid products={products} loadCart={loadCart} />
			</div>
		</>
	);
}
