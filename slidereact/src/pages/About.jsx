function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <div className="card">
        <h2>React Router DOM</h2>
        <p>
          React Router is a standard library for routing in React applications. 
          It enables navigation among views of various components in a React Application, 
          allows changing the browser URL, and keeps the UI in sync with the URL.
        </p>
      </div>
      <div className="card">
        <h2>Key Concepts</h2>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>BrowserRouter:</strong> Wrapper component that uses HTML5 history API</li>
          <li><strong>Routes:</strong> Container for all Route components</li>
          <li><strong>Route:</strong> Defines a path and the component to render</li>
          <li><strong>Link:</strong> Creates navigation links without page reload</li>
          <li><strong>NavLink:</strong> Special Link with active state styling</li>
          <li><strong>useParams:</strong> Hook to access URL parameters</li>
          <li><strong>useNavigate:</strong> Hook for programmatic navigation</li>
        </ul>
      </div>
    </div>
  )
}

export default About
