import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const lo_LA: LocaleDefinition = {
  firstNamesMale: [
    'Somsanit', 'Soukanh', 'Saysana', 'Bounmy', 'Khamla', 'Vongsa', 'Sithong', 'Bounthanh',
    'Ketsana', 'Vanhxay', 'Souvanh', 'Sengaloun', 'Phouthone', 'Khamtan', 'Viengsay', 'Soulisak',
    'Dethsackda', 'Thongdy', 'Bouasone', 'Sonnaphat', 'Souksakhone', 'Amphone', 'Thongkham', 'Xayyavong',
    'Phoukhong', 'Koukeo', 'Souliyan', 'Savankhone', 'Sengkham', 'Bounphithack'
  ],
  firstNamesFemale: [
    'Souphaphone', 'Mala', 'Sibounheuang', 'Phone', 'Khamphong', 'Souksavanh', 'Viengkham', 'Bounyong',
    'Sangvone', 'Thipphaphone', 'Souphatta', 'Bounlert', 'Lattana', 'Dalavanh', 'Phaphone', 'Siphone',
    'Souphap', 'Phonsavanh', 'Laopone', 'Sangvone', 'Souksomphet', 'Phouvone', 'Nalinthone', 'Manilath',
    'Vilayphone', 'Saengdao', 'Souksamay', 'Phonepaseuth', 'Bounleuce', 'Siphaphone'
  ],
  lastNames: [
    'Inthavong', 'Soulivong', 'Sengsouriya', 'Phongsavanh', 'Souksavat', 'Bounthavong', 'Chanthavong',
    'Phimmasone', 'Keovongsa', 'Souvannavong', 'Vongvichit', 'Lathsavong', 'Phetsavanh', 'Sisouphanthong',
    'Vongsamphanh', 'Pholsena', 'Notchalee', 'Sipaseuth', 'Phengphong', 'Saysanavong',
    'Somboun', 'Phomvihane', 'Souvanhnavong', 'Chounlamany', 'Vongphachanh', 'Keomany', 'Sengsavang',
    'Thammavong', 'Sinakhone', 'Phothisane'
  ],
  streets: [
    'Samsenthai Road', 'Setthathirath Road', 'Lanexang Road', 'Khouvieng Road',
    'Rue Hengboun', 'Sihom Road', 'Sisavangvong Road', 'Souphanouvong Road',
    'Rue Phothisane', 'Rue Nokeokoummane', 'Rue Khun Bulom', 'Rue Chao Fa Ngum',
    'Rue Luang Prabang', 'Rue Saylom', 'Rue Dongpalan', 'Rue Phommathat',
    'Rue Thongkhan', 'Rue Pangkham'
  ],
  cities: [
    'Vientiane', 'Luang Prabang', 'Savannakhet', 'Pakse', 'Thakhek', 'Luang Namtha',
    'Muang Xay', 'Xam Neua', 'Phonsavan', 'Sainyabuli', 'Champasak', 'Samakkixay',
    'Sekong', 'Attapeu', 'Phongsaly', 'Huay Xai', 'Ban Houayxay', 'Muang Khong'
  ],
  states: [
    'Vientiane Prefecture', 'Luang Prabang', 'Savannakhet', 'Champasak', 'Khammouane',
    'Xieng Khouang', 'Luang Namtha', 'Bokeo', 'Phongsaly', 'Huaphan', 'Sekong', 'Attapeu',
    'Sainyabuli', 'Bolikhamsai', 'Oudomxay', 'Salavan'
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
    '+856 ## ### ###',
    '+856 (0)## ### ###',
    '020 ## ### ###',
    '021 ### ###',
    '030 ### ###',
    '020 2# ### ###',
    '020 5# ### ###',
    '020 7# ### ###',
    '020 8# ### ###',
    '020 9# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'laotel.com',
    'laopost.com', 'yangla.com', 'exotel.la', 'lanexang.net', 'plnet.com'
  ],

  companyNames: [
    'Lao Telecom', 'Unitel Lao', 'Beeline Lao', 'Lao Airlines', 'Lao Brewery Company',
    'Phouvong Construction', 'ST Group Lao', 'KOLAO Group', 'Champa Lao',
    'Lao Development Bank', 'BCEL Bank', 'Joint Development Bank', 'Phongsavanh Bank',
    'Mekong River Commission', 'Lao World Trading', 'Lao State Fuel Company'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Construction', 'Tourism'
  ],

  catchPhrases: [
    'Innovation for tomorrow', 'Your trusted partner in Laos', 'Building a better future',
    'Quality and excellence always', 'Sustainable growth together', 'Committed to your success',
    'Bringing value to our community'
  ]
};
