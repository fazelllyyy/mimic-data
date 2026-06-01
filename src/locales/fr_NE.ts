import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_NE: LocaleDefinition = {
  firstNamesMale: [
    'Mamadou', 'Amadou', 'Issoufou', 'Oumarou', 'Moussa', 'Sani', 'Abdou',
    'Ibrahim', 'Boubacar', 'Habou', 'Salifou', 'Boureima', 'Seydou',
    'Mahamadou', 'Bassirou', 'Mouctar', 'Yacouba', 'Djibo', 'Halidou',
    'Moutari', 'Lawan', 'Zakari', 'Harouna', 'Tidjani', 'Souleymane',
    'Nouhoum', 'Djamal', 'Kalla', 'Issaka'
  ],
  firstNamesFemale: [
    'Fatima', 'Aminatou', 'Hadiza', 'Saïdatou', 'Mariama', 'Rabi', 'Hassia',
    'Zainabou', 'Aïchatou', 'Balki', 'Rahamatou', 'Salamatou', 'Kadija',
    'Maimouna', 'Moumouni', 'Hamissou', 'Zalika', 'Lawali', 'Gani',
    'Bachirou', 'Massa', 'Tinni', 'Biba', 'Papa', 'Adji'
  ],
  lastNames: [
    'Moussa', 'Oumarou', 'Issoufou', 'Boubacar', 'Abdou', 'Salifou',
    'Sani', 'Amadou', 'Mahamadou', 'Ibrahim', 'Mamane', 'Djibo',
    'Halidou', 'Yacouba', 'Alzouma', 'Seydou', 'Moutari', 'Lawan',
    'Boureima', 'Habou', 'Harouna', 'Tidjani', 'Sido', 'Garba',
    'Kalla', 'Mounkaila', 'Zakari', 'Chaïbou'
  ],
  streets: [
    'Boulevard de la République', 'Avenue du Général de Gaulle',
    'Rue de la Liberté', 'Boulevard de l\'Indépendance',
    'Avenue de l\'Union', 'Rue du Marché', 'Boulevard des Djermakoy',
    'Avenue de la Mairie', 'Rue de la Paix', 'Avenue du Président',
    'Rue des Écoles', 'Boulevard du 15 Avril', 'Avenue des Forces Armées',
    'Rue du Grand Marché', 'Boulevard de la Gare', 'Avenue de l\'Hôpital',
    'Rue de l\'Eglise', 'Boulevard de la Zone', 'Avenue Karamoko',
    'Rue des Légumes'
  ],
  cities: [
    'Niamey', 'Zinder', 'Maradi', 'Tahoua', 'Agadez', 'Dosso', 'Diffa',
    'Tillabéri', 'Arlit', 'Birni N\'Konni', 'Madaoua', 'Tessaoua',
    'Mirriah', 'Magaria', 'Bouza', 'Tchirozérine', 'Gaya', 'Mayahi',
    'Guidan Roumdji', 'Filingué', 'Ouallam', 'Say', 'Téra', 'N\'Guigmi'
  ],
  states: [
    'Niamey', 'Agadez', 'Diffa', 'Dosso', 'Maradi', 'Tahoua',
    'Tillabéri', 'Zinder'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données',
    'Responsable Marketing', 'Commercial', 'Comptable', 'Responsable RH',
    'Designer', 'Responsable des Opérations', 'Analyste d\'Affaires',
    'Analyste Financier', 'Chef de Produit', 'Administrateur Système',
    'Chargé de Clientèle', 'Ingénieur Réseau'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Commercial', 'Ressources Humaines',
    'Finance', 'Opérations', 'Service Client', 'Informatique',
    'Recherche et Développement', 'Juridique', 'Gestion de Produit',
    'Design', 'Administration'
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
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+227 ## ## ## ##',
    '+227 9# ## ## ##',
    '90 ## ## ##',
    '91 ## ## ##',
    '92 ## ## ##',
    '93 ## ## ##',
    '96 ## ## ##',
    '20 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.ne', 'afrik.com', 'intnet.ne', 'nimail.ne', 'sahel.com'
  ],

  companyNames: [
    'Orange Niger', 'Sonitel', 'Airtel Niger', 'Moov Niger',
    'Ecobank Niger', 'Banque Atlantique Niger', 'BIA Niger',
    'Société Nigérienne de l\'Électricité', 'SONIDEP',
    'Olam Niger', 'Nestlé Niger', 'Bolloré Transport Niger',
    'Grands Moulins du Niger', 'Cimenterie de la CIMNI',
    'SORAZ', 'Cominak', 'GIA Niger'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Mines'
  ],

  catchPhrases: [
    'Innover pour le Niger', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence nigérienne', 'Votre partenaire de croissance'
  ]
};
