export interface Product {
  code: string
  name: string
  type?: string
  category: string
  features: string[]
  packSize: string
  image?: string // optional path in public/images/products
}

export interface ProductCategoryGroup {
  title: string
  items: Product[]
}

export type CatalogCategory = 'Adhesives' | 'Grouts' | 'Admix' | 'Cleaners' | 'Glue'
