import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const to_TO: LocaleDefinition = {
  firstNamesMale: [
    'Sione', 'Tevita', 'Samiu', 'Pita', 'Latu', 'Viliami', 'Manase', 'Tupou',
    'Mana', 'Sosaia', 'Sitiveni', 'Saimone', 'Malo', 'Ofa', 'Siale',
    'Lisiate', 'Mahe', 'Mikaele', 'Tevita', 'Aisea', 'Taniela', 'Peni',
    'Savelio', 'Siosaia', 'Akapusi', 'Uate', 'Lopini', 'Tu\'ifua', 'Feleti', 'Solomone'
  ],
  firstNamesFemale: [
    'Ana', 'Malia', 'Sela', 'Mele', 'Ofa', 'Lavina', 'Taina', 'Losaline',
    'Tupou', 'Naomi', 'Sina', 'Suliana', 'Eseta', 'Lupe', 'Amelia',
    'Luseane', 'Felite', 'Fatafehi', 'Laloni', 'Militini', 'Feletini', 'Kalolaine',
    'Mevi', 'Ma\'ata', 'Vika', 'Salote', 'Helena', 'Siale', 'Tolu', 'Lisa'
  ],
  lastNames: [
    'Tupou', 'Fifita', 'Mafi', 'Lolohea', 'Moala', 'Pulu', 'Taufa\'ao', 'Tuipulotu',
    'Fakalelu', 'Taione', 'Latu', 'Fotu', 'Mohenoa', 'Koloamatangi', 'Vea',
    'Lavulo', 'Pohiva', 'Utoikamanu', 'Havea', 'Liava\'a',
    'Ufilila', 'Kaulili', 'Mataele', 'Fonua', 'Fekita', 'Aho', 'Fakafanua', 'Momo\'unga', 'Fa\'ao', 'Feke'
  ],
  streets: [
    'Hala Vuna', 'Hala Taufa\'ahau', 'Hala Pangai', 'Hala Fasi',
    'Hala Moungaloa', 'Hala Vava\'u', 'Hala Loto',
    'Hala Longolongo', 'Hala Halaleva', 'Hala Vaiola',
    'Hala Tatakamotonga', 'Hala Mu\'a', 'Hala Havelu', 'Hala Pea', 'Hala Nukunuku'
  ],
  cities: [
    'Nuku\'alofa', 'Neiafu', 'Pangai', 'Haveluloto', 'Mu\'a',
    'Vaini', 'Tofoa', 'Pea', 'Kolomotu\'a', 'Longoteme',
    'Kolovai', 'Niutoua', 'Havelu', 'Fahefa', 'Nukunuku',
    'Masilamea', 'Potutaha', 'Fua\'amotu', 'Lapaha', 'Holopeka'
  ],
  states: [
    'Tongatapu', 'Vava\'u', 'Ha\'apai', '\'Eua', 'Niuas'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Inisinia Va\'inga', 'Tohi Tohi', 'Faiako', 'Tauhi Mahaki', 'Loia',
    'Pule Faletalimalo', 'Ofisa Tākimi', 'Pule Maketi',
    'Pule Auaunaga Au\'auna', 'Inisinia', 'Fakatau', 'Tohi Fale Tupe'
  ],
  departments: [
    'Inisinia', 'Maketi', 'Fakatau', 'Ngaahi Me\'angāue', 'Tupe',
    'Ngaue', 'Auaunaga Ki he Kautaha', 'IT', 'Fekumi mo e Atamai',
    'Ngaahi Lao', 'Pule\'anga Me\'a', 'Fakamānava', 'Fakamo\'oni Lelei', 'Pule\'anga'
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
    '+676 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'tonga.net', 'kalianet.to', 'live.com', 'tonic.to'
  ],

  companyNames: [
    'Pule\'anga Fakatu\'i Tonga', 'Digicel Tonga', 'Tonga Communications Corporation',
    'Pule\'anga Ako Tonga', 'Friendly Islands Marketing', 'Shoreline Wholesale',
    'Moana Fisheries', 'Tonga Power', 'Tonga Development Bank', 'National Bank of Tonga'
  ],

  industries: [
    'Tākimi', 'Tupe', 'Ngoue', 'Fetu\'utaki Vaeua', 'Fakalele',
    'Manga', 'Langomaki', 'Tokanga Sōifua', 'Ako\'i', 'Fakatau Koloa'
  ],

  catchPhrases: [
    'Fakataha fakataha honau pule\'anga', 'Lelei \'i he auauna',
    'Mitamita \'i hotau fa\'ahinga', 'Taualanga ki he lelei',
    'Mālohi \'i he\'etau \'otu motu', 'Fakalaumālie ki he fakalakalaka',
    'Fakaafe māfana Pasifika', 'Taha\'i mo e fakalakalaka'
  ]
};
