import type Category from '../models/Category'

let mockCategories: Category[] = [
  { id: 1, name: 'Dermocosmetics', description: 'Skin care', product: [] },
  { id: 2, name: 'Hair Care', description: 'Hair and scalp', product: [] },
  { id: 3, name: 'Nutricosmetics', description: 'Beauty from within', product: [] },
]

export function listCategories(setData: (categories: Category[]) => void) {
  setData(mockCategories)
}

export function getCategoryById(id: number, setData: (category: Category) => void) {
  const found = mockCategories.find((c) => c.id === id)
  setData(found ?? { id: 0, name: '', description: '' })
}

export function createCategory(category: Category, setData: (category: Category) => void) {
  const nextId = Math.max(0, ...mockCategories.map((c) => c.id)) + 1
  const created = { ...category, id: nextId }
  mockCategories = [...mockCategories, created]
  setData(created)
}

export function updateCategory(category: Category, setData: (category: Category) => void) {
  mockCategories = mockCategories.map((c) => (c.id === category.id ? category : c))
  setData(category)
}

export function deleteCategory(id: number) {
  mockCategories = mockCategories.filter((c) => c.id !== id)
}

