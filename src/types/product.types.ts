export interface Product {
  id: string
  title: string
  description: string
  features: string[]
  isFeatured?: boolean
  icon?: string
  link?: string
}

export interface ProductCategory {
  category: string
  products: Product[]
}
