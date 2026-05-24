import { Link,useNavigate,useSearchParams } from 'react-router';
import './header.css';
import {useState} from 'react';

export function Header({ cart }) {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams()
	let totalQuantity = 0;

	const searchText = searchParams.get('search')

	cart.forEach((cartItem) => {
		totalQuantity += cartItem.quantity;
	});

	const [search, setSearchText] = useState(searchText || '')

	const updateSearchText = (event) => {
		setSearchText(event.target.value)
	};

	const searchProducts = () => {
		navigate(`/?search=${search}`)
	}

	return (
		<>
			<div className="header">
				<div className="left-section">
					<Link to="/" className="header-link">
						<img className="logo" src="src/assets/logo-white.png" />
						<img className="mobile-logo" src="src/assets/mobile-logo-white.png" />
					</Link>
				</div>

				<div className="middle-section">
					<input 
						className="search-bar" 
						type="text" 
						placeholder="Search" 
						value={search}
						onChange={updateSearchText}
					/>

					<button className="search-button"  
					onClick = {searchProducts}
					>
						<img className="search-icon" src="src/assets/icons/search-icon.png" />
					</button>
				</div>

				<div className="right-section">
					<Link className="orders-link header-link" to="/orders">
						<span className="orders-text">Orders</span>
					</Link>

					<Link className="cart-link header-link" to="/checkout">
						<img className="cart-icon" src="src/assets/icons/cart-icon.png" />
						<div className="cart-quantity">{totalQuantity}</div>
						<div className="cart-text">Cart</div>
					</Link>
				</div>
			</div>
		</>
	);
}
