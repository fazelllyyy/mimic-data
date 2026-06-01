import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const my_MM: LocaleDefinition = {
  firstNamesMale: [
    'Aung', 'Kyaw', 'Tun', 'Zaw', 'Soe', 'Myint', 'Hlaing', 'Win', 'Than', 'Htet',
    'Lin', 'Min', 'Pyae', 'Sithu', 'Phone', 'Zin', 'Yan', 'Naing', 'Paing', 'Oakkar',
    'Hein', 'Thant', 'Khant', 'Thura', 'SiThu', 'Ye', 'Kyawt', 'Thiha', 'Kaung', 'Swan'
  ],
  firstNamesFemale: [
    'Su', 'Hla', 'Moe', 'Kyi', 'Khin', 'Nu', 'Aye', 'May', 'Yee', 'Thet',
    'Thida', 'Sandar', 'Yadana', 'Shwe', 'Pansy', 'Mya', 'Yin', 'Nwe', 'Phyu', 'Wai',
    'Thinzar', 'Khaing', 'Thiri', 'Zin', 'Ei', 'Nandar', 'Amar', 'Hnin', 'Phyu', 'Eaint'
  ],
  lastNames: [
    'Maung', 'Kyaw', 'Tun', 'Win', 'Than', 'Soe', 'Aung', 'Myint', 'Hlaing', 'Lwin',
    'Swe', 'Tin', 'Thein', 'Htun', 'Shein', 'Nyein', 'Khin', 'Phyo', 'Thant', 'Moe',
    'Naing', 'Zaw', 'Htet', 'Bo', 'Oo', 'Khaing', 'Min', 'Sein', 'Pe', 'Thaung'
  ],
  streets: [
    'Sule Pagoda Road', 'Bogyoke Aung San Road', 'Maha Bandula Road', 'Anawrahta Road',
    'Pansodan Street', 'Strand Road', 'Kabar Aye Pagoda Road', 'Inya Road',
    'Pyay Road', 'Hledan Street', 'Kyaikkasan Road', 'Bayint Naung Road',
    'Shwe Gon Daing Road', 'University Avenue', 'Than Lwin Road', 'Bagaya Street',
    'Yoe Gyi Lane', 'Shwe Taung Gyar Street'
  ],
  cities: [
    'Yangon', 'Mandalay', 'Naypyidaw', 'Bago', 'Mawlamyine', 'Taunggyi', 'Myitkyina',
    'Monywa', 'Sittwe', 'Pathein', 'Meiktila', 'Pakokku', 'Pyay', 'Myeik',
    'Lashio', 'Hpa-An', 'Dawei', 'Loikaw', 'Magway', 'Bhamo'
  ],
  states: [
    'Yangon Region', 'Mandalay Region', 'Naypyidaw Union Territory', 'Shan State',
    'Kachin State', 'Kayin State', 'Mon State', 'Rakhine State', 'Ayeyarwady Region',
    'Bago Region', 'Magway Region', 'Sagaing Region', 'Tanintharyi Region', 'Chin State',
    'Kayah State', 'Kachin State'
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
    '+95 ## ### ###',
    '+95 (0)## ### ###',
    '09 ### ###',
    '01 ### ###',
    '02 ### ###',
    '09 #### ####',
    '09# ### ###',
    '09 7# ### ###',
    '09 4# ### ###',
    '09 2# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mptmail.com.mm',
    'telenor.com.mm', 'ooredoo.com.mm', 'mytel.com.mm', 'burmese.com', 'myanmar.com.mm'
  ],

  companyNames: [
    'Myanmar Oil and Gas Enterprise', 'Myanma Port Authority', 'Myanmar Airways International',
    'KBZ Bank', 'CB Bank', 'AYA Bank', 'Myanmar Microfinance Bank',
    'Htoo Group', 'Mitsubishi Myanmar', 'Myanmar Brewery', 'Heineken Myanmar',
    'Telenor Myanmar', 'Ooredoo Myanmar', 'MPT', 'Mytel', 'Yangon Airways',
    'Myanmar Golden Star', 'Myanmar Distillery'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Construction', 'Tourism'
  ],

  catchPhrases: [
    'Building the future of Myanmar', 'Your success is our mission', 'Quality and trust above all',
    'Innovating for a brighter tomorrow', 'Together we grow', 'Commitment to excellence',
    'Your trusted partner in progress'
  ]
};
