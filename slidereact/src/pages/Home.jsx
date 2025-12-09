import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Home.css'

function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to TechShop</h1>
        <p className="hero-subtitle">Your one-stop shop for premium tech products</p>
        <Link to="/shop">
          <button className="hero-btn">Shop Now →</button>
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
              <div className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    ⭐ {product.rating} ({product.reviews})
                  </div>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/shop">
            <button className="view-all-btn">View All Products</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
