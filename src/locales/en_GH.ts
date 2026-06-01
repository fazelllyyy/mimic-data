import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GH: LocaleDefinition = {
  firstNamesMale: [
    'Kwame', 'Yaw', 'Kofi', 'Kojo', 'Kwesi', 'Nana', 'Kofi', 'Kweku',
    'Kwabena', 'Kwadwo', 'Kodwo', 'Fiifi', 'Adom', 'Maalik', 'Mustapha',
    'Ibrahim', 'Yusif', 'Michael', 'David', 'John', 'Samuel', 'Emmanuel',
    'Daniel', 'James', 'Stephen', 'George', 'Richard', 'Benjamin', 'Eric',
    'William'
  ],
  firstNamesFemale: [
    'Akua', 'Akosua', 'Abena', 'Adwoa', 'Afia', 'Ama', 'Yaa', 'Efua',
    'Esi', 'Araba', 'Nana', 'Adubea', 'Sandra', 'Grace', 'Martha',
    'Joyce', 'Rebecca', 'Mabel', 'Florence', 'Comfort', 'Beatrice',
    'Mary', 'Catherine', 'Elizabeth', 'Sarah', 'Hannah', 'Ruth', 'Lydia',
    'Gifty', 'Mavis'
  ],
  lastNames: [
    'Mensah', 'Asante', 'Osei', 'Oppong', 'Boateng', 'Owusu', 'Ofori',
    'Antwi', 'Darko', 'Agyeman', 'Appiah', 'Adjei', 'Asare', 'Quaye',
    'Amoako', 'Arthur', 'Yeboah', 'Sarpong', 'Acheampong', 'Ababio',
    'Donkor', 'Boakye', 'Ackah', 'Blankson', 'Tagoe', 'Annan',
    'Bannerman', 'Quartey', 'Lartey', 'Tetteh'
  ],
  streets: [
    'Kwame Nkrumah Avenue', 'Oxford Street', 'Independence Avenue',
    'Liberation Road', 'Ring Road Central', 'Kojo Thompson Road',
    'High Street', 'Castle Road', 'Spintex Road', 'Tema Motorway',
    'George Bush Highway', 'John Evans Atta Mills High Street',
    'Winneba Road', 'Giffard Road', 'Horse Road', 'Farrar Avenue',
    'Boundary Road', 'Dzorwulu Road', 'Asylum Down Road'
  ],
  cities: [
    'Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Ashaiman',
    'Sunyani', 'Cape Coast', 'Obuasi', 'Tema', 'Madina', 'Koforidua',
    'Wa', 'Ho', 'Bolgatanga', 'Techiman', 'Nkawkaw', 'Winneba',
    'Mampong', 'Yendi', 'Kintampo', 'Agona Swedru', 'Bawku',
    'Dormaa Ahenkro', 'Aflao', 'Hohoe'
  ],
  states: [
    'Greater Accra', 'Ashanti', 'Northern', 'Western', 'Eastern',
    'Central', 'Volta', 'Upper East', 'Upper West', 'Bono',
    'Ahafo', 'Bono East', 'Oti', 'North East', 'Savannah', 'Western North'
  ],
  zipCodePattern: 'GA-###-####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'System Administrator', 'Quality Assurance Engineer'
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
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return `GA-${Random.int(100, 999)}-${Random.int(1000, 9999)}`;
  },

  phoneFormats: [
    '+233 ## ### ####',
    '+233 20# ### ###',
    '+233 24# ### ###',
    '+233 26# ### ###',
    '+233 27# ### ###',
    '+233 50# ### ###',
    '+233 54# ### ###',
    '+233 55# ### ###',
    '+233 23# ### ###',
    '+233 28# ### ###',
    '0## ### ####',
    '02# ### ####',
    '05# ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'ghanal.com',
    'yahoo.co.uk', 'googlemail.com', 'aol.com'
  ],

  companyNames: [
    'MTN Ghana', 'Vodafone Ghana', 'AirtelTigo', 'Ecobank Ghana',
    'GCB Bank', 'Stanbic Bank Ghana', 'Absa Bank Ghana',
    'Enterprise Insurance', 'Star Assurance', 'Kosmos Energy',
    'AngloGold Ashanti', 'Newmont Ghana Gold', 'Ghana Oil Company',
    'GOIL', 'Ghana Breweries PLC', 'Cocoa Processing Company',
    'Menzgold Ghana', 'Jubilee House'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Cocoa Processing', 'Oil and Gas'
  ],

  catchPhrases: [
    'Innovating for a brighter future',
    'Your success is our priority',
    'Building Ghana together',
    'Excellence in everything we do',
    'Committed to quality service',
    'Your trusted partner in progress',
    'Leading the way forward'
  ]
};
