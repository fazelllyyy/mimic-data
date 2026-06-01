import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ka_GE: LocaleDefinition = {
  firstNamesMale: [
    'Giorgi', 'Davit', 'Zurab', 'Levan', 'Mamuka', 'Nika', 'Lasha', 'Irakli',
    'Tamaz', 'Shota', 'Tengiz', 'Otar', 'Vakhtang', 'Badri', 'Ramaz', 'Akaki',
    'Gia', 'Revaz', 'Merab', 'Temuri', 'Kakha', 'Mikheil', 'Gocha', 'Vladimer',
    'Boris', 'Zviad', 'Gocha', 'Jumber', 'Vepkho', 'Grigol'
  ],
  firstNamesFemale: [
    'Nino', 'Tamari', 'Ketevan', 'Mariam', 'Nana', 'Tina', 'Nino', 'Natalia',
    'Manana', 'Eka', 'Mzia', 'Khatuna', 'Maka', 'Salome', 'Elene', 'Ana',
    'Nina', 'Tsisana', 'Lali', 'Dali', 'Inga', 'Sophia', 'Nugzari', 'Maya',
    'Irma', 'Dodo', 'Nargiza', 'Tatia', 'Lela', 'Liana'
  ],
  lastNames: [
    'Maisuradze', 'Beridze', 'Gegeshidze', 'Kipiani', 'Tabatadze', 'Kobalia', 'Lomidze',
    'Chachava', 'Dolidze', 'Tsiklauri', 'Kharshiladze', 'Buadze', 'Kapanadze', 'Gigauri',
    'Okruashvili', 'Kvaratskhelia', 'Tkeshelashvili', 'Bochorishvili', 'Sharvashidze',
    'Amiranashvili', 'Javakhishvili', 'Kandelaki', 'Tsulukidze', 'Chkheidze', 'Kakabadze',
    'Ghlonti', 'Mchedlidze', 'Kiknadze', 'Todua', 'Mgaloblishvili'
  ],
  streets: [
    'Rustaveli Avenue', 'Tbilisi Street', 'Agmashenebeli Avenue', 'Pekini Avenue',
    'Chavchavadze Avenue', 'Kostava Street', 'Vazha-Pshavela Avenue', 'Tsereteli Avenue',
    'Belgrade Street', 'Leselidze Street', 'Baratashvili Street', 'Pushkin Street',
    'Shardeni Street', 'Melikishvili Street', 'Aghmashenebeli Street', 'Dadiani Street',
    'Galaktion Tabidze Street', 'Aleksidze Street'
  ],
  cities: [
    'Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Zugdidi', 'Gori', 'Poti',
    'Telavi', 'Marneuli', 'Samtredia', 'Akhaltsikhe', 'Ozurgeti', 'Sagarejo',
    'Tkibuli', 'Tsqaltubo', 'Mtskheta', 'Bolnisi', 'Gardabani', 'Kaspi', 'Khoni'
  ],
  states: [
    'Tbilisi', 'Adjara', 'Guria', 'Imereti', 'Kakheti', 'Kvemo Kartli', 'Mtskheta-Mtianeti',
    'Racha-Lechkhumi', 'Samegrelo-Zemo Svaneti', 'Samtskhe-Javakheti', 'Shida Kartli',
    'Abkhazia', 'Tskhinvali'
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
    return `${building} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+995 ### ## ## ##',
    '+995 (0)### ## ##',
    '5## ## ## ##',
    '59# ## ## ##',
    '55# ## ## ##',
    '57# ## ## ##',
    '51# ## ## ##',
    '032 ## ## ##',
    '031 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.ge',
    'posta.ge', 'geolink.ge', 'asnet.ge', 'liberali.ge', 'saqartvelo.ge'
  ],

  companyNames: [
    'Bank of Georgia', 'TBC Bank', 'Liberty Bank', 'Georgian Railway',
    'Georgian Oil and Gas Corporation', 'Georgian State Electrosystem',
    'Georgian Airways', 'Georgian Water and Power', 'MagtiCom',
    'Silknet Georgia', 'Beeline Georgia', 'Georgian Manganese',
    'Kazbegi Group', 'GSP JSC', 'Wissol Group', 'RMG Group',
    'Georgian Mining Corporation', 'Societe Generale Georgia'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Wine and Agriculture', 'Tourism'
  ],

  catchPhrases: [
    'Innovating at the crossroads of Europe and Asia', 'Your trusted banking partner',
    'Building a modern Georgia', 'Excellence in service', 'Sustainable development for Georgia',
    'Quality and hospitality', 'Leading Georgian enterprise'
  ]
};
