import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ps_AF: LocaleDefinition = {
  firstNamesMale: [
    'Mohammad', 'Ahmad', 'Omar', 'Khalid', 'Hassan', 'Abdul', 'Hamid', 'Farhad',
    'Nasir', 'Zalmai', 'Rashid', 'Wahid', 'Gul', 'Sardar', 'Shah', 'Mirwais',
    'Jawad', 'Qadir', 'Fahim', 'Tariq', 'Sami', 'Waheed', 'Zia', 'Noor',
    'Shams', 'Asad', 'Habib', 'Rahim', 'Arif', 'Younis'
  ],
  firstNamesFemale: [
    'Zahra', 'Fatima', 'Khadija', 'Nadia', 'Laila', 'Sima', 'Shamila', 'Zainab',
    'Sakina', 'Rabia', 'Sajia', 'Malalai', 'Nargis', 'Bibi', 'Gulalai', 'Zarghuna',
    'Nooria', 'Mariam', 'Afifa', 'Hajera', 'Kubra', 'Siddiqa', 'Soghra', 'Naseema',
    'Shahnaz', 'Parween', 'Khadija', 'Bilkis', 'Razia', 'Haleema'
  ],
  lastNames: [
    'Khan', 'Ahmadi', 'Popal', 'Akhundzada', 'Karzai', 'Abdali', 'Zadran', 'Wardak',
    'Noori', 'Hashimi', 'Sadat', 'Mohammadi', 'Habibi', 'Rasouli', 'Nabizada', 'Tawfiq',
    'Ibrahimi', 'Yousufzai', 'Baryalai', 'Mashwani', 'Ludin', 'Kakakhail', 'Ishaqzai',
    'Alokozai', 'Stanikzai', 'Hotak', 'Panjshiri', 'Bamyan', 'Logari', 'Herawi'
  ],
  streets: [
    'Darulaman Road', 'Kabul-Jalalabad Highway', 'Asmai Street', 'Chicken Street',
    'Airport Road', 'Khart-e-Par Street', 'Shahr-e-Naw Street', 'Dehmazang Street',
    'Macroyan Road', 'Hadji Yaqoob Street', 'Puli Khishti Street', 'Kandahar Road',
    'Mazar-e-Sharif Road', 'Herat Road', 'Jalalabad Road', 'Bibi Mahru Street',
    'Shash Darak Street', 'Sieh Sung Street'
  ],
  cities: [
    'Kabul', 'Herat', 'Kandahar', 'Mazar-e-Sharif', 'Jalalabad', 'Kunduz', 'Balkh',
    'Ghazni', 'Khost', 'Bamyan', 'Charikar', 'Shiberghan', 'Puli Khumri', 'Meymaneh',
    'Farah', 'Lashkargah', 'Taloqan', 'Zaranj', 'Aybak', 'Gardez'
  ],
  states: [
    'Kabul', 'Herat', 'Kandahar', 'Balkh', 'Nangarhar', 'Kunduz', 'Bamyan',
    'Ghazni', 'Khost', 'Takhar', 'Samangan', 'Baghlan', 'Faryab', 'Jowzjan',
    'Parwan', 'Helmand', 'Kapisa', 'Logar'
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
    const houseNumber = Random.int(1, 9999);
    const gozari = Random.int(1, 10);
    return `${houseNumber}, Gozari ${gozari}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+93 ## ### ####',
    '+93 (0)## ### ####',
    '07# ### ###',
    '070 ### ####',
    '071 ### ####',
    '072 ### ####',
    '073 ### ####',
    '074 ### ####',
    '077 ### ####',
    '078 ### ####',
    '079 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'afghanwireless.com',
    'roshan.af', 'afghantelecom.af', 'live.com', 'icloud.com', 'protonmail.com'
  ],

  companyNames: [
    'Afghanistan International Bank', 'Bakhtar Bank', 'Afghan United Bank',
    'Roshan Telecom', 'Afghan Wireless', 'MTN Afghanistan', 'Etisalat Afghanistan',
    'Ariana Afghan Airlines', 'Kam Air', 'Afghanistan Telecom Corporation',
    'Da Afghanistan Breshna Sherkat', 'Bakhtar Mining Company', 'Ghazanfar Group',
    'Omran Holding Group', 'Azizi Bank', 'First MicroFinance Bank',
    'Afghanistan Cement Corporation', 'Kabul Serai Trading'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Agriculture', 'Mining'
  ],

  catchPhrases: [
    'Innovating for a brighter Afghanistan', 'Your trusted financial partner', 'Reconstruction and development',
    'Excellence in telecommunications', 'Committed to Afghan prosperity', 'Building bridges for tomorrow',
    'Quality and reliability always'
  ]
};
