import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import { useCart } from '../hooks/useCart'
import './Shop.css'

function Shop() {
  const { category } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const { addToCart } = useCart()

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product, e) => {
    e.preventDefault()
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="page shop-page">
      <h1>Shop Our Products</h1>
      
      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">{filteredProducts.length} products found</p>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  ⭐ {product.rating} ({product.reviews} reviews)
                </div>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
            <button
              className="add-to-cart-btn"
              onClick={(e) => handleAddToCart(product, e)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Shop
