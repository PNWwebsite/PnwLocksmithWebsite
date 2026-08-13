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
