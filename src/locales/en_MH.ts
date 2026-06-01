import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_MH: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Amata', 'Jurelang', 'Litokwa', 'Kessai', 'Casten', 'Imata', 'Kunio',
    'Ruben', 'Tommy', 'Philip', 'Tony', 'Alik', 'Hilda', 'David', 'Carl'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Leen', 'Marie', 'Juliet', 'Rita', 'Bernice', 'Monica', 'Veronica',
    'Loeak', 'Margie', 'Daisy', 'Evelyn', 'Hilda', 'Ruby', 'Lydia', 'Theresa'
  ],
  lastNames: [
    'Note', 'Lemari', 'Zackhras', 'Kabua', 'Heine', 'Muller', 'Jabro', 'Silk',
    'Tomeing', 'Loeak', 'Nemra', 'Keju', 'Bland', 'Riklon', 'Samson',
    'Laijo', 'Matthew', 'Lajdik', 'Paul', 'Raja',
    'Johnston', 'Nakayama', 'Ishoda', 'Kapelle', 'Barnes', 'Kedem', 'Lei', 'Lanki', 'Falk', 'John'
  ],
  streets: [
    'Majuro Main Road', 'Uliga Road', 'Rairok Road', 'Delap Road',
    'Laura Beach Road', 'Airport Way', 'Ebeye Main Street',
    'Kwajalein Road', 'Wotje Road', 'Millennium Way',
    'Jaluit Main Road', 'Arno Street', 'Ailinglaplap Road', 'Likiep Road', 'Maloelap Road'
  ],
  cities: [
    'Majuro', 'Ebeye', 'Laura', 'Kwajalein', 'Rairok',
    'Delap', 'Uliga', 'Wotje', 'Jaluit', 'Arno',
    'Mili', 'Namu', 'Ailinglaplap', 'Likiep', 'Aur',
    'Kili', 'Ebon', 'Lib', 'Ujae', 'Namorik'
  ],
  states: [
    'Majuro', 'Kwajalein', 'Ailinglaplap', 'Arno', 'Aur',
    'Ebon', 'Jaluit', 'Kili', 'Likiep', 'Maloelap',
    'Mili', 'Namu', 'Ujae', 'Utrik', 'Wotje'
  ],
  zipCodePattern: 'MH#####',
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
    return `MH${String(Random.int(10000, 99999))}`;
  },

  phoneFormats: [
    '+692 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'ntamar.net', 'marshallislands.net', 'live.com', 'rmsmh.com'
  ],

  companyNames: [
    'Bank of the Marshall Islands', 'Marshall Islands Resort',
    'National Telecommunications Authority', 'Air Marshall Islands',
    'Marshall Islands Ports Authority', 'Marshall Energy Company',
    'Kwajalein Atoll Development Authority', 'Robert Reimers Enterprises',
    'Campbell Oil', 'Majuro Stevedores'
  ],

  industries: [
    'Finance', 'Fisheries', 'Tourism', 'Telecommunications', 'Transportation',
    'Construction', 'Healthcare', 'Education', 'Retail', 'Agriculture'
  ],

  catchPhrases: [
    'Building our future together', 'Excellence through service',
    'Pride in our atolls', 'Commitment to quality',
    'Strength in our people', 'Progress for the Marshall Islands',
    'Innovation for growth', 'A Pacific island treasure'
  ]
};
