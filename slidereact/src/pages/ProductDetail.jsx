import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <button onClick={() => navigate('/shop')}>Back to Shop</button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  const handleBuyNow = () => {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <div className="page product-detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="product-detail-container">
        <div className="product-image-section">
          <div className="product-image-large">{product.image}</div>
        </div>

        <div className="product-details-section">
          <div className="product-category">{product.category}</div>
          <h1>{product.name}</h1>
          
          <div className="product-rating-detail">
            ⭐ {product.rating} <span>({product.reviews} reviews)</span>
          </div>

          <p className="product-description-full">{product.description}</p>

          <div className="product-price-large">${product.price}</div>

          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-actions">
            <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <div className="product-guarantees">
            <div className="guarantee-item">🚚 Free shipping on orders over $100</div>
            <div className="guarantee-item">↩️ 30-day return policy</div>
            <div className="guarantee-item">🔒 Secure payment</div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-grid">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div
                key={relatedProduct.id}
                className="related-card"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="related-image">{relatedProduct.image}</div>
                <h4>{relatedProduct.name}</h4>
                <p className="related-price">${relatedProduct.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
