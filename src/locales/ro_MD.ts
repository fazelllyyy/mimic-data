import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ro_MD: LocaleDefinition = {
  firstNamesMale: [
    'Ion', 'Vasile', 'Mihail', 'Nicolae', 'Gheorghe', 'Alexandru', 'Andrei', 'Vladimir',
    'Constantin', 'Petru', 'Igor', 'Valeriu', 'Vlad', 'Dumitru', 'Serghei',
    'Oleg', 'Anatol', 'Bogdan', 'Victor', 'Maxim', 'Dan', 'Radu', 'Sorin',
    'Alexei', 'Artiom', 'Eugeniu', 'Ruslan', 'Iurie', 'Marcel', 'Veaceslav'
  ],
  firstNamesFemale: [
    'Maria', 'Elena', 'Ana', 'Tatiana', 'Irina', 'Olga', 'Natalia', 'Svetlana',
    'Cristina', 'Diana', 'Valentina', 'Galina', 'Nina', 'Oxana', 'Ludmila',
    'Vera', 'Raisa', 'Lidia', 'Aliona', 'Zinaida', 'Tamara', 'Sofia',
    'Ecaterina', 'Marina', 'Anna', 'Nadejda', 'Lilia', 'Veronica', 'Rodica',
    'Angela'
  ],
  lastNames: [
    'Russu', 'Cebotari', 'Gheorghiță', 'Munteanu', 'Popa', 'Rusu', 'Rotari',
    'Casian', 'Bodiu', 'Bejan', 'Balan', 'Ciorba', 'Cojocari', 'Costandachi',
    'Crudu', 'Dabija', 'Dascălu', 'Frunză', 'Gheorghiev', 'Golban', 'Grosu',
    'Guțu', 'Lupu', 'Macari', 'Mazur', 'Melnic', 'Moraru', 'Olaru',
    'Pînzari', 'Prodan'
  ],
  streets: [
    'Strada Ștefan cel Mare', 'Bulevardul Grigore Vieru', 'Strada Mihai Eminescu',
    'Strada Pușkin', 'Bulevardul Constantin Negruzzi', 'Strada Alba Iulia',
    'Strada Alexandru cel Bun', 'Strada Columna', 'Bulevardul Moscova',
    'Strada Maria Cebotari', 'Strada Ion Creangă', 'Strada Sarmizegetusa',
    'Strada Vasile Alecsandri', 'Strada Mitropolit Dosoftei', 'Strada Tighina',
    'Strada Vasile Lupu', 'Strada 31 August 1989', 'Strada Ismail',
    'Strada Ciuflea', 'Strada Armenească'
  ],
  cities: [
    'Chișinău', 'Bălți', 'Cahul', 'Ungheni', 'Soroca', 'Orhei', 'Comrat',
    'Hîncești', 'Edineț', 'Ceadîr-Lunga', 'Strășeni', 'Drochia', 'Căușeni',
    'Fălești', 'Leova', 'Nisporeni', 'Dondușeni', 'Briceni', 'Taraclia',
    'Rîbnița'
  ],
  states: [
    'Chișinău', 'Bălți', 'Cahul', 'Ungheni', 'Soroca', 'Orhei', 'Comrat',
    'Hîncești', 'Edineț', 'Lăpușna', 'Tighina', 'Taraclia', 'Dondușeni'
  ],
  zipCodePattern: 'MD-####',
  jobTitles: [
    'Inginer Software', 'Manager de Proiect', 'Analist de Date', 'Manager Marketing',
    'Reprezentant Vînzări', 'Contabil', 'Manager HR', 'Designer',
    'Manager Operațiuni', 'Analist de Afaceri', 'Manager Produs',
    'Administrator Sistem', 'Inginer Calitate', 'Scriitor Tehnic'
  ],
  departments: [
    'Inginerie', 'Marketing', 'Vînzări', 'Resurse Umane', 'Finanțe', 'Operațiuni',
    'Servicii Clienți', 'IT', 'Cercetare și Dezvoltare', 'Juridic', 'Administrație'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street}, ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return `MD-${Random.int(1000, 9999)}`;
  },

  phoneFormats: [
    '+373 ## ### ###',
    '0## ### ###',
    '+373 (0##) ### ###',
    '06# ### ###',
    '079 ### ###',
    '069 ### ###',
    '076 ### ###',
    '078 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'mail.ru', 'yandex.ru', 'gmx.com', 'protonmail.com', 'rambler.ru'
  ],

  companyNames: [
    'Moldova Agroindbank', 'Moldindconbank', 'Victoriabank', 'BCR Chișinău',
    'Moldcell', 'Orange Moldova', 'Moldtelecom', 'Gas Natural Fenosa',
    'Premier Energy', 'Lukoil Moldova', 'Petrom Moldova', 'Nefis',
    'Efes Vitanta Moldova', 'Jolly Alon', 'Floarea Soarelui', 'Sudzucker Moldova',
    'Lafarge Ciment', 'Artima', 'Linella', 'Green Hills Market'
  ],

  industries: [
    'Tehnologie', 'Finanțe', 'Sănătate', 'Educație', 'Comerț cu Amănuntul',
    'Producție', 'Media', 'Telecomunicații', 'Energie', 'Transport',
    'Imobiliare', 'Consultanță', 'Hoteluri', 'Agricultură', 'Aviație'
  ],

  catchPhrases: [
    'Inovație pentru viitor', 'Succesul dumneavoastră este afacerea noastră',
    'Construim viitorul împreună', 'Calitate și încredere',
    'Excelență și angajament', 'Soluții durabile', 'Creăm valoare',
    'Partenerul dumneavoastră de încredere', 'Conducem schimbarea'
  ]
};
