import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const so_SO: LocaleDefinition = {
  firstNamesMale: [
    'Mohamed', 'Ahmed', 'Ali', 'Hassan', 'Abdirahman', 'Abdullahi', 'Omar',
    'Abdi', 'Ibrahim', 'Hussein', 'Said', 'Ismail', 'Abukar', 'Yusuf',
    'Ali', 'Hersi', 'Jama', 'Farah', 'Abdinur', 'Adan', 'Bashir',
    'Dahir', 'Guled', 'Halane', 'Idris', 'Khalid', 'Libin', 'Muse'
  ],
  firstNamesFemale: [
    'Aisha', 'Maryam', 'Asha', 'Fatima', 'Halima', 'Safia', 'Khadija',
    'Zainab', 'Amina', 'Faduma', 'Hawa', 'Naima', 'Rahma', 'Saida',
    'Zahra', 'Amira', 'Dega', 'Fartun', 'Hibo', 'Ikran', 'Jamila',
    'Kaltun', 'Lul', 'Muna', 'Nasra', 'Sahra', 'Shukri', 'Yasmin'
  ],
  lastNames: [
    'Mohamed', 'Ahmed', 'Ali', 'Hassan', 'Abdirahman', 'Hussein', 'Omar',
    'Ibrahim', 'Ismail', 'Abdi', 'Farah', 'Jama', 'Muse', 'Warsame',
    'Nur', 'Yusuf', 'Adan', 'Osman', 'Abukar', 'Dahir', 'Hersi',
    'Guled', 'Bashir', 'Idris', 'Khalid', 'Sharma', 'Galal', 'Duale'
  ],
  streets: [
    'Mogadishu Street', 'Hamar Street', 'Bakaaraha Road', 'Lido Beach Road',
    'Airport Road', 'K4 Highway', 'Maka Al Mukaramah Street',
    'Airport Street', 'Industrial Road', 'Port Road',
    'University Road', 'Freedom Road', 'Peace Avenue',
    'Al-Mourem Street', 'Omar Mukhtar Street', 'Gubta Road',
    'Km4 Junction Road', 'Yaamshid Street', 'Zeinab Street',
    'Jigjiga Yar Road'
  ],
  cities: [
    'Mogadishu', 'Hargeisa', 'Kismayo', 'Baidoa', 'Bosaso', 'Garowe',
    'Galkayo', 'Jowhar', 'Merca', 'Berbera', 'Burao', 'Afgooye',
    'Beledweyne', 'Qoryoley', 'Luuq', 'Erigavo', 'Dhusamareb',
    'Bardhere', 'Hudur', 'Garbahaarey', 'Wanlaweyn', 'Mahadday'
  ],
  states: [
    'Banaadir', 'Somaliland', 'Puntland', 'Galmudug', 'Hirshabelle',
    'South West', 'Jubaland', 'Khatumo'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Injineer Software', 'Maareeyaha Mashruuca', 'Falanqeeyaha Xogta',
    'Maareeyaha Suuqa', 'Iibiyaha', 'Xisaabiye', 'Maareeyaha Shaqaalaha',
    'Naqshadeeye', 'Maareeyaha Hawlgallada', 'Falanqeeyaha Ganacsiga',
    'Falanqeeyaha Maaliyadda', 'Maareeyaha Alaabta',
    'Maamulaha Nidaamka', 'Shaqaalaha Macmiilka', 'Injineer Shabakadda'
  ],
  departments: [
    'Injineerinta', 'Suuqa', 'Iibka', 'Kheyraadka Aadanaha', 'Maaliyadda',
    'Hawlgallada', 'Adeega Macmiilka', 'IT', 'Cilmi-baarista',
    'Sharciga', 'Maamulka Alaabta', 'Naqshadeynta', 'Tayada',
    'Maamulka Guud'
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
    '+252 ## ### ###',
    '+252 6# ### ###',
    '+252 7# ### ###',
    '6# ### ###',
    '7# ### ###',
    '61# ### ###',
    '62# ### ###',
    '63# ### ###',
    '68# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'somali.com', 'africa.com', 'hargeisa.net', 'somalinet.com', 'qaranmail.com'
  ],

  companyNames: [
    'Hormuud Telecom', 'Telesom', 'Somtel', 'Golis Telecom',
    'Somali Petroleum', 'Dahabshiil', 'Amal Bank',
    'Premier Bank Somalia', 'International Bank of Somalia',
    'Somali Airlines', 'Jubba Airways', 'Daallo Airlines',
    'Nasra Group', 'Somali Energy Company', 'Salaam Bank',
    'Galmudug Telecom', 'Barwaaqo Group'
  ],

  industries: [
    'Teknoloji', 'Maaliyad', 'Caafimaad', 'Tacliin', 'Ganacsi',
    'Warshad', 'Isgaarsiin', 'Tamarta', 'Gaadiid', 'Beeraha',
    'Guryeyn', 'Talin', 'Dalxiis', 'Macdanta'
  ],

  catchPhrases: [
    'Horumarka mustaqbalka', 'Guusha waa shaqadeena', 'Dhisidda mustaqbalka',
    'Tayo iyo kalsooni', 'Geesinimo iyo horumarin', 'Lamaanahaaga kalsoonida'
  ]
};
