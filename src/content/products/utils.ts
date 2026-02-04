import { products } from './data'
import type { Product, CatalogCategory } from './types'
import { productGuide } from './guides'

export function allProducts(): Product[] {
  return products.flatMap(g => g.items)
}

export function productsByCategory(cat: CatalogCategory): Product[] {
  const items = allProducts()
  switch (cat) {
    case 'Adhesives':
      return items.filter(p => ['Adhesives', 'Adhesive', 'Block Adhesive', 'Plaster'].includes(p.category))
    case 'Grouts':
      return items.filter(p => /grout/i.test(p.category))
    case 'Admix':
      return items.filter(p => ['Admix', 'Modifier', 'Waterproofing'].includes(p.category))
    case 'Cleaners':
      return items.filter(p => ['Cleaner', 'Tap Cleaner'].includes(p.category))
    case 'Glue':
      return items.filter(p => p.category === 'Glue')
    default:
      return []
  }
}

export function guideFor(code: string) {
  for (const group of productGuide) {
    const found = group.items.find(i => i.code === code)
    if (found) return { category: group.title, ...found }
  }
  return undefined
}

export function productByCode(code: string): Product | undefined {
  return allProducts().find(p => p.code === code)
}
