import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import './Cart.css'

function Cart() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="page cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/shop')}>Continue Shopping</button>
        </div>
      </div>
    )
  }

  return (
    <div className="page cart-page">
      <h1>Shopping Cart ({cartItems.length} items)</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">{item.image}</div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>{getCartTotal() > 100 ? 'FREE' : '$10.00'}</span>
          </div>
          <div className="summary-row">
            <span>Tax (10%):</span>
            <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>${(getCartTotal() * 1.1 + (getCartTotal() > 100 ? 0 : 10)).toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
          <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
