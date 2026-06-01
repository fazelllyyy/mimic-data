import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_KI: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Anote', 'Teburoro', 'Ieremia', 'Taneti', 'Bouro', 'Tiruwe', 'Sam',
    'Tewe', 'Kaburoro', 'Rebeio', 'Tataua', 'Tongoa', 'Tetabea', 'Tim', 'Amberoti'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Teimoa', 'Teba', 'Teuea', 'Bure', 'Ree', 'Mwaiti', 'Tabwai',
    'Rota', 'Tabe', 'Kautu', 'Titabu', 'Naboua', 'Kina', 'Maria', 'Rina'
  ],
  lastNames: [
    'Tongoa', 'Mamoe', 'Tataua', 'Tito', 'Ioane', 'Tabokai', 'Tebuke', 'Tetabo',
    'Rebeio', 'Temaua', 'Kaburoro', 'Tokiteba', 'Notara', 'Taam', 'Tewe',
    'Auriaria', 'Bauro', 'Boxer', 'Bwere', 'Eria',
    'Iotua', 'Kabati', 'Karaiti', 'Kautu', 'Kirion', 'Koraua', 'Marae', 'Mware', 'Neneia', 'Ngauea'
  ],
  streets: [
    'Tarawa Main Street', 'Bairiki Road', 'Betio Main Road',
    'Nanikai Road', 'Bikenibeu Road', 'South Tarawa Road',
    'Bonriki Road', 'Tanae Road', 'Buota Road',
    'Nawerewere Road', 'Eita Road', 'Moroni Road',
    'Kiritimati Main Road', 'Tabiteuea Road', 'Abaiang Road'
  ],
  cities: [
    'Tarawa', 'Betio', 'Bairiki', 'Bikenibeu', 'Bonriki',
    'Nanikai', 'Tanae', 'Buota', 'Nawerewere', 'Eita',
    'London', 'Tabwakea', 'Banana', 'Poland', 'Ronton',
    'Washington', 'Paris', 'Napari', 'Temaraia', 'Rotuma'
  ],
  states: [
    'Gilbert Islands', 'Phoenix Islands', 'Line Islands',
    'Tarawa', 'Kiritimati', 'Tabiteuea', 'Abaiang', 'Abemama', 'Aranuka', 'Beru'
  ],
  zipCodePattern: 'KI####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Engineer', 'Manager', 'Marketing Executive',
    'Customer Service Representative', 'Financial Analyst', 'Sales Manager', 'Administrator'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 300);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return `KI${String(Random.int(1000, 9999))}`;
  },

  phoneFormats: [
    '+686 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'tskl.net', 'kiribati.net', 'live.com', 'onlinekiribati.com'
  ],

  companyNames: [
    'Bank of Kiribati', 'Kiribati Telecommunications',
    'Kiribati Air Services', 'Kiribati Port Authority',
    'Kiribati Fisheries Authority', 'Anote Tong Holdings',
    'Kiribati Cooperative Federation', 'Tarawa Hotel',
    'Betio Shipyard', 'Kiritimati Island Resort'
  ],

  industries: [
    'Fisheries', 'Telecommunications', 'Finance', 'Tourism', 'Transportation',
    'Construction', 'Healthcare', 'Education', 'Retail', 'Agriculture'
  ],

  catchPhrases: [
    'Building our island nation', 'Excellence through service',
    'Pride in Kiribati', 'Commitment to quality',
    'Strength in our people', 'Progress for Kiribati',
    'Innovation for growth', 'A Pacific island home'
  ]
};
