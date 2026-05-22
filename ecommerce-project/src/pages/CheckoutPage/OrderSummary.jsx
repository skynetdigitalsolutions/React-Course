import './CheckoutPage.css';
import './CheckoutHeader.css';
import { DeliveryOptions } from './DeliveryOptions.jsx';
import { CartitemsDetails } from '../../components/CartitemsDetails.jsx';

export function OrderSummary({ cart, deliveryOptions,loadCart }) {
	return (
		<div className="order-summary">
			{deliveryOptions.length > 0 &&
				cart.map((cartItem) => {
					return (
						<div key={cartItem.productId} className="cart-item-container">

							<div className="cart-item-details-grid">
								<CartitemsDetails cartItem={cartItem} loadCart = {loadCart}/>
							<DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
							</div>
						</div>
					);
				})}
		</div>
	);
}
