import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_BJ: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'François', 'Joseph', 'Emmanuel', 'Paul',
    'David', 'Thomas', 'André', 'Alain', 'Roger', 'Marcel', 'Henri',
    'Pascal', 'Bernard', 'Christian', 'Patrice', 'Olivier', 'Sylvain',
    'Gérard', 'Jacques', 'Charles', 'Philippe', 'Vincent', 'Alexandre',
    'Coffi', 'Kodjo', 'Koffi', 'Sèna', 'Mahuton', 'Joachim', 'Guy'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Catherine', 'Thérèse',
    'Suzanne', 'Marguerite', 'Joséphine', 'Louise', 'Anne', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence', 'Béatrice',
    'Élisabeth', 'Martine', 'Chantal', 'Sylvie', 'Claire', 'Odette',
    'Denise', 'Yvette', 'Micheline', 'Akossiwa', 'Afiavi', 'Sèna',
    'Dédé', 'Béa', 'Félicienne'
  ],
  lastNames: [
    'Sossa', 'Adjinacou', 'Goubalan', 'Dossou', 'Sagbohan', 'Gnansounou',
    'Zossou', 'Tchibozo', 'Hounkpatin', 'Agossou', 'Hountondji',
    'Akakpo', 'Quenum', 'Dossa', 'Voudou', 'Dahoun', 'Zinzindohoué',
    'Bossou', 'Guédou', 'Ahouansou', 'Amoussou', 'Tossou', 'Codjo',
    'Soumanou', 'Migan', 'Tchegnon', 'Kpadé', 'Lokossou'
  ],
  streets: [
    'Avenue de la République', 'Boulevard de l\'Indépendance',
    'Rue du Commerce', 'Avenue du Général de Gaulle',
    'Rue de la Liberté', 'Boulevard de la Marina',
    'Avenue Jean Paul II', 'Rue des Écoles',
    'Avenue de la Gare', 'Rue du Marché',
    'Boulevard du 1er Novembre', 'Avenue Steinmetz',
    'Rue de la Paix', 'Boulevard de l\'Océan',
    'Avenue de l\'Hôpital', 'Rue des Cocotiers',
    'Boulevard de la République', 'Avenue de la Présidence',
    'Rue des Banques', 'Avenue de la Liberté'
  ],
  cities: [
    'Cotonou', 'Porto-Novo', 'Parakou', 'Ganvié', 'Bohicon', 'Abomey',
    'Kandi', 'Lokossa', 'Ouidah', 'Natitingou', 'Djougou', 'Savalou',
    'Grand-Popo', 'Allada', 'Dogbo', 'Pobè', 'Malanville', 'Tanguiéta',
    'Bembéréké', 'Sèmèrè', 'Aplahoué', 'Cobly', 'Comé', 'Banikoara'
  ],
  states: [
    'Alibori', 'Atakora', 'Atlantique', 'Borgou', 'Collines', 'Couffo',
    'Donga', 'Littoral', 'Mono', 'Ouémé', 'Plateau', 'Zou'
  ],
  zipCodePattern: '##',
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
    return String(Random.int(10, 99));
  },

  phoneFormats: [
    '+229 ## ## ## ##',
    '+229 6# ## ## ##',
    '6# ## ## ##',
    '9# ## ## ##',
    '2# ## ## ##',
    '21 ## ## ##',
    '97 ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'live.fr',
    'orange.bj', 'spacenet.bj', 'leland.bj', 'bjnet.bj', 'afrik.com'
  ],

  companyNames: [
    'MTN Bénin', 'Moov Bénin', 'SBEE', 'Ecobank Bénin',
    'Banque Atlantique Bénin', 'BOA Bénin',
    'Société Générale Bénin', 'Bolloré Transport Bénin',
    'Ciments du Bénin', 'Nestlé Bénin',
    'Bénin Brewery', 'SOBEBRA',
    'Groupe Petitfrère', 'Cotonou Terminal',
    'Bénin Control', 'Association des banques du Bénin'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Télécommunications', 'Énergie', 'Transport',
    'Agriculture', 'Immobilier', 'Hôtellerie', 'Artisanat'
  ],

  catchPhrases: [
    'Innover pour le Bénin', 'La réussite ensemble',
    'Construire l\'avenir', 'Qualité et confiance',
    'Excellence béninoise', 'Votre partenaire de croissance'
  ]
};
