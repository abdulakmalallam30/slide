import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const orders = [
    { id: 1, date: '2024-01-15', total: 449.97, status: 'Delivered', items: 3 },
    { id: 2, date: '2024-01-10', total: 299.99, status: 'Shipped', items: 1 },
    { id: 3, date: '2024-01-05', total: 179.98, status: 'Processing', items: 2 },
  ]

  return (
    <div className="page profile-page">
      <h1>My Profile</h1>

      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-avatar">👤</div>
          <h2>{user?.name}</h2>
          <p className="profile-email">{user?.email}</p>
          <button className="edit-profile-btn">Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

        <div className="profile-content">
          <section className="profile-section">
            <h2>Account Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name:</label>
                <span>{user?.name}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{user?.email}</span>
              </div>
              <div className="info-item">
                <label>Member Since:</label>
                <span>January 2024</span>
              </div>
              <div className="info-item">
                <label>Account Status:</label>
                <span className="status-active">Active</span>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <h2>Order History</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <strong>Order #{order.id}</strong>
                      <p className="order-date">{order.date}</p>
                    </div>
                    <span className={`order-status status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <span>{order.items} items</span>
                    <span className="order-total">${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="profile-section">
            <h2>Saved Addresses</h2>
            <div className="address-card">
              <strong>Home</strong>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <button className="add-address-btn">+ Add New Address</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Profile
