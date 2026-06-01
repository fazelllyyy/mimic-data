import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sq_AL: LocaleDefinition = {
  firstNamesMale: [
    'Ardit', 'Erjon', 'Kledi', 'Endri', 'Redi', 'Xhuliano', 'Armando', 'Albi',
    'Klodian', 'Ervin', 'Andi', 'Ilir', 'Altin', 'Agim', 'Bledi', 'Besnik',
    'Fatmir', 'Gentian', 'Lorenc', 'Marjol', 'Orgest', 'Rigers', 'Sokol', 'Taulant',
    'Valon', 'Ylli', 'Bujar', 'Dritan', 'Fisnik', 'Jetmir'
  ],
  firstNamesFemale: [
    'Era', 'Ajla', 'Klea', 'Dea', 'Sara', 'Xhesika', 'Anisa', 'Alba',
    'Elona', 'Iris', 'Megi', 'Olta', 'Reina', 'Arjola', 'Blerina', 'Dorina',
    'Elvira', 'Fjoralba', 'Gentjana', 'Ilda', 'Lindita', 'Majlinda', 'Nertila',
    'Ornela', 'Rudina', 'Sabina', 'Teuta', 'Valbona', 'Xhulia', 'Zamira'
  ],
  lastNames: [
    'Hoxha', 'Shehu', 'Marku', 'Kola', 'Leka', 'Dervishi', 'Kodra', 'Gjoni',
    'Gega', 'Mata', 'Lika', 'Mëhilli', 'Basha', 'Muça', 'Kovaçi', 'Sula',
    'Bushi', 'Hasa', 'Bardhi', 'Meksi', 'Rama', 'Berisha', 'Meta', 'Çela',
    'Shima', 'Brahimi', 'Krasniqi', 'Gashi', 'Morina', 'Halili'
  ],
  streets: [
    'Bulevardi Dëshmorët e Kombit', 'Rruga e Elbasanit', 'Rruga Myslym Shyri',
    'Bulevardi Zogu I', 'Rruga e Durrësit', 'Rruga 28 Nëntori', 'Rruga Sami Frashëri',
    'Bulevardi Bajram Curri', 'Rruga Ibrahim Rugova', 'Rruga Barrikadat',
    'Rruga Mihal Grameno', 'Rruga Pjetër Bogdani', 'Rruga e Kavajës',
    'Bulevardi Gjergj Fishta', 'Rruga Brigada VIII', 'Rruga Don Bosko',
    'Rruga Abdyl Frashëri', 'Rruga Ismail Qemali', 'Rruga Vaso Pasha',
    'Bulevardi Zogu i Zi'
  ],
  cities: [
    'Tiranë', 'Durrës', 'Vlorë', 'Elbasan', 'Shkodër', 'Fier', 'Korçë',
    'Berat', 'Lushnjë', 'Kavajë', 'Pogradec', 'Laç', 'Gjirokastër', 'Patos',
    'Krujë', 'Kuçovë', 'Sarandë', 'Bajram Curri', 'Peshkopi', 'Burrel'
  ],
  states: [
    'Tiranë', 'Durrës', 'Vlorë', 'Elbasan', 'Shkodër', 'Fier', 'Korçë',
    'Berat', 'Lezhë', 'Gjirokastër', 'Kukës', 'Dibër'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Inxhinier Softueri', 'Menaxher Projekti', 'Analist i të Dhënave', 'Menaxher Marketingu',
    'Përfaqësues Shitjesh', 'Kontabilist', 'Menaxher Burimesh Njerëzore', 'Dizajner',
    'Menaxher Operacionesh', 'Analist Biznesi', 'Menaxher Produkti', 'Administrator Sistemi',
    'Inxhinier Cilësie', 'Shkrimtar Teknik', 'Menaxher Shërbimi'
  ],
  departments: [
    'Inxhinieri', 'Marketing', 'Shitje', 'Burime Njerëzore', 'Financa', 'Operacione',
    'Shërbim Klienti', 'IT', 'Kërkim dhe Zhvillim', 'Ligjor', 'Administratë'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `Rr. ${street}, Nr. ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+355 ## ### ####',
    '0## ### ####',
    '+355 (0)## ### ####',
    '06# ### ####',
    '067 ## ### ####',
    '068 ## ### ####',
    '069 ## ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'albmail.com', 'abcom.al', 'sanx.net', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Albtelecom', 'Banka Kombëtare Tregtare', 'Raiffeisen Bank Albania',
    'Telekom Albania (One)', 'Vodafone Albania', 'OSHEE', 'KESH',
    'Albpetrol', 'Kastrati Group', 'Tirana Bank', 'Credins Bank',
    'Union Bank', 'American Bank of Albania', 'BKT', 'Generali Albania',
    'Delijorgji', 'Eagle Mobile', 'Albanian Airlines', 'Taçi Oil'
  ],

  industries: [
    'Teknologji', 'Financë', 'Shëndetësi', 'Arsim', 'Tregti me Pakicë',
    'Prodhim', 'Media', 'Telekomunikacion', 'Energji', 'Transport',
    'Pasuri të Paluajtshme', 'Konsulencë', 'Hotele', 'Automobilistikë', 'Aviacion'
  ],

  catchPhrases: [
    'Inovacion për të ardhmen', 'Suksesi juaj është puna jonë', 'Ndërtojmë të ardhmen së bashku',
    'Cilësi dhe besim', 'Përsosmëri dhe përkushtim', 'Zgjidhje të qëndrueshme',
    'Krijojmë vlerë', 'Partneri juaj i besuar', 'Udhëheqim ndryshimin'
  ]
};
