import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_CM: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Paul', 'Pierre', 'Michel', 'Joseph', 'Emmanuel', 'Daniel', 'Samuel',
    'Thomas', 'David', 'André', 'François', 'Alain', 'Roger', 'Marcel', 'Henri',
    'Lucien', 'Guy', 'Pascal', 'Bernard', 'Christian', 'Patrice', 'Étienne',
    'Olivier', 'Sylvain', 'Gérard', 'Raymond', 'Simon', 'Jacques', 'Charles'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Thérèse', 'Suzanne',
    'Marguerite', 'Julienne', 'Joséphine', 'Louise', 'Anne', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence', 'Béatrice',
    'Lucienne', 'Élisabeth', 'Martine', 'Chantal', 'Sylvie', 'Paulette',
    'Claire', 'Odette', 'Denise', 'Yvette', 'Micheline'
  ],
  lastNames: [
    'Nkoa', 'Biyaga', 'Ndi', 'Njock', 'Eyong', 'Nkwi', 'Ngane', 'Tchinda',
    'Mbah', 'Atangana', 'Oyono', 'Bela', 'Mballa', 'Essomba', 'Eyebe',
    'Mbarga', 'Ndzana', 'Eloundou', 'Mengue', 'Onana', 'Beyala', 'Akono',
    'Ewane', 'Nomo', 'Ango', 'Ekotto', 'Assiga', 'Mbappé', 'Eto\'o', 'Bella'
  ],
  streets: [
    'Avenue Kennedy', 'Rue de la Liberté', 'Boulevard de la République',
    'Avenue Charles de Gaulle', 'Rue du Marché', 'Avenue du Général Leclerc',
    'Boulevard de l\'Indépendance', 'Rue des Palmiers', 'Avenue Foch',
    'Rue du Commerce', 'Boulevard Ahmadou Ahidjo', 'Avenue Mgr Vogt',
    'Rue de la Paix', 'Avenue de la Résistance', 'Rue des Cocotiers',
    'Boulevard de la Gare', 'Avenue du Président', 'Rue des Écoles',
    'Avenue de l\'Hôpital', 'Rue Principale', 'Boulevard de la Plage'
  ],
  cities: [
    'Douala', 'Yaoundé', 'Bamenda', 'Garoua', 'Maroua', 'Bafoussam',
    'Kribi', 'Limbe', 'Nkongsamba', 'Buea', 'Kumba', 'Ngaoundéré',
    'Ebolowa', 'Edéa', 'Bertoua', 'Mbouda', 'Koutaba', 'Foumban',
    'Dschang', 'Mbalmayo', 'Sangmélima', 'Bafia', 'Mokolo', 'Mora'
  ],
  states: [
    'Centre', 'Littoral', 'Nord', 'Extrême-Nord', 'Sud', 'Ouest',
    'Nord-Ouest', 'Sud-Ouest', 'Est', 'Adamaoua'
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
    '+237 6# ## ## ##',
    '+237 2# ## ## ##',
    '+237 6## ### ###',
    '6## ### ###',
    '2## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'orange.cm',
    'yahoo.cm', 'camtel.cm', 'ringo.cm', 'afrik.com', 'live.fr'
  ],

  companyNames: [
    'Société Générale Cameroun', 'Afriland First Bank', 'BICEC',
    'Camair-Co', 'MTN Cameroun', 'Orange Cameroun', 'Camtel',
    'Société Camerounaise de Raffinerie', 'Bolloré Afrique Logistique',
    'Nestlé Cameroun', 'Guinness Cameroun', 'Braseries du Cameroun',
    'Chanas Assurance', 'Eneo Cameroun', 'PMUC', 'Cimencam',
    'Société Nationale des Eaux du Cameroun'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Construction'
  ],

  catchPhrases: [
    'Innover pour le Cameroun', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Votre partenaire de croissance', 'Excellence africaine'
  ]
};
