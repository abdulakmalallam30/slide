# TechShop - React Router E-Commerce Demo

A comprehensive e-commerce application demonstrating advanced React Router DOM features and client-side routing patterns.

## 🎯 Project Purpose

This project showcases real-world React Router implementation with:
- **Dynamic routing** with parameters
- **Protected routes** requiring authentication
- **Nested routes** and route hierarchies  
- **Programmatic navigation**
- **Context API** integration with routing
- **Route guards** and redirects

## 🚀 Features

### Routing Features
- ✅ **BrowserRouter** - HTML5 history API routing
- ✅ **Dynamic Routes** - Product details with URL parameters (`/product/:id`)
- ✅ **Nested Routes** - Category-based shop filtering (`/shop/:category`)
- ✅ **Protected Routes** - Authentication-required pages (checkout, profile, order success)
- ✅ **NavLink** - Active link styling in navigation
- ✅ **useNavigate** - Programmatic navigation (back buttons, redirects)
- ✅ **useParams** - Accessing URL parameters
- ✅ **useLocation** - Redirect back after login
- ✅ **404 Handling** - Wildcard route for not found pages

### Application Features
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 🔐 **Authentication** - Login/Register with protected routes
- 📦 **Product Catalog** - 12 products with search and category filtering
- 💳 **Checkout Flow** - Multi-step checkout with order confirmation
- 👤 **User Profile** - Order history and account management
- 🎨 **Responsive Design** - Mobile-friendly layout

## 🛠️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🎓 React Router Concepts Demonstrated

### 1. Basic Routing
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 2. Dynamic Routes with Parameters
```jsx
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/shop/:category" element={<Shop />} />

// In component:
const { id } = useParams()
```

### 3. Protected Routes
```jsx
<Route path="/checkout" element={
  <ProtectedRoute>
    <Checkout />
  </ProtectedRoute>
} />

// ProtectedRoute component:
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}
```

### 4. Programmatic Navigation
```jsx
const navigate = useNavigate()

// Navigate to route
navigate('/cart')

// Navigate back
navigate(-1)

// Navigate with replace (no history entry)
navigate('/', { replace: true })
```

### 5. NavLink with Active Styling
```jsx
<NavLink 
  to="/shop" 
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Shop
</NavLink>
```

### 6. Location State (Redirect After Login)
```jsx
// In Login component:
const location = useLocation()
const from = location.state?.from?.pathname || '/'
navigate(from, { replace: true })
```

## 🎯 User Flows

### Shopping Flow
1. Browse products on **Home** or **Shop** pages
2. Click product → View **ProductDetail** page (dynamic route)
3. Add to cart → Navigate to **Cart** page
4. Proceed to checkout → Redirected to **Login** if not authenticated
5. Complete checkout → Navigate to **OrderSuccess** page
6. View orders in **Profile** page

### Authentication Flow
1. Click Login/Register in navbar
2. Submit form → Context updates auth state
3. Automatically redirected to original destination or home
4. Access protected routes (checkout, profile, order success)
5. Logout → Context clears, redirects to home

## 💡 Key Routing Patterns

### Protected Route Pattern
```jsx
// Wrap protected pages
<Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />
```

### Dynamic Product Routes
```jsx
// List page links to detail
<Link to={`/product/${product.id}`}>View Product</Link>

// Detail page reads parameter
const { id } = useParams()
const product = products.find(p => p.id === parseInt(id))
```

### Category Filtering
```jsx
// Route accepts optional category
<Route path="/shop/:category" element={<Shop />} />

// Component reads and filters
const { category } = useParams()
const filtered = products.filter(p => 
  category ? p.category === category : true
)
```

## 📦 Technologies Used

- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Context API** - State management
- **Vite** - Build tool
- **CSS3** - Styling with responsive design

## 📝 Demo Credentials

Use any email and password to login (authentication is simulated).

## 🔑 Key Takeaways

This project demonstrates:
1. **Route organization** - Clear separation of public and protected routes
2. **Parameter usage** - Dynamic routes for products and categories
3. **Navigation patterns** - Links, programmatic navigation, and redirects
4. **State integration** - Context API working seamlessly with routing
5. **User experience** - Smooth transitions and intuitive navigation flow
6. **Real-world patterns** - E-commerce flows, authentication, and cart management

## 📄 License

MIT
