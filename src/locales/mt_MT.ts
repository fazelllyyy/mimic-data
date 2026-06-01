import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const mt_MT: LocaleDefinition = {
  firstNamesMale: [
    'Joseph', 'John', 'Michael', 'David', 'Paul', 'Andrew', 'Mark', 'Anthony',
    'Robert', 'Christopher', 'James', 'Peter', 'Daniel', 'Matthew', 'Francis',
    'George', 'Stephen', 'Charles', 'Simon', 'Raymond', 'Kevin', 'Brian',
    'Jason', 'Nathan', 'Ryan', 'Edward', 'Patrick', 'Samuel', 'Nicholas', 'Alan'
  ],
  firstNamesFemale: [
    'Maria', 'Michelle', 'Sarah', 'Rebecca', 'Carmen', 'Louise', 'Anna', 'Sandra',
    'Paula', 'Josette', 'Marlene', 'Rita', 'Doris', 'Christine', 'Helena',
    'Margaret', 'Catherine', 'Grace', 'Theresa', 'Angela', 'Francesca',
    'Stephanie', 'Laura', 'Roxanne', 'Natalie', 'Victoria', 'Jacqueline',
    'Pamela', 'Corinne', 'Anne'
  ],
  lastNames: [
    'Borg', 'Camilleri', 'Vella', 'Farrugia', 'Zammit', 'Galea', 'Micallef',
    'Grech', 'Attard', 'Schembri', 'Spiteri', 'Azzopardi', 'Muscat', 'Said',
    'Mifsud', 'Caruana', 'Portelli', 'Fenech', 'Abeja', 'Agius', 'Baldacchino',
    'Bartolo', 'Buhagiar', 'Buttigieg', 'Calleja', 'Cini', 'Costa', 'Cuschieri',
    'Debono', 'Ellul'
  ],
  streets: [
    'Republic Street', 'Strait Street', 'Merchants Street', 'Melita Street',
    'Archbishop Street', 'South Street', 'Battery Street', 'Santa Lucia Street',
    'Old Mint Street', 'St. Paul Street', 'St. John Street', 'Tower Road',
    'St. George\'s Road', 'Marina Street', 'Kingsway', 'Victoria Avenue',
    'Constitution Street', 'Independence Avenue', 'Freedom Street', 'Gzira Road'
  ],
  cities: [
    'Valletta', 'Birkirkara', 'Mosta', 'Qormi', 'Sliema', 'San Ġwann',
    'Żabbar', 'Naxxar', 'Rabat', 'Attard', 'Paola', 'Fgura', 'Marsascala',
    'Gżira', 'Marsa', 'Santa Venera', 'Tas-Sliema', 'Swieqi', 'Mellieħa',
    'San Pawl il-Baħar'
  ],
  states: [
    'Malta', 'Gozo', 'Comino'
  ],
  zipCodePattern: '###',
  jobTitles: [
    'Inġinier tal-Software', 'Maniger tal-Proġett', 'Analista tad-Data', 'Maniger tal-Marketing',
    'Rappreżentant tal-Bejgħ', 'Accountant', 'Maniger tal-HR', 'Disinjatur',
    'Maniger tal-Operazzjonijiet', 'Analista tan-Negozju', 'Maniger tal-Prodott',
    'Amministratur tas-Sistema', 'Inġinier tal-Kwalità', 'Kittieb Tekniku'
  ],
  departments: [
    'Inġinerija', 'Marketing', 'Bejgħ', 'Risorsi Umani', 'Finanzi', 'Operazzjonijiet',
    'Servizz tal-Klijent', 'IT', 'Riċerka u Żvilupp', 'Legali', 'Amministrazzjoni'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${number} ${street}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '+356 #### ####',
    '#### ####',
    '+356 ## ### ###',
    '21## ####',
    '23## ####',
    '24## ####',
    '25## ####',
    '27## ####',
    '79## ####',
    '99## ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'malta.net', 'go.com.mt', 'melita.com', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Bank of Valletta', 'HSBC Bank Malta', 'Maltacom (GO plc)', 'Melita Ltd',
    'Vodafone Malta', 'EPIC (formerly GO Mobile)', 'Simonds Farsons Cisk',
    'Malta Dairy Products Ltd', 'Air Malta', 'Malta International Airport',
    'Lombard Bank Malta', 'APS Bank', 'Mapfre Middlesea Insurance',
    'GasanMamo Insurance', 'Maltapost plc', 'Mediterranean Maritime Hub',
    'AX Hotels', 'Smart City Malta', 'Toly Products'
  ],

  industries: [
    'Teknoloġija', 'Finanzi', 'Saħħa', 'Edukazzjoni', 'Bejgħ bl-Imnut',
    'Manifattura', 'Media', 'Telekomunikazzjoni', 'Enerġija', 'Trasport',
    'Proprjetà Immobbli', 'Konsulenza', 'Lukandi', 'Avjazzjoni', 'Turiżmu'
  ],

  catchPhrases: [
    'Innovazzjoni għall-futur', 'Is-suċċess tiegħek huwa xogħolna', 'Nibnu l-futur flimkien',
    'Kwalità u fiduċja', 'Eċċellenza u impenn', 'Soluzzjonijiet sostenibbli',
    'Noħolqu valur', 'Is-sieħeb ta\' fiduċja tiegħek', 'Immexxu l-bidla'
  ]
};
