import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_SN: LocaleDefinition = {
  firstNamesMale: [
    'Mamadou', 'Amadou', 'Omar', 'Abdoulaye', 'Moussa', 'Aliou', 'Souleymane',
    'Ibrahima', 'Cheikh', 'Mouhamadou', 'Samba', 'Boubacar', 'Modou', 'Moustapha',
    'Idrissa', 'Ousseynou', 'Pape', 'Serigne', 'Babacar', 'Lamine',
    'Adama', 'Mamour', 'El Hadji', 'Mbaye', 'Thierno', 'Mohamed', 'Malick'
  ],
  firstNamesFemale: [
    'Aminata', 'Fatou', 'Aïssatou', 'Marième', 'Ndèye', 'Khadija', 'Awa',
    'Mame', 'Oulimata', 'Rokhaya', 'Adja', 'Bineta', 'Sokhna', 'Mariama',
    'Coumba', 'Seynabou', 'Arame', 'Mbène', 'Safiétou', 'Anta', 'Diaba',
    'Fatoumata', 'Dior', 'Kine', 'Nafi', 'Rama', 'Yacine', 'Soda'
  ],
  lastNames: [
    'Ndiaye', 'Diop', 'Fall', 'Sow', 'Thiam', 'Sarr', 'Gueye', 'Mbaye',
    'Ba', 'Sy', 'Diallo', 'Sène', 'Faye', 'Cissé', 'Kane', 'Ndour',
    'Bâ', 'Touré', 'Gassama', 'Diouf', 'Seck', 'Niang', 'Camara',
    'Baldé', 'Mané', 'Boye', 'Ka', 'Pouye', 'Bathily', 'Tall'
  ],
  streets: [
    'Avenue de la République', 'Boulevard de l\'Indépendance',
    'Rue de la Liberté', 'Avenue Léopold Sédar Senghor', 'Rue du Commerce',
    'Boulevard du Sud', 'Avenue Cheikh Anta Diop', 'Rue des Eaux',
    'Avenue du Général de Gaulle', 'Rue de la Gare', 'Boulevard de la Gueule Tapée',
    'Avenue Malick Sy', 'Rue Moussa Diop', 'Boulevard du Centenaire',
    'Avenue Bourguiba', 'Rue de Thiong', 'Avenue Blaise Diagne',
    'Rue Huart', 'Avenue de l\'Hôpital', 'Rue Carnot'
  ],
  cities: [
    'Dakar', 'Thiès', 'Kaolack', 'Mbour', 'Saint-Louis', 'Ziguinchor',
    'Diourbel', 'Louga', 'Tambacounda', 'Rufisque', 'Touba', 'Kolda',
    'Bargny', 'Fatick', 'Kédougou', 'Sédhiou', 'Matam', 'Pikine',
    'Guédiawaye', 'Dagana', 'Bambey', 'Nioro', 'Kaffrine', 'Sokone'
  ],
  states: [
    'Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor', 'Louga',
    'Diourbel', 'Tambacounda', 'Kolda', 'Fatick', 'Matam', 'Kédougou',
    'Sédhiou', 'Kaffrine'
  ],
  zipCodePattern: '#####',
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
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+221 ## ### ## ##',
    '+221 7# ### ## ##',
    '70 ### ## ##',
    '76 ### ## ##',
    '77 ### ## ##',
    '33 ### ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'orange.sn',
    'live.fr', 'arc.sn', 'sentoo.sn', 'metissacana.sn', 'afrik.com'
  ],

  companyNames: [
    'Sonatel', 'Orange Sénégal', 'Free Sénégal', 'Ecobank Sénégal',
    'Société Générale Sénégal', 'Banque nationale du Sénégal',
    'Sénégal Airlines', 'Air Sénégal SA', 'Dakar Dem Dikk',
    'Nestlé Sénégal', 'Société des Brasseries de l\'Ouest',
    'Sunar', 'Saga', 'Industries Chimiques du Sénégal',
    'SENELEC', 'SONES', 'CSS (Compagnie Sucrière Sénégalaise)'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Pêche'
  ],

  catchPhrases: [
    'Innover pour le Sénégal', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence sénégalaise', 'Votre partenaire de croissance'
  ]
};
