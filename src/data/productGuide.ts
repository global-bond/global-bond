export interface ProductItem {
  code: string
  name: string
  description: string
  recommended: string
}

export interface ProductCategory {
  title: string
  items: ProductItem[]
}

export const productGuide: ProductCategory[] = [
  {
    title: 'Adhesives',
    items: [
      { code: 'GLOBALBOND', name: 'Tiles adhesive (ISI) Type-1', description: 'Tiles adhesive(ISI) Type-1', recommended: 'Ceramic tiles, Int. floors' },
      { code: 'GBAD-0111', name: 'Tiles adhesive (ISI) Type-1', description: 'Tiles adhesive(ISI) Type-1', recommended: 'Ceramic tiles, Int. floors' },
      { code: 'AQUABOND', name: 'Tiles adhesive (ISI) Type-2', description: 'Tiles adhesive(ISI) Type-2', recommended: 'Vitrified / Ceramic tiles, all floor & Int. walls' },
      { code: 'GBAD-0122', name: 'Tiles adhesive (ISI) Type-2', description: 'Tiles adhesive(ISI) Type-2', recommended: 'Vitrified / Ceramic tiles, all floor & Int. walls' },
      { code: 'SUPERBOND', name: 'Tiles adhesive (ISI) Type-3', description: 'Tiles adhesive(ISI) Type-3', recommended: 'All type of stone & marble Int. / ext. floor & wall' },
      { code: 'GBAD-0133', name: 'Tiles adhesive (ISI) Type-3', description: 'Tiles adhesive(ISI) Type-3', recommended: 'All type of stone & marble Int. / ext. floor & wall' },
      { code: 'SUPERBOND PLUS', name: 'Tiles adhesive (ISI) Type-4', description: 'Tiles adhesive(ISI) Type-4', recommended: 'All type of stone & marble Int. / ext. floor & wall' },
      { code: 'GBAD-0155', name: 'AAC Block laying adhesive', description: 'AAC Block laying adhesive', recommended: 'For ACC, CLC & Hollow Blocks' },
      { code: 'GBAD-0166', name: 'Ready Mix Plaster', description: 'Ready Mix Plaster', recommended: 'For Exterior & Interior Wall' },
    ],
  },
  {
    title: 'Grouts',
    items: [
      { code: 'GBAD-821', name: 'Ready mix single component grout', description: 'Ready mix single component grout', recommended: 'Grout for tile / stone joint free to 6mm gaps' },
      { code: 'GBAD-920', name: 'Cementitious polymerised grout', description: 'Cementitious polymerised grout', recommended: 'Stone ceramic & vitrified tiles' },
      { code: 'GBAD-100', name: 'Epoxy grout', description: 'Epoxy grout', recommended: 'All types of tiles & stone, wall & floor' },
      { code: 'GBAD-101', name: 'Glitter epoxy grout', description: 'Glitter epoxy grout', recommended: 'All types of tiles & stone, wall & floor' },
      { code: 'GBAD-211', name: 'Terrace & exterior grout', description: 'Terrace & exterior grout', recommended: 'Suitable for terraces exterior wall & floor' },
    ],
  },
  {
    title: 'Admix',
    items: [
      { code: 'GBAD-911', name: 'Admix for grout', description: 'Admix for grout', recommended: 'For extra strength & flexibility in grout' },
      { code: 'GBAD-421', name: 'Super Filler', description: 'Super Filler', recommended: 'Improves bonding of cement with the tiles' },
    ],
  },
  {
    title: 'Cleaners',
    items: [
      { code: 'GBAD-811', name: 'Tile cleaner', description: 'Tile cleaner', recommended: 'All type of tiles' },
      { code: 'GBAD-831', name: 'Tap cleaner', description: 'Tap cleaner', recommended: 'All types of taps and Accessories cleaner' },
      { code: 'GBAD-501', name: 'Super glue', description: 'Super glue', recommended: 'Bond Sets' },
    ],
  },
]
