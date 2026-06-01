import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const kk_KZ: LocaleDefinition = {
  firstNamesMale: [
    'Askar', 'Nurlan', 'Bekzhan', 'Almat', 'Ruslan', 'Serik', 'Bolat', 'Kairat',
    'Timur', 'Daniyar', 'Arman', 'Yerlan', 'Bakhytzhan', 'Mukhtar', 'Zhandos', 'Nursultan',
    'Bauyrzhan', 'Maksat', 'Zhomart', 'Marat', 'Samat', 'Kanat', 'Saken', 'Dauren',
    'Yerzhan', 'Talgat', 'Mukhit', 'Berik', 'Galymzhan', 'Askhat'
  ],
  firstNamesFemale: [
    'Ainur', 'Gulnara', 'Aigul', 'Aizhan', 'Dinara', 'Moldir', 'Altynay', 'Aigerim',
    'Zhanar', 'Akmaral', 'Gulshat', 'Gulmira', 'Nazgul', 'Saltanat', 'Botagoz', 'Zarina',
    'Assel', 'Akbota', 'Ayaulym', 'Kuralay', 'Bibigul', 'Maira', 'Bayan', 'Raushan',
    'Kamshat', 'Zhanara', 'Saida', 'Damira', 'Gulnar', 'Saule'
  ],
  lastNames: [
    'Khan', 'Suleimenov', 'Nazarbayev', 'Tursynbekov', 'Aliev', 'Akhmetov', 'Kusainov', 'Smagulov',
    'Orazov', 'Niyazov', 'Moldabayev', 'Sarsembayev', 'Iskakov', 'Seitov', 'Mukhamedzhanov', 'Rakhimov',
    'Abdukarimov', 'Zhumagaliyev', 'Kulzhanov', 'Serikbayev', 'Kozhakhmetov', 'Ospanov', 'Alpysbayev',
    'Kadirbayev', 'Shakenov', 'Kenesov', 'Mustafin', 'Tulegenov', 'Kassenov', 'Zholamanov'
  ],
  streets: [
    'Abay Avenue', 'Dostyk Avenue', 'Republic Avenue', 'Al-Farabi Avenue',
    'Mukanov Street', 'Seifullin Street', 'Pushkin Street', 'Satybaldin Street',
    'Zheltoksan Street', 'Gogol Street', 'Kurmangazy Street', 'Baitursynov Street',
    'Shevchenko Street', 'Saken Seifullin Street', 'Tauelsizdik Street', 'Zhibek Zholy Street',
    'Kabanbay Batyr Avenue', 'Tole Bi Street'
  ],
  cities: [
    'Almaty', 'Nur-Sultan', 'Shymkent', 'Karaganda', 'Aktobe', 'Taraz', 'Pavlodar',
    'Oskemen', 'Semey', 'Kostanay', 'Oral', 'Atyrau', 'Kyzylorda', 'Aktau',
    'Temirtau', 'Zhanaozen', 'Taldykorgan', 'Kokshetau', 'Turkistan', 'Ridder'
  ],
  states: [
    'Akmola Region', 'Aktobe Region', 'Almaty Region', 'Atyrau Region', 'East Kazakhstan Region',
    'Jambyl Region', 'Karaganda Region', 'Kostanay Region', 'Kyzylorda Region', 'Mangystau Region',
    'North Kazakhstan Region', 'Pavlodar Region', 'Turkistan Region', 'West Kazakhstan Region',
    'Abay Region', 'Zhetysu Region', 'Ulytau Region'
  ],
  zipCodePattern: '######',
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
    const apartment = Random.int(1, 200);
    return `${houseNumber}/${apartment} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+7 (###) ###-##-##',
    '+7 ### ###-####',
    '+7 7## ### ####',
    '8 (###) ###-##-##',
    '8 702 ### ## ##',
    '8 705 ### ## ##',
    '8 707 ### ## ##',
    '8 771 ### ## ##',
    '8 775 ### ## ##',
    '8 778 ### ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.kz',
    'mail.ru', 'list.ru', 'inbox.ru', 'bk.ru', 'kzmail.kz'
  ],

  companyNames: [
    'KazMunayGas', 'Kaspi Bank', 'Halyk Bank', 'Kazatomprom', 'Kazakhmys Corporation',
    'Air Astana', 'Kazakhstan Railway', 'KazTransOil', 'KEGOC', 'Kcell',
    'Beeline Kazakhstan', 'Tele2 Kazakhstan', 'Zarya Corporation', 'ArcelorMittal Temirtau',
    'Karachaganak Petroleum', 'Tengizchevroil', 'NCOC N.V.', 'Kumkol'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Oil and Gas'
  ],

  catchPhrases: [
    'Innovation for a modern Kazakhstan', 'Your financial partner', 'Building prosperity together',
    'Excellence in energy and mining', 'Quality service throughout Kazakhstan',
    'Reliable partner in Central Asia', 'Driving economic growth'
  ]
};
