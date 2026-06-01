import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const dz_BT: LocaleDefinition = {
  firstNamesMale: [
    'Jigme', 'Karma', 'Sonam', 'Tashi', 'Wangchuk', 'Dorji', 'Phuntsho', 'Lhendup',
    'Kinley', 'Tshering', 'Ugyen', 'Sangay', 'Tshewang', 'Dechen', 'Nima', 'Pema',
    'Chencho', 'Gyurme', 'Passang', 'Rinchen', 'Chador', 'Tenzin', 'Chimi', 'Jamyang',
    'Kunzang', 'Chhoki', 'Thinley', 'Kelzang', 'Ngawang', 'Samten'
  ],
  firstNamesFemale: [
    'Dechen', 'Yangchen', 'Pema', 'Lhamo', 'Dolkar', 'Sonam', 'Karma', 'Choden',
    'Zangmo', 'Wangmo', 'Yeshi', 'Jigme', 'Tshewang', 'Kinley', 'Aum', 'Mindu',
    'Tenzin', 'Passang', 'Ugyen', 'Norbu', 'Chimi', 'Rinchen', 'Kunzang', 'Sangay',
    'Tshering', 'Deki', 'Pelzom', 'Chhimi', 'Choney', 'Seldon'
  ],
  lastNames: [
    'Dorji', 'Wangchuk', 'Lhamo', 'Yeshi', 'Tobgye', 'Tenzing', 'Norbu', 'Jamtsho',
    'Dukpa', 'Gyamtsho', 'Jurmi', 'Penjore', 'Rai', 'Subba', 'Mongar', 'Phuntsho',
    'Sangay', 'Chophel', 'Om', 'Tashi', 'Thinley', 'Dema', 'Tshering', 'Nado',
    'Phuntsho', 'Chokey', 'Tobgay', 'Tenzin', 'Karchung', 'Choeda'
  ],
  streets: [
    'Norzin Lam', 'Chang Lam', 'Chorten Lam', 'Yab Lam', 'Thori Lam',
    'Pedzoe Lam', 'Tshering Lam', 'Wangchuk Lam', 'Rinchending Road',
    'Punakha Highway', 'Thimphu-Paro Highway', 'Kawajangsa Road',
    'Olognachung Road', 'Dechencholing Road', 'Babesa Road', 'Druk School Lam',
    'Helipad Road', 'Lungtenphu Road'
  ],
  cities: [
    'Thimphu', 'Phuntsholing', 'Paro', 'Punakha', 'Wangdue Phodrang', 'Trashigang',
    'Gelephu', 'Jakar', 'Samdrup Jongkhar', 'Haa', 'Mongar', 'Trongsa',
    'Zhemgang', 'Dagana', 'Samtse', 'Sarpang', 'Bumthang', 'Lhuntse'
  ],
  states: [
    'Thimphu', 'Paro', 'Punakha', 'Bumthang', 'Wangdue Phodrang', 'Trashigang',
    'Mongar', 'Sarpang', 'Chukha', 'Samdrup Jongkhar', 'Samtse', 'Zhemgang',
    'Dagana', 'Haa', 'Lhuntse', 'Pemagatshel', 'Trongsa', 'Gasa'
  ],
  zipCodePattern: '#####',
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
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+975 ## ### ###',
    '+975 (0)## ### ###',
    '02 ### ###',
    '17 ### ###',
    '77 ### ###',
    '77# ### ###',
    '+975 2# ### ###',
    '+975 17# ### ###',
    '+975 77# ### ###',
    '+975 1# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'druknet.bt',
    'gmail.bt', 'bhutan.net', 'kuensel.com.bt', 'butladen.bt', 'apfanet.com'
  ],

  companyNames: [
    'Druk Holdings', 'Bank of Bhutan', 'Bhutan National Bank', 'Bhutan Development Bank',
    'Bhutan Insurance Company', 'Bhutan Telecom', 'Tashi Infocomm',
    'Druk Air', 'Bhutan Airlines', 'Druk Green Power Corporation',
    'Bhutan Power Corporation', 'Druk Cement', 'Karma Group',
    'Pellet Industries', 'Bhutan Agro Industries', 'SIPA Bhutan',
    'Chhundu Group', 'Yangphel Group'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Hydropower', 'Tourism'
  ],

  catchPhrases: [
    'Innovation for Gross National Happiness', 'Your trusted financial partner',
    'Building happiness together', 'Excellence in hydropower and beyond',
    'Quality service in the Land of the Thunder Dragon', 'Sustainable development',
    'Your partner in Bhutanese growth'
  ]
};
