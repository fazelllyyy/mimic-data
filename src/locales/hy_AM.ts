import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const hy_AM: LocaleDefinition = {
  firstNamesMale: [
    'Armen', 'Argam', 'Artak', 'Ashot', 'Tigran', 'Vazgen', 'Ararat', 'Gagik',
    'Hovhannes', 'Karnik', 'Mher', 'Narek', 'Sargis', 'Vahe', 'Zaven', 'Arsen',
    'Babken', 'Davit', 'Garnik', 'Hrach', 'Jivan', 'Levon', 'Mikayel', 'Norayr',
    'Rafayel', 'Samvel', 'Serop', 'Vahan', 'Shavarsh', 'Garush'
  ],
  firstNamesFemale: [
    'Anahit', 'Asya', 'Astkhik', 'Lilit', 'Gayane', 'Nune', 'Susanna', 'Narine',
    'Tatev', 'Hasnik', 'Irma', 'Karine', 'Manushak', 'Nvard', 'Ruzanna', 'Shushan',
    'Arpine', 'Lusine', 'Mariam', 'Tamara', 'Armine', 'Arevhat', 'Gohar', 'Heghine',
    'Kristine', 'Shake', 'Siranush', 'Zara', 'Sona', 'Anna'
  ],
  lastNames: [
    'Hovhannisyan', 'Sargsyan', 'Grigoryan', 'Mkrtchyan', 'Harutyunyan', 'Petrosyan', 'Hayrapetyan',
    'Karapetyan', 'Avetisyan', 'Gasparyan', 'Vardanyan', 'Manukyan', 'Ghazaryan', 'Asatryan',
    'Khachatryan', 'Mkrtchyan', 'Shahbazyan', 'Antonyan', 'Tovmasyan', 'Stepanyan',
    'Arakelyan', 'Hakobyan', 'Melkonyan', 'Poghosyan', 'Sahakyan', 'Simonyan', 'Martirosyan',
    'Babayan', 'Barseghyan', 'Margaryan'
  ],
  streets: [
    'Northern Avenue', 'Mashtots Avenue', 'Tigran Mets Avenue', 'Arshakunyats Avenue',
    'Sayat-Nova Avenue', 'Bagramyan Avenue', 'Movses Khorenatsi Street', 'Abovyan Street',
    'Raffi Street', 'Nalbandyan Street', 'Charents Street', 'Paronyan Street',
    'Teryan Street', 'Isahakyan Street', 'Tumanyan Street', 'Pushkin Street',
    'Khanjyan Street', 'Komitas Street'
  ],
  cities: [
    'Yerevan', 'Gyumri', 'Vanadzor', 'Vagharshapat', 'Hrazdan', 'Kapan', 'Armavir',
    'Artashat', 'Gavar', 'Ijevan', 'Sevan', 'Charentsavan', 'Masis', 'Ashtarak',
    'Dilijan', 'Aparan', 'Talin', 'Vardenis', 'Goris', 'Sisian'
  ],
  states: [
    'Yerevan', 'Aragatsotn', 'Ararat', 'Armavir', 'Gegharkunik', 'Kotayk', 'Lori',
    'Shirak', 'Syunik', 'Tavush', 'Vayots Dzor'
  ],
  zipCodePattern: '####',
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
    const building = Random.int(1, 9999);
    const apartment = Random.int(1, 300);
    return `${building}/${apartment} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+374 ## ######',
    '+374 (0)## ######',
    '0## ######',
    '041 ######',
    '043 ######',
    '044 ######',
    '055 ######',
    '077 ######',
    '091 ######',
    '093 ######',
    '094 ######',
    '098 ######'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ru',
    'yandex.ru', 'bk.ru', 'list.ru', 'inbox.ru', 'silknet.am'
  ],

  companyNames: [
    'Armenian Development Bank', 'ACBA Bank', 'Ardshinbank', 'Ameriabank',
    'Armenia Insurance', 'Armavia', 'Armenian Airlines', 'Intertelecom',
    'Ucom Armenia', 'VivaCell MTS', 'Beeline Armenia', 'Electric Networks of Armenia',
    'Armenian Gas', 'Armenian Mining Company', 'Grand Holding', 'Yerevan Brandy Company',
    'Armenian Dairy Company', 'ASHTARAK Group'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Diamond Cutting', 'Information Technology'
  ],

  catchPhrases: [
    'Innovating in the heart of the Caucasus', 'Your trusted financial partner',
    'Building a prosperous Armenia', 'Excellence in service and quality',
    'Heritage and innovation combined', 'Reliable partner for growth',
    'Leading Armenian enterprise'
  ]
};
