import './Homepage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';
import {useSearchParams} from 'react-router'


export function HomePage({ cart, loadCart }) {
	const [products, setProducts] = useState([]);
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search');

	useEffect(() => {
		const getResponse = async () => {
			const urlPath = search ? `/api/products?search=${search}` : '/api/products';
			const response = await axios.get(urlPath)
			setProducts(response.data)
		};

		getResponse();
	}, [search]);

	return (
		<>
			<Header cart={cart} />

			<div className="home-page">
				<ProductsGrid products={products} loadCart={loadCart} />
			</div>
		</>
	);
}
