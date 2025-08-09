import type Product from './Product'

export default interface Category {
  id: number
  name: string
  description: string
  product?: Product[] | null
}

