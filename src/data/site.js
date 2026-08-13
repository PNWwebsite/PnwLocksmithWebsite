export const company = {
  name: 'PNW Lock and Key',
  street: '8920 SW Oak St 300B',
  city: 'Tigard',
  state: 'OR',
  zip: '97223',
  addressLine: '8920 SW Oak St 300B, Tigard, OR 97223',
  phoneDisplay: '(971) 666-8193',
  phoneHref: 'tel:+19716668193',
  hours: '24/7',
  license: '#70530CLS',
  email: 'dispatch@pnwlockandkey.com',
  mapEmbed:
    'https://www.google.com/maps?q=8920+SW+Oak+St+300B,+Tigard,+OR+97223&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=8920+SW+Oak+St+300B,+Tigard,+OR+97223',
}

export const services = [
  {
    id: 'residential',
    icon: 'house',
    label: 'Residential',
    title: 'Home locks, keys and entry',
    blurb:
      'Locked out at 2 a.m., or finally replacing the hardware the last owner left behind. We work on the door you already have.',
    items: [
      {
        name: 'Residential Locksmith',
        blurb: 'Home lock service of every kind, from a jammed deadbolt to a full hardware upgrade.',
      },
      {
        name: 'Lock Rekeying',
        blurb: 'New keys for the locks you already own — faster and cheaper than replacing them after a move.',
      },
      {
        name: 'Lock Replacement',
        blurb: 'Worn, damaged or outdated locks swapped for hardware that holds up to daily use.',
      },
    ],
  },
  {
    id: 'commercial',
    icon: 'building',
    label: 'Commercial',
    title: 'Storefront, office and property',
    blurb:
      'Keyed alike systems, panic hardware, and doors that have to open every morning and lock every night without a fight.',
    items: [
      {
        name: 'Commercial Locksmith',
        blurb: 'Storefronts, offices and rental property, including master key systems and exit devices.',
      },
      {
        name: 'High-Security Locks',
        blurb: 'Restricted keyways and pick-resistant cylinders for doors where a standard lock is not enough.',
      },
    ],
  },
  {
    id: 'automotive',
    icon: 'car',
    label: 'Automotive',
    title: 'Car keys, fobs and ignitions',
    blurb:
      'Keys cut and programmed on site for most makes and model years, including push-to-start vehicles. No tow needed.',
    items: [
      {
        name: 'Car Locksmith',
        blurb: 'Keys, fobs, ignitions and door locks for most makes and model years, handled at the roadside.',
      },
      {
        name: 'Car Key Replacement',
        blurb: 'Lost every key? We cut and program a replacement on site, including transponder and smart keys.',
      },
      {
        name: 'Car Lockout',
        blurb: 'Keys shut in the cabin or the trunk, opened without damage to the door, glass or trim.',
      },
    ],
  },
]

export const areas = [
  {
    county: 'Washington County',
    note: 'Where we are based',
    cities: [
      'Tigard', 'Beaverton', 'Tualatin', 'Sherwood', 'Hillsboro', 'King City',
      'Durham', 'Aloha', 'Cedar Mill', 'Bethany', 'Raleigh Hills', 'Garden Home',
      'Metzger', 'Bull Mountain', 'Cornelius', 'Forest Grove', 'North Plains', 'Banks',
    ],
  },
  {
    county: 'Clackamas County',
    note: 'East and south',
    cities: [
      'Lake Oswego', 'West Linn', 'Oregon City', 'Milwaukie', 'Wilsonville',
      'Clackamas', 'Gladstone', 'Happy Valley', 'Canby', 'Rivergrove',
      'Beavercreek', 'Damascus',
    ],
  },
  {
    county: 'Multnomah County',
    note: 'Portland metro',
    cities: [
      'Portland', 'SW Portland', 'NW Portland', 'SE Portland', 'NE Portland',
      'Gresham', 'Maywood Park',
    ],
  },
  {
    county: 'Yamhill County',
    note: 'Southwest',
    cities: ['Newberg', 'Dundee', 'Dayton', 'Lafayette'],
  },
  {
    county: 'Clark County, WA',
    note: 'Across the river',
    cities: ['Vancouver', 'Hazel Dell', 'Salmon Creek'],
  },
]

export const emergencies = [
  'House and apartment lockouts',
  'Car and truck lockouts',
  'Office and storefront lockouts',
  'Lost car keys replaced on the spot',
  'Broken keys extracted from the lock',
  'Emergency rekeys after a break-in',
  'Jammed, seized and failed locks',
  'Nights, weekends and holidays',
]

export const brands = [
  'Schlage',
  'Kwikset',
  'Yale',
  'Baldwin',
  'Medeco',
  'Mul-T-Lock',
  'Von Duprin',
  'ASSA Abloy',
]
