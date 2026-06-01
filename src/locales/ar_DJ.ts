import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_DJ: LocaleDefinition = {
  firstNamesMale: [
    'Mohamed', 'Ahmed', 'Ali', 'Omar', 'Ibrahim', 'Ismail', 'Abdi', 'Hassan',
    'Youssef', 'Hussein', 'Moussa', 'Adan', 'Ali', 'Saïd', 'Barkat', 'Daher',
    'Moumin', 'Dini', 'Souleiman', 'Osman', 'Kamil', 'Abdourahman', 'Abdoulkader',
    'Elmi', 'Hersi', 'Yacin', 'Mahamed', 'Djama', 'Idriss', 'Moussa'
  ],
  firstNamesFemale: [
    'Fatima', 'Mariam', 'Aisha', 'Zahra', 'Hawa', 'Roukia', 'Amina', 'Halima',
    'Saïda', 'Khadija', 'Asha', 'Hodan', 'Mouna', 'Naima', 'Nadia',
    'Dekha', 'Lula', 'Barkhad', 'Malika', 'Zaina', 'Ichraq', 'Noura',
    'Shukri', 'Bahia', 'Coumba', 'Fahma', 'Dila', 'Safia', 'Yasmin', 'Ina'
  ],
  lastNames: [
    'Ismail', 'Dini', 'Barkat', 'Moumin', 'Daher', 'Ali', 'Abdi', 'Hassan',
    'Ahmed', 'Mohamed', 'Osman', 'Guirreh', 'Farah', 'Fahmi', 'Mohamed',
    'Abdallah', 'Souleiman', 'Youssouf', 'Omar', 'Dileita', 'Idriss',
    'Kamil', 'Djibril', 'Hersi', 'Dahir', 'Aden', 'Liban', 'Alam',
    'Moussa', 'Said'
  ],
  streets: [
    'Avenue Djibouti', 'Rue de la République', 'Boulevard de la Plage',
    'Avenue de l\'Indépendance', 'Rue du Commerce', 'Avenue Hassan Gouled',
    'Rue de la Liberté', 'Boulevard du Maréchal', 'Avenue de la Paix',
    'Rue des Écoles', 'Avenue de l\'Hôpital', 'Rue du Marché',
    'Boulevard de l\'Union', 'Avenue des Palmiers', 'Rue de la Gare',
    'Avenue du Président', 'Rue de la Poste', 'Boulevard de la République'
  ],
  cities: [
    'Djibouti', 'Ali Sabieh', 'Tadjourah', 'Obock', 'Dikhil', 'Arta',
    'Doraleh', 'Balbala', 'Ghoubbet', 'Lac Assal', 'Randa', 'Mouloud',
    'Yoboki', 'Holhol', 'Damerdjog', 'Nouveau Port', 'PK12', 'Amboule',
    'Douda', 'Gadile', 'Khor Ambado', 'Loyada', 'Weha', 'Gobaad'
  ],
  states: [
    'Djibouti City', 'Ali Sabieh Region', 'Tadjourah Region', 'Obock Region',
    'Dikhil Region', 'Arta Region'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'مهندس برمجيات', 'مدير مشروع', 'محلل بيانات', 'مدير تسويق',
    'مندوب مبيعات', 'محاسب', 'مدير موارد بشرية', 'مصمم',
    'مدير عمليات', 'محلل أعمال', 'موظف بنك', 'مستشار قانوني'
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
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+253 ## ## ## ##',
    '+253 2# ## ## ##',
    '+253 6# ## ## ##',
    '+253 7# ## ## ##',
    '## ## ## ##',
    '2# ## ## ##',
    '6# ## ## ##',
    '7# ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'djiboutitelecom.dj', 'intnet.dj', 'wanadoo.dj'
  ],

  companyNames: [
    'Djibouti Telecom', 'Banque Centrale de Djibouti', 'Banque de Djibouti',
    'BCIMR', 'Exim Bank Djibouti', 'SABA Islamic Bank',
    'Caisse de Dépôt et de Développement', 'Air Djibouti',
    'Djibouti Port Authority', 'Doraleh Container Terminal',
    'Société des Pétroles de Djibouti', 'Great Horn Investment',
    'Djibouti Palace Kempinski', 'Sheraton Djibouti',
    'Djibouti Airlines', 'Ethio-Djibouti Railways'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'الاتصالات', 'النقل', 'اللوجستية', 'السياحة',
    'العقارات', 'الموانئ', 'البناء'
  ],

  catchPhrases: [
    'الابتكار من أجل جيبوتي', 'معاً نبني المستقبل', 'الجودة والثقة',
    'شريككم الموثوق', 'التميز في الخدمة', 'نحو التقدم والازدهار'
  ]
};
