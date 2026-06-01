import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ky_KG: LocaleDefinition = {
  firstNamesMale: [
    'Aziz', 'Bakyt', 'Chyngyz', 'Erlan', 'Talant', 'Ulan', 'Nurlan', 'Omurzak',
    'Ruslan', 'Samat', 'Turan', 'Zamir', 'Aibek', 'Bektur', 'Daniyar', 'Erkin',
    'Kubanych', 'Marat', 'Nursultan', 'Syimyk', 'Akylbek', 'Bolot', 'Dastan', 'Ismail',
    'Kairat', 'Mirlan', 'Rinat', 'Tynchtyk', 'Zhanibek', 'Alym'
  ],
  firstNamesFemale: [
    'Aigul', 'Asel', 'Begimai', 'Cholpon', 'Diana', 'Elmira', 'Gulnara', 'Janyl',
    'Kanykei', 'Lola', 'Madina', 'Nazgul', 'Perizat', 'Rabia', 'Saltanat', 'Tolgonai',
    'Umida', 'Venera', 'Zarina', 'Bermet', 'Gulmira', 'Jarkyn', 'Kunduz', 'Makhabat',
    'Nurgul', 'Saadat', 'Tatyana', 'Aizada', 'Eliza', 'Meerim'
  ],
  lastNames: [
    'Asanov', 'Abdrakhmanov', 'Begaliev', 'Cholponbaev', 'Duishenaliev', 'Ergeshov', 'Isakov',
    'Joldoshbaev', 'Karypkulov', 'Kudaibergenov', 'Mambetov', 'Nogoev', 'Omorov', 'Osmonov',
    'Satylganov', 'Sharshenov', 'Tashiev', 'Turdubaev', 'Umetaliev', 'Yrysbekov',
    'Zhumaev', 'Akmatov', 'Baisalov', 'Dzhakypov', 'Imanaliev', 'Koshbaev', 'Mamatov',
    'Nazarkulov', 'Orunbaev', 'Sagynbaev'
  ],
  streets: [
    'Chui Avenue', 'Erkindik Avenue', 'Jibek Jolu Avenue', 'Manas Avenue',
    'Sovetskaya Street', 'Pushkin Street', 'Tynystanov Street', 'Gogol Street',
    'Frunze Street', 'Moscow Street', 'Panfilov Street', 'Toktogul Street',
    'Bokonbaev Street', 'Abdrakhmanov Street', 'Shevchenko Street', 'Isanov Street',
    'Mederova Street', 'Baytik Street'
  ],
  cities: [
    'Bishkek', 'Osh', 'Jalal-Abad', 'Karakol', 'Naryn', 'Talas', 'Batken',
    'Kyzyl-Kiya', 'Suluktu', 'Kant', 'Kara-Balta', 'Tokmok', 'Cholpon-Ata',
    'Kochkor-Ata', 'Malyy', 'Belovodsk', 'Shopokov', 'Kaindy'
  ],
  states: [
    'Bishkek City', 'Osh City', 'Batken Region', 'Chuy Region', 'Jalal-Abad Region',
    'Naryn Region', 'Osh Region', 'Talas Region', 'Issyk-Kul Region'
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
    const building = Random.int(1, 9999);
    const apartment = Random.int(1, 180);
    return `${building}/${apartment} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+996 ### ### ###',
    '+996 (0)### ### ###',
    '0### ### ###',
    '0700 ### ###',
    '0500 ### ###',
    '0550 ### ###',
    '0770 ### ###',
    '0312 ### ###',
    '0322 ### ###',
    '0390 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ru',
    'yandex.ru', 'list.ru', 'bk.ru', 'inbox.ru', 'kyrgyz.kg'
  ],

  companyNames: [
    'Kyrgyzstan Airports', 'Kyrgyzstan Investment and Credit Bank', 'Amanat Bank',
    'Kyrgyzstan National Bank', 'RSK Bank', 'KyrgyzTelecom', 'MegaCom',
    'O! Mobile', 'Beeline Kyrgyzstan', 'Kyrgyzstan Airlines',
    'Kyrgyzstan Railways', 'Kumtor Gold Company', 'Kyrgyzstan Mining Company',
    'Severelectro', 'Bishkek CHP', 'Gazprom Kyrgyzstan', 'Dordoi Bishkek'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation in the heart of Central Asia', 'Your trusted financial partner',
    'Building a prosperous Kyrgyzstan', 'Excellence in telecommunications',
    'Quality service and reliability', 'Your partner in Central Asian growth',
    'Committed to Kyrgyz development'
  ]
};
