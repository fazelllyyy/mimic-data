import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const nl_SR: LocaleDefinition = {
  firstNamesMale: [
    'Jan', 'Pieter', 'Hendrik', 'Willem', 'Cornelis', 'Dennis', 'Ronald', 'John',
    'Paul', 'Robert', 'Michael', 'David', 'Brian', 'Ruben', 'Sergio',
    'Maikel', 'Jair', 'Arti', 'Ravindra', 'Waldi', 'Roy', 'Ricardo',
    'Rodney', 'Alvin', 'Swieten', 'Wilgo', 'Frits', 'Milton', 'Kenrick', 'Clifton'
  ],
  firstNamesFemale: [
    'Anna', 'Maria', 'Johanna', 'Elisabeth', 'Helena', 'Sandra', 'Patricia', 'Jennifer',
    'Linda', 'Angela', 'Karen', 'Carolina', 'Marga', 'Marjorie', 'Xaviera',
    'Cheryl', 'Fariel', 'Ruth', 'Sabrina', 'Radha', 'Chanita', 'Wendy',
    'Melissa', 'Michella', 'Galina', 'Graciela', 'Virginia', 'Nirmala', 'Priscilla', 'Sheryl'
  ],
  lastNames: [
    'Simons', 'Pengel', 'Maynard', 'Helstone', 'Alberg', 'Lindenberg', 'Rustwijk', 'Frans',
    'Radhakishun', 'Karamat', 'Ramdin', 'Sewnandan', 'Ramautar', 'Laldjie', 'Bhola',
    'Soekhoe', 'Kasanpatie', 'Bhagwanbali', 'Dijksteel', 'Pinas',
    'Wong', 'Tjin Liep', 'Li Fo Sjoe', 'Sno', 'Monkou', 'Breeveld', 'Kampen', 'Leeflang', 'Hassankhan', 'Faerber'
  ],
  streets: [
    'Jacob van Campenstraat', 'Koningstraat', 'Hofstraat', 'Stadskern',
    'Spaanse Kreekweg', 'Dr. Sophie Redmondstraat', 'Johan Adolf Pengelstraat',
    'Prins Bernardweg', 'Grote Combéweg', 'Copernicusstraat',
    'Verlengde Mahonylaan', 'Tamarindeweg', 'Kankantriestraat', 'Sir Winston Churchillweg', 'Gemenelandsweg'
  ],
  cities: [
    'Paramaribo', 'Lelydorp', 'Nieuw Nickerie', 'Moengo', 'Albina',
    'Groningen', 'Onverwacht', 'Totness', 'Nieuw Amsterdam', 'Brokopondo',
    'Brownsweg', 'Marijkedorp', 'Coronie', 'Wageningen', 'Benzdorp',
    'Kwakoegron', 'Pokigron', 'Botopasi', 'Apoera', 'Washoda'
  ],
  states: [
    'Paramaribo', 'Wanica', 'Nickerie', 'Saramacca', 'Coronie',
    'Commewijne', 'Marowijne', 'Brokopondo', 'Para', 'Sipaliwini'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Ingenieur', 'Accountant', 'Leraar', 'Verpleegkundige', 'Advocaat',
    'Arts', 'Architect', 'Manager',
    'Financieel Analist', 'Marketing Manager', 'Vertegenwoordiger', 'Civiel Ingenieur'
  ],
  departments: [
    'Techniek', 'Marketing', 'Verkoop', 'Personeelszaken', 'Financiën',
    'Operaties', 'Klantenservice', 'IT', 'Onderzoek en Ontwikkeling',
    'Juridisch', 'Product Management', 'Design', 'Kwaliteitszorg', 'Administratie'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    return `${street} ${number}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+597 ###-###',
    '###-###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'sr.net', 'tele.net', 'digicel.sr', 'telesur.sr'
  ],

  companyNames: [
    'Telesur', 'Staatsolie Maatschappij Suriname', 'Digicel Suriname',
    'Surinaamse Bank', 'Hakrinbank', 'De Surinaamsche Bank',
    'Rudisa Beverages', 'Iwan Petroleum', 'Fiber Suriname', 'Assuria Verzekeringen'
  ],

  industries: [
    'Technologie', 'Financiën', 'Olie en Gas', 'Telecommunicatie', 'Bosbouw',
    'Landbouw', 'Bouw', 'Transport', 'Onderwijs', 'Gezondheidszorg'
  ],

  catchPhrases: [
    'Samen werken aan vooruitgang', 'Kwaliteit en vertrouwen', 'Innoveren voor Suriname',
    'Uw partner in groei', 'Duurzame oplossingen', 'Samen de toekomst bouwen',
    'Waarde creëren', 'Excellentie in dienstverlening'
  ]
};
