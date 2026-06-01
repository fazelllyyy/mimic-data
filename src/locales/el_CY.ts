import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const el_CY: LocaleDefinition = {
  firstNamesMale: [
    'Andreas', 'Georgios', 'Marios', 'Christos', 'Petros', 'Kyriakos', 'Nikos', 'Antonis',
    'Yiannis', 'Michalis', 'Dimitris', 'Panagiotis', 'Savvas', 'Stavros', 'Loizos',
    'Costas', 'Alexandros', 'Constantinos', 'Ioannis', 'Vasilis', 'Charalampos',
    'Stefanos', 'Giorgos', 'Christoforos', 'Rafail', 'Evangelos', 'Manolis', 'Filippos',
    'Sokratis', 'Menelaos'
  ],
  firstNamesFemale: [
    'Maria', 'Eleni', 'Anna', 'Andriana', 'Georgia', 'Sofia', 'Elena', 'Christiana',
    'Antonia', 'Marina', 'Alexia', 'Constantina', 'Panagiota', 'Kyriaki', 'Despina',
    'Chara', 'Ioanna', 'Stavroula', 'Evi', 'Natasa', 'Myria', 'Katerina',
    'Angeliki', 'Giannoula', 'Paraskevi', 'Theodora', 'Daphne', 'Niki', 'Veronica',
    'Rafaella'
  ],
  lastNames: [
    'Ioannou', 'Christodoulou', 'Charalambous', 'Georgiou', 'Constantinou', 'Papadopoulos',
    'Mavroudis', 'Michaelides', 'Nikolaou', 'Panayiotou', 'Vassiliou', 'Stylianou',
    'Aristotelous', 'Hadjigeorgiou', 'Kyprianou', 'Solomou', 'Andreou', 'Katsouris',
    'Theodorou', 'Hadjipavlou', 'Petrou', 'Antoniou', 'Dimitriou', 'Karagiorgis',
    'Papaioannou', 'Gregoriou', 'Efstathiou', 'Ktorides', 'Lysandrou', 'Pittas'
  ],
  streets: [
    'Makariou Avenue', 'Archbishop Makarios III Avenue', 'Limassol Avenue',
    'Stasinos Street', 'Digeni Akrita Street', 'Nikou Georgiou Street',
    'Griva Digeni Avenue', 'Mesologgiou Street', 'Gladstonos Street',
    'Evagorou Avenue', 'Omirou Street', 'Athinas Street',
    'Rigenis Street', 'Zina Kanther Street', 'Prodromou Street',
    'Kimonos Street', 'Anexartisias Street', 'Themistokli Dervi Street',
    'Michalaki Paridi Street', 'Ioanni Gregoriou Street'
  ],
  cities: [
    'Lefkosia (Nicosia)', 'Lemesos (Limassol)', 'Larnaca', 'Pafos (Paphos)',
    'Ammochostos (Famagusta)', 'Kyrenia', 'Morfou', 'Paralimni', 'Polis',
    'Deryneia', 'Lefka', 'Lythrodontas', 'Agros', 'Platres', 'Kakopetria',
    'Pera Chorio', 'Latsia', 'Engomi', 'Strovolos', 'Geroskipou'
  ],
  states: [
    'Nicosia District', 'Limassol District', 'Larnaca District',
    'Paphos District', 'Famagusta District', 'Kyrenia District'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Michanikos Logismikou', 'Dieythyntis Ergou', 'Analytis Dedomenon', 'Dieythyntis Marketing',
    'Ekprosopos Poliseon', 'Logistis', 'Dieythyntis Anthropinou Dynamikou', 'Schediastis',
    'Dieythyntis Leitourgion', 'Epicheirisiakos Analytis', 'Dieythyntis Proiontos',
    'Diacheiristis Systimaton', 'Michanikos Poiotitas', 'Technikos Sygrafeas'
  ],
  departments: [
    'Michanologia', 'Marketing', 'Poliseis', 'Anthropino Dynamiko', 'Oikonomika',
    'Leitourgies', 'Exypiretisi Pelaton', 'IT', 'Erevna kai Anaptyxi',
    'Nomiko Tmima', 'Dioikitika'
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
    '+357 ## ### ####',
    '## ### ####',
    '+357 (##) ### ####',
    '99 ### ####',
    '96 ### ####',
    '97 ### ####',
    '95 ### ####',
    '22 ### ####',
    '25 ### ####',
    '24 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'cytanet.com.cy', 'primehome.com', 'cablenet.com.cy', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Bank of Cyprus', 'Hellenic Bank', 'Cyprus Popular Bank', 'Ancoria Bank',
    'Cyta', 'PrimeTel', 'Cablenet', 'MTN Cyprus', 'Epic Cyprus',
    'Electrocom Group', 'Petrolina Holdings', 'Dome Investments',
    'Cyprus Airways', 'Louis Hotels', 'KEO Plc',
    'Charalambides Christis', 'Papantoniou Supermarkets', 'Alpha Mega Cyprus',
    'Stademos Hotels', 'Kotsovolos Cyprus'
  ],

  industries: [
    'Technologia', 'Chrimatooikonomika', 'Ygeia', 'Ekpaidefsi', 'Lianiki Polisi',
    'Kataskeyes', 'Mesa Enimerosis', 'Tilepikoinonies', 'Energeia', 'Metafores',
    'Akinita', 'Symvouleftiki', 'Xenodocheia', 'Aftokinitoviomichania', 'Aeroporia'
  ],

  catchPhrases: [
    'Kainotomia gia to mellon', 'I epitixia sas einai douleia mas', 'Chrizoume to mellon mazi',
    'Poiotita kai empistosyni', 'Arioteia kai desmevsi', 'Viosimes lyseis',
    'Dimiourgoyme axia', 'O axiopistos synergatis sas', 'Igoumaste tis allagis'
  ]
};
