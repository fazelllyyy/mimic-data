import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const km_KH: LocaleDefinition = {
  firstNamesMale: [
    'Sok', 'Seyha', 'Vannak', 'Rithy', 'Borey', 'Sophea', 'Sopheap', 'Visal',
    'Sareth', 'Sovann', 'Chhay', 'Sarom', 'Sokun', 'Ratanak', 'Sothea', 'Sothy',
    'Vibol', 'Sovath', 'Sovannara', 'Channak', 'Vicheka', 'Sokhom', 'Sambath', 'Mony',
    'Sophat', 'Kosal', 'Samnang', 'Ravy', 'Borin', 'Vuthy'
  ],
  firstNamesFemale: [
    'Srey', 'Sreymom', 'Kunthea', 'Sreyneth', 'Chanthy', 'Sokha', 'Sreyneang', 'Sopheap',
    'Bopha', 'Sreymao', 'Sreyroth', 'Kunthy', 'Sreykeo', 'Sreylin', 'Maly', 'Sreyphors',
    'Chhany', 'Sophy', 'Sokhom', 'Sopheak', 'Neary', 'Sreyneat', 'Davin', 'Pheary',
    'Socheata', 'Sreykhouch', 'Sreyleak', 'Sreytouch', 'Pisey', 'Sovannary'
  ],
  lastNames: [
    'Sok', 'Prak', 'Seng', 'Touch', 'Chea', 'Chhim', 'Yos', 'Heng', 'Nov', 'Kong',
    'Sun', 'Lach', 'Noun', 'Chem', 'Saing', 'Dy', 'Sim', 'Mao', 'Srun', 'Min',
    'Soeur', 'San', 'Soun', 'Siong', 'Tuy', 'Thong', 'Sauv', 'Nuon', 'Hout', 'Koy'
  ],
  streets: [
    'Preah Monivong Boulevard', 'Norodom Boulevard', 'Sihanouk Boulevard',
    'Mao Tse Toung Boulevard', 'Kampuchea Krom Boulevard', 'Street 271',
    'Street 2004', 'Russian Federation Boulevard', 'Charles de Gaulle Boulevard',
    'Samdech Sothearos Boulevard', 'St 63', 'St 240', 'St 51', 'St 110', 'St 128',
    'Street 598', 'Street 217', 'Street 169'
  ],
  cities: [
    'Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville', 'Kampong Cham',
    'Pursat', 'Takeo', 'Kampot', 'Krong Kep', 'Kampong Thom', 'Kampong Chhnang',
    'Kratie', 'Prey Veng', 'Svay Rieng', 'Stung Treng', 'Oddar Meanchey', 'Ratanakiri',
    'Mondulkiri', 'Koh Kong', 'Banteay Meanchey', 'Pailin', 'Preah Vihear'
  ],
  states: [
    'Phnom Penh', 'Battambang', 'Siem Reap', 'Preah Sihanouk', 'Kampong Cham',
    'Takeo', 'Kampot', 'Pursat', 'Kampong Thom', 'Kratie', 'Mondulkiri',
    'Ratanakiri', 'Koh Kong', 'Prey Veng', 'Svay Rieng', 'Banteay Meanchey'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+855 ## ### ###',
    '+855 # ### ###',
    '+855 (0)## ### ###',
    '01# ### ###',
    '012 ### ###',
    '015 ### ###',
    '016 ### ###',
    '060 ### ###',
    '066 ### ###',
    '069 ### ###',
    '077 ### ###',
    '078 ### ###',
    '085 ### ###',
    '087 ### ###',
    '089 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'online.com.kh',
    'post.kh', 'camnet.com.kh', 'everyday.com.kh', 'khmeronline.com', 'wow.com.kh'
  ],

  companyNames: [
    'NagaWorld', 'Cambodia Airports', 'Electricite du Cambodge', 'Acleda Bank',
    'Canadia Bank', 'Chip Mong Group', 'Royal Group of Companies', 'Cambodia Brewery',
    'Heng Development', 'Sokimex Group', 'Cellcard', 'Smart Axiata',
    'Cambodia Airlines', 'Phnom Penh Crown', 'ABA Bank', 'Prasac Microfinance',
    'Sihanoukville Autonomous Port', 'Lao Airlines Cambodia'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Construction', 'Tourism'
  ],

  catchPhrases: [
    'Innovating for the future', 'Your success is our business', 'Building a brighter tomorrow',
    'Quality and excellence', 'Trustworthy and reliable', 'Sustainable solutions',
    'Creating value together', 'Your trusted partner', 'Leading with integrity'
  ]
};
