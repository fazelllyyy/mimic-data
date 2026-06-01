import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_PS: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Mahmoud', 'Ibrahim', 'Yousef', 'Ali', 'Hassan', 'Omar',
    'Khalil', 'Ismail', 'Musa', 'Sami', 'Nabil', 'Adnan', 'Jamal', 'Hussein',
    'Ahmad', 'Tamer', 'Basel', 'Rami', 'Khaled', 'Ziad', 'Fadi', 'Maher',
    'Waleed', 'Hani', 'Imad', 'Rashid', 'Salah', 'Yasser'
  ],
  firstNamesFemale: [
    'Mariam', 'Fatima', 'Aisha', 'Nour', 'Layla', 'Dina', 'Rania', 'Hala',
    'Samar', 'Amal', 'Mona', 'Nadia', 'Huda', 'Lamis', 'Sana', 'Rasha',
    'Suha', 'Lina', 'Rima', 'Nada', 'Hiba', 'Maha', 'Taghrid', 'Eman',
    'Iman', 'Ghada', 'Manal', 'Najat', 'Wafa', 'Shireen'
  ],
  lastNames: [
    'Abu Amer', 'Abu Daoud', 'Abu Ali', 'Abu Rabia', 'Abu Sitta', 'Abu Hassan',
    'Abu Rayyan', 'Abu Jaber', 'Abu Omar', 'Abu Wael', 'Abu Nasser', 'Abu Zaid',
    'Abu Hani', 'Abu Khaled', 'Abu Saleh', 'Abu Youssef', 'Abu Ahmad',
    'Abu Sharif', 'Abu Jihad', 'Abu Khalil', 'Abu Issa', 'Abu Saeed',
    'Abu Baker', 'Abu Salem', 'Abu Samra', 'Abu Hamid', 'Abu Mansour',
    'Abu Hassan', 'Abu Mousa', 'Abu Adam'
  ],
  streets: [
    'Al Quds Street', 'Ramallah Main Road', 'Al Bireh Street', 'Nablus Road',
    'Hebron Street', 'Gaza Street', 'Al Rasheed Street', 'Bethlehem Road',
    'Jenin Street', 'Tulkarm Road', 'Al Manara Street', 'Al Irsal Street',
    'Al Masyoun Street', 'Al Tira Street', 'Jericho Road', 'Al Qastal Street',
    'Al Sahel Street', 'Al Nahda Street', 'Al Zaitoun Street', 'Al Amal Street'
  ],
  cities: [
    'Quds', 'Ramallah', 'Nablus', 'Hebron', 'Gaza', 'Bethlehem', 'Jenin',
    'Tulkarm', 'Qalqilya', 'Jericho', 'Rafah', 'Khan Younis', 'Deir al-Balah',
    'Salfit', 'Tubas', 'Yatta', 'Dura', 'Beit Lahia', 'Beit Hanoun',
    'Abasan al-Kabira', 'Bani Suheila', 'Az Zawayda', 'Al Bireh', 'Beit Jala'
  ],
  states: [
    'West Bank', 'Gaza Strip', 'Jerusalem Governorate', 'Ramallah and al-Bireh',
    'Nablus', 'Hebron', 'Jenin', 'North Gaza', 'Khan Younis', 'Rafah'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'مهندس برمجيات', 'مدير مشروع', 'محلل بيانات', 'مدير تسويق',
    'مندوب مبيعات', 'محاسب', 'مدير موارد بشرية', 'مصمم',
    'مدير عمليات', 'محلل أعمال', 'موظف استقبال', 'محامي'
  ],
  departments: [
    'الهندسة', 'التسويق', 'المبيعات', 'الموارد البشرية', 'المالية', 'العمليات',
    'خدمة العملاء', 'تكنولوجيا المعلومات', 'البحث والتطوير', 'القانوني'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const buildingNumber = Random.int(1, 9999);
    return `${buildingNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+970 ## ### ####',
    '0## ### ####',
    '+970 (0)## ### ####',
    '059 ### ####',
   '056 ### ####',
    '059# ### ###',
    '056# ### ###',
    '02# ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'mail.ps', 'psdomains.com', 'palnet.ps'
  ],

  companyNames: [
    'Paltel Group', 'Bank of Palestine', 'Palestine Islamic Bank', 'Al Quds Bank',
    'Palestine Telecommunications', 'Jawwal', 'Ooredoo Palestine', 'Palestine Electric Company',
    'Palestine Investment Fund', 'National Beverage Company', 'Siniora Food Industries',
    'Palestine Dairy Company', 'Al Hayat Pharmaceuticals', 'Birzeit Pharmaceutical',
    'Al Jazeera Motors', 'Mashreq Insurance'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'الاتصالات', 'الطاقة', 'النقل', 'العقارات', 'الزراعة',
    'الصناعات الغذائية', 'التأمين', 'المقاولات'
  ],

  catchPhrases: [
    'الابتكار لفلسطين', 'معاً نبني المستقبل', 'الجودة والثقة',
    'شريكك في النجاح', 'التميز في الخدمة', 'نحو مستقبل أفضل'
  ]
};
