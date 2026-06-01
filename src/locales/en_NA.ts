import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_NA: LocaleDefinition = {
  firstNamesMale: [
    'Johannes', 'Petrus', 'Hendrik', 'Jacobus', 'Andries', 'Willem',
    'Pieter', 'Stefan', 'Gerhard', 'Thomas', 'Ernst', 'Heinrich',
    'Karl', 'Friedrich', 'Helmut', 'Nangula', 'Tonata', 'Hishiko',
    'Kandume', 'Kumueni', 'Ambrosius', 'Lukas', 'Nangolo', 'Pendukeni',
    'Samuel', 'David', 'Michael', 'Daniel', 'Joseph', 'Erastus'
  ],
  firstNamesFemale: [
    'Anna', 'Maria', 'Hendrika', 'Elisabeth', 'Magdalena', 'Catharina',
    'Johanna', 'Martha', 'Helena', 'Sara', 'Susanna', 'Petronella',
    'Margaretha', 'Wilhelmina', 'Francina', 'Nakampe', 'Mpingana',
    'Ndapewa', 'Nashikoto', 'Loide', 'Sylvia', 'Selma', 'Evelyn',
    'Emma', 'Grace', 'Martha', 'Elizabeth', 'Mary', 'Justina',
    'Ester'
  ],
  lastNames: [
    'Shikongo', 'Shipanga', 'Amadhila', 'Haipinge', 'Shivute', 'Mwatale',
    'Angula', 'Uugwanga', 'Abiathar', 'Christiaans', 'De Waal',
    'Van der Merwe', 'Botha', 'Du Plessis', 'Smit', 'Venter',
    'Van Wyk', 'Louw', 'Nel', 'Kotze', 'Prinsloo', 'May', 'Shilongo',
    'Elago', 'Thomas', 'Paulino', 'Sakaria', 'Mukwiilongo', 'Petrus',
    'Tjirimuje'
  ],
  streets: [
    'Independence Avenue', 'Sam Nujoma Drive', 'Mandela Avenue',
    'Werner List Street', 'Post Street Mall', 'Uhland Street',
    'Tal Street', 'Dr Frans Indongo Street', 'John Meinert Street',
    'Bahnhof Street', 'Molke Street', 'Bismarck Street',
    'Riverside Road', 'Hugh McCarthy Street', 'Kasino Street',
    'Leutwein Street', 'Lazarett Street', 'Tant van Rhyn Street',
    'Hendrik Witbooi Street', 'Nelson Mandela Avenue'
  ],
  cities: [
    'Windhoek', 'Rundu', 'Walvis Bay', 'Swakopmund', 'Oshakati',
    'Rehoboth', 'Otjiwarongo', 'Okahandja', 'Keetmanshoop',
    'Mariental', 'Tsumeb', 'Grootfontein', 'Opuwo', 'Outapi',
    'Lüderitz', 'Katima Mulilo', 'Ondangwa', 'Eenhana',
    'Rundu', 'Karasburg'
  ],
  states: [
    'Khomas Region', 'Erongo Region', 'Oshana Region',
    'Otjozondjupa Region', 'Okavango West Region', 'Ohangwena Region',
    'Oshikoto Region', 'Kavango East Region', 'Kunene Region',
    'Hardap Region', '//Karas Region', 'Zambezi Region',
    'Omusati Region', 'Omaheke Region'
  ],
  zipCodePattern: '#####',
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
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, P.O. Box ${Random.int(1000, 99999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+264 ## ### ####',
    '+264 81# ### ###',
    '+264 82# ### ###',
    '+264 83# ### ###',
    '+264 84# ### ###',
    '+264 85# ### ###',
    '+264 61# ### ###',
    '0## ### ####',
    '08# ### ####',
    '081 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'namib.net',
    'mweb.com.na', 'iway.na', 'afol.com.na', 'live.com'
  ],

  companyNames: [
    'Namibia Breweries', 'Nampower', 'MTC Namibia',
    'Telecom Namibia', 'Bank Windhoek', 'First National Bank Namibia',
    'Standard Bank Namibia', 'Nedbank Namibia',
    'Namdeb Diamond Corporation', 'Rossing Uranium Mine',
    'Namibia Post', 'Air Namibia',
    'Namib Mills', 'Coca-Cola Namibia Bottling Company',
    'Ohlthaver & List Group', 'Paratus Telecom',
    'Dundee Precious Metals', 'Pupkewitz Holdings'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Fisheries', 'Tourism'
  ],

  catchPhrases: [
    'Innovating for prosperity',
    'Your success is our mission',
    'Building Namibia together',
    'Excellence in all we do',
    'Committed to quality and service',
    'Your trusted partner in growth',
    'Leading with vision and integrity'
  ]
};
