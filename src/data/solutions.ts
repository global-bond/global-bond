export interface Application {
  title: string
  description: string
  icon: string
}

export interface WhyChoose {
  title: string
  description: string
  icon: string
}

export interface TechnicalDetail {
  title: string
  icon: string
  items: string[]
}

export interface Solution {
  key: string
  title: string
  description: string
  tagline: string
  heroImage: string
  highlights: string[]
  applications: Application[]
  whyChoose: WhyChoose[]
  technicalSuitability: TechnicalDetail[]
}

export const solutions: Solution[] = [
  {
    key: 'commercial',
    title: 'Commercial Solutions',
    description: 'High-performance systems designed for high-traffic commercial environments.',
    tagline: 'Industry Solutions',
    heroImage: '/images/solutions/commercial.png',
    highlights: [
      'Designed for heavy foot traffic',
      'Fast installation & long-term durability',
      'Suitable for large-format tiles'
    ],
    applications: [
      {
        title: 'Shopping Malls',
        description: 'High-traffic retail environments',
        icon: '🏬'
      },
      {
        title: 'Hotels & Hospitality',
        description: 'Premium guest experiences',
        icon: '🏨'
      },
      {
        title: 'Corporate Offices',
        description: 'Professional work environments',
        icon: '🏢'
      },
      {
        title: 'Hospitals & Clinics',
        description: 'Hygienic healthcare spaces',
        icon: '🏥'
      }
    ],
    whyChoose: [
      {
        title: 'High Bond Strength',
        description: 'Superior adhesion for large-format tiles and heavy loads',
        icon: '🔗'
      },
      {
        title: 'Crack Resistance',
        description: 'Advanced polymer technology prevents cracking and vibration damage',
        icon: '🛡️'
      },
      {
        title: 'Slip-Resistant',
        description: 'Enhanced safety for high-traffic commercial areas',
        icon: '👟'
      },
      {
        title: 'Modern Substrates',
        description: 'Compatible with concrete, plaster, gypsum, and more',
        icon: '📦'
      }
    ],
    technicalSuitability: [
      {
        title: 'Tile Sizes Supported',
        icon: '📏',
        items: [
          'Small format: Up to 300x300mm',
          'Medium format: 300x600mm to 600x600mm',
          'Large format: 600x1200mm and above'
        ]
      },
      {
        title: 'Surface Compatibility',
        icon: '🧱',
        items: [
          'Concrete and cement screeds',
          'Plaster and gypsum boards',
          'Existing ceramic tiles'
        ]
      },
      {
        title: 'Working Conditions',
        icon: '🌡️',
        items: [
          'Temperature: 5°C to 35°C',
          'Indoor and outdoor applications',
          'Wet and dry areas'
        ]
      },
      {
        title: 'Load & Traffic Suitability',
        icon: '⚖️',
        items: [
          'Heavy foot traffic areas',
          'Rolling loads and trolley movement',
          'Vibration-resistant applications'
        ]
      }
    ]
  },
  {
    key: 'residential',
    title: 'Residential Solutions',
    description: 'Premium solutions designed for homes, villas, and apartment complexes.',
    tagline: 'Industry Solutions',
    heroImage: '/images/solutions/residential.png',
    highlights: [
      'Safe for living spaces',
      'Easy application for homeowners',
      'Long-lasting aesthetic appeal'
    ],
    applications: [
      {
        title: 'Living Rooms & Bedrooms',
        description: 'Comfortable living spaces',
        icon: '🛋️'
      },
      {
        title: 'Kitchens & Bathrooms',
        description: 'Moisture-resistant solutions',
        icon: '🚿'
      },
      {
        title: 'Balconies & Terraces',
        description: 'Weather-resistant outdoor areas',
        icon: '🌿'
      },
      {
        title: 'Swimming Pools',
        description: 'Water-immersion applications',
        icon: '🏊'
      }
    ],
    whyChoose: [
      {
        title: 'Easy Application',
        description: 'User-friendly formulation for DIY and professional use',
        icon: '✋'
      },
      {
        title: 'Eco-Friendly',
        description: 'Low VOC, safe for indoor environments',
        icon: '🌱'
      },
      {
        title: 'Water Resistant',
        description: 'Perfect for wet areas like bathrooms and kitchens',
        icon: '💧'
      },
      {
        title: 'Aesthetic Finish',
        description: 'Smooth finish for beautiful interiors',
        icon: '✨'
      }
    ],
    technicalSuitability: [
      {
        title: 'Tile Sizes Supported',
        icon: '📏',
        items: [
          'Small format: Up to 300x300mm',
          'Medium format: 300x600mm to 600x600mm',
          'Large format: Up to 800x800mm'
        ]
      },
      {
        title: 'Surface Compatibility',
        icon: '🧱',
        items: [
          'Concrete and cement plaster',
          'Brick and block masonry',
          'Waterproofed surfaces'
        ]
      },
      {
        title: 'Working Conditions',
        icon: '🌡️',
        items: [
          'Temperature: 10°C to 40°C',
          'Indoor and covered outdoor areas',
          'Dry and wet applications'
        ]
      },
      {
        title: 'Load & Traffic Suitability',
        icon: '⚖️',
        items: [
          'Light to moderate foot traffic',
          'Residential furniture loads',
          'Daily use environments'
        ]
      }
    ]
  },
  {
    key: 'infrastructure',
    title: 'Infrastructure Solutions',
    description: 'Heavy-duty systems for metros, airports, and public facilities.',
    tagline: 'Industry Solutions',
    heroImage: '/images/solutions/infrastructure.png',
    highlights: [
      'Extreme durability for public use',
      'Rapid-setting for minimal downtime',
      'Compliant with public safety standards'
    ],
    applications: [
      {
        title: 'Metro Stations',
        description: 'High-traffic transit hubs',
        icon: '🚇'
      },
      {
        title: 'Airports',
        description: 'International terminal facilities',
        icon: '✈️'
      },
      {
        title: 'Railway Stations',
        description: 'Heavy-duty transportation centers',
        icon: '🚆'
      },
      {
        title: 'Bus Terminals',
        description: 'Public transport facilities',
        icon: '🚌'
      }
    ],
    whyChoose: [
      {
        title: 'Rapid Setting',
        description: 'Quick curing to minimize facility downtime',
        icon: '⚡'
      },
      {
        title: 'Extreme Load Capacity',
        description: 'Withstands heavy traffic and vibrations',
        icon: '💪'
      },
      {
        title: 'Weather Resistant',
        description: 'Performs in extreme weather conditions',
        icon: '☀️'
      },
      {
        title: 'Low Maintenance',
        description: 'Long-term performance with minimal upkeep',
        icon: '🔧'
      }
    ],
    technicalSuitability: [
      {
        title: 'Tile Sizes Supported',
        icon: '📏',
        items: [
          'Large format: 600x600mm to 1200x1200mm',
          'Extra-large format: Above 1200mm',
          'Natural stone slabs'
        ]
      },
      {
        title: 'Surface Compatibility',
        icon: '🧱',
        items: [
          'Reinforced concrete',
          'Pre-cast concrete elements',
          'Industrial flooring systems'
        ]
      },
      {
        title: 'Working Conditions',
        icon: '🌡️',
        items: [
          'Temperature: -10°C to 50°C',
          'All weather conditions',
          'Indoor and outdoor exposure'
        ]
      },
      {
        title: 'Load & Traffic Suitability',
        icon: '⚖️',
        items: [
          'Very heavy foot traffic',
          'Vehicle movement areas',
          'Continuous vibration resistance'
        ]
      }
    ]
  },
  {
    key: 'industrial',
    title: 'Industrial Solutions',
    description: 'Chemical-resistant solutions for manufacturing and processing plants.',
    tagline: 'Industry Solutions',
    heroImage: '/images/solutions/industrial.png',
    highlights: [
      'Chemical and oil resistant',
      'High mechanical strength',
      'Suitable for factory environments'
    ],
    applications: [
      {
        title: 'Manufacturing Plants',
        description: 'Heavy machinery environments',
        icon: '🏭'
      },
      {
        title: 'Warehouses',
        description: 'Storage and logistics facilities',
        icon: '📦'
      },
      {
        title: 'Chemical Plants',
        description: 'Corrosive environment protection',
        icon: '⚗️'
      },
      {
        title: 'Food Processing',
        description: 'Hygienic production facilities',
        icon: '🍕'
      }
    ],
    whyChoose: [
      {
        title: 'Chemical Resistance',
        description: 'Withstands acids, alkalis, and industrial chemicals',
        icon: '🧪'
      },
      {
        title: 'Impact Resistance',
        description: 'Handles heavy machinery and equipment loads',
        icon: '🔨'
      },
      {
        title: 'Anti-Static Options',
        description: 'Safe for electronic manufacturing areas',
        icon: '⚡'
      },
      {
        title: 'Easy to Clean',
        description: 'Maintains hygiene in food and pharma industries',
        icon: '🧹'
      }
    ],
    technicalSuitability: [
      {
        title: 'Tile Sizes Supported',
        icon: '📏',
        items: [
          'Industrial tiles: 200x200mm to 600x600mm',
          'Anti-static tiles',
          'Chemical-resistant tiles'
        ]
      },
      {
        title: 'Surface Compatibility',
        icon: '🧱',
        items: [
          'Industrial concrete floors',
          'Steel and metal surfaces',
          'Existing coated floors'
        ]
      },
      {
        title: 'Working Conditions',
        icon: '🌡️',
        items: [
          'Temperature: -5°C to 60°C',
          'High humidity environments',
          'Chemical exposure areas'
        ]
      },
      {
        title: 'Load & Traffic Suitability',
        icon: '⚖️',
        items: [
          'Heavy machinery loads',
          'Forklift and vehicle traffic',
          'Point load resistance'
        ]
      }
    ]
  }
]

export const getSolutionByKey = (key: string): Solution | undefined => {
  return solutions.find(s => s.key.toLowerCase() === key.toLowerCase())
}
