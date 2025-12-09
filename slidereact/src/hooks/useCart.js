import { useContext } from 'react'
import { CartContext } from '../context/cartContextDefinition'

export function useCart() {
  return useContext(CartContext)
}
