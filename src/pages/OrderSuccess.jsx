import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OrderSuccess.css'

function OrderSuccess() {
  const navigate = useNavigate()
  const [orderNumber] = useState(() => Math.floor(Math.random() * 100000))

  return (
    <div className="page order-success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p className="success-message">
          Thank you for your order. We've sent a confirmation email with your order details.
        </p>
        
        <div className="success-details">
          <div className="detail-item">
            <strong>Order Number:</strong>
            <span>#{orderNumber}</span>
          </div>
          <div className="detail-item">
            <strong>Estimated Delivery:</strong>
            <span>3-5 business days</span>
          </div>
        </div>

        <div className="success-actions">
          <button onClick={() => navigate('/profile')} className="view-orders-btn">
            View Orders
          </button>
          <button onClick={() => navigate('/shop')} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
