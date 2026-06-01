import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const az_AZ: LocaleDefinition = {
  firstNamesMale: [
    'Ali', 'Elchin', 'Farhad', 'Ilgar', 'Kamran', 'Tural', 'Rashad', 'Anar',
    'Orkhan', 'Ramin', 'Sahil', 'Vugar', 'Ceyhun', 'Elman', 'Fazil', 'Ismayil',
    'Jafar', 'Khayal', 'Murad', 'Nizami', 'Rauf', 'Samir', 'Tahir', 'Vagif',
    'Yashar', 'Zaur', 'Emin', 'Hasan', 'Ilyas', 'Mammad'
  ],
  firstNamesFemale: [
    'Sevinc', 'Gunay', 'Aytac', 'Narmin', 'Gulzar', 'Zemfira', 'Tamilla', 'Fidan',
    'Lala', 'Gular', 'Afet', 'Tarana', 'Sabina', 'Rena', 'Mehriban', 'Sevil',
    'Nigar', 'Aynura', 'Shahnaz', 'Zulfiyya', 'Turan', 'Khanim', 'Arzu', 'Vusala',
    'Nergiz', 'Gulshan', 'Natavan', 'Matanat', 'Sonay', 'Rukhsara'
  ],
  lastNames: [
    'Aliyev', 'Mammadov', 'Hasanov', 'Huseynov', 'Abdullayev', 'Karimov', 'Asgarov',
    'Safarov', 'Akhundov', 'Suleymanov', 'Rahimov', 'Babayev', 'Gurbanov', 'Rustamov',
    'Ibrahimov', 'Guliyev', 'Nuriyev', 'Isayev', 'Hajiyev', 'Orujov',
    'Mikayilov', 'Shirinov', 'Jabrayilov', 'Gafarov', 'Samadov', 'Valiyev', 'Jafarov',
    'Sattarov', 'Maharramov', 'Ismayilov'
  ],
  streets: [
    'Heydar Aliyev Avenue', 'Nizami Street', 'Azadliq Avenue', 'Tbilisi Avenue',
    'Ataturk Avenue', '28 May Street', 'Fuzuli Street', 'Rashid Behbudov Street',
    'Baku Street', 'Moscow Avenue', 'Khatai Avenue', 'Gasimzade Street',
    'Jeyhun Hajibeyli Street', 'Khojaly Street', 'Suleyman Rahimov Street',
    'Bunyad Sardarov Street', 'Mirza Fatali Akhundov Street', 'Sharifzade Street'
  ],
  cities: [
    'Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Lankaran', 'Shirvan', 'Nakhchivan',
    'Shaki', 'Yevlakh', 'Khachmaz', 'Agdam', 'Barda', 'Jalilabad', 'Masalli',
    'Goychay', 'Salyan', 'Agjabadi', 'Imishli', 'Quba', 'Zaqatala'
  ],
  states: [
    'Baku', 'Absheron', 'Ganja-Gazakh', 'Shaki-Zaqatala', 'Lankaran',
    'Aran', 'Upper Karabakh', 'Kalbajar-Lachin', 'Mountain Shirvan', 'Nakhchivan',
    'Guba-Khachmaz', 'Yukhari Garabakh'
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
    const flat = Random.int(1, 200);
    return `Bina ${building}, Mənzil ${flat}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+994 ## ### ## ##',
    '+994 (0)## ### ## ##',
    '0## ### ## ##',
    '050 ### ## ##',
    '055 ### ## ##',
    '070 ### ## ##',
    '077 ### ## ##',
    '051 ### ## ##',
    '099 ### ## ##',
    '012 ### ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.az',
    'yahoo.az', 'box.az', 'azer.com', 'artel.net', 'bakpost.az'
  ],

  companyNames: [
    'SOCAR', 'International Bank of Azerbaijan', 'Kapital Bank', 'Pasha Bank',
    'Azersun Holding', 'Azercell', 'Bakcell', 'Nar Mobile', 'Aztelekom',
    'Azerbaijan Airlines', 'Silk Way Airlines', 'BP Azerbaijan',
    'Azermarka', 'Baku Steel Company', 'Interfax Azerbaijan', 'Azal Group',
    'Gilan Holding', 'Milli Holding'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Oil and Gas', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation in the Land of Fire', 'Your trusted banking partner',
    'Building a modern Azerbaijan', 'Excellence in energy and beyond',
    'Quality service across the Caucasus', 'Driving economic prosperity',
    'Your reliable partner in growth'
  ]
};
