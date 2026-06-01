import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_WS: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Tupuola', 'Fiame', 'Leota', 'Maiava', 'Tui', 'Afa', 'Tavita', 'Iosefa',
    'Saul', 'Keone', 'Manuel', 'Pita', 'Sione', 'Leka', 'Pili'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Lupe', 'Malae', 'Mele', 'Fitu', 'Malia', 'Tua', 'Sala', 'Lima',
    'Sina', 'Irene', 'Fa\'asala', 'Sieni', 'Mana', 'Eleni', 'Fale'
  ],
  lastNames: [
    'Tui', 'Misa', 'Lei', 'Mauga', 'Sio', 'Fiu', 'Paulo', 'Fuimaono',
    'Ui', 'Amosa', 'Leota', 'Tuala', 'Fale', 'Aiono', 'Tamati',
    'Satele', 'Soloa', 'Pule', 'Mapusua', 'Tavita',
    'Manaia', 'Seiuli', 'Laulu', 'Sauvao', 'Ala\'ilima', 'Puni', 'Fitisemanu', 'Lafaele', 'Vai', 'Toleafoa'
  ],
  streets: [
    'Beach Road', 'Fugalei Street', 'Saleufi Street', 'Cross Island Road',
    'Main South Road', 'Lalovaea Road', 'Vaitele Street',
    'Leifi Street', 'Puapuaga Road', 'Lotofaga Road',
    'Gagaifolevao Street', 'Salelologa Main Road', 'Siusega Road',
    'Apia Park Road', 'Motootua Road'
  ],
  cities: [
    'Apia', 'Salelologa', 'Vaitele', 'Faleasi\'u', 'Siusega',
    'Lotofaga', 'Levi', 'Samatau', 'Safotu', 'Tufulele',
    'Faleula', 'Malie', 'Savaia', 'Lefaga', 'Salamumu',
    'Sapapalii', 'Lano', 'Lologau', 'Asau', 'Faatoia'
  ],
  states: [
    'Tuamasaga', 'Atua', 'Aiga-i-le-Tai', 'Fa\'asaleleaga', 'Gaga\'emauga',
    'Gagaifomauga', 'Palauli', 'Satupa\'itea', 'Va\'a-o-Fonoti', 'Vaisigano'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Hotel Manager', 'Tourism Officer', 'Marketing Executive',
    'Customer Service Manager', 'Engineer', 'Sales Representative', 'Financial Advisor'
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
    const number = Random.int(1, 500);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+685 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'samoa.ws', 'lesamoa.net', 'live.com', 'digicelsamoa.com'
  ],

  companyNames: [
    'Samoa Tourism Authority', 'National Bank of Samoa', 'Digicel Samoa',
    'Samoa Airways', 'Samoa Breweries', 'Samoa Ports Authority',
    'Yazaki Samoa', 'Coca-Cola Samoa', 'Blue Bird Samoa', 'Samoa Shipping Corporation'
  ],

  industries: [
    'Tourism', 'Finance', 'Agriculture', 'Telecommunications', 'Transportation',
    'Manufacturing', 'Construction', 'Healthcare', 'Education', 'Retail'
  ],

  catchPhrases: [
    'Fa\'avae i le Atua Samoa', 'Building our nation together',
    'Excellence through service', 'Pride in our culture',
    'Commitment to quality', 'Strength in our community',
    'Innovation for growth', 'Pacific hospitality'
  ]
};
