import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const tk_TM: LocaleDefinition = {
  firstNamesMale: [
    'Aman', 'Atamyrat', 'Berdi', 'Chary', 'Dovlet', 'Dursun', 'Gurbanguly', 'Hoshgeldi',
    'Ilhom', 'Juma', 'Kakageldi', 'Kurbandurdi', 'Maksat', 'Mergen', 'Murat', 'Myrat',
    'Nazar', 'Nurmuhammet', 'Oraz', 'Rejep', 'Rovshen', 'Saparmurat', 'Serdar', 'Shamurat',
    'Toyly', 'Wekil', 'Yagshigeldi', 'Yakim', 'Yusup', 'Zohrab'
  ],
  firstNamesFemale: [
    'Aygul', 'Aknabat', 'Arzygul', 'Bagulgul', 'Bibi', 'Bossana', 'Chinargul', 'Dilber',
    'Dursun', 'Enejan', 'Gulbahar', 'Guljahan', 'Gulmira', 'Hari', 'Jahan', 'Kumush',
    'Mahrijemal', 'Maysa', 'Maya', 'Merjen', 'Nurjahan', 'Oguljeren', 'Ogulgerek', 'Rozy',
    'Sabira', 'Selbi', 'Sohbetgul', 'Sonya', 'Tavus', 'Yazgul'
  ],
  lastNames: [
    'Berdimuhamedow', 'Amanow', 'Atayew', 'Babatow', 'Charyyew', 'Durdiyew', 'Gurbanow',
    'Hudayberdiyew', 'Ilmyradow', 'Jumayew', 'Kakabayew', 'Mammedow', 'Meredow', 'Muhammetgulyyew',
    'Nuriyew', 'Orazow', 'Rejebow', 'Saparmyradow', 'Saryyew', 'Seidow',
    'Tagangulyyew', 'Toymyradow', 'Wekilow', 'Yagmyrow', 'Yazgylyjow', 'Akhmetow', 'Babayew',
    'Garryyew', 'Khodzhakuliyev', 'Myradow'
  ],
  streets: [
    'Bitarap Turkmenistan Avenue', 'Magtymguly Avenue', 'Turkmenbashi Avenue',
    'Gorogly Street', 'Saparmurat Niyazov Street', 'Ahal Street',
    'Kemine Street', 'Andalyp Street', 'Mollanepes Street', 'Gurtly Street',
    'Baku Street', 'Ashgabat Street', 'Nisa Street', 'Kopetdag Street',
    'Kerven Street', 'Gokdepe Street', 'Balkan Street', 'Dashoguz Street'
  ],
  cities: [
    'Ashgabat', 'Turkmenbashi', 'Dashoguz', 'Mary', 'Turkmenabad', 'Balkanabat',
    'Tuerkmenbasy', 'Anau', 'Gokdepe', 'Bayramaly', 'Tagtabazar', 'Serakhs',
    'Kaka', 'Tejen', 'Abadan', 'Babadayhan', 'Seydi', 'Hazar'
  ],
  states: [
    'Ashgabat', 'Ahal Region', 'Balkan Region', 'Dashoguz Region', 'Lebap Region', 'Mary Region'
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
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+993 ## #######',
    '+993 (0)## #######',
    '8 ## #######',
    '12 ######',
    '022 ######',
    '023 ######',
    '024 ######',
    '025 ######',
    '026 ######',
    '027 ######'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ru',
    'yandex.ru', 'list.ru', 'bk.ru', 'inbox.ru', 'online.tm'
  ],

  companyNames: [
    'Turkmengaz', 'Turkmennebit', 'Turkmenhimiya', 'Turkmenmaden',
    'Turkmengalsen', 'Turkmenavtoulaglary', 'Turkmenistanyn Howa Yollary',
    'Turkmen Telecommunications', 'TM Cell', 'Altyn Asyr',
    'Bereket Bank', 'Halk Bank', 'Turkmendokhtar',
    'Ashgabat Textile', 'Turkmenemel', 'Turkmenhaly'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Textile', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation for independent Turkmenistan', 'Your trusted financial partner',
    'Building prosperity in Turkmenistan', 'Excellence in energy and gas',
    'Quality service and tradition', 'Reliable partner in Central Asia',
    'Committed to national development'
  ]
};
