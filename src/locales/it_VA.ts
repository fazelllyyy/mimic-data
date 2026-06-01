import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const it_VA: LocaleDefinition = {
  firstNamesMale: [
    'Francesco', 'Alessandro', 'Andrea', 'Lorenzo', 'Matteo', 'Gabriele', 'Mattia',
    'Marco', 'Luca', 'Giovanni', 'Giuseppe', 'Antonio', 'Roberto', 'Paolo', 'Stefano',
    'Pietro', 'Cardinale', 'Vescovo', 'Michele', 'Tommaso',
    'Filippo', 'Vincenzo', 'Emanuele', 'Alberto', 'Daniele', 'Leonardo', 'Angelo',
    'Benedetto', 'Clemente', 'Gregorio', 'Sisto', 'Urbano', 'Leone'
  ],
  firstNamesFemale: [
    'Sofia', 'Giulia', 'Aurora', 'Alice', 'Emma', 'Giorgia', 'Beatrice',
    'Anna', 'Chiara', 'Francesca', 'Sara', 'Martina', 'Alessia', 'Elena',
    'Silvia', 'Valentina', 'Federica', 'Laura', 'Elisa', 'Claudia', 'Monica', 'Paola',
    'Roberta', 'Lucia', 'Cristina', 'Isabella', 'Maddalena', 'Veronica',
    'Teresa', 'Celeste', 'Angela', 'Caterina'
  ],
  lastNames: [
    'Rossi', 'Russo', 'Ferrari', 'Bianchi', 'Romano', 'Colombo', 'Ricci',
    'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'Costa', 'Giordano',
    'Mancini', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri', 'Fontana', 'Santoro',
    'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone',
    'Bellini', 'Donati', 'Borghese', 'Della Chiesa'
  ],
  streets: [
    'Via della Conciliazione', 'Piazza San Pietro', 'Via del Pellegrino',
    'Viale del Vaticano', 'Via della Stazione Vaticana', 'Via dell\'Ospedale',
    'Via del Sant\'Uffizio', 'Piazza della Cancelleria', 'Via della Missione',
    'Piazza Santa Marta', 'Via di Porta Angelica', 'Viale dei Giardini Vaticani',
    'Cortile del Belvedere', 'Via di Torre Rossa', 'Vatican Hill'
  ],
  cities: [
    'Vaticano', 'Città del Vaticano', 'Palazzi Apostolici', 'Guardia Svizzera',
    'Basilica di San Pietro', 'Musei Vaticani', 'Giardini Vaticani',
    'Palazzo del Governatorato', 'Domus Sanctae Marthae', 'Palazzo Apostolico',
    'Cortile della Pigna', 'Necropoli Vaticana', 'Aula Paolo VI'
  ],
  states: [
    'Città del Vaticano', 'Palazzi Apostolici', 'Giardini Vaticani', 'Zona Extraterritoriale'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingegnere Software', 'Project Manager', 'Analista Dati', 'Responsabile Marketing',
    'Rappresentante Vendite', 'Commercialista', 'Responsabile HR', 'Designer',
    'Segretario Papale', 'Amministratore del Patrimonio', 'Bibliotecario Vaticano',
    'Archivista Vaticano', 'Membro della Guardia Svizzera'
  ],
  departments: [
    'Ingegneria', 'Marketing', 'Vendite', 'Risorse Umane', 'Finanza', 'Operazioni',
    'Servizio Clienti', 'IT', 'Archivio Segreto Vaticano', 'Biblioteca Vaticana',
    'Governatorato', 'Musei Vaticani'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street}, ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return '00120';
  },

  phoneFormats: [
    '+379 06 ######',
    '+379 06 ######',
    '+379-06-######',
    '06 ######',
    '+379 334 ######',
    '+379 339 ######'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.it', 'outlook.it', 'hotmail.it',
    'vatican.va', 'pec.vatican.va', 'libero.it'
  ],

  companyNames: [
    'Banca del Vaticano', 'Amministrazione del Patrimonio della Sede Apostolica',
    'Libreria Editrice Vaticana', 'Radio Vaticana', 'CTV Centro Televisivo Vaticano',
    'Fabbrica di San Pietro', 'Musei Vaticani', 'Tipografia Vaticana',
    'Stato della Città del Vaticano', 'Biblioteca Apostolica Vaticana',
    'Archivio Apostolico Vaticano', 'Specola Vaticana', 'Ospedale Pediatrico Bambino Gesù'
  ],

  industries: [
    'Tecnologia', 'Finanza', 'Sanità', 'Istruzione', 'Religioso',
    'Culturale', 'Media', 'Telecomunicazioni', 'Immobiliare', 'Pubblicazioni',
    'Consulenza', 'Bancario', 'Arte', 'Editoria'
  ],

  catchPhrases: [
    'Innovare per il futuro', 'Servire il prossimo', 'Fede e tradizione',
    'Qualità e dedizione', 'Eccellenza vaticana', 'Pace e bene',
    'Cuore della cristianità', 'Il vostro partner di fiducia', 'Custodi della tradizione'
  ]
};
