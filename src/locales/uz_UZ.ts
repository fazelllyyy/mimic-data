import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const uz_UZ: LocaleDefinition = {
  firstNamesMale: [
    'Abdulla', 'Botir', 'Davron', 'Eldor', 'Furqat', 'Gafur', 'Husan', 'Ikram',
    'Jamshid', 'Komil', 'Laziz', 'Mansur', 'Nodir', 'Oybek', 'Pulat', 'Qadir',
    'Rustam', 'Sardor', 'Temur', 'Ulugbek', 'Valijon', 'Xasan', 'Yodgor', 'Zafar',
    'Azamat', 'Bakhrom', 'Dilshod', 'Erkin', 'Farrukh', 'Jasur'
  ],
  firstNamesFemale: [
    'Adolat', 'Barno', 'Charos', 'Dildora', 'Elmira', 'Feruza', 'Gulnora', 'Hilola',
    'Iroda', 'Jamila', 'Kamola', 'Lola', 'Maftuna', 'Nargiza', 'Oydin', 'Parvin',
    'Qadriya', 'Rayhona', 'Sabina', 'Tamara', 'Umida', 'Vasila', 'Xadicha', 'Yulduz',
    'Zilola', 'Gulchehra', 'Mohira', 'Nilufar', 'Rano', 'Sojida'
  ],
  lastNames: [
    'Karimov', 'Alimov', 'Baymuradov', 'Davlatov', 'Ergashev', 'Fayzullayev', 'Gulyamov',
    'Hakimov', 'Ismailov', 'Jalilov', 'Kadirov', 'Latipov', 'Mamadaliyev', 'Nazarov',
    'Ochilov', 'Pulatov', 'Rakhimov', 'Sabirov', 'Sultanov', 'Turaev',
    'Umarov', 'Vohidov', 'Yusupov', 'Zokirov', 'Azimov', 'Bekmuratov', 'Djuraev',
    'Ibragimov', 'Khamidov', 'Mirzayev'
  ],
  streets: [
    'Amir Timur Avenue', 'Sharaf Rashidov Avenue', 'Buyuk Turan Street',
    'Nukus Street', 'Shakhrisabz Street', 'Mirabad Street', 'Afrosiab Street',
    'A.Navoi Street', 'Bobur Street', 'Kukcha Street', 'Chimkent Street',
    'Tashkent Street', 'Samarkand Street', 'Bukhara Street', 'Khiva Street',
    'Mustaqillik Square', 'Pushkin Street', 'Furkat Street'
  ],
  cities: [
    'Tashkent', 'Samarkand', 'Bukhara', 'Namangan', 'Andijan', 'Fergana', 'Nukus',
    'Kokand', 'Margilan', 'Termez', 'Jizzakh', 'Khiva', 'Urgench', 'Karshi',
    'Navoi', 'Gulistan', 'Bekabad', 'Chirchiq', 'Angren', 'Denov'
  ],
  states: [
    'Tashkent City', 'Tashkent Region', 'Samarkand Region', 'Bukhara Region', 'Namangan Region',
    'Andijan Region', 'Fergana Region', 'Karakalpakstan', 'Kashkadarya Region', 'Navoi Region',
    'Khorezm Region', 'Jizzakh Region', 'Surkhandarya Region', 'Syrdarya Region'
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
    const apartment = Random.int(1, 250);
    return `${houseNumber}/${apartment} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+998 ## ### ####',
    '+998 (0)## ### ####',
    '0## ### ####',
    '90 ### ####',
    '91 ### ####',
    '93 ### ####',
    '94 ### ####',
    '95 ### ####',
    '97 ### ####',
    '98 ### ####',
    '99 ### ####',
    '71 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ru',
    'yandex.ru', 'list.ru', 'bk.ru', 'inbox.ru', 'sarkor.uz'
  ],

  companyNames: [
    'Uzbekneftegaz', 'National Bank of Uzbekistan', 'Asaka Bank', 'Uzpromstroybank',
    'Uzbekistan Airways', 'UzAuto Motors', 'Uztelecom', 'Beeline Uzbekistan',
    'Ucell Uzbekistan', 'Uzmobile', 'Artel Electronics', 'Bukhara Oil Refinery',
    'Navoi Mining and Metallurgy', 'Almalyk Mining', 'Kokand Textile',
    'DAMAS Group', 'Uzkimyosanoat', 'Uzbekistan Railways'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Textile', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation in the heart of Central Asia', 'Your trusted banking partner',
    'Building a new Uzbekistan', 'Excellence in manufacturing and textiles',
    'Quality service and reliability', 'Your partner in Uzbek growth',
    'Committed to national development'
  ]
};
