import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_GA: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'François', 'Joseph', 'Emmanuel', 'Paul',
    'David', 'Thomas', 'André', 'Alain', 'Roger', 'Marcel', 'Henri',
    'Pascal', 'Bernard', 'Christian', 'Patrice', 'Olivier', 'Sylvain',
    'Gérard', 'Jacques', 'Charles', 'Philippe', 'Vincent', 'Alexandre',
    'Guy', 'Daniel', 'Étienne', 'Simon', 'Barthélemy', 'Côme', 'Landry'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Thérèse',
    'Suzanne', 'Marguerite', 'Joséphine', 'Louise', 'Anne', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence', 'Béatrice',
    'Élisabeth', 'Martine', 'Chantal', 'Sylvie', 'Claire', 'Odette',
    'Denise', 'Yvette', 'Micheline', 'Pascaline', 'Rose', 'Alice',
    'Fabienne', 'Laure', 'Gisèle', 'Viviane'
  ],
  lastNames: [
    'Mvé', 'Mba', 'Ndong', 'Boussamba', 'Nkoghe', 'Essono', 'Meyo',
    'Akomo', 'Onanga', 'Nze', 'Nguema', 'Obame', 'Ndiaye', 'Biyogo',
    'Diop', 'Wallet', 'Bouvry', 'Medou', 'Angue', 'Mouity',
    'Mounkala', 'Mboumba', 'Mihindou', 'Moudouma', 'Nzamba', 'Otounga',
    'Nguembi', 'Mamboundou', 'Pambo', 'Mapaga'
  ],
  streets: [
    'Boulevard de l\'Indépendance', 'Avenue Léon Mba',
    'Rue de la Liberté', 'Avenue du Président',
    'Rue du Commerce', 'Boulevard de la Nation',
    'Avenue de la République', 'Rue des Écoles',
    'Avenue de l\'Hôpital', 'Rue du Marché',
    'Boulevard de la Mer', 'Avenue de la Gare',
    'Rue de la Paix', 'Avenue de la Corniche',
    'Boulevard de la Plage', 'Rue des Banques',
    'Avenue Hassan II', 'Rue des Cocotiers',
    'Boulevard Jean Hilaire', 'Avenue des Palmiers'
  ],
  cities: [
    'Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda',
    'Ntoum', 'Lambaréné', 'Mouila', 'Akanda', 'Tchibanga',
    'Bitam', 'Koulamoutou', 'Makokou', 'Lastoursville', 'Mitzic',
    'Ndendé', 'Mékambo', 'Bongoville', 'Booué', 'Fougamou',
    'Lékoni', 'Mounana', 'Okondja', 'Minvoul'
  ],
  states: [
    'Estuaire', 'Haut-Ogooué', 'Moyen-Ogooué', 'Ngounié', 'Nyanga',
    'Ogooué-Ivindo', 'Ogooué-Lolo', 'Ogooué-Maritime', 'Woleu-Ntem'
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
    '+241 ## ## ## ##',
    '+241 7# ## ## ##',
    '7# ## ## ##',
    '0# ## ## ##',
    '06 ## ## ##',
    '07 ## ## ##',
    '01 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.ga', 'afrik.com', 'ameli.ga', 'inet.ga', 'assala.ga'
  ],

  companyNames: [
    'Gabon Telecom', 'Airtel Gabon', 'Moov Gabon', 'TotalEnergies Gabon',
    'Assala Gabon', 'Perenco Gabon', 'Bolloré Transport Gabon',
    'SNBG', 'Société des Eaux du Gabon', 'Ciments du Gabon',
    'Nestlé Gabon', 'Ecobank Gabon', 'BGFI Bank',
    'Banque du Gabon', 'UGB Gabon', 'Gabon Oil Company',
    'Gabon Mining', 'Okoumé',
    'CICM', 'Mouila Minière'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Pétrole et Gaz', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Mines', 'Foresterie'
  ],

  catchPhrases: [
    'Innover pour le Gabon', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence gabonaise', 'Votre partenaire de croissance'
  ]
};
