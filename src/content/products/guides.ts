export interface ProductItem {
  code: string
  name: string
  description: string
  recommended: string
  coverage?: string
  jointWidth?: string
  bedThickness?: string
  colour?: string
  walls?: string
  floors?: string
  mixingRatio?: string
  potLife?: string
  settingTime?: string
  openTime?: string
  adjustability?: string
  footTraffic?: string
  tensileAdhesion?: string
  grouting?: string
  compressiveStrength?: string
  specificGravity?: string
  careOfHandling?: string
  cautions?: string
}

export interface GuideCategory {
  title: string
  items: ProductItem[]
}

export const productGuide: GuideCategory[] = [
  {
    title: 'Adhesives',
    items: [
      {
        code: 'GLOBALBOND',
        name: 'Tiles adhesive (ISI) Type-1',
        description: 'Grey, cement-based polymer-fortified thick/thin set tile adhesive designed for installing tiles on interior floor surfaces. Provides excellent adhesion for fixing newly rendered cement floors.',
        recommended: 'Ceramic tiles, Int. floors',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '27 days – 1.1 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'GBAD-0111',
        name: 'Tiles adhesive (ISI) Type-1',
        description: 'Grey, cement-based polymer-fortified thick/thin set tile adhesive designed for installing tiles on interior floor surfaces. Provides excellent adhesion for fixing newly rendered cement floors.',
        recommended: 'Ceramic tiles, Int. floors',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '27 days – 1.1 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'AQUABOND',
        name: 'Tiles adhesive (ISI) Type-2',
        description: 'Grey/white, cement-based polymer-fortified thick/thin set tile adhesive designed for installing tiles on interior walls and floor surfaces. Provides excellent adhesion for fixing ceramic, porcelain, and vitrified tiles using thin or thick bed trowel on existing terrazzo and cement floors.',
        recommended: 'Vitrified / Ceramic tiles, all floor & Int. walls',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey/White',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '20 days – 1.6 N/mm²; 27 days – 1.7 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'GBAD-0122',
        name: 'Tiles adhesive (ISI) Type-2',
        description: 'Grey/white, cement-based polymer-fortified thick/thin set tile adhesive designed for installing tiles on interior walls and floor surfaces. Provides excellent adhesion for fixing ceramic, porcelain, and vitrified tiles using thin or thick bed trowel on existing terrazzo and cement floors.',
        recommended: 'Vitrified / Ceramic tiles, all floor & Int. walls',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey/White',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '20 days – 1.6 N/mm²; 27 days – 1.7 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'SUPERBOND',
        name: 'Tiles adhesive (ISI) Type-3',
        description: 'Grey & white, cement-based high-polymer fortified thin-set tile adhesive designed for interior and exterior cladding. Provides excellent adhesion for fixing ceramic, porcelain, mosaics, vitrified tiles, and natural stone on floors and walls. Owing to its excellent bond strength, it is suitable for stone, swimming pools, and water body applications.',
        recommended: 'All type of stone & marble Int. / ext. floor & wall',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey/White',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '20 days – 1.7 N/mm²; 27 days – 1.9 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'GBAD-0133',
        name: 'Tiles adhesive (ISI) Type-3',
        description: 'Grey & white, cement-based high-polymer fortified thin-set tile adhesive designed for interior and exterior cladding. Provides excellent adhesion for fixing ceramic, porcelain, mosaics, vitrified tiles, and natural stone on floors and walls. Owing to its excellent bond strength, it is suitable for stone, swimming pools, and water body applications.',
        recommended: 'All type of stone & marble Int. / ext. floor & wall',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey/White',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '20 days – 1.7 N/mm²; 27 days – 1.9 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      {
        code: 'GBAD-T07',
        name: 'Tiles adhesive (ISI) Type-4',
        description: 'Grey & white, cement-based high-polymer fortified thin-set tile adhesive designed for interior and exterior cladding. Provides excellent adhesion for fixing ceramic, porcelain, mosaics, vitrified tiles, and natural stone on floors and walls. Owing to its excellent bond strength, it is suitable for stone, swimming pools, and water body applications.',
        recommended: 'All type of stone & marble Int. / ext. floor & wall',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '3–6 mm',
        colour: 'Grey/White',
        walls: 'Use thin-bed trowel',
        floors: 'Use thick-bed trowel',
        mixingRatio: '1:4 (approx. 5.5 L water for 20 kg)',
        potLife: '2–2.5 hours @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '20–25 minutes',
        adjustability: '20–25 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '20 days – 1.9 N/mm²; 27 days – 2.4 N/mm²',
        grouting: 'After 8 hrs for wall and 24 hrs for floor',
      },
      { code: 'SUPERBOND PLUS', name: 'Tiles adhesive (ISI) Type-4', description: 'Tiles adhesive(ISI) Type-4', recommended: 'All type of stone & marble Int. / ext. floor & wall' },
      {
        code: 'GBAD-0155',
        name: 'AAC Block Laying Adhesive',
        description: 'High-quality dry mortar for fixing concrete blocks, hollow blocks, AAC blocks, fly ash bricks, soil cement blocks, and aerated blocks. A graded sand and cement mix with special polymers, designed for 2–3 mm thin-bed application instead of conventional mortar.',
        recommended: 'For ACC, CLC & Hollow Blocks',
        coverage: 'Coverage depends on surface flatness and application method. On a level background, approximately 3.5 kg/m² adhesive is required at 3 mm bed thickness using a thin-bed trowel.',
        bedThickness: '2–3 mm',
        colour: 'Grey',
        walls: 'Use thin-bed trowel',
        floors: 'Use thin-bed trowel',
        mixingRatio: '1:4 (approx. 7.8–8.2 L water for 30 kg)',
        potLife: '90 minutes @ 27°C ±2°C',
        settingTime: '24 hours',
        openTime: '10–15 minutes',
        adjustability: '10–15 minutes',
        footTraffic: 'After 24 hours',
        tensileAdhesion: '28 days – 0.5 MPa',
        compressiveStrength: '28 days – 11 MPa',
      },
      {
        code: 'GBAD-0166',
        name: 'Ready Mix Plaster',
        description: 'Ready-made mixture of cement and admixtures with high-quality polymer additives. Designed to use with water to provide stronger and more durable plaster with excellent strength. Ideal for green building with low VOC content.',
        recommended: 'For Exterior & Interior Wall',
      },
    ],
  },
  {
    title: 'Grouts',
    items: [
      {
        code: 'GBAD-821',
        name: 'Ready mix single component grout',
        description: 'Unique grouting composition that provides professional quality. Pre-mixed tile grout formulated to a user-friendly consistency with durability and workability. Ideal for use in green buildings with low VOC content.',
        recommended: 'Grout for tile/stone joints (free to 6mm gaps)',
      },
      {
        code: 'GBAD-920',
        name: 'Cementitious polymerised grout',
        description: 'Cement-based, highly polymer-enriched, water-resistant joint filler designed to fill joints between ceramic tiles, vitrified tiles, porcelain tiles, and natural/composite stones in interior and exterior applications. Available in a wide range of shades to match or contrast tile colors.',
        recommended: 'Stone ceramic & vitrified tiles',
        coverage: 'Coverage depends primarily on joint width, joint depth, and tile size.',
        jointWidth: '1–6 mm',
        compressiveStrength: '48 hours – 10 KN',
        mixingRatio: '1:3 (approx. 300 ml water for 1 kg)',
        potLife: '45 minutes @ 27°C ±2°C',
        settingTime: '24 hours',
        specificGravity: '1.8 g/cc',
      },
      {
        code: 'GBAD-100',
        name: 'Epoxy grout',
        description: 'Stainless epoxy grout (3‑component / 2‑component system), colour-fast, chemically resistant, 100% solid epoxy grout for ceramic tile, brick pavers, marble, and stone. Ideal for residential and light commercial installations where materials must resist physical abuse, shock, and chemical attack.',
        recommended: 'All types of tiles & stone, wall & floor',
      },
      {
        code: 'GBAD-101',
        name: 'Glitter epoxy grout',
        description: 'Stainless epoxy grout (3‑component system), colour-fast and chemically resistant, 100% solid epoxy grout for ceramic tile, brick pavers, marble, and stone. Ideal for residential and light commercial installations where materials must resist physical abuse, shock, and chemical attack.',
        recommended: 'All types of tiles & stone, wall & floor',
      },
      {
        code: 'GBAD-211',
        name: 'Terrace & exterior grout',
        description: 'Single-component, high-performance modified exterior joint-filling grout offering excellent color uniformity, durability, and stain resistance. Easy-to-use non-sag formula for walls with no hassle of mixing epoxy parts.',
        recommended: 'Suitable for exterior walls and floors; joints 2–10 mm',
      },
    ],
  },
  {
    title: 'Admix',
    items: [
      {
        code: 'GBAD-911',
        name: 'Admix for grout',
        description: 'Polymer emulsion liquid (white) for use with cement-based adhesives and grouts. Improves bond strength and flexibility, especially where expansion and contraction occur due to thermal or extreme weather conditions. Can be used to repair damaged concrete floors with dry cement mortar or cement concrete.',
        recommended: 'For tiles with adhesives in swimming pools, water-retaining structures, and external stone/vitrified tile cladding',
      },
      {
        code: 'GBAD-421',
        name: 'Super Filler',
        description: 'A macromolecule-based concentrated thick paste to be mixed with water and cement for installing ceramic, vitrified tiles, and natural stone using the traditional cement slurry method. Economical and enhances cement slurry bonding with tile and stone while reducing the need for water curing.',
        recommended: 'Enhancer for cement slurry bonding for tiles & stone (traditional method)',
      },
      {
        code: 'GBAD-921',
        name: 'Acrylic modifier waterproofing compound',
        description: 'Acrylic modifier waterproofing compound used with cement while making waterproof structures. It densifies plaster and concrete so voids and water-carrying capillaries do not form.',
        recommended: 'For waterproofing concrete, plaster, and cement-based structures',
      },
    ],
  },
  {
    title: 'Cleaners',
    items: [
      {
        code: 'GBAD-811',
        name: 'Tile cleaner',
        description: 'Trusted product with a new formulation ideal for cleaning all types of tiles. Can be applied on interior and exterior walls and floors.',
        recommended: 'All types of tiles (interior/exterior walls & floors)',
      },
      {
        code: 'GBAD-831',
        name: 'Tap cleaner',
        description: 'A taps and accessories cleaner. It is a unique formulation to remove soap scums, dirt, and greasy particles.',
        recommended: 'All types of taps and accessories cleaner',
      },
      {
        code: 'GBAD-501',
        name: 'Super glue',
        description: 'Both surfaces must be smooth, clean and dry. If required apply to both surfaces. Place in fixed positions immediately. Apply slight pressure for 5/10 seconds or until bond sets.',
        recommended: 'Bond sets',
        careOfHandling: 'Keep tip of tube clear, remove glue from skin by washing with hot water or wipe with acetone. Store in cool and dry place.',
        cautions: 'Irritant to eye. Bonds skin in seconds. PE gloves are recommended. Don\'t use cotton gloves. Keep away from children.',
      },
    ],
  },
]
