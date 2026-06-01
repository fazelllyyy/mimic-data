import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ca_AD: LocaleDefinition = {
  firstNamesMale: [
    'Jordi', 'Josep', 'Joan', 'Marc', 'Pere', 'Francesc', 'Miquel', 'David',
    'Daniel', 'Alex', 'Robert', 'Xavier', 'Sergi', 'Carles', 'Albert',
    'Ramon', 'Lluís', 'Enric', 'Ferran', 'Oriol', 'Pol', 'Arnau', 'Guillem',
    'Martí', 'Aleix', 'Nil', 'Jan', 'Biel', 'Hugo', 'Eric', 'Pau'
  ],
  firstNamesFemale: [
    'Maria', 'Montserrat', 'Carme', 'Anna', 'Rosa', 'Mercè', 'Dolors', 'Núria',
    'Laura', 'Sílvia', 'Cristina', 'Marta', 'Eva', 'Sara', 'Laia', 'Clara',
    'Júlia', 'Emma', 'Paula', 'Aina', 'Naia', 'Leire', 'Irene', 'Sofia',
    'Carla', 'Berta', 'Andrea', 'Marina', 'Helena', 'Mireia', 'Victoria'
  ],
  lastNames: [
    'Garcia', 'Martinez', 'Lopez', 'Gonzalez', 'Rodriguez', 'Hernandez',
    'Perez', 'Sanchez', 'Romero', 'Torres', 'Gomez', 'Navarro', 'Ruiz',
    'Alvarez', 'Castillo', 'Jimenez', 'Moreno', 'Muñoz', 'Alonso', 'Gutierrez',
    'Pujol', 'Vila', 'Serra', 'Riba', 'Riera', 'Casas', 'Roca', 'Martí'
  ],
  streets: [
    'Avinguda Meritxell', 'Carrer de la Vall', 'Carrer Major', 'Plaça del Poble',
    'Avinguda de França', 'Carrer de l\'Església', 'Carrer de la Unió',
    'Avinguda Santa Coloma', 'Carrer de la Font', 'Carrer de les Canals',
    'Carrer del Puial', 'Avinguda del Consell Regional', 'Carrer de la Ribera',
    'Carrer de la Tàpia', 'Plaça Príncep Benlloch', 'Carrer del Forn'
  ],
  cities: [
    'Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'La Massana',
    'Sant Julià de Lòria', 'Ordino', 'Canillo', 'El Pas de la Casa',
    'Arinsal', 'Pal', 'Soldeu', 'Les Escaldes', 'Engordany', 'Santa Coloma'
  ],
  states: [
    'Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'La Massana',
    'Sant Julià de Lòria', 'Ordino', 'Canillo'
  ],
  zipCodePattern: '###',
  jobTitles: [
    'Enginyer de Programari', 'Gestor de Projectes', 'Analista de Dades',
    'Gerent de Màrqueting', 'Representant de Vendes', 'Comptable',
    'Gerent de Recursos Humans', 'Dissenyador', 'Gerent d\'Operacions',
    'Analista de Negocis', 'Gestor de Producte', 'Administrador de Sistemes'
  ],
  departments: [
    'Enginyeria', 'Màrqueting', 'Vendes', 'Recursos Humans', 'Finances',
    'Operacions', 'Atenció al Client', 'TI', 'Recerca i Desenvolupament',
    'Legal', 'Administració'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    return `${street} ${houseNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '+376 ### ###',
    '+376 ### ###',
    '### ###',
    '+376-###-###',
    '+376 8## ###',
    '+376 3## ###',
    '+376 6## ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'andorra.ad', 'som.ad', 'adi.ad'
  ],

  companyNames: [
    'Andbank', 'MoraBanc', 'Crèdit Andorrà', 'Banc Sabadell d\'Andorra',
    'Andorra Telecom', 'FEDA', 'CASS Andorra',
    'Grandvalira', 'Vallnord', 'Pyrénées Andorra',
    'Ràdio i Televisió d\'Andorra', 'Diari d\'Andorra', 'Andorrana de Tabac',
    'Illa Carlemany', 'Pyrenees Shopping'
  ],

  industries: [
    'Tecnologia', 'Finances', 'Sanitat', 'Educació', 'Comerç',
    'Turisme', 'Telecomunicacions', 'Energia', 'Transport', 'Immobiliari',
    'Consultoria', 'Hostaleria', 'Esports', 'Tabac'
  ],

  catchPhrases: [
    'Innovant per al futur', 'El vostre èxit és la nostra missió', 'Construïm el futur junts',
    'Qualitat i excel·lència', 'Compromesos amb Andorra', 'El vostre soci de confiança',
    'Petit país, grans idees', 'L\'excel·lència dels Pirineus'
  ]
};
