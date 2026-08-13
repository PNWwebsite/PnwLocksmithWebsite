export const company = {
  name: 'PNW Lock and Key',
  street: '8920 SW Oak St 300B',
  city: 'Tigard',
  state: 'OR',
  zip: '97223',
  addressLine: '8920 SW Oak St 300B, Tigard, OR 97223',
  phoneDisplay: '(971) 666-8193',
  phoneHref: 'tel:+19716668193',
  hours: 'Open 24 hours, 7 days a week',
  license: 'OR LIC 70530CLS',
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
      'House and apartment lockouts',
      'Rekey locks after a move or a lost key',
      'Deadbolt and handleset installation',
      'Lock repair and replacement',
      'Smart locks and keypad deadbolts',
      'Sliding door, patio and window locks',
      'Mailbox, garage and shed locks',
      'Broken key extraction',
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
      'Office and storefront lockouts',
      'Master key systems and rekeying',
      'Grade 1 commercial lock installs',
      'Panic bars and exit devices',
      'Door closers and aluminum door hardware',
      'Keypad, fob and access control',
      'File cabinet and desk locks',
      'Employee turnover rekeys',
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
      'Car, truck and van lockouts',
      'All keys lost replacement',
      'Transponder key cutting and programming',
      'Key fob and remote programming',
      'Push-to-start smart keys',
      'Ignition repair and replacement',
      'Broken key extraction',
      'Motorcycle, RV and trailer keys',
    ],
  },
]

export const areas = [
  {
    county: 'Washington County',
    note: 'Home turf',
    cities: [
      ['Tigard', '0 mi'],
      ['Durham', '1 mi'],
      ['King City', '2 mi'],
      ['Metzger', '2 mi'],
      ['Bull Mountain', '3 mi'],
      ['Garden Home', '4 mi'],
      ['Beaverton', '5 mi'],
      ['Tualatin', '5 mi'],
      ['Raleigh Hills', '5 mi'],
      ['Sherwood', '7 mi'],
      ['Aloha', '8 mi'],
      ['Cedar Mill', '8 mi'],
      ['Bethany', '10 mi'],
      ['Hillsboro', '12 mi'],
      ['North Plains', '15 mi'],
      ['Cornelius', '16 mi'],
      ['Forest Grove', '18 mi'],
      ['Banks', '18 mi'],
    ],
  },
  {
    county: 'Clackamas County',
    note: 'East and south',
    cities: [
      ['Rivergrove', '4 mi'],
      ['Lake Oswego', '5 mi'],
      ['West Linn', '9 mi'],
      ['Milwaukie', '10 mi'],
      ['Wilsonville', '11 mi'],
      ['Clackamas', '12 mi'],
      ['Gladstone', '12 mi'],
      ['Oregon City', '13 mi'],
      ['Happy Valley', '14 mi'],
      ['Canby', '17 mi'],
      ['Beavercreek', '18 mi'],
      ['Damascus', '18 mi'],
    ],
  },
  {
    county: 'Multnomah County',
    note: 'Portland metro',
    cities: [
      ['SW Portland', '7 mi'],
      ['Portland downtown', '9 mi'],
      ['NW Portland', '10 mi'],
      ['SE Portland', '10 mi'],
      ['NE Portland', '12 mi'],
      ['Maywood Park', '15 mi'],
      ['Gresham', '19 mi'],
    ],
  },
  {
    county: 'Yamhill County',
    note: 'Southwest',
    cities: [
      ['Newberg', '14 mi'],
      ['Dundee', '16 mi'],
      ['Dayton', '18 mi'],
      ['Lafayette', '20 mi'],
    ],
  },
  {
    county: 'Clark County, WA',
    note: 'Across the river',
    cities: [
      ['Vancouver', '15 mi'],
      ['Hazel Dell', '17 mi'],
      ['Salmon Creek', '19 mi'],
    ],
  },
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
