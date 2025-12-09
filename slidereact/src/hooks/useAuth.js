import { useContext } from 'react'
import { AuthContext } from '../context/authContextDefinition'

export function useAuth() {
  return useContext(AuthContext)
}
