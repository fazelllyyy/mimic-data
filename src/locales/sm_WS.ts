import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sm_WS: LocaleDefinition = {
  firstNamesMale: [
    'Sione', 'Iosefa', 'Tavita', 'Pita', 'Luka', 'Setefano', 'Fale', 'Mana',
    'Tupuola', 'Fiame', 'Leota', 'Maiava', 'Afa', 'Keone', 'Pili',
    'Saul', 'Manuel', 'Samiu', 'Simi', 'Tui', 'Fatu', 'Mataio',
    'Aleni', 'Sapati', 'Laufili', 'Taulelei', 'Savelio', 'Pua', 'Fuimaono', 'Tini'
  ],
  firstNamesFemale: [
    'Malia', 'Mele', 'Lupe', 'Sina', 'Eleni', 'Fitu', 'Tua', 'Sala',
    'Fa\'asala', 'Malae', 'Irene', 'Sieni', 'Mana', 'Fale', 'Ana',
    'Maria', 'Losa', 'Akenese', 'Tiare', 'Fa\'afetai', 'Lima', 'Tepora',
    'Moe', 'Lusia', 'Pua', 'Sefina', 'Alofa', 'Sapati', 'Faletutusa', 'Soi'
  ],
  lastNames: [
    'Leota', 'Tui', 'Misa', 'Mauga', 'Sio', 'Fiu', 'Paulo', 'Fuimaono',
    'Ui', 'Amosa', 'Tuala', 'Fale', 'Aiono', 'Tamati', 'Satele',
    'Soloa', 'Pule', 'Mapusua', 'Tavita', 'Seiuli',
    'Laulu', 'Sauvao', 'Ala\'ilima', 'Puni', 'Fitisemanu', 'Lafaele', 'Vai', 'Toleafoa', 'Sili', 'Tupai'
  ],
  streets: [
    'Auala i le Matafaga', 'Auala Salelologa', 'Auala Fugalei', 'Auala Tafaigata',
    'Auala i Siusega', 'Auala Vaitele', 'Auala Lotofaga',
    'Auala Moamoa', 'Auala i Malie', 'Auala Lepea',
    'Auala i Alafua', 'Auala i Motootua', 'Auala i Malua', 'Auala i Faleasi\'u', 'Auala i Faleula'
  ],
  cities: [
    'Apia', 'Salelologa', 'Vaitele', 'Faleasi\'u', 'Siusega',
    'Lotofaga', 'Safotu', 'Tufulele', 'Faleula', 'Malie',
    'Savaia', 'Lefaga', 'Salamumu', 'Sapapalii', 'Lano',
    'Asau', 'Faatoia', 'Pesega', 'Solosolo', 'Falefa'
  ],
  states: [
    'Tuamasaga', 'Atua', 'Aiga-i-le-Tai', 'Fa\'asaleleaga', 'Gaga\'emauga',
    'Gagaifomauga', 'Palauli', 'Satupa\'itea', 'Va\'a-o-Fonoti', 'Vaisigano'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Inisinia Polokalama', 'Tausitusi', 'Faia\'oga', 'Tausima\'i', 'Loia',
    'Pule o le Faletalimalo', 'Ofisa o Turisi', 'Pule Maketi',
    'Pule o Auaunaga', 'Inisinia', 'Sui Fa\'atau', 'Faufautua Tupe'
  ],
  departments: [
    'Inisinia', 'Maketi', 'Fa\'atau', 'Punaoa Tagata', 'Tupe',
    'Galuega', 'Auaunaga Tagata', 'IT', 'Suesuega ma Atina\'e',
    'Tulafono', 'Pulega o Oloa', 'Mamanu', 'Fa\'amaoniaga', 'Pulega'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 500);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+685 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'samoa.ws', 'lesamoa.net', 'live.com', 'digicelsamoa.com'
  ],

  companyNames: [
    'Pulega o Turisi Samoa', 'Faletupe Tutotonu o Samoa', 'Digicel Samoa',
    'Samoa Airways', 'Fale Pia Samoa', 'Pulega o Uafu Samoa',
    'Yazaki Samoa', 'Coca-Cola Samoa', 'Blue Bird Samoa', 'Kamupani Va\'a Samoa'
  ],

  industries: [
    'Turisi', 'Tupe', 'Fa\'ato\'aga', 'Feso\'ota\'iga', 'Felauaiga',
    'Gaosimea', 'Faufale', 'Soifua Maloloina', 'A\'oa\'oga', 'Faioloa'
  ],

  catchPhrases: [
    'Fa\'avae i le Atua Samoa', 'Fausia fa\'atasi lo tatou atunuu',
    'Lelei i auaunaga', 'Mitamita i lo tatou aganu\'u',
    'Taualaga i le lelei', 'Malosi i lo tatou nu\'u',
    'Afio a\'e mo le alualu i luma', 'Talimalo Pasefika'
  ]
};
