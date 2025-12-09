import { useState } from 'react'
import { AuthContext } from './authContextDefinition'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email) => {
    // Simulate authentication (password not validated in demo)
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: email
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return true
  }

  const register = (name, email) => {
    // Simulate registration (password not validated in demo)
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
