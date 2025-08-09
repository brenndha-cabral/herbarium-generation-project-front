import type Category from './Category'

export default interface Product {
  id: number
  name: string
  description: string
  brand: string
  price: number
  age_rating: number
  stock: number
  validate: Date
  category?: Category | null
}

