import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_HT: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Jacques', 'Joseph', 'Louis', 'François', 'André', 'Michel',
    'Paul', 'Claude', 'Antoine', 'René', 'Charles', 'Guy', 'Marcel',
    'Emmanuel', 'Wilson', 'David', 'Sylvain', 'Roosevelt', 'Gérard', 'Daniel',
    'Samuel', 'Patrick', 'Christophe', 'Frantz', 'Manuel', 'Max', 'Alain', 'Émile'
  ],
  firstNamesFemale: [
    'Marie', 'Rose', 'Jeanne', 'Yvonne', 'Françoise', 'Marguerite', 'Lucie', 'Anne',
    'Josephine', 'Denise', 'Claudette', 'Myriam', 'Suzanne', 'Carole', 'Mireille',
    'Nathalie', 'Sandra', 'Monique', 'Anne-Marie', 'Géraldine', 'Magalie', 'Farah',
    'Vanessa', 'Ketlie', 'Lovely', 'Rachelle', 'Jessica', 'Stephanie', 'Valérie', 'Béatrice'
  ],
  lastNames: [
    'Joseph', 'Jean', 'Pierre', 'Louis', 'Michel', 'Auguste', 'Paul', 'Sylvain',
    'Baptiste', 'Noël', 'Simon', 'Lafleur', 'Samedi', 'Pierre-Louis', 'Jean-Baptiste',
    'Charles', 'Dorsainvil', 'François', 'Desir', 'Célestin',
    'Saint-Jean', 'Dupuy', 'Alexis', 'Mathieu', 'André', 'Michaël', 'Dumas', 'Fontaine', 'Moïse', 'Lahens'
  ],
  streets: [
    'Rue du Quai', 'Rue Bonne Foi', 'Rue Pavee', 'Rue du Centre', 'Boulevard Jean-Jacques Dessalines',
    'Rue des Miracles', 'Rue du Magasin de l\'État', 'Avenue Christophe',
    'Rue Capois', 'Rue Saint-Honoré', 'Rue Roux', 'Rue César',
    'Rue Dufort', 'Avenue de l\'Indépendance', 'Rue de la République'
  ],
  cities: [
    'Port-au-Prince', 'Cap-Haïtien', 'Jacmel', 'Gonaïves', 'Les Cayes',
    'Saint-Marc', 'Port-de-Paix', 'Jérémie', 'Fort-Liberté', 'Miragoâne',
    'Léogâne', 'Petit-Goâve', 'Hinche', 'Ouanaminthe', 'Plaisance',
    'Desdunes', 'Verrettes', 'Croix-des-Bouquets', 'Delmas', 'Pétion-Ville'
  ],
  states: [
    'Ouest', 'Nord', 'Sud', 'Artibonite', 'Grand\'Anse',
    'Nord-Est', 'Nord-Ouest', 'Sud-Est', 'Centre', 'Nippes'
  ],
  zipCodePattern: 'HT####',
  jobTitles: [
    'Ingénieur Logiciel', 'Comptable', 'Enseignant', 'Infirmier', 'Avocat',
    'Médecin', 'Architecte', 'Gérant d\'Entreprise',
    'Analyste Financier', 'Directeur Marketing', 'Représentant Commercial', 'Économiste'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Ventes', 'Ressources Humaines', 'Finances',
    'Opérations', 'Service Client', 'TI', 'Recherche et Développement',
    'Juridique', 'Gestion de Produits', 'Design', 'Assurance Qualité', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    return `${number}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return `HT${String(Random.int(1000, 9999))}`;
  },

  phoneFormats: [
    '+509 #### ####',
    '#### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.com', 'hotmail.com',
    'haiti.net', 'codeltd.com', 'accesshaiti.com', 'live.com'
  ],

  companyNames: [
    'Banque Nationale de Crédit', 'Digicel Haïti', 'Natcom Haïti',
    'Compagnie de Téléphone d\'Haïti', 'Bananamania', 'Groupe Simmonds',
    'Brasserie Nationale d\'Haïti', 'Cimenterie Nationale', 'Sogebank', 'Sun Auto'
  ],

  industries: [
    'Technologie', 'Finance', 'Télécommunications', 'Agriculture', 'Éducation',
    'Construction', 'Santé', 'Tourisme', 'Transport', 'Manufacture'
  ],

  catchPhrases: [
    'L\'union fait la force', 'Travail et progrès', 'Excellence et engagement',
    'Bâtir un avenir meilleur', 'Innovation haïtienne', 'Dévouement au service',
    'Qualité et confiance', 'Ensemble pour le développement'
  ]
};
