import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const bs_BA: LocaleDefinition = {
  firstNamesMale: [
    'Edin', 'Admir', 'Mirza', 'Emir', 'Haris', 'Amar', 'Dženis', 'Armin',
    'Tarik', 'Elmir', 'Adnan', 'Semir', 'Denis', 'Alen', 'Ismar', 'Nermin',
    'Vedad', 'Aldin', 'Elvedin', 'Mirsad', 'Senad', 'Sulejman', 'Osman', 'Jusuf',
    'Zlatko', 'Nedžad', 'Refik', 'Rijad', 'Sead', 'Branko'
  ],
  firstNamesFemale: [
    'Amina', 'Emina', 'Lejla', 'Selma', 'Merima', 'Alma', 'Amela', 'Adna',
    'Azra', 'Dženana', 'Lamija', 'Nejra', 'Sanela', 'Tina', 'Vesna', 'Marija',
    'Amira', 'Berina', 'Dalila', 'Emira', 'Fatima', 'Hana', 'Irma', 'Jasmina',
    'Melisa', 'Narcisa', 'Sabina', 'Senaida', 'Una', 'Zahida'
  ],
  lastNames: [
    'Hodžić', 'Kovačević', 'Dedić', 'Hadžić', 'Kadić', 'Mujić', 'Babić',
    'Hasanbegović', 'Agić', 'Balić', 'Čaušević', 'Demirović', 'Đukić',
    'Fejzić', 'Ganić', 'Halilović', 'Ibrahimović', 'Jahić', 'Kurtić',
    'Lukić', 'Mahmutović', 'Nurkić', 'Omerović', 'Pandžić', 'Ramić',
    'Salihović', 'Sijerčić', 'Šabić', 'Tomić', 'Velić'
  ],
  streets: [
    'Marsala Tita', 'Ferhadija', 'Zmaja od Bosne', 'Sarajevska ulica',
    'Kraljice Jelene', 'Husrefa Redžića', 'Bulevar Meše Selimovića',
    'Drinska ulica', 'Ul. Branilaca Sarajeva', 'Ul. Bosanska',
    'Ul. Vuka Karadžića', 'Ul. Kralja Tvrtka', 'Ul. Svetog Save',
    'Bulevar Patrijarha Pavla', 'Ul. Petra Kočića', 'Aleja Lipa',
    'Ul. Save Kovačevića', 'Ul. Nikole Tesle', 'Ul. Sulejmana Filipovića',
    'Ul. Hamze Hume'
  ],
  cities: [
    'Sarajevo', 'Banja Luka', 'Tuzla', 'Zenica', 'Mostar', 'Bijeljina',
    'Brčko', 'Prijedor', 'Trebinje', 'Travnik', 'Bihać', 'Doboj',
    'Cazin', 'Bugojno', 'Velika Kladuša', 'Visoko', 'Goražde', 'Široki Brijeg',
    'Livno', 'Zvornik'
  ],
  states: [
    'Federacija Bosne i Hercegovine', 'Republika Srpska', 'Brčko Distrikt',
    'Unsko-Sanski Kanton', 'Posavski Kanton', 'Tuzlanski Kanton',
    'Zeničko-Dobojski Kanton', 'Bosansko-Podrinjski Kanton',
    'Srednjobosanski Kanton', 'Hercegovačko-Neretvanski Kanton',
    'Zapadnohercegovački Kanton', 'Kanton Sarajevo', 'Kanton 10'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Softverski Inženjer', 'Menadžer Projekta', 'Analitičar Podataka', 'Menadžer Marketinga',
    'Prodajni Predstavnik', 'Računovođa', 'HR Menadžer', 'Dizajner',
    'Menadžer Operacija', 'Poslovni Analitičar', 'Menadžer Proizvoda',
    'Administrator Sistema', 'Inženjer Kvalitete', 'Tehnički Pisac'
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
    '+387 ## ### ####',
    '0## ### ####',
    '+387 (0)## ### ####',
    '06# ### ####',
    '061 ### ####',
    '062 ### ####',
    '063 ### ####',
    '064 ### ####',
    '065 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'bih.net.ba', 'telemach.ba', 'mtel.ba', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'BH Telecom', 'Elektroprivreda BiH', 'Energopetrol', 'HT Mostar',
    'Mtel BiH', 'Nova Banka', 'UniCredit Bank BiH', 'Raiffeisen Bank BiH',
    'Intesa Sanpaolo Banka BiH', 'Bosnalijek', 'Holding Aluminij',
    'ArcelorMittal Zenica', 'Hidrogradnja', 'Vladavina', 'Bingo',
    'Konzum BiH', 'DM Drogerie Markt BiH', 'ASA Group', 'Global Istra'
  ],

  industries: [
    'Tehnologija', 'Finansije', 'Zdravstvo', 'Obrazovanje', 'Trgovina na Malo',
    'Proizvodnja', 'Mediji', 'Telekomunikacije', 'Energija', 'Transport',
    'Nekretnine', 'Konsalting', 'Hoteli', 'Automobili', 'Avijacija'
  ],

  catchPhrases: [
    'Inovacija za budućnost', 'Vaš uspjeh je naš posao', 'Gradimo budućnost zajedno',
    'Kvalitet i povjerenje', 'Izuzetnost i predanost', 'Održiva rješenja',
    'Stvaramo vrijednost', 'Vaš pouzdani partner', 'Predvodimo promjene'
  ]
};
