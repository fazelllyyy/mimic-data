import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SZ: LocaleDefinition = {
  firstNamesMale: [
    'Mcolisi', 'Sifiso', 'Mfanukhona', 'Ntokozo', 'Buhle', 'Sipho',
    'Sandile', 'Muzi', 'Thulani', 'Banele', 'Mncedisi', 'Simphiwe',
    'Bongani', 'Khulekani', 'Makhosini', 'Mlandeli', 'Vusi',
    'Cebisile', 'Philani', 'Sanele', 'John', 'David', 'Michael',
    'James', 'Samuel', 'Peter', 'Daniel', 'Joseph', 'William', 'Paul'
  ],
  firstNamesFemale: [
    'Nomsa', 'Thandi', 'Sibongile', 'Philisiwe', 'Ntokozo', 'Kwanele',
    'Buhle', 'Ncamiso', 'Nosisa', 'Nonhlanhla', 'Sindisiwe',
    'Mpumelelo', 'Nokwanda', 'Nontokozo', 'Sithembile', 'Inno',
    'Thandeka', 'Zanele', 'Nomathemba', 'Nompumelelo',
    'Mary', 'Grace', 'Sarah', 'Elizabeth', 'Ruth', 'Esther',
    'Rebecca', 'Margaret', 'Alice', 'Joyce'
  ],
  lastNames: [
    'Dlamini', 'Mamba', 'Maseko', 'Simelane', 'Mabuza', 'Gamedze',
    'Kunene', 'Masilela', 'Sukati', 'Mnisi', 'Nkambule',
    'Hlophe', 'Motsa', 'Fakudze', 'Ndlovu', 'Nkosi',
    'Mkhonta', 'Ndzimandze', 'Mavuso', 'Shongwe',
    'Ngwenya', 'Ginindza', 'Magongo', 'Jele', 'Tsabedze',
    'Nxumalo', 'Zwane', 'Magagula', 'Mngometulu', 'Hlatshwako'
  ],
  streets: [
    'Mhlambanyatsi Road', 'Matsapha Road', 'Ngwane Street',
    'Allister Miller Street', 'Gwamile Street', 'Dlanubeka Street',
    'Sidwashini Road', 'Mbabane-Manzini Highway',
    'King Sobhuza II Street', 'University Road',
    'Alexandra Street', 'Kwaluseni Road',
    'Mbuluzi Road', 'Timbutini Road', 'Ngwenya Road',
    'Big Bend Road', 'Siteki Road', 'Luyengo Road',
    'Pigg\'s Peak Road', 'Lavumisa Road'
  ],
  cities: [
    'Mbabane', 'Manzini', 'Big Bend', 'Malkerns', 'Nhlangano',
    'Siteki', 'Hluti', 'Simunye', 'Pigg\'s Peak', 'Bhunya',
    'Ngwenya', 'Sidwashini', 'Matsapha', 'Mpaka', 'Vuvulane',
    'Lavumisa', 'Siphofaneni', 'Tambuti', 'Mhlume', 'Mbadlane'
  ],
  states: [
    'Hhohho Region', 'Manzini Region', 'Shiselweni Region',
    'Lubombo Region'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'Network Administrator'
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
    const houseNumber = Random.int(1, 9999);
    return `Plot ${houseNumber}, ${street}, P.O. Box ${Random.int(100, 9999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+268 #### ####',
    '+268 76## ####',
    '+268 77## ####',
    '+268 78## ####',
    '+268 79## ####',
    '+268 23## ####',
    '+268 24## ####',
    '+268 25## ####',
    '+268 55## ####',
    '#### ####',
    '76## ####',
    '77## ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'swazi.net',
    'realnet.co.sz', 'africaonline.co.sz', 'mweb.co.sz',
    'live.com'
  ],

  companyNames: [
    'Eswatini Mobile', 'Eswatini MTN', 'Eswatini Posts and Telecommunications',
    'Eswatini Electricity Company', 'Eswatini Water Services',
    'Eswatini Revenue Authority', 'Central Bank of Eswatini',
    'First National Bank Eswatini', 'Standard Bank Eswatini',
    'Nedbank Eswatini', 'Eswatini National Trust Commission',
    'Eswatini Sugar Association', 'Royal Eswatini Sugar Corporation',
    'Mhlume Sugar Company', 'Ubombo Sugar',
    'Eswatini Brewers', 'Tibbatex Textiles',
    'Eswatini Feedlots', 'Kodwa Estates'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Sugar', 'Textiles'
  ],

  catchPhrases: [
    'Innovating for a prosperous Eswatini',
    'Your success is our dedication',
    'Building Eswatini together',
    'Excellence and tradition always',
    'Committed to national progress',
    'Your trusted partner in growth',
    'Leading with pride and vision'
  ]
};
