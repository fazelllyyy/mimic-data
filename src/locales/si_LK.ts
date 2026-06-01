import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const si_LK: LocaleDefinition = {
  firstNamesMale: [
    'Nimal', 'Sunil', 'Gamini', 'Saman', 'Anura', 'Ranjith', 'Upali', 'Priya',
    'Lalith', 'Jayantha', 'Nishantha', 'Chandana', 'Ajith', 'Palitha', 'Prasanna', 'Dammika',
    'Bandula', 'Sujeewa', 'Asanka', 'Roshan', 'Thusitha', 'Saminda', 'Harsha', 'Sujith',
    'Ruwan', 'Tharindu', 'Lahiru', 'Dinesh', 'Sampath', 'Mohan'
  ],
  firstNamesFemale: [
    'Chandrika', 'Kusuma', 'Nayana', 'Dilani', 'Priyanka', 'Sujatha', 'Nadeeka', 'Shanthi',
    'Rohini', 'Damayanthi', 'Somalatha', 'Padma', 'Kumari', 'Chamari', 'Harshani', 'Nilanthi',
    'Dammika', 'Anusha', 'Thushari', 'Shamali', 'Nisansala', 'Sachithra', 'Darshika', 'Bhagya',
    'Oshadi', 'Sewwandi', 'Dilrukshi', 'Hasanthi', 'Sandamali', 'Yashodha'
  ],
  lastNames: [
    'Perera', 'Fernando', 'Silva', 'Gunasekara', 'Wickramasinghe', 'Jayawardena', 'Abeyesekera',
    'Bandara', 'Dissanayake', 'Seneviratne', 'Weerasinghe', 'Amarasinghe', 'Kodithuwakku',
    'Rathnayake', 'Samarasekara', 'Ekanayake', 'Kumara', 'Herath', 'Jayasinghe', 'Wijesinghe',
    'Karunarathne', 'Wijeratne', 'Gunawardena', 'Sirisena', 'Rupasinghe', 'Liyanage',
    'Jayasuriya', 'Wijesuriya', 'Goonetilleke', 'Senanayake'
  ],
  streets: [
    'Galle Road', 'Colombo Street', 'Bauddhaloka Mawatha', 'Kotte Road',
    'Havelock Road', 'Alwis Perera Mawatha', 'Rajagiriya Road', 'Marine Drive',
    'Baseline Road', 'Nawam Mawatha', 'Templers Road', 'Ward Place',
    'Union Place', 'Rotunda Gardens', 'Independence Avenue', 'Sir James Peiris Mawatha',
    'Sri Jayawardenepura Mawatha', 'Stanley Road'
  ],
  cities: [
    'Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Anuradhapura', 'Polonnaruwa',
    'Matara', 'Kurunegala', 'Batticaloa', 'Trincomalee', 'Badulla', 'Ratnapura',
    'Nuwara Eliya', 'Dambulla', 'Hambantota', 'Kalutara', 'Panadura', 'Moratuwa', 'Kegalle'
  ],
  states: [
    'Western Province', 'Central Province', 'Southern Province', 'Northern Province',
    'Eastern Province', 'North Western Province', 'North Central Province', 'Uva Province',
    'Sabaragamuwa Province', 'Province of Wayamba'
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
    '+94 ## ### ####',
    '+94 (0)## ### ####',
    '011 ### ####',
    '021 ### ####',
    '023 ### ####',
    '024 ### ####',
    '031 ### ####',
    '032 ### ####',
    '033 ### ####',
    '034 ### ####',
    '035 ### ####',
    '036 ### ####',
    '037 ### ####',
    '038 ### ####',
    '041 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'sltnet.lk',
    'gmail.lk', 'life.lk', 'mail.lk', 'dynalias.lk', 'eureka.lk'
  ],

  companyNames: [
    'Ceylon Petroleum Corporation', 'Sri Lanka Telecom', 'Dialog Axiata', 'Eitsalat Lanka',
    'Hutch Lanka', 'Bank of Ceylon', 'Peoples Bank', 'Commercial Bank of Ceylon',
    'Hatton National Bank', 'Sampath Bank', 'Nations Trust Bank', 'Aitken Spence',
    'John Keells Holdings', 'Cargills Ceylon', 'Ceylon Tobacco Company', 'MAS Holdings',
    'Brandix Lanka', 'Hotel Developers Lanka', 'SriLankan Airlines', 'Dilmah Ceylon Tea'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Apparel', 'Tea and Agriculture'
  ],

  catchPhrases: [
    'Excellence through innovation', 'Your trusted financial partner', 'Building Sri Lanka together',
    'Quality service with a smile', 'Commitment to Sri Lankan excellence', 'Sustainable growth for all',
    'Leading the way forward'
  ]
};
