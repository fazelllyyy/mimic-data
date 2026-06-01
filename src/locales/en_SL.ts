import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SL: LocaleDefinition = {
  firstNamesMale: [
    'Mohamed', 'Ibrahim', 'Lansana', 'Sorie', 'Amadu', 'Sheku', 'Abu',
    'Foday', 'Alhaji', 'Kadijatu', 'Brima', 'Samuel', 'John', 'Peter',
    'David', 'Christian', 'Joseph', 'Thomas', 'Daniel', 'James',
    'Michael', 'Henry', 'Edward', 'Sahr', 'Mohamed', 'Prince',
    'Abdulai', 'Sankoh', 'Joseph', 'Paul'
  ],
  firstNamesFemale: [
    'Fatmata', 'Mariatu', 'Kadiatu', 'Hawa', 'Aminata', 'Sia', 'Adama',
    'Abibatu', 'Salamatu', 'Ishata', 'Yabome', 'Memuna', 'Mabinty',
    'Rebecca', 'Hannah', 'Sarah', 'Grace', 'Martha', 'Esther',
    'Margaret', 'Rosaline', 'Victoria', 'Mary', 'Agnes', 'Lucy',
    'Joyce', 'Alice', 'Sophie', 'Matilda', 'Juliana'
  ],
  lastNames: [
    'Kamara', 'Turay', 'Sesay', 'Koroma', 'Conteh', 'Bangura', 'Sankoh',
    'Jalloh', 'Kallon', 'Sawaneh', 'Kabbah', 'Wurie', 'Bockarie',
    'Mansaray', 'Bona', 'Williams', 'Davies', 'Johnson', 'Taylor',
    'Smith', 'Brown', 'Kamara', 'Samura', 'Samba', 'Bah', 'Barrie',
    'Fofanah', 'Lamin', 'Marrah', 'Kuyateh'
  ],
  streets: [
    'Siaka Stevens Street', 'Wilkinson Road', 'Circular Road',
    'Regent Road', 'Jomo Kenyatta Road', 'Signal Hill Road',
    'King Street', 'Charles Street', 'Bai Bureh Road',
    'Kissy Road', 'Wellington Street', 'Pademba Road',
    'Liverpool Street', 'Wallace Johnson Street',
    'York Road', 'Hill Station', 'Fourah Bay Road',
    'Goderich Road', 'Mount Aureol Road', 'Aberdeen Road'
  ],
  cities: [
    'Freetown', 'Bo', 'Kenema', 'Makeni', 'Koidu Town', 'Lunsar',
    'Port Loko', 'Kabala', 'Pujehun', 'Bonthe', 'Magburaka',
    'Kailahun', 'Moyamba', 'Segbwema', 'Waterloo', 'Kambia',
    'Blama', 'Pendembu', 'Kailahun', 'Yengema'
  ],
  states: [
    'Western Area', 'Northern Province', 'Southern Province',
    'Eastern Province', 'North West Province',
    'Bo District', 'Kenema District', 'Kono District',
    'Port Loko District', 'Kambia District', 'Pujehun District',
    'Bombali District', 'Moyamba District', 'Kailahun District'
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
    return `${houseNumber} ${street}, P.O. Box ${Random.int(100, 9999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+232 ## ### ###',
    '+232 2# ### ###',
    '+232 3# ### ###',
    '+232 4# ### ###',
    '+232 5# ### ###',
    '+232 6# ### ###',
    '+232 7# ### ###',
    '+232 8# ### ###',
    '+232 9# ### ###',
    '0## ### ###',
    '07# ### ###',
    '09# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'sierratel.sl',
    'africell.sl', 'ipage.sl', 'live.com', 'aol.com'
  ],

  companyNames: [
    'Sierra Leone Brewery', 'Africell Sierra Leone',
    'Sierratel', 'Orange SL', 'Rokel Commercial Bank',
    'Standard Chartered Sierra Leone', 'Zenith Bank Sierra Leone',
    'National Social Security and Insurance Trust',
    'Sierra Leone Ports Authority', 'Leone Rock Metal Group',
    'Sierra Rutile Limited', 'Koidu Holdings',
    'London Mining Sierra Leone', 'Aureus Mining',
    'Sierra Leone Cable', 'Kingtom Petroleum',
    'PZ Cussons Sierra Leone', 'Air Sierra Leone'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Fisheries', 'Tourism'
  ],

  catchPhrases: [
    'Innovating for a better tomorrow',
    'Your success is our dedication',
    'Building Sierra Leone together',
    'Excellence and service always',
    'Committed to national development',
    'Your trusted partner in progress',
    'Leading with integrity and purpose'
  ]
};
