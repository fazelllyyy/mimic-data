import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_CI: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'François', 'Emmanuel', 'Laurent', 'Paul',
    'David', 'Thomas', 'Joseph', 'André', 'Alain', 'Roger', 'Marcel', 'Henri',
    'Pascal', 'Bernard', 'Christian', 'Patrice', 'Olivier', 'Sylvain',
    'Gérard', 'Jacques', 'Charles', 'Philippe', 'Vincent', 'Alexandre',
    'Sébastien', 'Ahmed', 'Mamadou', 'Kouamé', 'Yao', 'Konan', 'Koffi'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Thérèse',
    'Suzanne', 'Marguerite', 'Joséphine', 'Louise', 'Anne', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence', 'Béatrice',
    'Élisabeth', 'Martine', 'Chantal', 'Sylvie', 'Claire', 'Akoua',
    'Adjoua', 'Amenan', 'N\'Guessan', 'Kouadio', 'Ahou', 'Aya'
  ],
  lastNames: [
    'Kouamé', 'Koné', 'Traoré', 'Touré', 'Coulibaly', 'Diallo', 'N\'Diaye',
    'Diaby', 'Cissé', 'Camara', 'Keita', 'Sidibé', 'Konaté', 'Sangaré',
    'Doumbia', 'Bamba', 'Ouattara', 'Silué', 'Yao', 'Koffi', 'N\'Guessan',
    'Kouassi', 'Kouakou', 'Zadi', 'Brou', 'Akpa', 'Allou', 'Aboubakar'
  ],
  streets: [
    'Avenue de la République', 'Boulevard de la Paix', 'Rue du Commerce',
    'Avenue du Général de Gaulle', 'Rue des Écoles', 'Boulevard Giscard d\'Estaing',
    'Avenue Kennedy', 'Rue de la Liberté', 'Boulevard de l\'Indépendance',
    'Avenue du Père Blanc', 'Rue des Jardins', 'Avenue Franchet d\'Espèrey',
    'Rue du Marché', 'Boulevard Valéry Giscard d\'Estaing',
    'Avenue Chardy', 'Rue de la Gare', 'Boulevard de Marseille',
    'Avenue de la Corniche', 'Rue des Banques', 'Avenue Jean Paul II'
  ],
  cities: [
    'Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro', 'Korhogo', 'San-Pédro',
    'Gagnoa', 'Man', 'Divo', 'Anyama', 'Abengourou', 'Agboville',
    'Grand-Bassam', 'Grand-Lahou', 'Bondoukou', 'Séguéla', 'Odienné',
    'Touba', 'Sassandra', 'Boundiali', 'Ferkessédougou', 'Katiola',
    'Bingerville', 'Treichville', 'Cocody', 'Plateau'
  ],
  states: [
    'Abidjan', 'Bas-Sassandra', 'Comoé', 'Denguélé', 'Gôh-Djiboua',
    'Lacs', 'Lagunes', 'Montagnes', 'Sassandra-Marahoué', 'Savanes',
    'Vallée du Bandama', 'Woroba', 'Zanzan', 'Yamoussoukro'
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
    '+225 ## ## ## ##',
    '+225 0# ## ## ##',
    '0# ## ## ##',
    '05 ## ## ##',
    '07 ## ## ##',
    '01 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.ci', 'afrik.com', 'aviso.ci', 'cira.ci', 'globeaccess.ci'
  ],

  companyNames: [
    'Orange Côte d\'Ivoire', 'MTN Côte d\'Ivoire', 'Moov Africa',
    'Ecobank Côte d\'Ivoire', 'Société Générale Côte d\'Ivoire',
    'Banque Atlantique', 'NSIA Banque', 'BICICI',
    'SIFCA', 'Nestlé Côte d\'Ivoire', 'Bolloré Transport',
    'Air Côte d\'Ivoire', 'Brassivoire', 'Palmafrique',
    'Cimenterie de l\'Ouest', 'Nouvelle Paquebot', 'Cosmivoire'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Agroalimentaire'
  ],

  catchPhrases: [
    'Innover pour la Côte d\'Ivoire', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence ivoirienne', 'Votre partenaire de croissance'
  ]
};
