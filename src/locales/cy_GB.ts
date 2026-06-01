import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const cy_GB: LocaleDefinition = {
  firstNamesMale: [
    'Dafydd', 'Ioan', 'Rhys', 'Gwyn', 'Alun', 'Emrys', 'Ifan', 'Llywelyn',
    'Hywel', 'Dewi', 'Carwyn', 'Geraint', 'Gareth', 'Huw', 'Meredydd',
    'Owain', 'Prys', 'Tegid', 'Bryn', 'Cai', 'Elgan', 'Guto',
    'Iorwerth', 'Lloyd', 'Madog', 'Meirion', 'Rhodri', 'Siôn', 'Tomos', 'Wiliam'
  ],
  firstNamesFemale: [
    'Angharad', 'Branwen', 'Carys', 'Dilys', 'Elen', 'Ffion', 'Gwen', 'Haf',
    'Iola', 'Lowri', 'Megan', 'Megan', 'Morfudd', 'Myfanwy', 'Nerys',
    'Olwen', 'Rhian', 'Sian', 'Sioned', 'Tegwen', 'Catrin', 'Bethan',
    'Awen', 'Bronwen', 'Ceri', 'Eirlys', 'Glesni', 'Llio', 'Mali', 'Nia'
  ],
  lastNames: [
    'Williams', 'Jones', 'Davies', 'Evans', 'Thomas', 'Roberts', 'Lewis',
    'Morgan', 'Griffiths', 'Hughes', 'Edwards', 'Pritchard', 'Price',
    'Owen', 'Lloyd', 'Rees', 'Parry', 'James', 'Richards', 'Ellis',
    'Powell', 'Phillips', 'Rogers', 'Bevan', 'Vaughan', 'Morris',
    'Protheroe', 'Wynne', 'Gwynn', 'Bebb'
  ],
  streets: [
    'Heol y Frenhines', 'Stryd Fawr', 'Heol y Castell', 'Rhodfa Penarth',
    'Heol y Bont', 'Y Rhodfa', 'Heol San Ffagan', 'Stryd y Capel',
    'Y Stryd Fwyaf', 'Heol Caerdydd', 'Heol Conwy', 'Stryd y Llyn',
    'Heol Llanedeyrn', 'Yr Heol Las', 'Stryd y Felin', 'Heol Tŷ Dewi',
    'Ffordd Crwys', 'Heol Albany', 'Heol y Gogledd', 'Heol y Orsaf'
  ],
  cities: [
    'Caerdydd', 'Abertawe', 'Casnewydd', 'Bangor', 'Wrecsam', 'Tyddewi',
    'Llanelwy', 'Llandudno', 'Conwy', 'Aberystwyth', 'Caerfyrddin',
    'Merthyr Tudful', 'Pen-y-bont ar Ogwr', 'Castell-nedd', 'Port Talbot',
    'Hwlffordd', 'Llanelli', 'Y Barri', 'Penarth', 'Cwmbrân'
  ],
  states: [
    'Morgannwg', 'Dyfed', 'Gwynedd', 'Powys', 'Clwyd',
    'Sir Fynwy', 'Sir Benfro', 'Sir Gaerfyrddin', 'Ceredigion', 'Ynys Môn'
  ],
  zipCodePattern: '@@# #@@@',
  jobTitles: [
    'Peiriannydd Meddalwedd', 'Rheolwr Prosiect', 'Dadansoddwr Data', 'Rheolwr Marchnata',
    'Cynrychiolydd Gwerthu', 'Cyfrifydd', 'Rheolwr Adnoddau Dynol', 'Cynllunydd',
    'Rheolwr Gweithrediadau', 'Dadansoddwr Busnes', 'Rheolwr Cynnyrch',
    'Gweinyddwr Systemau', 'Peiriannydd Ansawdd', 'Ysgrifennydd Technegol'
  ],
  departments: [
    'Peirianneg', 'Marchnata', 'Gwerthiannau', 'Adnoddau Dynol', 'Cyllid',
    'Gweithrediadau', 'Gwasanaeth Cwsmeriaid', 'TG', 'Ymchwil a Datblygu',
    'Cyfreithiol', 'Gweinyddiaeth'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${number} ${street}, ${city}, ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    const letters = 'ABCDEFGHIJKLMNOPRSTUWXYZ';
    const numbers = Random.int(100, 999);
    const strNum = String(numbers);
    const l1 = Random.pick(letters.split(''));
    const l2 = Random.pick(letters.split(''));
    const l3 = Random.pick(letters.split(''));
    return `${l1}${l2}${strNum[0]} ${strNum[1]}${strNum[2]}${l3}`;
  },

  phoneFormats: [
    '+44 ## #### ####',
    '0## #### ####',
    '0### ### ####',
    '+44 (0)## #### ####',
    '+44 (0)### ### ####',
    '07### ### ###',
    '029 #### ####',
    '01792 ### ###',
    '01267 ### ###',
    '01970 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.uk', 'outlook.com', 'hotmail.co.uk', 'live.co.uk',
    'btinternet.com', 'talktalk.net', 'virginmedia.com', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'BBC Cymru Wales', 'Welsh Water', 'Admiral Group', 'Principality Building Society',
    'Tata Steel UK', 'Celtic Manor Resort', 'South Wales Argus',
    'Media Wales', 'Western Mail', 'DragonTaxi', 'Llantrisant Hopsital',
    'Cardiff Bus', 'Arriva Wales', 'Transport for Wales',
    'Hyder Consulting', 'Greenwood Projects', 'Wales Interactive',
    'Royal Mint', 'IQE plc', 'Loganair Wales'
  ],

  industries: [
    'Technoleg', 'Cyllid', 'Iechyd', 'Addysg', 'Manwerthu',
    'Gweithgynhyrchu', 'Cyfryngau', 'Telathrebiadau', 'Ynni', 'Trafnidiaeth',
    'Eiddo', 'Ymgynghori', 'Gwestai', 'Modurol', 'Hedfan'
  ],

  catchPhrases: [
    'Arloesi ar gyfer y dyfodol', 'Eich llwyddiant yw ein busnes', 'Adeiladu\'r dyfodol gyda\'n gilydd',
    'Ansawdd ac ymddiried', 'Rhagoriaeth ac ymrwymiad', 'Atebion cynaliadwy',
    'Rydym yn creu gwerth', 'Eich partner dibynadwy', 'Rydym yn arwain y newid'
  ]
};
