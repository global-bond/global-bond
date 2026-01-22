export interface Product {
  code: string
  name: string
  type?: string
  category: string
  features: string[]
  packSize: string
  image?: string // optional path in public/images/products
}

export interface ProductCategory {
  title: string
  items: Product[]
}

export const products: ProductCategory[] = [
  {
    title: 'Tile Adhesives',
    items: [
      {
        code: 'GBAD-0111',
        name: 'Globalbond Ceramic Tile Adhesive',
        type: 'ISI Type-1',
        category: 'Adhesives',
        features: [
          'Polymer fortified adhesive',
          'Easy to mix and apply',
          'No curing or soaking of tiles',
          'Increases productivity and saves time',
          'Good bond strength',
        ],
        packSize: '20 KG',
      },
      {
        code: 'GBAD-0122',
        name: 'Aquabond Grey/White Adhesive',
        type: 'ISI Type-2',
        category: 'Adhesives',
        features: [
          'Polymer fortified adhesive',
          'Easy to mix and apply',
          'No curing or soaking of tiles',
          'High bond strength',
          'Suitable for interior wall & floor tiles',
        ],
        packSize: '20 KG',
      },
      {
        code: 'GBAD-0133',
        name: 'Superbond Adhesive (Wall Set)',
        type: 'ISI Type-3',
        category: 'Adhesives',
        features: [
          'High polymer fortified adhesive',
          'Excellent bond strength and slip resistance',
          'Easy to mix and apply',
          'No curing or soaking of tiles/stones',
          'Suitable for interior & exterior cladding',
        ],
        packSize: '20 KG',
      },
      {
        code: 'GBAD-T07',
        name: 'Super Bond Plus T07 (Wall Set)',
        type: 'ISI Type-4',
        category: 'Adhesives',
        features: [
          'High polymer fortified adhesive',
          'Excellent bond strength',
          'Slip resistance',
          'Easy to mix and apply',
          'No need to remove existing tiles/stones',
        ],
        packSize: '20 KG',
      },
    ],
  },
  {
    title: 'Spacers & Levelers',
    items: [
      {
        code: 'SPACERS',
        name: 'Globalbond Tile & Stone Spacers',
        category: 'Accessories',
        features: [
          'Available in 2mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm',
          'Consistent joint width',
          'Easy application for neat finishes',
        ],
        packSize: 'Varies by size',
      },
      {
        code: 'LEVELERS',
        name: 'Globalbond Floor Tile Leveler System',
        category: 'Accessories',
        features: [
          'Includes wedge, leveler, plier',
          'Improves leveling on large-format tiles',
          'Reusable wedges',
        ],
        packSize: 'System components',
      },
    ],
  },
  {
    title: 'Block & Plaster',
    items: [
      {
        code: 'GBAD-0155',
        name: 'AAC Block Adhesive',
        category: 'Block Adhesive',
        features: [
          'Economical and easy application',
          'Crack resistant, non-shrink',
          'Durable and eco‑friendly',
          'Self curing mortar',
          'Consistent mix quality',
        ],
        packSize: '30 KG / 40 KG',
      },
      {
        code: 'GBAD-0166',
        name: 'Ready Mix Plaster',
        category: 'Plaster',
        features: [
          'Labour cost saving',
          'Less curing required',
          'Smooth finish',
          'No wastage',
          'One graded sand for better quality',
        ],
        packSize: '40 KG',
      },
    ],
  },
  {
    title: 'Grouts',
    items: [
      {
        code: 'GBAD-920',
        name: 'Cement Grout',
        category: 'Grout',
        features: [
          'Polymer enriched, water resistant',
          'Easy to mix and apply',
          'Available in more than 50 shades',
        ],
        packSize: '1 KG / 10 KG',
      },
      {
        code: 'GBAD-821',
        name: 'Globalbond Ready Mix Grout',
        category: 'Grout',
        features: [
          'Single component, durable',
          'Water cleanup, excellent adhesion',
          'Mildew resistant after full cure',
          'Available in 11+ colours',
        ],
        packSize: '1 KG / 10 KG',
      },
      {
        code: 'GBAD-100',
        name: 'Epoxy Grout',
        category: 'Epoxy Grout',
        features: [
          'Stain and dirt proof',
          'Low water absorption',
          '100% solid epoxy grout',
          'Acid and water resistant',
        ],
        packSize: '1 KG / 5 KG',
      },
      {
        code: 'GBAD-101',
        name: 'Epoxy Glitter Grout',
        category: 'Epoxy Grout',
        features: [
          'Colour‑fast, chemical‑resistant',
          '100% solid epoxy grout',
          'High strength, water resistant',
        ],
        packSize: '1 KG / 5 KG',
      },
      {
        code: 'GBAD-211',
        name: 'Cellarbond Exterior Grout',
        category: 'Exterior Grout',
        features: [
          'Single component, UV stable and flexible',
          'Non‑sag formula for walls',
          'No cracking or powdering',
          'Suitable for joints 2‑10mm',
        ],
        packSize: '5 KG',
      },
    ],
  },
  {
    title: 'Chemicals & Cleaners',
    items: [
      {
        code: 'GBAD-911',
        name: 'Admix GBAD‑911',
        category: 'Admix',
        features: [
          'Liquid polymer emulsion',
          'Improves water resistance and flexibility',
          'Can be used as bonding agent',
        ],
        packSize: '300 ML / 1 LTR',
      },
      {
        code: 'GBAD-811',
        name: 'Tile Cleaner',
        category: 'Cleaner',
        features: [
          'Easy to use, fast acting',
          'Interior & exterior',
          'Economical, new formula',
        ],
        packSize: '500 ML / 5 LTR',
      },
      {
        code: 'GBAD-831',
        name: 'Tap Cleaner',
        category: 'Cleaner',
        features: [
          'Anti‑bacterial, fast action',
          'Removes soap scum, dirt & grease',
          'Brighter shine',
        ],
        packSize: '500 ML',
      },
      {
        code: 'GBAD-501',
        name: 'Super Glue',
        category: 'Adhesive',
        features: [
          'Bonds in seconds',
          'For smooth, clean and dry surfaces',
          'Compact packs for quick repairs',
        ],
        packSize: '20 / 50 GMS',
      },
      {
        code: 'GBAD-421',
        name: 'Super Filler',
        category: 'Modifier',
        features: [
          'Enhances cement slurry bonding',
          'Easy‑to‑use paste, dispersible in water',
          'Self‑curing for cement slurry',
        ],
        packSize: '300 ML',
      },
      {
        code: 'GBAD-921',
        name: 'Acrylic Modifier Waterproofing Compound',
        category: 'Waterproofing',
        features: [
          'Integral waterproofing with cement',
          'Dense plaster and concrete, reduces capillaries',
          'Prevents water ingress',
        ],
        packSize: '1 LTR / 5 LTR / 20 LTR',
      },
    ],
  },
]
