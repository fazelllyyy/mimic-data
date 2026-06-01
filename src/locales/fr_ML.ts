import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_ML: LocaleDefinition = {
  firstNamesMale: [
    'Mamadou', 'Amadou', 'Sekou', 'Moussa', 'Ousmane', 'Ibrahim', 'Boubacar',
    'Modibo', 'Adama', 'Drissa', 'Mamoutou', 'Balla', 'Samba', 'Demba',
    'Cheick', 'Lassana', 'Mahamadou', 'Abdoulaye', 'Kadiatou', 'Nouhoum',
    'Hamidou', 'Bakary', 'Youssouf', 'Seydou', 'Karamoko', 'Makan', 'Oumar'
  ],
  firstNamesFemale: [
    'Fatoumata', 'Aminata', 'Kadiatou', 'Mariam', 'Aïssata', 'Djeneba',
    'Rokia', 'Maimouna', 'Hawa', 'Safiatou', 'Nènè', 'Mah', 'Assetou',
    'Sitan', 'Bintou', 'Oumou', 'Salimata', 'Tenin', 'Tata', 'Niamé',
    'Yéya', 'Sira', 'Coumba', 'Adiaratou', 'Korotoumou', 'Fily', 'Mintou'
  ],
  lastNames: [
    'Traoré', 'Diallo', 'Coulibaly', 'Sissoko', 'Diarra', 'Sangaré',
    'Konaté', 'Doumbia', 'Keita', 'Camara', 'Sanogo', 'Kanté', 'Touré',
    'Sidibé', 'Kané', 'Niaré', 'Sylla', 'Sow', 'Koné', 'Fofana',
    'Bamba', 'Cissé', 'Tounkara', 'Samaké', 'Dembélé', 'Tangara', 'Bagayoko'
  ],
  streets: [
    'Avenue de l\'Indépendance', 'Rue de la Liberté', 'Avenue Cheick Zayed',
    'Boulevard de l\'Union', 'Rue du Commerce', 'Avenue de la République',
    'Boulevard du 22 Octobre', 'Rue des Balbés', 'Avenue des Forces Armées',
    'Rue Karamoko Diaby', 'Boulevard de l\'Indépendance', 'Avenue de la Marne',
    'Rue du Marché', 'Avenue Modibo Keita', 'Boulevard du Peuple',
    'Rue des Légitimaux', 'Avenue de l\'Hôpital', 'Rue Carnot',
    'Boulevard de la Nation', 'Rue des Écoles'
  ],
  cities: [
    'Bamako', 'Sikasso', 'Mopti', 'Koutiala', 'Kayes', 'Ségou', 'Gao',
    'Bougouni', 'Tombouctou', 'Kati', 'Kidal', 'Koulikoro', 'Niono',
    'Nioro du Sahel', 'Markala', 'Banamba', 'Kolondiéba', 'Douentza',
    'Ménaka', 'Araouane', 'Taoudenni', 'Djenné', 'San', 'Yanfolila'
  ],
  states: [
    'Bamako', 'Gao', 'Kayes', 'Kidal', 'Koulikoro', 'Mopti',
    'Ségou', 'Sikasso', 'Taoudeni', 'Ménaka'
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
    '+223 ## ## ## ##',
    '+223 7# ## ## ##',
    '70 ## ## ##',
    '71 ## ## ##',
    '76 ## ## ##',
    '20 ## ## ##',
    '21 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'afribone.net.ml', 'iktelemail.ml', 'orange-mail.ml', 'afrik.com',
    'sotelma.ml'
  ],

  companyNames: [
    'Orange Mali', 'Sotelma', 'Ecobank Mali', 'BIM SA',
    'Banque Nationale de Développement du Mali', 'Banque de l\'Habitat',
    'Ciments du Mali', 'Huilor', 'Nestlé Mali',
    'Compagnie Malienne de Navigation', 'Groupe Tracor',
    'SODIF', 'Bolloré Transport Mali', 'Air Mali',
    'Grands Moulins du Mali', 'Tomota', 'SOMACO'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Artisanat'
  ],

  catchPhrases: [
    'Innover pour le Mali', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence malienne', 'Votre partenaire de croissance'
  ]
};
