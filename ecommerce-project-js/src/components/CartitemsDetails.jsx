import { formatMoney } from "../utils/money.js";
import axios from "axios";
import { useState } from "react";

export function CartitemsDetails({
  cartItem,
  loadCart,
}) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity ] = useState('')

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const handleQuantityKeyDown = async (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter'){
      updateQuantity()
    }else if(keyPressed === 'Escape'){
      setQuantity(cartItem.quantity)
      setIsUpdatingQuantity(false)
    }
  } 

  const updateQuantity = async () => {
	if(isUpdatingQuantity){
		await axios.put(`/api/cart-items/${cartItem.productId}` , {
			quantity:Number(quantity)

		})
		await loadCart()
		setIsUpdatingQuantity(false)
	}else{
		setIsUpdatingQuantity(true)
	}
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} 
      data-testid = 'cart-item-image'
      />

      <div className="cart-item-details">
        <div className="product-name"
        data-testid = 'cart-item-name'
        >{cartItem.product.name}</div>
        <div className="product-price"
        data-testid = 'cart-item-price'
        >
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span> Quantity: {
			isUpdatingQuantity ? 
				<input className = 'quantity-textbox' type="text" 
				value = {quantity}
				onChange = {updateQuantity}
				onKeyDown = {handleQuantityKeyDown}

				/> :
				<span className = 'quantity-label'
        data-testid = 'cart-item-quantity'
        > {cartItem.quantity} </span>
			}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
            data-testid = 'cart-item-delete-quantity-link'
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
