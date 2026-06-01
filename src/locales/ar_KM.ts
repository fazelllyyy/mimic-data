import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_KM: LocaleDefinition = {
  firstNamesMale: [
    'Mohamed', 'Ahmed', 'Ali', 'Omar', 'Said', 'Abdallah', 'Ibrahim', 'Hassan',
    'Youssef', 'Ismail', 'Abdou', 'Soilihi', 'Bacar', 'Mouhamed', 'Moustafa',
    'Hamza', 'Kamardine', 'Madjidi', 'Chadhuli', 'Anziz', 'Assoumani', 'Saïd',
    'Salim', 'Idriss', 'Houssam', 'Nassur', 'Mlachirwa', 'Mohamed', 'Saadi', 'Nathani'
  ],
  firstNamesFemale: [
    'Fatima', 'Mariam', 'Aisha', 'Mouna', 'Zakia', 'Safiya', 'Mariama', 'Hadjira',
    'Zainaba', 'Roukia', 'Siti', 'Bahia', 'Mireille', 'Housna', 'Saidati',
    'Ahamada', 'Mouffati', 'Houmadi', 'Houmadia', 'Malika', 'Saïda', 'Toibibou',
    'Nadjat', 'Moussa', 'Kamar', 'Azimati', 'Chamsoudine', 'Bintou', 'Soula', 'Ichata'
  ],
  lastNames: [
    'Abdou', 'Said', 'Bacar', 'Ali', 'Bazi', 'Soilihi', 'Madi', 'Ahmed',
    'Mohamed', 'Omar', 'Houmadi', 'Nassur', 'Moussa', 'Boeina', 'Ibrahim',
    'Chadhuli', 'Anziz', 'Kamardine', 'Boina', 'Dhoul', 'Simba', 'Mlachirwa',
    'Madjidi', 'Ahamadi', 'Attoumani', 'Moustafa', 'Yooussouf', 'Djaha', 'Langa', 'Abderemane'
  ],
  streets: [
    'Avenue de la République', 'Rue du Commerce', 'Boulevard de la Liberté',
    'Avenue des Comores', 'Rue de l\'Indépendance', 'Avenue de la Paix',
    'Rue du Marché', 'Avenue des Palmiers', 'Rue de la Plage',
    'Boulevard de l\'Union', 'Avenue du Président', 'Rue de l\'Hôpital',
    'Avenue des Ambassadeurs', 'Rue des Écoles', 'Boulevard de la Gare',
    'Avenue de la Poste', 'Rue de la Mairie', 'Boulevard des Cocotiers'
  ],
  cities: [
    'Moroni', 'Mutsamudu', 'Fomboni', 'Domoni', 'Ouani', 'Mirontsi', 'Moya',
    'Nioumachoua', 'Djoiezi', 'Mohéli', 'Wani', 'Chiron', 'Mramani',
    'Bambao', 'Sima', 'Mavingouni', 'Iconi', 'Mvouni', 'Oungoni',
    'Chindini', 'Dembéni', 'Koua', 'Itsandra', 'Ntsoudjini'
  ],
  states: [
    'Grande Comore', 'Anjouan', 'Mohéli'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'مهندس برمجيات', 'مدير مشروع', 'محلل بيانات', 'مدير تسويق',
    'مندوب مبيعات', 'محاسب', 'مدير موارد بشرية', 'مصمم',
    'مدير عمليات', 'محلل أعمال', 'مدير مالي', 'مستشار قانوني'
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
    '+269 ## ## ###',
    '+269 3# ## ###',
    '+269 7# ## ###',
    '## ## ###',
    '3# ## ###',
    '7# ## ###',
    '+269 32# ####',
    '+269 77# ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'comorestelecom.km', 'snpt.km', 'comores.km'
  ],

  companyNames: [
    'Comores Telecom', 'Telma Comores', 'Banque Centrale des Comores',
    'Banque des Comores', 'Exim Bank Comores', 'Société Comorienne de Raffinerie',
    'Comores Air Service', 'Énergie des Comores', 'Comoros Logistics',
    'Air Comores International', 'Société Nationale de la Poste',
    'Sono Voyage', 'Hotel Moroni', 'Comores Fruits Industries',
    'Huilerie des Comores', 'Comovers'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'الاتصالات', 'الطاقة', 'النقل', 'الزراعة', 'الصيد',
    'السياحة', 'النفط', 'البناء'
  ],

  catchPhrases: [
    'الابتكار من أجل جزر القمر', 'معاً نحو التنمية', 'الجودة والثقة',
    'شريككم في النجاح', 'نخدمكم بإخلاص', 'التميز في العمل'
  ]
};
