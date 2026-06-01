import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_MR: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Mahmoud', 'Ali', 'Omar', 'Sidi', 'Moussa', 'Brahim',
    'Cheikh', 'Yahya', 'Ismail', 'Hassan', 'Hussein', 'Said', 'Abdallah', 'Mohamed',
    'Abdoulaye', 'Bekaye', 'Mamadou', 'Souleymane', 'Amadou', 'Houssein', 'Khalil',
    'Yacoub', 'Saleh', 'Ibrahim', 'Naji', 'Taleb', 'Salem', 'Yasser'
  ],
  firstNamesFemale: [
    'Mariam', 'Fatima', 'Aisha', 'Khadija', 'Aminata', 'Roukaya', 'Mariama', 'Mouna',
    'Hawa', 'Zeynab', 'Salma', 'Maimouna', 'Safiatou', 'Hind', 'Lalla', 'Aicha',
    'Asma', 'Najat', 'Halima', 'Bilkiss', 'Nadia', 'Djoumbia', 'Rakia', 'Mamy',
    'Fatimata', 'Sokhna', 'Marieme', 'Astou', 'Ndèye', 'Coumba'
  ],
  lastNames: [
    'Ould Sidi', 'Ould Ahmed', 'Ould Mohamed', 'Ould Cheikh', 'Ould Brahim',
    'Ould Hammadi', 'Ould Maouloud', 'Diallo', 'Bah', 'Tall', 'Ba', 'Sow',
    'Sy', 'Ndiaye', 'Barry', 'Kane', 'Fall', 'Ly', 'Thiam', 'Diop',
    'Sall', 'Gueye', 'Mbaye', 'Sarr', 'Mint Sidi', 'Mint Ahmed', 'Mint Mohamed',
    'Ould Saleck', 'Ould Ely', 'Ould Mahmoud'
  ],
  streets: [
    'Avenue Gamal Abdel Nasser', 'Rue de la République', 'Avenue de l\'Indépendance',
    'Boulevard du Maréchal', 'Rue des Ambassadeurs', 'Avenue Kennedy',
    'Rue des Palmiers', 'Avenue du Président', 'Rue de la Paix', 'Boulevard de la Plage',
    'Rue des Écoles', 'Avenue de l\'Hôpital', 'Rue du Commerce', 'Boulevard de la Gare',
    'Rue de la Liberté', 'Avenue de l\'Union', 'Rue des Cités', 'Boulevard de la Résistance'
  ],
  cities: [
    'Nouakchott', 'Nouadhibou', 'Rosso', 'Kaédi', 'Zouérat', 'Atar', 'Sélibaby',
    'Kiffa', 'Aleg', 'Boutilimit', 'Akjoujt', 'Tidjikja', 'Oualata', 'Chinguetti',
    'Tichitt', 'Moudjeria', 'Tékane', 'Magta Lahjar', 'R\'Kiz', 'Bababé',
    'Boghé', 'M\'Bout', 'Kobenni', 'Ayoun el Atrous'
  ],
  states: [
    'Nouakchott', 'Dakhlet Nouadhibou', 'Trarza', 'Gorgol', 'Assaba', 'Hodh El Chargui',
    'Hodh El Gharbi', 'Adrar', 'Brakna', 'Tagant', 'Guidimaka', 'Tiris Zemmour', 'Inchiri'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'مهندس برمجيات', 'مدير مشروع', 'محلل بيانات', 'مدير تسويق',
    'مندوب مبيعات', 'محاسب', 'مدير موارد بشرية', 'مصمم',
    'مدير عمليات', 'محلل أعمال', 'كاتب', 'محامي'
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
    '+222 ## ## ## ##',
    '+222 ## ## ####',
    '## ## ####',
    '22 ## ## ##',
    '21 ## ## ##',
    '23 ## ## ##',
    '24 ## ## ##',
    '25 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'mauritel.mr', 'tmr.mr', 'rimmail.mr'
  ],

  companyNames: [
    'Société Nationale Industrielle et Minière', 'Mauritania Telecom', 'Mattel',
    'Chinguitel', 'Attijariwafa Bank Mauritanie', 'BCI', 'Air Mauritanie',
    'Société Mauritanie de Raffinerie', 'El Nasr', 'Mauritania Airways',
    'BNM', 'CMM', 'SOMIMA', 'SOMELEC', 'SNIM', 'BPM'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التعدين', 'الاتصالات', 'الطاقة', 'النقل', 'الصيد',
    'الزراعة', 'الثروة الحيوانية', 'البناء'
  ],

  catchPhrases: [
    'التميز في العمل', 'معاً نحو التقدم', 'الجودة والثقة',
    'شريكك في التنمية', 'نحو مستقبل مشرق', 'خدمة موثوقة'
  ]
};
