import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_ZM: LocaleDefinition = {
  firstNamesMale: [
    'Chileshe', 'Mwansa', 'Banda', 'Mulenga', 'Phiri', 'Tembo', 'Zulu',
    'Mwanza', 'Mumba', 'Kasonde', 'Sikazwe', 'Lungu', 'Kabwe', 'Chanda',
    'Nkandu', 'Sakala', 'Banda', 'John', 'Peter', 'David', 'Michael',
    'James', 'Joseph', 'Samuel', 'Daniel', 'Patrick', 'Charles', 'Robert',
    'Victor', 'Moses'
  ],
  firstNamesFemale: [
    'Mwaka', 'Brenda', 'Grace', 'Alice', 'Chanda', 'Lillian', 'Patricia',
    'Beatrice', 'Margaret', 'Florence', 'Gertrude', 'Monica', 'Joyce',
    'Elizabeth', 'Sarah', 'Ruth', 'Mary', 'Esther', 'Agnes', 'Catherine',
    'Idah', 'Lucy', 'Rhoda', 'Evelyn', 'Hellen', 'Mirriam',
    'Mercy', 'Mutinta', 'Misozi', 'Tasila'
  ],
  lastNames: [
    'Banda', 'Phiri', 'Mwanza', 'Chanda', 'Tembo', 'Mulenga', 'Zulu',
    'Sakala', 'Mumba', 'Zulu', 'Kabwe', 'Mbewe', 'Mvula', 'Mwila',
    'Kasonde', 'Siame', 'Simasiku', 'Mukuka', 'Mwape', 'Mutale',
    'Chisha', 'Kunda', 'Ngoma', 'Nkhoma', 'Chilufya', 'Mwansa',
    'Lungu', 'Sikazwe', 'Nkandu', 'Milimo'
  ],
  streets: [
    'Cairo Road', 'Great East Road', 'Great North Road',
    'Freedom Way', 'Cha Cha Cha Road', 'Church Road',
    'President Avenue', 'Katima Mulilo Road', 'Lumumba Road',
    'Independence Avenue', 'Mosi-oa-Tunya Road', 'Kafue Road',
    'Livingstone Road', 'Rhodes Park Road', 'Leopards Hill Road',
    'Alick Nkhata Road', 'Chachacha Road', 'Dedan Kimathi Road',
    'Nelson Mandela Road'
  ],
  cities: [
    'Lusaka', 'Ndola', 'Kitwe', 'Chipata', 'Chingola', 'Mufulira',
    'Luanshya', 'Livingstone', 'Kasama', 'Kabwe', 'Solwezi',
    'Mazabuka', 'Mongu', 'Kafue', 'Choma', 'Kalulushi',
    'Mansa', 'Kapiri Mposhi', 'Monze', 'Mpika'
  ],
  states: [
    'Lusaka Province', 'Copperbelt Province', 'Eastern Province',
    'Southern Province', 'Northern Province', 'Western Province',
    'North-Western Province', 'Central Province', 'Luapula Province',
    'Muchinga Province'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'Network Engineer'
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
    const plot = Random.int(1, 999);
    return `Plot ${plot}/${Random.int(1, 20)}, ${street}, P.O. Box ${Random.int(10000, 99999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+260 ### ### ###',
    '+260 95# ### ###',
    '+260 96# ### ###',
    '+260 97# ### ###',
    '+260 98# ### ###',
    '+260 21# ### ###',
    '+260 21# ### ###',
    '0### ### ###',
    '09## ### ###',
    '09### ### ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'zamtel.zm', 'coppernet.zm',
    'microlink.zm', 'africom.zm', 'zamnet.zm', 'live.com'
  ],

  companyNames: [
    'ZESCO Limited', 'Zambia National Commercial Bank',
    'MTN Zambia', 'Airtel Zambia', 'Zamtel',
    'First National Bank Zambia', 'Stanbic Bank Zambia',
    'Indeni Petroleum Refinery', 'Konkola Copper Mines',
    'Kansanshi Mining', 'Lubambe Copper Mine',
    'Zambia Breweries', 'Tobacco Board of Zambia',
    'Zambia State Insurance Corporation',
    'Zambeef Products', 'Trade Kings', 'Zambia Sugar',
    'Shoprite Zambia', 'Mukuba Pension Trust'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Tourism', 'Banking'
  ],

  catchPhrases: [
    'Innovating for a prosperous Zambia',
    'Your success is our commitment',
    'Building the nation together',
    'Excellence and integrity always',
    'Quality service for all Zambians',
    'Your trusted partner in growth',
    'Leading with purpose and pride'
  ]
};
