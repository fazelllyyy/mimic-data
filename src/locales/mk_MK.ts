import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const mk_MK: LocaleDefinition = {
  firstNamesMale: [
    'Aleksandar', 'Nikola', 'Marko', 'Stefan', 'Petar', 'Vladimir', 'Dejan', 'Igor',
    'Filip', 'Goran', 'Zoran', 'Mile', 'Boris', 'Dimitar', 'Todor', 'Stojan',
    'Trajce', 'Blagoja', 'Kosta', 'Kiril', 'Risto', 'Sasho', 'Ljupco', 'Vasko',
    'Emil', 'Jovan', 'Darko', 'Miroslav', 'Bojan', 'Nenad'
  ],
  firstNamesFemale: [
    'Marija', 'Elena', 'Ana', 'Katerina', 'Biljana', 'Vesna', 'Sofija', 'Jasna',
    'Liljana', 'Nataša', 'Sonja', 'Tanja', 'Gordana', 'Mira', 'Ivana', 'Svetlana',
    'Emilija', 'Violeta', 'Renata', 'Danica', 'Vera', 'Cveta', 'Jelena', 'Lidija',
    'Sandra', 'Monika', 'Silvana', 'Olivera', 'Milica', 'Teodora'
  ],
  lastNames: [
    'Trajkovski', 'Stojanovski', 'Petrovski', 'Nikolovski', 'Ivanovski', 'Dimovski',
    'Kostovski', 'Mihajlovski', 'Ristovski', 'Pandevski', 'Krmovski', 'Popovski',
    'Simonovski', 'Milenkovski', 'Gjorgjievski', 'Kolevski', 'Velkovski',
    'Markovski', 'Todorovski', 'Stojmenovski', 'Atanasovski', 'Krstevski',
    'Ilievski', 'Janevski', 'Stefanovski', 'Tasevski', 'Bogoevski', 'Mitevski'
  ],
  streets: [
    'Ulica Makedonija', 'Bulevar Partizanski Odredi', 'Ulica Maksim Gorki',
    'Bulevar Ilinden', 'Bulevar Kuzman Josifovski Pitu', 'Ulica Dame Gruev',
    'Ulica Goce Delčev', 'Ulica Dimitrija Čupovski', 'Bulevar JNA',
    'Ul. Krste Misirkov', 'Ulica Nikola Vapcarov', 'Bulevar ASNOM',
    'Ulica Sava Kovačević', 'Ulica Orce Nikolov', 'Ulica Metodija Šatorov',
    'Ulica Živko Brajkovski', 'Ulica Leninova', 'Ulica Treta Makedonska Brigada',
    'Ulica Vasil Gjorgov', 'Ulica Aleksandar Martulkov'
  ],
  cities: [
    'Skopje', 'Bitola', 'Kumanovo', 'Ohrid', 'Prilep', 'Tetovo', 'Veles',
    'Štip', 'Strumica', 'Kavadarci', 'Gostivar', 'Kočani', 'Gevgelija',
    'Debar', 'Resen', 'Kičevo', 'Kratovo', 'Struga', 'Kruševo', 'Berovo'
  ],
  states: [
    'Skopski Region', 'Istočen Region', 'Severoistočen Region', 'Pelagoniski Region',
    'Pološki Region', 'Jugozapaden Region', 'Jugoistočen Region', 'Pčinjski Region'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Softverski Inženjer', 'Menadžer na Projekt', 'Analitičar na Podatoci', 'Menadžer za Marketing',
    'Prodaven Pretstavnik', 'Smetkovoditel', 'Menadžer za Čovečki Resursi', 'Dizajner',
    'Menadžer za Operacii', 'Biznis Analitičar', 'Menadžer za Produkt',
    'Sistemski Administrator', 'Inženjer za Kvalitet', 'Tehnički Pisac'
  ],
  departments: [
    'Inženjering', 'Marketing', 'Prodavba', 'Čovečki Resursi', 'Finansii',
    'Operacii', 'Korisnička Poddrška', 'IT', 'Istrazhuvanje i Razvoj',
    'Praven', 'Administracija'
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
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+389 ## ### ####',
    '0## ### ####',
    '+389 (0)## ### ####',
    '07# ### ####',
    '070 ### ####',
    '071 ### ####',
    '072 ### ####',
    '075 ### ####',
    '076 ### ####',
    '077 ### ####',
    '078 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    't-home.mk', 't-mobile.mk', 'one.mk', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Makedonski Telekom', 'EVN Makedonija', 'Komercijalna Banka', 'Stopanska Banka',
    'NLB Banka Makedonija', 'Ohridska Banka', 'Sparkasse Bank Makedonija',
    'Tinex', 'Vero', 'Ramstore', 'Makpetrol', 'Lukoil Makedonija',
    'Alkaloid', 'Zito Luks', 'Vitaminka', 'Pivara Skopje', 'Tikvesh',
    'Fersped', 'Granit', 'Beton SHTIP'
  ],

  industries: [
    'Tehnologija', 'Finansii', 'Zdravstvo', 'Obrazovanie', 'Trgovija na Malo',
    'Proizvodstvo', 'Mediumi', 'Telekomunikacii', 'Energija', 'Transport',
    'Nedvižnosti', 'Konsalting', 'Hoteli', 'Avtomobili', 'Avijacija'
  ],

  catchPhrases: [
    'Inovacija za idninata', 'Vašiot uspeh e naša rabota', 'Zaedno go gradime idninata',
    'Kvalitet i doverba', 'Izvrsnost i posvetenost', 'Održlivi rešenija',
    'Sozdavame vrednost', 'Vašiot doverliv partner', 'Go predvodime promenata'
  ]
};
