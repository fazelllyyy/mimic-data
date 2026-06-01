import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fo_FO: LocaleDefinition = {
  firstNamesMale: [
    'Jógvan', 'Hans', 'Poul', 'Óli', 'Jan', 'Jákup', 'Magni', 'Einar',
    'Petur', 'Andrias', 'Sámal', 'Mikkjal', 'Karl', 'Heri', 'Jón',
    'Rógvi', 'Bjarni', 'Bárður', 'Finnur', 'Gunnar', 'Abraham', 'Daniel',
    'Erling', 'Fríðin', 'Geir', 'Hákun', 'Ísak', 'Leivur', 'Marner', 'Olav'
  ],
  firstNamesFemale: [
    'Anna', 'Maria', 'Jóhanna', 'Rannvá', 'Sólja', 'Dagny', 'Hanna', 'Helga',
    'Margit', 'Birgitta', 'Elin', 'Súsanna', 'Tórvør', 'Ása', 'Brynhild',
    'Durita', 'Ebba', 'Fríða', 'Guðrið', 'Herborg', 'Inga', 'Katrin',
    'Lív', 'Málfríður', 'Nina', 'Oddvør', 'Rakul', 'Sigrið', 'Turíð', 'Vár'
  ],
  lastNames: [
    'Hansen', 'Joensen', 'Petersen', 'Jacobsen', 'Jensen', 'Nielsen', 'Thomassen',
    'Andreasen', 'Mortensen', 'Poulsen', 'Olsen', 'Johannesen', 'Samuelsen',
    'Mohr', 'Johansen', 'Davidsen', 'Clausen', 'Sørensen', 'Jøkladal',
    'Vang', 'Rasmussen', 'Michelsen', 'Sivertsen', 'Kjøllbro', 'Weihe',
    'Falk', 'Müller', 'Bein', 'Holm', 'Danielsen'
  ],
  streets: [
    'Hvítabakkagøta', 'Brællislágøta', 'Niels Finsensgøta', 'Vaglið',
    'Tórsgøta', 'Jónas Broncksgøta', 'Dugvangsgøta', 'Skálatrøð',
    'Lágvegur', 'Hoyvíkarvegur', 'Mýragøta', 'Ringvegurin',
    'Gundadalsvegur', 'Bryggjubakki', 'Løksundgøta', 'Bakkavegur',
    'Krákusteinvegin', 'Traðargøta', 'Suðuri Strond', 'Strendur'
  ],
  cities: [
    'Tórshavn', 'Klaksvík', 'Runavík', 'Tvøroyri', 'Fuglafjørður', 'Toftir',
    'Saltangará', 'Vestmanna', 'Sørvágur', 'Vágur', 'Eiði', 'Kollafjørður',
    'Strendur', 'Skopun', 'Sandur', 'Hvannasund', 'Leirvík', 'Hvalba',
    'Húsavík', 'Sumba'
  ],
  states: [
    'Streymoy', 'Eysturoy', 'Vágar', 'Suðuroy', 'Sandoy', 'Borðoy',
    'Kunoy', 'Kalsoy', 'Viðoy', 'Fugloy', 'Svínoy', 'Mykines'
  ],
  zipCodePattern: 'FO-###',
  jobTitles: [
    'Hugbúnaðarverkfrøðingur', 'Verkætlanarstjóri', 'Dataanalytikari', 'Marknaðarstjóri',
    'Sølufulltrúi', 'Bókari', 'Starvsfólkaleiðari', 'Sniðgevi',
    'Rekstrarleiðari', 'Viðskiftaanalytikari', 'Vørustjóri',
    'Kerfisstjóri', 'Gæðaverkfrøðingur', 'Tekniskur Rithøvundur'
  ],
  departments: [
    'Verkfrøði', 'Marknaðarføring', 'Søla', 'Menniskjarættindi', 'Fíggjarstøða',
    'Rekstur', 'Kundatænasta', 'IT', 'Kanning og Menning',
    'Løgfrøðiliga', 'Stýring'
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
    return `FO-${Random.int(100, 999)}`;
  },

  phoneFormats: [
    '+298 ### ###',
    '### ###',
    '+298 ## ## ##',
    '20 ## ##',
    '21 ## ##',
    '22 ## ##',
    '23 ## ##',
    '24 ## ##',
    '90 ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'faroese.com', 'olivant.fo', 'fjarskifti.fo', 'gmx.com', 'protonmail.com'
  ],

  companyNames: [
    'Føroya Tele', 'BankNordik', 'Føroya Banki', 'Betri Banki',
    'Atlantic Airways', 'Smyril Line', 'Vørða', 'P/f Skipafelagið Føroyar',
    'P/f J.F. Kjølbro', 'Havsbrún', 'Føroya Bjór', 'Stødfiskur',
    'Løgmansskrivstovan', 'P/f Thor Shippping', 'P/f Bakkafrost',
    'Varðin P/f', 'P/f Pelagos', 'P/f Kollafjørður', 'Fóta Sømál', 'Føroya Studentaskúli'
  ],

  industries: [
    'Tøkni', 'Fíggjarstøða', 'Heilsa', 'Útbúgving', 'Evenhandil',
    'Framleiðsla', 'Miðlar', 'Fjarskifti', 'Orka', 'Transport',
    'Fasteignir', 'Ráðgeving', 'Gistingarhús', 'Fiskivinna', 'Flogferðsla'
  ],

  catchPhrases: [
    'Nýskapan fyri framtíðina', 'Títt eydna er okkara arbeiði', 'Byggja framtíðina saman',
    'Gæði og álit', 'Frambærd og trúskap', 'Sjálvbjørg málsøk',
    'Vit skapa virði', 'Tín álítandi partner', 'Vit leiða broytingina'
  ]
};
