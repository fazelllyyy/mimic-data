import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_ZW: LocaleDefinition = {
  firstNamesMale: [
    'Tafadzwa', 'Kudakwashe', 'Tendai', 'Takudzwa', 'Blessing', 'Tanaka',
    'Munashe', 'Anesu', 'Simba', 'Tatenda', 'Tinotenda', 'Kuziva',
    'Tapiwa', 'Tawanda', 'Farai', 'Tinashe', 'Tanatswa', 'Rumbidzai',
    'Takunda', 'Courage', 'Tonderai', 'Tichafara', 'Mufaro',
    'Tashinga', 'Kudzanai', 'Itai', 'Tawananyasha', 'Mbonisi',
    'Sizwe', 'Buhle'
  ],
  firstNamesFemale: [
    'Rumbidzai', 'Tafadzwa', 'Tanatswa', 'Nyasha', 'Tendai', 'Kundai',
    'Makanaka', 'Shamiso', 'Chipo', 'Tsitsi', 'Chiedza', 'Rutendo',
    'Tariro', 'Vimbainashe', 'Hazvinei', 'Shingai', 'Sekai',
    'Nyaradzo', 'Kudzai', 'Mufaro', 'Precious', 'Patience', 'Mercy',
    'Prudence', 'Charity', 'Memory', 'Hope', 'Priscilla', 'Eunice',
    'Nobukhosi'
  ],
  lastNames: [
    'Moyo', 'Sibanda', 'Ndlovu', 'Dube', 'Zhou', 'Chikwanda', 'Mpofu',
    'Shonhiwa', 'Mutsvairo', 'Chikuni', 'Muchenje', 'Makoni',
    'Mudimu', 'Chikomo', 'Kaseke', 'Mangena', 'Gumbo', 'Nyamayaro',
    'Chauke', 'Masuku', 'Ncube', 'Mguni', 'Nkala', 'Tshuma',
    'Mathe', 'Khumalo', 'Sithole', 'Ngwenya', 'Mkhwananzi', 'Hlongwane'
  ],
  streets: [
    'Sam Nujoma Street', 'Robert Mugabe Road', 'Nelson Mandela Avenue',
    'Julius Nyerere Way', 'First Street', 'Second Street',
    'Jason Moyo Avenue', 'Leopold Takawira Avenue',
    'Simon Muzenda Street', 'Speke Avenue', 'Chinamano Road',
    'Causeway Road', 'Kwame Nkrumah Avenue', 'Rotten Row',
    'Selous Avenue', 'G Silundika Street', 'Worthington Street',
    'Borrowdale Road', 'Enterprise Road', 'Hillside Road'
  ],
  cities: [
    'Harare', 'Bulawayo', 'Chitungwiza', 'Mutare', 'Gweru', 'Kwekwe',
    'Kadoma', 'Masvingo', 'Chinhoyi', 'Marondera', 'Norton',
    'Bindura', 'Victoria Falls', 'Beitbridge', 'Kariba', 'Rusape',
    'Chegutu', 'Zvishavane', 'Redcliff', 'Lupane'
  ],
  states: [
    'Harare Province', 'Bulawayo Province', 'Manicaland',
    'Mashonaland West', 'Mashonaland East', 'Mashonaland Central',
    'Masvingo', 'Matabeleland North', 'Matabeleland South',
    'Midlands Province'
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
    const houseNumber = Random.int(1, 9999);
    const suburb = Random.pick(['Borrowdale', 'Highlands', 'Greendale', 'Mount Pleasant', 'Avondale', 'Belgravia', 'Mabelreign', 'Hatfield']);
    return `${houseNumber} ${street}, ${suburb}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+263 ## ### ####',
    '+263 77# ### ###',
    '+263 71# ### ###',
    '+263 73# ### ###',
    '+263 78# ### ###',
    '+263 86# ### ###',
    '+263 24# ### ###',
    '0## ### ####',
    '077# ### ###',
    '07## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'zol.co.zw',
    'africaonline.co.zw', 'mweb.co.zw', 'ecoweb.co.zw',
    'yoafrica.com', 'live.com'
  ],

  companyNames: [
    'Econet Wireless', 'NetOne', 'Telecel Zimbabwe',
    'CBZ Holdings', 'Standard Chartered Zimbabwe',
    'Stanbic Bank Zimbabwe', 'FBC Bank', 'NMB Bank',
    'Zimbabwe Stock Exchange', 'Delta Corporation',
    'Innscor Africa', 'Meikles Limited', 'OK Zimbabwe',
    'National Foods', 'SeedCo', 'CABS',
    'Old Mutual Zimbabwe', 'Zimre Holdings'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Tourism', 'Banking'
  ],

  catchPhrases: [
    'Innovating for a brighter future',
    'Your success drives us',
    'Building Zimbabwe together',
    'Excellence and dedication always',
    'Committed to quality service',
    'Your trusted partner in development',
    'Leading with integrity and vision'
  ]
};
