import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()
  const { getCartCount } = useCart()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🛒 TechShop
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <NavLink to="/cart" className="cart-link">
            🛒 Cart {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
          </NavLink>
          {user ? (
            <>
              <NavLink to="/profile" className="nav-link">
                👤 {user.name}
              </NavLink>
              <button onClick={logout} className="nav-btn">Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="nav-btn-link">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
