import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sl_SI: LocaleDefinition = {
  firstNamesMale: [
    'Janez', 'Marko', 'Andrej', 'Matija', 'Luka', 'Miha', 'Gregor', 'Jure',
    'Peter', 'David', 'Rok', 'Matic', 'Urban', 'Aleš', 'Bojan', 'Boris',
    'Primož', 'Mitja', 'Tomaž', 'Igor', 'Dejan', 'Simon', 'Anže', 'Blaž',
    'Franc', 'Branko', 'Anton', 'Drago', 'Klemen', 'Jaka'
  ],
  firstNamesFemale: [
    'Marija', 'Ana', 'Maja', 'Nina', 'Eva', 'Sara', 'Lara', 'Petra',
    'Kaja', 'Neža', 'Urška', 'Manca', 'Katja', 'Tina', 'Nataša', 'Simona',
    'Martina', 'Špela', 'Tjaša', 'Alenka', 'Irena', 'Andreja', 'Tanja',
    'Mojca', 'Meta', 'Helena', 'Jana', 'Sonja', 'Vesna', 'Barbara'
  ],
  lastNames: [
    'Novak', 'Horvat', 'Kovačič', 'Krajnc', 'Zupančič', 'Bizjak', 'Kavčič',
    'Potočnik', 'Koren', 'Vidmar', 'Kos', 'Božič', 'Petek', 'Mlakar',
    'Jug', 'Oblak', 'Kotnik', 'Turk', 'Lah', 'Ferenc', 'Kolar', 'Rupnik',
    'Majcen', 'Hribar', 'Žagar', 'Erjavec', 'Pirc', 'Lesjak', 'Leban',
    'Miklavčič'
  ],
  streets: [
    'Slovenska cesta', 'Trg republike', 'Cesta v Mestni log', 'Dunajska cesta',
    'Titova cesta', 'Gospodinjska ulica', 'Ukova ulica', 'Celovška cesta',
    'Kongresni trg', 'Prešernova ulica', 'Cankarjeva ulica', 'Trubarjeva ulica',
    'Levstikova ulica', 'Vodnikova ulica', 'Jurčičeva ulica', 'Miklošičeva ulica',
    'Beethovnova ulica', 'Gosposka ulica', 'Wolfova ulica', 'Trg Osvobodilne Fronte'
  ],
  cities: [
    'Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Koper', 'Novo Mesto', 'Velenje',
    'Ptuj', 'Trbovlje', 'Jesenice', 'Nova Gorica', 'Murska Sobota', 'Škofja Loka',
    'Domžale', 'Izola', 'Kamnik', 'Postojna', 'Kočevje', 'Krško', 'Ajdovščina'
  ],
  states: [
    'Osrednjeslovenska', 'Podravska', 'Savinjska', 'Gorenjska', 'Obalno-kraška',
    'Jugovzhodna Slovenija', 'Goriška', 'Pomurska', 'Koroška', 'Notranjsko-kraška',
    'Spodnjeposavska', 'Zasavska'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Programski Inženir', 'Vodja Projektov', 'Analitik Podatkov', 'Vodja Marketinga',
    'Prodajni Zastopnik', 'Računovodja', 'HR Vodja', 'Oblikovalec',
    'Vodja Operacij', 'Poslovni Analitik', 'Vodja Produkta', 'Sistemski Administrator',
    'Inženir Kakovosti', 'Tehnični Pisec'
  ],
  departments: [
    'Inženiring', 'Marketing', 'Prodaja', 'Človeški Viri', 'Finance',
    'Operacije', 'Podpora Strankam', 'IT', 'Raziskave in Razvoj',
    'Pravno', 'Administracija'
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
    '+386 ## ### ####',
    '0## ### ####',
    '+386 (0)## ### ####',
    '03# ### ####',
    '04# ### ####',
    '05# ### ####',
    '031 ### ####',
    '040 ### ####',
    '041 ### ####',
    '051 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'siol.net', 'amis.net', 'telemach.si', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Petrol d.d.', 'Krka d.d.', 'Elektro Slovenija', 'Telekom Slovenije',
    'NLB d.d.', 'Novartis Slovenija', 'Sava d.d.', 'Gorenje d.d.',
    'Mercator d.d.', 'Holding Slovenske Elektrarne', 'Cimos',
    'Lek Slovenija', 'Adria Airways', 'Pošta Slovenije', 'Intereuropa',
    'Žito d.d.', 'Pivovarna Laško', 'Pivovarna Union', 'Delo d.d.'
  ],

  industries: [
    'Tehnologija', 'Finance', 'Zdravstvo', 'Izobraževanje', 'Trgovina na Drobno',
    'Proizvodnja', 'Mediji', 'Telekomunikacije', 'Energija', 'Transport',
    'Nepremičnine', 'Svetovanje', 'Hoteli', 'Avtomobilska', 'Letalstvo'
  ],

  catchPhrases: [
    'Inovacije za prihodnost', 'Vaš uspeh je naša naloga', 'Gradimo prihodnost skupaj',
    'Kakovost in zaupanje', 'Odličnost in predanost', 'Trajnostne rešitve',
    'Ustvarjamo vrednost', 'Vaš zanesljivi partner', 'Vodimo spremembe'
  ]
};
