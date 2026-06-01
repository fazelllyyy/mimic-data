import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const tg_TJ: LocaleDefinition = {
  firstNamesMale: [
    'Abdullo', 'Bakhtovar', 'Dalir', 'Eraj', 'Firuz', 'Ganjina', 'Hurshed', 'Ikrom',
    'Jamshed', 'Komron', 'Loik', 'Mukhsin', 'Nasim', 'Olim', 'Pulod', 'Ravshan',
    'Shams', 'Tohir', 'Umed', 'Vohid', 'Yodgor', 'Zafar', 'Qurban', 'Rustam',
    'Safarmukhammad', 'Sharif', 'Siroj', 'Tolib', 'Zubayd', 'Anvarshoh'
  ],
  firstNamesFemale: [
    'Anisa', 'Bibigul', 'Chinor', 'Dilshoda', 'Farzona', 'Gulnora', 'Husnia', 'Iroda',
    'Jamila', 'Karima', 'Latofat', 'Maftuna', 'Nargis', 'Ozoda', 'Parvina', 'Rukhsora',
    'Safina', 'Tamara', 'Umida', 'Zarina', 'Gulchekhra', 'Makhbuba', 'Nigora', 'Shahnso',
    'Tahmina', 'Yulduz', 'Matluba', 'Munira', 'Rano', 'Marhabo'
  ],
  lastNames: [
    'Abdulloev', 'Atobekov', 'Bakhtiyorov', 'Davlatov', 'Ergashev', 'Faizulloev', 'Gulmurodov',
    'Hakimov', 'Iskandarov', 'Juraev', 'Karimov', 'Latipov', 'Murodov', 'Nazarov', 'Oripov',
    'Pulodov', 'Qodirov', 'Rahimov', 'Safarov', 'Sharipov',
    'Saidov', 'Tohirov', 'Umarov', 'Vohidov', 'Yusupov', 'Zoirov', 'Davlatmamadov',
    'Kurbonov', 'Mirzoev', 'Shukurov'
  ],
  streets: [
    'Rudaki Avenue', 'Ayni Street', 'Sino Avenue', 'Bokhtar Street',
    'Firdavsi Street', 'Shah Mansur Street', 'Tajikistan Avenue', 'Safarmuhammad Street',
    'Nizami Street', 'Dehlavi Street', 'Khatlon Street', 'Khujand Street',
    'Husseinzoda Street', 'Navoi Street', 'Shohtehran Street', 'Bahor Street',
    'Rumi Street', 'Foteh Street'
  ],
  cities: [
    'Dushanbe', 'Khujand', 'Kulyab', 'Bokhtar', 'Istaravshan', 'Panj', 'Tursunzoda',
    'Khorog', 'Ishkashim', 'Murghab', 'Danghara', 'Vahdat', 'Nurek', 'Farkhor',
    'Khamadoni', 'Jomi', 'Shahritus', 'Sarband', 'Kanibadam', 'Chkalovsk'
  ],
  states: [
    'Dushanbe', 'Sughd Region', 'Khatlon Region', 'Gorno-Badakhshan Autonomous Region',
    'Districts of Republican Subordination'
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
    const apartment = Random.int(1, 150);
    return `${houseNumber}/${apartment} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+992 ### ## ## ##',
    '+992 (0)### ## ##',
    '0### ## ##',
    '918 ## ## ##',
    '907 ## ## ##',
    '917 ## ## ##',
    '935 ## ## ##',
    '001 ### ###',
    '0888 ## ## ##',
    '0777 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ru',
    'yandex.ru', 'list.ru', 'bk.ru', 'inbox.ru', 'tajnet.tj'
  ],

  companyNames: [
    'NBT Tajikistan', 'Bancomat Bank', 'Spitamen Bank', 'Somoncom',
    'Megafon Tajikistan', 'TCell', 'Beeline Tajikistan', 'Tajik Airlines',
    'Tajikistan Railways', 'Barqi Tajik', 'Tajikistan Mining Company',
    'Tajikistan Cement Corporation', 'Tajikistan Aluminium Company',
    'Kairakkum HPP', 'Sughd Power Plant', 'Khujand Silk'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Aluminium', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation for the mountain nation', 'Your trusted banking partner',
    'Building prosperity in Tajikistan', 'Excellence in connectivity',
    'Reliable partner in Central Asia', 'Quality and dedication in service',
    'Committed to Tajik development'
  ]
};
