import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const mg_MG: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Paul', 'Philippe', 'André', 'Michel', 'Pierre', 'Charles',
    'Robert', 'Alain', 'Claude', 'René', 'Marcel', 'Georges', 'Louis',
    'Lucien', 'Tantely', 'Rivo', 'Haja', 'Nirina', 'Mamy', 'Laza',
    'Tafita', 'Solofo', 'Herizo', 'Faniry', 'Celestin', 'Justin',
    'Désiré', 'Bertrand', 'Noel'
  ],
  firstNamesFemale: [
    'Marie', 'Jeanne', 'Françoise', 'Monique', 'Suzanne', 'Catherine',
    'Christine', 'Brigitte', 'Jacqueline', 'Nathalie', 'Madeleine',
    'Anne', 'Edith', 'Joséphine', 'Simone', 'Voahangy', 'Vololona',
    'Miangaly', 'Hanitra', 'Soa', 'Njaka', 'Ny Aina', 'Hantanirina',
    'Fara', 'Rindra', 'Lanto', 'Feno', 'Tiana', 'Maminirina', 'Harilanto'
  ],
  lastNames: [
    'Rakoto', 'Rabe', 'Randria', 'Rajaonarison', 'Andriamanana',
    'Rakotonandrasana', 'Razafindrakoto', 'Randrianasolo',
    'Andrianjafy', 'Rakotonirina', 'Rasolofoharison', 'Razafiarisoa',
    'Razafimahatratra', 'Andriambelo', 'Raheriniaina',
    'Razafimandimby', 'Rasolondraibe', 'Andriatsimietra',
    'Rakotovao', 'Randriambololona', 'Rajoelisolo',
    'Rajaomandimby', 'Andrianjatovo', 'Ratsimbarison',
    'Razafy', 'Rakotoson', 'Rakotozandry', 'Rakotomalala',
    'Ranarivelo', 'Razafinjato'
  ],
  streets: [
    'Avenue de l\'Indépendance', 'Rue Tsaralalana', 'Rue Radama I',
    'Avenue de la Révolution', 'Rue Rainitsimbazafy',
    'Boulevard Joffre', 'Rue Galien de Béthencourt',
    'Avenue Doumer', 'Rue Jean Jaures', 'Rue Ismael Oumar',
    'Avenue du 26 Juin 1960', 'Rue Ambinanitelo',
    'Rue Prince Ratsimamanga', 'Rue Andriantsiray',
    'Rue Andriamahazo', 'Avenue des États-Unis',
    'Rue du Général Roques', 'Rue Farafatana'
  ],
  cities: [
    'Antananarivo', 'Toamasina', 'Antsirabe', 'Mahajanga',
    'Fianarantsoa', 'Toliara', 'Antsiranana', 'Morondava',
    'Sambava', 'Manakara', 'Moramanga', 'Ambovombe',
    'Ambanja', 'Ambalavao', 'Farafangana', 'Taolagnaro',
    'Nosy Be', 'Antalaha', 'Andapa', 'Besalampy'
  ],
  states: [
    'Antananarivo Province', 'Toamasina Province', 'Antsiranana Province',
    'Fianarantsoa Province', 'Mahajanga Province', 'Toliara Province',
    'Analamanga Region', 'Vakinankaratra Region', 'Itasy Region',
    'Bongolava Region', 'Haute-Matsiatra Region'
  ],
  zipCodePattern: '###',
  jobTitles: [
    'Injenieran Rindrankajy', 'Mpitantana Tetikasa', 'Mpandinika Angona',
    'Mpitantana Marketing', 'Mpivarotra', 'Mpitan-tsoratra',
    'Mpitantana Olona', 'Mpamorona', 'Mpitantana Asa',
    'Mpanolo-tsaina ara-bola', 'Administrateur Réseau'
  ],
  departments: [
    'Injenierie', 'Marketing', 'Varotra', 'Rohon\'olona', 'Vola',
    'Asa', 'Fandraisana mpanjifa', 'Teknolojian\'ny Vaovao',
    'Fikarohana sy Fampandrosoana', 'Lalàna', 'Fitandremana'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const lot = Random.int(1, 999);
    return `Lot ${lot} ${street}, ${houseNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '+261 ## ### ##',
    '+261 32 ## ### ##',
    '+261 33 ## ### ##',
    '+261 34 ## ### ##',
    '+261 38 ## ### ##',
    '03# ## ### ##',
    '032 ## ### ##',
    '033 ## ### ##',
    '034 ## ### ##',
    '038 ## ### ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'blueline.mg',
    'movila.co.mg', 'melody.mg', 'orangeposte.mg', 'arobas.net',
    'live.com'
  ],

  companyNames: [
    'Airtel Madagascar', 'Orange Madagascar', 'Telma Madagascar',
    'Air Madagascar', 'BNI Madagascar', 'Bank of Africa Madagascar',
    'Société Générale Madagascar', 'MCB Madagascar',
    'Star Madagascar', 'Galana S.A.',
    'Jovena Madagascar', 'SALFA (Solidarité des Associations Libres)',
    'Tiko Group', 'Kronenbourg Madagascar',
    'Madagascar National Parks', 'Colas Madagascar',
    'Jumbo Score', 'Shoprite Madagascar'
  ],

  industries: [
    'Teknolojia', 'Vola', 'Fahasalamana', 'Fanabeazana', 'Varotra',
    'Fanamboarana', 'Haino aman-jery', 'Telefàonina', 'Angovo',
    'Fitaterana', 'Fanan-tany', 'Fizahan-tany', 'Fambolena',
    'Jono', 'Fitrandrahana harena an-kibon\'ny tany'
  ],

  catchPhrases: [
    'Manavao ho amin\'ny hoavy',
    'Ny fahombiazanao no tanjonay',
    'Miara-manorina an\'i Madagasikara',
    'Fahaizana sy tsara fitandremana hatrany',
    'Voavina amin\'ny serasera tsara',
    'Mpiara-miombon\'antoka azo itokisana',
    'Mitarika amin\'ny fahitana sy ny tsy fivadihana'
  ]
};
