import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const rw_RW: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Paul', 'Joseph', 'Emmanuel', 'David', 'Patrick',
    'Samuel', 'Thomas', 'Michel', 'Charles', 'James', 'John', 'Peter',
    'Andrew', 'Daniel', 'Alexis', 'Augustin', 'Boniface', 'Célestin',
    'Damien', 'Éric', 'Félicien', 'Gaspard', 'Hilaire', 'Innocent',
    'Jérôme', 'Léonard', 'Matthieu', 'Noël', 'Olivier', 'Pacifique',
    'Raphaël', 'Simon', 'Thaddée', 'Viateur', 'Yves', 'Zachée'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Anne', 'Catherine', 'Thérèse', 'Françoise',
    'Monique', 'Marguerite', 'Joséphine', 'Louise', 'Christine',
    'Pauline', 'Germaine', 'Henriette', 'Angèle', 'Florence',
    'Béatrice', 'Élisabeth', 'Martine', 'Chantal', 'Sylvie',
    'Claire', 'Odette', 'Denise', 'Yvette', 'Alice', 'Bernadette',
    'Clarisse', 'Diane', 'Édith', 'Félicité', 'Gratia', 'Immaculée',
    'Janvière', 'Laetitia', 'Médiatrice', 'Nathalie', 'Olive'
  ],
  lastNames: [
    'Mugabo', 'Niyonzima', 'Hakizimana', 'Nkusi', 'Rutayisire', 'Bizimungu',
    'Mukamana', 'Niyonshuti', 'Munyaneza', 'Mbabazi', 'Rwabukwisi',
    'Ndagijimana', 'Nkurunziza', 'Rugamba', 'Niyibizi', 'Ruzindana',
    'Mugisha', 'Uwimana', 'Nkundabera', 'Bimenyimana', 'Habimana',
    'Karemera', 'Gasana', 'Mukeshimana', 'Bazimaziki', 'Rurangwa',
    'Cyusa', 'Mutuyimana', 'Nsengiyumva', 'Bayingana', 'Kabera'
  ],
  streets: [
    'Avenue de la Paix', 'Boulevard de l\'Indépendance',
    'Avenue de la République', 'Rue du Commerce',
    'Avenue Paul VI', 'Boulevard de la Révolution',
    'Avenue de l\'Hôpital', 'Rue de la Gare',
    'Avenue des Mille Collines', 'Rue de la Liberté',
    'Boulevard de la Nation', 'Avenue du Général',
    'Rue des Écoles', 'Avenue du Marché',
    'Boulevard de l\'Unité', 'Rue de l\'Église',
    'Avenue de la Jeunesse', 'Rue du Stade',
    'Boulevard de la Plage', 'Avenue des Banques'
  ],
  cities: [
    'Kigali', 'Butare', 'Gitarama', 'Ruhengeri', 'Gisenyi', 'Cyangugu',
    'Byumba', 'Kibuye', 'Rwamagana', 'Nyanza', 'Kibungo', 'Musanze',
    'Ruhango', 'Nyarugenge', 'Karongi', 'Rusizi', 'Kayonza', 'Bugesera',
    'Muhanga', 'Nyagatare', 'Ngoma', 'Gicumbi', 'Burera', 'Huye'
  ],
  states: [
    'Ville de Kigali', 'Sud', 'Nord', 'Ouest', 'Est'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Injineriya ya Software', 'Umuyobozi w\'Umushinga', 'Umucukumbuzi w\'Amakuru',
    'Umuyobozi w\'Ishuri', 'Umuguzi', 'Umucungamari',
    'Umuyobozi w\'Abakozi', 'Designer', 'Umuyobozi w\'Ibikorwa',
    'Umucukumbuzi w\'Ubucuruzi', 'Umucukumbuzi w\'Imari',
    'Umuyobozi w\'Igicurishwa', 'Umunyamabanga wa Sistimu',
    'Umukozi w\'Abakiliya', 'Injineriya y\'Ubugenzuzi',
    'Umwanditsi w\'Inyandiko'
  ],
  departments: [
    'Ubuhanga', 'Ishuri', 'Ubucuruzi', 'Ubucungamari', 'Abakozi',
    'Ibikorwa', 'Serivisi y\'Abakiliya', 'IKT', 'Ubushakashatsi',
    'Itegeko', 'Ubucuruzi bw\'Igicurishwa', 'Igishushanyo',
    'Ubugenzuzi', 'Ubutegetsi'
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
    '+250 ### ### ###',
    '+250 7## ### ###',
    '07## ### ###',
    '078# ### ###',
    '079# ### ###',
    '073# ### ###',
    '072# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'africa.com', 'rwanda.rw', 'ur.ac.rw', 'broadband.rw', 'artel.rw'
  ],

  companyNames: [
    'MTN Rwanda', 'Airtel Rwanda', 'Bank of Kigali', 'BRD Bank',
    'Equity Bank Rwanda', 'Ecobank Rwanda', 'I&M Bank Rwanda',
    'Rwanda Electricity Group', 'RwandAir',
    'Rwanda Social Security Board', 'Gorilla Highlands Resources',
    'Bralirwa Breweries', 'Azam Rwanda', 'Sulfo Rwanda',
    'CRH Bank', 'Radiant Insurance', 'Rok Construction'
  ],

  industries: [
    'Ikoranabuhanga', 'Imari', 'Ubuvuzi', 'Uburezi', 'Ubucuruzi',
    'Inganda', 'Itumanaho', 'Ingufu', 'Ubwikorezi', 'Ubuhinzi',
    'Umwuga w\'Imiturire', 'Ubukerarugendo', 'Ubucukuzi'
  ],

  catchPhrases: [
    'Turahinga imbere', 'Guteza imbere igihugu', 'Twubake ejo hazaza',
    'Ubwiza n\'ikizere', 'Ubumwe n\'amajyambere', 'Mbere y\'ibindi'
  ]
};
