import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_TG: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'François', 'Joseph', 'Emmanuel', 'Paul',
    'David', 'Thomas', 'André', 'Alain', 'Roger', 'Marcel', 'Henri',
    'Pascal', 'Bernard', 'Christian', 'Patrice', 'Olivier', 'Sylvain',
    'Gérard', 'Jacques', 'Charles', 'Philippe', 'Vincent', 'Alexandre',
    'Kokou', 'Essonam', 'Kodjo', 'Yawo', 'Amivi', 'Coffi', 'Séna'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Thérèse',
    'Suzanne', 'Marguerite', 'Joséphine', 'Louise', 'Anne', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence', 'Béatrice',
    'Élisabeth', 'Martine', 'Chantal', 'Sylvie', 'Claire', 'Odette',
    'Denise', 'Yvette', 'Micheline', 'Akossiwa', 'Afiavi', 'Ayaba',
    'Mawussi', 'Séna', 'Ama'
  ],
  lastNames: [
    'Dossou', 'Agbéko', 'Sossa', 'Adjinacou', 'Loko', 'Togbé', 'Gbaguidi',
    'Hounkpati', 'Bokovi', 'Kodjo', 'Kouassi', 'Amouzouvi', 'Adeoye',
    'Gnimagnon', 'Avocè', 'Gaba', 'Hounkpè', 'Dadzie', 'Gbedje',
    'Degbe', 'Ahouansou', 'Zannou', 'Vondolia', 'Tété', 'Apeti',
    'Koffi', 'Dovi', 'Eklou', 'Sokpo', 'Aziagbé'
  ],
  streets: [
    'Avenue du Général de Gaulle', 'Rue de la Liberté',
    'Boulevard de la République', 'Avenue de la Paix',
    'Rue du Commerce', 'Avenue de la Présidence',
    'Boulevard de l\'Indépendance', 'Rue des Écoles',
    'Avenue du Marché', 'Rue de la Gare',
    'Boulevard de la Nation', 'Avenue de l\'Hôpital',
    'Rue des Cocotiers', 'Avenue des Lacs',
    'Boulevard du 13 Janvier', 'Rue de l\'Océan',
    'Avenue de la Corniche', 'Rue de la Plage',
    'Boulevard de l\'Unité', 'Avenue Eyadéma'
  ],
  cities: [
    'Lomé', 'Sokodé', 'Kara', 'Atakpamé', 'Kpalimé', 'Bassar',
    'Tsévié', 'Aného', 'Dapaong', 'Notsé', 'Mango', 'Bafilo',
    'Badou', 'Vogan', 'Tchamba', 'Amlamé', 'Sotouboua', 'Tabligbo',
    'Blitta', 'Kpagouda', 'Kandé', 'Gando', 'Gléï', 'Takpamba'
  ],
  states: [
    'Maritime', 'Plateaux', 'Kara', 'Savanes', 'Centrale'
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
    '+228 ## ## ## ##',
    '+228 9# ## ## ##',
    '90 ## ## ##',
    '92 ## ## ##',
    '93 ## ## ##',
    '96 ## ## ##',
    '97 ## ## ##',
    '70 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.tg', 'afrik.com', 'cafe.tg', 'togotel.tg', 'tgnet.tg'
  ],

  companyNames: [
    'Togo Telecom', 'Moov Togo', 'Ecobank Togo', 'Orabank Togo',
    'Banque Atlantique Togo', 'Société Générale Togo',
    'Bolloré Transport Togo', 'Nestlé Togo',
    'CIMTOGO', 'Togo Brewery',
    'Lomé Container Terminal', 'Groupe NIOTO',
    'Société des Mines du Togo', 'Air Togo',
    'Togo Rail', 'SOTOCO', 'Nouvelle Société de la Brasserie'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Mines'
  ],

  catchPhrases: [
    'Innover pour le Togo', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence togolaise', 'Votre partenaire de croissance'
  ]
};
