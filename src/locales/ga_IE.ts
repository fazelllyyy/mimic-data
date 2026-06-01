import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ga_IE: LocaleDefinition = {
  firstNamesMale: [
    'Séamus', 'Pádraig', 'Seán', 'Micheál', 'Tomás', 'Ciarán', 'Liam', 'Niall',
    'Daragh', 'Fionn', 'Cillian', 'Eoin', 'Daire', 'Oisín', 'Aidan',
    'Declan', 'Rory', 'Conor', 'Brendan', 'Kevin', 'Donal', 'Fergal',
    'Colm', 'Eoghan', 'Cathal', 'Diarmuid', 'Tadhg', 'Peadar', 'Cormac', 'Aengus'
  ],
  firstNamesFemale: [
    'Máire', 'Sinéad', 'Áine', 'Niamh', 'Clíodhna', 'Síle', 'Bríd', 'Caitríona',
    'Aoife', 'Róisín', 'Siobhán', 'Orla', 'Deirdre', 'Eimear', 'Saibh',
    'Gráinne', 'Aisling', 'Meadhbh', 'Laoise', 'Bláthnaid', 'Sorcha', 'Fionnuala',
    'Eadaoin', 'Muirne', 'Nóraín', 'Ríona', 'Sadhbh', 'Treasa', 'Úna', 'Eilis'
  ],
  lastNames: [
    'Ó Ceallaigh', 'Ó Briain', 'Ó Súilleabháin', 'Mac Cárthaigh', 'Ó Néill',
    'Mac Mathúna', 'Ní MhaoilEoin', 'Mac Giolla Phádraig', 'Ó Cuinn', 'Ó Dónaill',
    'Mac Suibhne', 'Ó Coileáin', 'Ó Caoimh', 'Ó hAodha', 'Mac Aogáin',
    'Ó Murchadha', 'Mac Suain', 'Ó Riain', 'Mac Conmara', 'Ó Tuathail',
    'Ó Faoláin', 'Mac Gearailt', 'Ó Lobhainn', 'Ó Seachnasaigh', 'Mac Cárthaigh',
    'Ó hUallacháin', 'Mag Uidhir', 'Ó Ceallaigh', 'Ó hAnluain', 'Mac Bhloscaidh'
  ],
  streets: [
    'Sráid an Fheirmeoir', 'Cé an Phoirt', 'Sráid na Mainistreach', 'Bóthar an Bhalla',
    'Faiche Stiabhna', 'Sráid an Daingin', 'Sráid Dáibhís', 'Sráid Thalbóid',
    'Sráid Pharnell', 'Sráid Uí Chonaill', 'Sráid Grafton', 'Sráid Anraí',
    'Cearnóg Mhuirfean', 'Bóthar an Chlochair', 'Ascaill na hUaimhe',
    'Bóthar na Trá', 'Sráid an Droichid', 'Bóthar na Gaillimhe', 'Sráid an Teampaill',
    'An Cuarbhóthar Thuaidh'
  ],
  cities: [
    'Baile Átha Cliath', 'Corcaigh', 'Gaillimh', 'Luimneach', 'Port Láirge',
    'Cill Chainnigh', 'Droichead Átha', 'Dún Dealgan', 'Sligeach', 'Bré',
    'Loch Garman', 'Baile Átha Luain', 'Ceatharlach', 'Trá Lí', 'Nás na Rí',
    'An Uaimh', 'Cill Airne', 'Cobh', 'Mala', 'Cionn tSáile'
  ],
  states: [
    'Cúige Laighean', 'Cúige Mumhan', 'Cúige Chonnacht', 'Cúige Uladh',
    'Baile Átha Cliath', 'Corcaigh', 'Gaillimhe'
  ],
  zipCodePattern: '@@@ @@@@',
  jobTitles: [
    'Innealtóir Bogearraí', 'Bainisteoir Tionscadail', 'Anailísí Sonraí', 'Bainisteoir Margaíochta',
    'Ionadaí Díolacháin', 'Cuntasóir', 'Bainisteoir AD', 'Dearthóir',
    'Bainisteoir Oibríochtaí', 'Anailísí Gnó', 'Bainisteoir Táirge',
    'Riarthóir Córais', 'Innealtóir Cáilíochta', 'Scríbhneoir Teicniúil'
  ],
  departments: [
    'Innealtóireacht', 'Margaíocht', 'Díolacháin', 'Acmhainní Daonna', 'Airgeadas',
    'Oibríochtaí', 'Seirbhís do Chustaiméirí', 'TF', 'Taighde agus Forbairt',
    'Dlíthiúil', 'Riarachán'
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
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const part1 = Random.int(1, 999);
    const part2 = Random.pick(letters.split('')) + part1;
    return `${part2}`;
  },

  phoneFormats: [
    '+353 # ### ####',
    '0# ### ####',
    '+353 (0)# ### ####',
    '08# ### ####',
    '085 ### ####',
    '086 ### ####',
    '087 ### ####',
    '089 ### ####',
    '01 ### ####',
    '021 ### ####',
    '091 ### ####',
    '061 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.ie', 'outlook.ie', 'hotmail.ie', 'live.ie',
    'eircom.net', 'oceanfree.net', 'iol.ie', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'CRH plc', 'Kerry Group', 'Smurfit Kappa', 'Ryanair', 'Bank of Ireland',
    'AIB Group', 'Permanent TSB', 'Paddy Power Betfair', 'Kingspan Group',
    'Glanbia', 'Dalata Hotel Group', 'Independent News & Media',
    'Irish Continental Group', 'Origin Enterprises', 'C&C Group',
    'Aer Lingus', 'An Post', 'ESB Group', 'Bord Gáis Éireann'
  ],

  industries: [
    'Teicneolaíocht', 'Airgeadas', 'Sláinte', 'Oideachas', 'Miondíol',
    'Déantúsaíocht', 'Meáin', 'Teileachumarsáid', 'Fuinneamh', 'Iompar',
    'Eastát Réadach', 'Comhairliúchán', 'Óstáin', 'Gluaisteáin', 'Eitlíocht'
  ],

  catchPhrases: [
    'Nuálaíocht don todhchaí', 'Is é do rath ár ngnó', 'Ag tógáil na todhchaí le chéile',
    'Cáilíocht agus muinín', 'Sármhaitheas agus tiomantas', 'Réitigh inbhuanaithe',
    'Cruthaímid luach', 'Do chomhpháirtí iontaofa', 'Treoraímid an athrú'
  ]
};
