import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SS: LocaleDefinition = {
  firstNamesMale: [
    'David', 'John', 'James', 'Michael', 'Peter', 'Daniel', 'Samuel', 'Joseph',
    'Stephen', 'Simon', 'Thomas', 'William', 'Alex', 'Benjamin', 'Philip', 'Victor',
    'Andrew', 'Emmanuel', 'Moses', 'Abraham', 'Jackson', 'Mark', 'Patrick', 'Paul',
    'Robert', 'Christian', 'Richard', 'Charles', 'George', 'Henry'
  ],
  firstNamesFemale: [
    'Sarah', 'Rebecca', 'Grace', 'Mary', 'Esther', 'Hannah', 'Joy', 'Lydia',
    'Ruth', 'Martha', 'Jane', 'Deborah', 'Rachel', 'Leah', 'Naomi', 'Dorcas',
    'Elizabeth', 'Rose', 'Lucy', 'Alice', 'Faith', 'Patience', 'Margaret',
    'Helen', 'Susan', 'Ann', 'Christine', 'Charity', 'Mercy', 'Agnes'
  ],
  lastNames: [
    'Wani', 'Garang', 'Lual', 'Malong', 'Aguer', 'Deng', 'Mayen', 'Dut',
    'Makuach', 'Gatkuoth', 'Puot', 'Riek', 'Arop', 'Akec', 'Jok',
    'Adut', 'Thon', 'Bol', 'Chol', 'Mawien', 'Mijok', 'Koch',
    'Manuel', 'Louis', 'Hoth', 'Gatwech', 'Malual', 'Ring', 'Macar', 'Tong'
  ],
  streets: [
    'Juba Road', 'Parliament Avenue', 'Airport Road', 'Unity Avenue',
    'Ministries Road', 'Freedom Square', 'Kator Road', 'Munuki Road',
    'Hai Malakal Street', 'Customs Road', 'Bilpam Road', 'Jebel Market Road',
    'Gudele Road', 'Gumbo Road', 'Rokon Road', 'Yei Road', 'Nimule Road',
    'Bor Road', 'Malakal Road', 'Wau Road'
  ],
  cities: [
    'Juba', 'Wau', 'Malakal', 'Bor', 'Yei', 'Torit', 'Bentiu', 'Rumbek',
    'Kapoeta', 'Aweil', 'Gogrial', 'Yambio', 'Nimule', 'Maridi', 'Mundri',
    'Tambura', 'Kajo Keji', 'Pibor', 'Melut', 'Paloich', 'Leer', 'Mayom',
    'Nasser', 'Maban'
  ],
  states: [
    'Central Equatoria', 'Eastern Equatoria', 'Western Equatoria',
    'Jonglei', 'Unity', 'Upper Nile', 'Northern Bahr el Ghazal',
    'Western Bahr el Ghazal', 'Lakes', 'Warrap', 'Abyei'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Graphic Designer',
    'Operations Manager', 'Business Analyst', 'Civil Engineer', 'Program Manager'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'Information Technology', 'Research and Development', 'Legal'
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
    '+211 ## ### ####',
    '0## ### ####',
    '+211 91# ### ###',
    '+211 92# ### ###',
    '+211 95# ### ###',
    '+211 97# ### ###',
    '91# ### ###',
    '92# ### ###',
    '95# ### ###',
    '97# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'zain.com', 'mtn.sd', 'southsudanmail.com'
  ],

  companyNames: [
    'Greater Pioneer Operating Company', 'Sudan Petroleum',
    'Zain South Sudan', 'MTN South Sudan', 'Digitel',
    'South Sudan Beverages Limited', 'Equatoria Bank', 'KCB Bank South Sudan',
    'Buffalo Commercial Bank', 'Kenya Commercial Bank', 'Eco Bank South Sudan',
    'South Sudan Airlines', 'Nile Petroleum Corporation', 'Petro Nile Oil',
    'Bahr El Jebel Cement', 'Juba Bridge Hotel'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Telecommunications', 'Energy', 'Transport', 'Oil and Gas',
    'Construction', 'Agriculture', 'Hospitality', 'Mining'
  ],

  catchPhrases: [
    'Building South Sudan together', 'Innovating for a new nation',
    'Your partner in growth', 'Committed to excellence',
    'Quality and integrity in all we do', 'Driving progress and prosperity'
  ]
};
