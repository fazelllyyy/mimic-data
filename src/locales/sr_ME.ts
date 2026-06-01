import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sr_ME: LocaleDefinition = {
  firstNamesMale: [
    'Marko', 'Nikola', 'Stefan', 'Luka', 'Aleksandar', 'Milan', 'Filip', 'Petar',
    'Ivan', 'Vladimir', 'Nemanja', 'Bojan', 'Miloš', 'Mladen', 'Zoran',
    'Veljko', 'Dejan', 'Goran', 'Nebojša', 'Miroslav', 'Mihailo', 'Ilija',
    'Risto', 'Boban', 'Dragan', 'Boris', 'Duško', 'Zvonko', 'Milenko', 'Ranko'
  ],
  firstNamesFemale: [
    'Marija', 'Ana', 'Milica', 'Ivana', 'Jelena', 'Nevena', 'Tamara', 'Dragana',
    'Biljana', 'Aleksandra', 'Nina', 'Ksenija', 'Tina', 'Verica', 'Slađana',
    'Vesna', 'Mira', 'Ljiljana', 'Maja', 'Sandra', 'Nataša', 'Bojana',
    'Danijela', 'Gordana', 'Dijana', 'Violeta', 'Snežana', 'Ruža', 'Anita',
    'Marta'
  ],
  lastNames: [
    'Petrović', 'Popović', 'Vujačić', 'Mirković', 'Bulatović', 'Ivanović', 'Radović',
    'Jovanović', 'Perović', 'Đukanović', 'Pavićević', 'Lakić', 'Vukčević',
    'Drobnjak', 'Nikčević', 'Stanišić', 'Lazović', 'Vuković', 'Radulović',
    'Tomović', 'Bogdanović', 'Milović', 'Knežević', 'Adžić', 'Bakić',
    'Ćetković', 'Đurović', 'Karadžić', 'Martinović', 'Nikić'
  ],
  streets: [
    'Bulevar Džordža Vašingtona', 'Ulica slobode', 'Bulevar Svetog Petra Cetinjskog',
    'Ulica Njegoševa', 'Ulica Marka Miljanova', 'Bulevar Ivana Crnojevića',
    'Ulica Vuka Karadžića', 'Ulica 13. Jula', 'Ulica 4. Jula',
    'Bulevar Mihaila Lalića', 'Ulica Save Kovačevića', 'Rimski trg',
    'Ulica Moša Pijade', 'Ulica Kralja Nikole', 'Ulica Njegoseva',
    'Bulevar Meše Selimovića', 'Ulica Bratstva i Jedinstva', 'Ulica Ive Lole Ribara',
    'Ulica Maksima Gorkog', 'Ulica Stanka Vraza'
  ],
  cities: [
    'Podgorica', 'Nikšić', 'Bijelo Polje', 'Bar', 'Berane', 'Herceg Novi',
    'Budva', 'Cetinje', 'Tivat', 'Rožaje', 'Pljevlja', 'Kotor', 'Ulcinj',
    'Danilovgrad', 'Mojkovac', 'Kolašin', 'Plav', 'Gusinje', 'Petrovac',
    'Risan'
  ],
  states: [
    'Podgorica Capital City', 'Nikšić Municipality', 'Bar Municipality',
    'Bijelo Polje Municipality', 'Berane Municipality', 'Budva Municipality',
    'Herceg Novi Municipality', 'Cetinje Royal Capital', 'Pljevlja Municipality',
    'Kotor Municipality', 'Ulcinj Municipality', 'Tivat Municipality'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Softverski Inženjer', 'Menadžer Projekta', 'Analitičar Podataka', 'Menadžer Marketinga',
    'Prodajni Predstavnik', 'Knjigovođa', 'HR Menadžer', 'Dizajner',
    'Menadžer Operacija', 'Poslovni Analitičar', 'Menadžer Proizvoda',
    'Sistemski Administrator', 'Inženjer Kvaliteta', 'Tehnički Pisac'
  ],
  departments: [
    'Inženjering', 'Marketing', 'Prodaja', 'Ljudski Resursi', 'Finansije',
    'Operacije', 'Korisnička Podrška', 'IT', 'Istraživanje i Razvoj',
    'Pravni', 'Administracija'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street} ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+382 ## ### ####',
    '0## ### ####',
    '+382 (0)## ### ####',
    '06# ### ####',
    '067 ### ####',
    '069 ### ####',
    '068 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    't-com.me', 'mts.me', 'telemach.me', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Crnogorski Telekom', 'Telenor Crna Gora', 'M:tel CG', 'Elektroprivreda Crne Gore',
    'Nlb Banka Podgorica', 'Crnogorska Komercijalna Banka', 'Hipotekarna Banka',
    'Zetatrans', 'Montenegro Airlines', 'Air Montenegro', 'Bokanska Plovidba',
    'Luka Bar', 'Plantaže', 'Budvanska Rivijera', 'Morsko Dobro',
    'Trešnjica', 'Štedionica', 'Voli Trade', 'Lovćen Osiguranje'
  ],

  industries: [
    'Tehnologija', 'Finansije', 'Zdravstvo', 'Obrazovanje', 'Maloprodaja',
    'Proizvodnja', 'Mediji', 'Telekomunikacije', 'Energija', 'Transport',
    'Nekretnine', 'Konsalting', 'Hoteli', 'Turizam', 'Avijacija'
  ],

  catchPhrases: [
    'Inovacija za budućnost', 'Vaš uspjeh je naš posao', 'Gradimo budućnost zajedno',
    'Kvalitet i povjerenje', 'Izvrsnost i posvećenost', 'Održiva rješenja',
    'Stvaramo vrijednost', 'Vaš pouzdani partner', 'Predvodimo promjene'
  ]
};
