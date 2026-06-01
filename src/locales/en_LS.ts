import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_LS: LocaleDefinition = {
  firstNamesMale: [
    'Thabang', 'Lerato', 'Teboho', 'Moshe', 'Mpho', 'Tšepo', 'Lehlohonolo',
    'Rethabile', 'Katleho', 'Mokhethi', 'Liteboho', 'Nkhetheni',
    'Liketso', 'Thapelo', 'Moeketsi', 'Thuso', 'Mabatho', 'Ntai',
    'Mokone', 'Lesole', 'John', 'David', 'Peter', 'Michael', 'Samuel',
    'James', 'Daniel', 'Joseph', 'Paul', 'Abraham'
  ],
  firstNamesFemale: [
    'Mpule', 'Lineo', 'Maserame', 'Mamello', 'Lieketseng', 'Nthabiseng',
    'Boitumelo', 'Tankiso', 'Matšepo', 'Mantsane', 'Masechaba',
    'Motselisi', 'Nthateng', 'Mathabang', 'Majaneng', 'Mahlape',
    'Mapalesa', 'Mabohlokoa', 'Makatleho', 'Makatiso',
    'Mary', 'Grace', 'Ruth', 'Sarah', 'Esther', 'Rebecca',
    'Elizabeth', 'Martha', 'Alice', 'Agnes'
  ],
  lastNames: [
    'Lekhanya', 'Mosisili', 'Thahane', 'Khati', 'Ramaema', 'Shakhane',
    'Moloisa', 'Pheko', 'Mokone', 'Maema', 'Ntšekhe', 'Makateng',
    'Thamae', 'Marabe', 'Nkhahle', 'Motsamai', 'Kabi',
    'Mokhothu', 'Mphanya', 'Letsie', 'Seeiso', 'Mokhele',
    'Phamotse', 'Tšenoli', 'Mothae', 'Ralejoe', 'Makhetha',
    'Muso', 'Moleleki', 'Mohale'
  ],
  streets: [
    'Kingsway Street', 'Main Road', 'Moshoeshoe Road',
    'Orpen Road', 'Liberty Road', 'Connor Street',
    'Lancers Road', 'Bowker Street', 'Pitso Street',
    'Likuena Road', 'Maseru Mall Road', 'Sefika Road',
    'Hilton Road', 'Bere Road', 'Lane Street',
    'Nyakosoba Road', 'Mafeteng Road', "Mohale's Hoek Road",
    'Qoaling Road', 'Thaba-Bosiu Road'
  ],
  cities: [
    'Maseru', 'Teyateyaneng', 'Mafeteng', 'Hlotse', 'Maputsoe',
    "Mohale's Hoek", 'Quthing', "Qacha's Nek", 'Mokhotlong',
    'Thaba-Tseka', 'Butha-Buthe', 'Roma', 'Semonkong',
    'Nako', 'Matatiele', 'Marakabei', 'Linakeng',
    'Paray', 'Likalaneng', 'Motimposo'
  ],
  states: [
    'Maseru District', 'Berea District', 'Botha-Bothe District',
    'Leribe District', 'Mafeteng District', 'Mohale\'s Hoek District',
    "Qacha's Nek District", "Quthing District", 'Thaba-Tseka District',
    'Mokhotlong District'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'Network Administrator'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    return `${houseNumber} ${street}, P.O. Box ${Random.int(100, 9999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+266 # ### ####',
    '+266 56# ####',
    '+266 57# ####',
    '+266 58# ####',
    '+266 59# ####',
    '+266 63# ####',
    '+266 65# ####',
    '+266 66# ####',
    '+266 67# ####',
    '0# ### ####',
    '06# ####',
    '05# ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'leo.ls',
    'live.com', 'aol.com', 'afrihost.co.ls'
  ],

  companyNames: [
    'Lesotho Telecommunications Authority',
    'Vodacom Lesotho', 'Econet Telecom Lesotho',
    'Standard Bank Lesotho', 'First National Bank Lesotho',
    'Nedbank Lesotho', 'Lesotho PostBank',
    'Lesotho Highlands Development Authority',
    'Lesotho Electricity Company', 'Lesotho Water and Sanitation',
    'Lesotho National Development Corporation',
    'Lesotho Flour Mills', 'Maluti Mountain Brewery',
    'Lesotho Sky', 'Basotho Blankets',
    'Lesotho Mining Company', 'Letseng Diamonds'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Textiles', 'Water'
  ],

  catchPhrases: [
    'Innovating for a prosperous Lesotho',
    'Your success is our commitment',
    'Building Lesotho together',
    'Excellence and integrity always',
    'Committed to national growth',
    'Your trusted partner in development',
    'Leading with hope and determination'
  ]
};
