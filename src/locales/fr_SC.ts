import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_SC: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Paul', 'Pierre', 'Michel', 'Daniel', 'André', 'François', 'Alain',
    'Roger', 'Marc', 'Bernard', 'Patrick', 'Philippe', 'Thierry', 'Jacques',
    'Henri', 'Maurice', 'Lucien', 'Guy', 'Pascal', 'Christian', 'Étienne',
    'Olivier', 'Sylvain', 'Gérard', 'Raymond', 'Simon', 'Charles', 'Louis', 'René'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Suzanne', 'Marguerite',
    'Louise', 'Anne', 'Christine', 'Pauline', 'Germaine', 'Henriette', 'Angèle',
    'Florence', 'Béatrice', 'Lucienne', 'Élisabeth', 'Martine', 'Chantal',
    'Sylvie', 'Paulette', 'Claire', 'Odette', 'Denise', 'Yvette', 'Micheline',
    'Nicole', 'Renée', 'Andrée'
  ],
  lastNames: [
    'Jumeau', 'Gonthier', 'Mondon', 'Volcère', 'Barra', 'Labrosse', 'Brioche',
    'Lesperance', 'Rose', 'Joubert', 'Balette', 'Fontaine', 'Laurent',
    'Morel', 'Simon', 'Pothin', 'Gébert', 'Quatre', 'Arissol', 'Hoareau',
    'Leslie', 'Morton', 'Rassool', 'Sinon', 'Kurz', 'Mesch', 'Henry',
    'Adam', 'Duncan', 'Williams'
  ],
  streets: [
    'Avenue de la République', 'Rue de la Liberté', 'Boulevard de l\'Indépendance',
    'Avenue des Seychelles', 'Rue du Commerce', 'Avenue de la Plage',
    'Rue des Palmiers', 'Boulevard de la Mer', 'Avenue du Président',
    'Rue de l\'Hôpital', 'Rue du Marché', 'Avenue de la Paix',
    'Rue des Cocotiers', 'Boulevard de la Gare', 'Avenue de l\'Océan',
    'Rue de l\'Église', 'Chemin de la Miséricorde', 'Rue de l\'École',
    'Boulevard de l\'Union', 'Avenue Mont Fleuri'
  ],
  cities: [
    'Victoria', 'Anse Royale', 'Anse Boileau', 'Beau Vallon', 'Cascade',
    'Machabee', 'Baie Lazare', 'Takamaka', 'La Digue', 'Praslin',
    'Grand Anse', 'Anse Etoile', 'Au Cap', 'English River',
    'Les Mamelles', 'Mont Buxton', 'Mont Fleuri', 'Plaisance',
    'Roche Caïman', 'Saint Louis', 'Bel Air', 'Bel Ombre', 'Glacis', 'Port Glaud'
  ],
  states: [
    'Anse Boileau', 'Anse Royale', 'Anse Etoile', 'Au Cap', 'Baie Lazare',
    'Baie Sainte Anne', 'Beau Vallon', 'Bel Air', 'Bel Ombre', 'Cascade',
    'Glacis', 'Grand Anse Mahe', 'Grand Anse Praslin', 'La Digue',
    'Les Mamelles', 'Mont Buxton', 'Mont Fleuri', 'Plaisance',
    'Pointe La Rue', 'Port Glaud', 'Roche Caïman', 'Saint Louis', 'Takamaka'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données', 'Responsable Marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer',
    'Responsable des Opérations', 'Analyste d\'Affaires', 'Gérant', 'Conseiller Juridique'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Commercial', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'Informatique', 'Recherche et Développement',
    'Juridique'
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
    '+248 ## ## ##',
    '+248 2### ###',
    '+248 4### ###',
    '+248 6### ###',
    '+248 7### ###',
    '## ## ##',
    '2### ###',
    '4### ###',
    '6### ###',
    '7### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'icloud.com',
    'seychelles.net', 'airseychelles.com.sc', 'cableandwireless.sc'
  ],

  companyNames: [
    'Air Seychelles', 'Bank of Seychelles', 'Nouvobanq', 'Seychelles Telecom',
    'Cable and Wireless Seychelles', 'Seychelles Petroleum Company',
    'Seychelles Breweries', 'Island Development Company',
    'Seychelles Trading Company', 'H Savy Insurance',
    'Creole Travel Services', 'Sunset Beach Hotel',
    'Four Seasons Seychelles', 'North Island Resort',
    'Constance Ephélia Seychelles', 'STC Hypermarket'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Télécommunications', 'Énergie', 'Transport', 'Tourisme',
    'Construction', 'Agriculture', 'Pêche', 'Hôtellerie'
  ],

  catchPhrases: [
    'Innover pour les Seychelles', 'Votre partenaire de confiance',
    'Bâtir un avenir meilleur', 'Qualité et excellence',
    'L\'excellence au service du développement', 'Ensemble pour le progrès'
  ]
};
