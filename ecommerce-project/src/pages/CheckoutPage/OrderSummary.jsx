import './CheckoutPage.css'
import './CheckoutHeader.css'
import { DeliveryOptions } from './DeliveryOptions.jsx';
import { CartitemsDetails } from '../../components/CartitemsDetails.jsx';

export function OrderSummary({cart,deliveryOptions}){
    return(
        
                    <div className="order-summary">
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {
                            

                            return(         
                        <div key = {cartItem.productId} className="cart-item-container">
                            <DeliveryOptions deliveryOptions = {deliveryOptions} cartItem = {cartItem}/>

                            <div className="cart-item-details-grid">
                               <CartitemsDetails cartItem = {cartItem} />
                            </div>
                        </div>
                            );
                        })}
                    </div>
    )
}