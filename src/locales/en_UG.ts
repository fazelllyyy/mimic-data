import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_UG: LocaleDefinition = {
  firstNamesMale: [
    'Moses', 'Joseph', 'Daniel', 'David', 'Samuel', 'Peter', 'Patrick',
    'Charles', 'Paul', 'James', 'John', 'Michael', 'Henry', 'Robert',
    'William', 'Fred', 'Richard', 'Edward', 'Stephen', 'George',
    'Mustafa', 'Hassan', 'Ali', 'Yusuf', 'Sulaiman', 'Ronald', 'Andrew',
    'Patrick', 'Brian', 'Gerald'
  ],
  firstNamesFemale: [
    'Mary', 'Sarah', 'Grace', 'Rebecca', 'Esther', 'Joyce', 'Ruth',
    'Jane', 'Elizabeth', 'Margaret', 'Susan', 'Dorothy', 'Florence',
    'Helen', 'Martha', 'Alice', 'Agnes', 'Monica', 'Julia', 'Rose',
    'Fatumah', 'Aisha', 'Amina', 'Nakato', 'Babirye', 'Nalongo',
    'Nabasumba', 'Nakiwala', 'Nakamya', 'Nankya'
  ],
  lastNames: [
    'Mugisha', 'Mbabazi', 'Kato', 'Wasswa', 'Musoke', 'Ssenyonga',
    'Mukasa', 'Kintu', 'Kayondo', 'Nsubuga', 'Ssebulime', 'Mutebi',
    'Walusimbi', 'Lukyamuzi', 'Kibirige', 'Kasule', 'Muwonge',
    'Nakato', 'Namukwaya', 'Nabatanzi', 'Kyeyune', 'Okello',
    'Ochieng', 'Akena', 'Adong', 'Otema', 'Opio', 'Odongo',
    'Opolot', 'Wasswa'
  ],
  streets: [
    'Kampala Road', 'Jinja Road', 'Entebbe Road', 'Gayaza Road',
    'Bombo Road', 'Hoima Road', 'Luwum Street', 'Namirembe Road',
    'Nkrumah Road', 'Acacia Avenue', 'Kyadondo Road', 'Buganda Road',
    'Muteesa I Road', 'Port Bell Road', 'Kira Road', 'Wamala Road',
    'Bukoto Street', 'Kira Road', 'Old Kampala Road', 'Wilson Avenue'
  ],
  cities: [
    'Kampala', 'Nansana', 'Kira', 'Mbarara', 'Gulu', 'Jinja',
    'Mbale', 'Masaka', 'Entebbe', 'Soroti', 'Arua', 'Lira',
    'Fort Portal', 'Busia', 'Kabale', 'Tororo', 'Mukono',
    'Hoima', 'Iganga', 'Lugazi', 'Wobulenzi', 'Kasese',
    'Mityana', 'Rukungiri', 'Kitgum'
  ],
  states: [
    'Central Region', 'Eastern Region', 'Northern Region', 'Western Region',
    'Kampala District', 'Wakiso District', 'Mukono District',
    'Mbarara District', 'Gulu District', 'Jinja District',
    'Mbale District', 'Masaka District'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'System Administrator'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    const plot = Random.int(1, 500);
    return `Plot ${plot} ${street}, P.O. Box ${Random.int(1000, 99999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+256 ### ### ###',
    '+256 75# ### ###',
    '+256 77# ### ###',
    '+256 78# ### ###',
    '+256 70# ### ###',
    '+256 71# ### ###',
    '+256 72# ### ###',
    '+256 73# ### ###',
    '+256 200 ### ###',
    '+256 39# ### ###',
    '0### ### ###',
    '07## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'africaonline.co.ug',
    'yo.co.ug', 'infocom.co.ug', 'utlonline.co.ug'
  ],

  companyNames: [
    'MTN Uganda', 'Airtel Uganda', 'Uganda Telecom', 'BSNL Uganda',
    'Stanbic Bank Uganda', 'Absa Bank Uganda', 'Centenary Bank',
    'DFCU Bank', 'PostBank Uganda', 'Kampala Pharmaceutical Industries',
    'Uganda Breweries Limited', 'Coca-Cola Beverages Uganda',
    'Mukwano Group', 'Aga Khan Foundation Uganda',
    'National Insurance Corporation', 'Uganda Clays Limited',
    'Quality Chemical Industries', 'Nile Breweries'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Agriculture',
    'Tourism', 'Mining'
  ],

  catchPhrases: [
    'Innovating for prosperity',
    'Your success is our goal',
    'Building a better Uganda',
    'Quality service, always',
    'Committed to excellence',
    'Your partner in development',
    'Leading through innovation'
  ]
};
