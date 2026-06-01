import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_BF: LocaleDefinition = {
  firstNamesMale: [
    'Mamadou', 'Amadou', 'Issoufou', 'Adama', 'Moussa', 'Seydou', 'Boubacar',
    'Ousmane', 'Ibrahim', 'Souleymane', 'Rasmané', 'Daouda', 'Moustapha',
    'Hamadou', 'Boukary', 'Alassane', 'Saidou', 'Lassina', 'Tiemoko',
    'Pascal', 'Jean', 'Christophe', 'Bakary', 'Hervé', 'Guy', 'Armand',
    'Hermann', 'Joachim', 'Michel', 'Paul'
  ],
  firstNamesFemale: [
    'Fatoumata', 'Aminata', 'Mariam', 'Kadiatou', 'Aïssata', 'Rabi',
    'Habibatou', 'Maimouna', 'Salimata', 'Rahamata', 'Bintou', 'Salamata',
    'Adiza', 'Ramatou', 'Nafissatou', 'Hawa', 'Oumou', 'Safiatou',
    'Martine', 'Béatrice', 'Christine', 'Marie', 'Sylvie', 'Adèle',
    'Monique', 'Julie', 'Catherine', 'Anne', 'Joséphine', 'Lydie'
  ],
  lastNames: [
    'Ouédraogo', 'Traoré', 'Sanou', 'Coulibaly', 'Diallo', 'Sawadogo',
    'Koné', 'Zongo', 'Kaboré', 'Bamba', 'Sissoko', 'Kéïta', 'Barry',
    'Ouattara', 'Tapsoba', 'Compaoré', 'Boni', 'Nana', 'Sankara',
    'Yaméogo', 'Bassolé', 'Sou', 'Ilboudo', 'Bado', 'Pale', 'Nikiema',
    'Yonli', 'Dayo', 'Belem', 'Meda'
  ],
  streets: [
    'Avenue de la République', 'Boulevard de l\'Indépendance',
    'Rue de la Liberté', 'Avenue Kwame Nkrumah',
    'Boulevard du 11 Décembre', 'Rue du Commerce',
    'Avenue Charles de Gaulle', 'Rue de la Gare',
    'Boulevard de la Révolution', 'Avenue de l\'Hôpital',
    'Rue des Écoles', 'Avenue Mamadou Yaro',
    'Boulevard de la Nation', 'Rue du Marché',
    'Avenue du Président', 'Rue de l\'Indépendance',
    'Boulevard de la Paix', 'Avenue Maurice Yaméogo',
    'Rue des Banques', 'Avenue de la Jeunesse'
  ],
  cities: [
    'Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Bouaké', 'Banfora',
    'Ouahigouya', 'Dédougou', 'Kaya', 'Dori', 'Tenkodogo', 'Fada N\'Gourma',
    'Zorgho', 'Garango', 'Gaoua', 'Boulsa', 'Koupéla', 'Réo', 'Manga',
    'Po', 'Yako', 'Toma', 'Nouna', 'Tougan', 'Houndé'
  ],
  states: [
    'Centre', 'Hauts-Bassins', 'Boucle du Mouhoun', 'Centre-Ouest',
    'Centre-Nord', 'Plateau-Central', 'Est', 'Nord', 'Sud-Ouest',
    'Centre-Est', 'Sahel'
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
    '+226 ## ## ## ##',
    '+226 7# ## ## ##',
    '70 ## ## ##',
    '71 ## ## ##',
    '74 ## ## ##',
    '75 ## ## ##',
    '76 ## ## ##',
    '77 ## ## ##',
    '78 ## ## ##',
    '25 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.bf', 'onatel.bf', 'afrik.com', 'faso.net', 'burkina.bf'
  ],

  companyNames: [
    'Orange Burkina Faso', 'Onatel', 'Airtel Burkina', 'Telmob',
    'Ecobank Burkina', 'Banque Atlantique Burkina', 'Coris Bank',
    'Société Générale Burkina', 'NSIA Burkina', 'Hammouda',
    'Bolloré Transport Burkina', 'Ciments de l\'Afrique',
    'Moulins Modernes de Ouagadougou', 'SOFITEX',
    'Nestlé Burkina', 'Burkina Brewery', 'Dafani'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Textile'
  ],

  catchPhrases: [
    'Innover pour le Burkina', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence burkinabè', 'Votre partenaire de croissance'
  ]
};
