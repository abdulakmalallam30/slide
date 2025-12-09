import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ margin: '2rem 0', opacity: 0.8 }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  )
}

export default NotFound
