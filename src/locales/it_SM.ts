import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const it_SM: LocaleDefinition = {
  firstNamesMale: [
    'Francesco', 'Alessandro', 'Andrea', 'Lorenzo', 'Matteo', 'Gabriele', 'Mattia',
    'Marco', 'Luca', 'Giovanni', 'Giuseppe', 'Antonio', 'Roberto', 'Paolo', 'Stefano',
    'Carlo', 'Davide', 'Simone', 'Federico', 'Riccardo', 'Michele', 'Tommaso',
    'Filippo', 'Vincenzo', 'Emanuele', 'Alberto', 'Daniele', 'Leonardo', 'Pietro'
  ],
  firstNamesFemale: [
    'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Greta',
    'Beatrice', 'Anna', 'Chiara', 'Francesca', 'Sara', 'Martina', 'Alessia', 'Elena',
    'Silvia', 'Valentina', 'Federica', 'Laura', 'Elisa', 'Claudia', 'Monica', 'Paola',
    'Roberta', 'Simona', 'Lucia', 'Cristina', 'Isabella', 'Giada', 'Veronica'
  ],
  lastNames: [
    'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci',
    'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'Costa', 'Giordano',
    'Mancini', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri', 'Fontana', 'Santoro',
    'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone'
  ],
  streets: [
    'Via del Titano', 'Contrada del Collegio', 'Piazza della Libertà',
    'Via della Repubblica', 'Via delle Mura', 'Contrada Omerelli',
    'Piazzale del Cantone', 'Via Salita alla Rocca', 'Via Piana',
    'Via del Serrone', 'Contrada San Martino', 'Via degli Orti',
    'Via 28 Luglio', 'Via del Voltone', 'Strada di San Marino',
    "Via Ca' dei Lunghi", 'Contrada Santa Barbara', 'Via delle Ville'
  ],
  cities: [
    'Città di San Marino', 'Serravalle', 'Borgo Maggiore', 'Domagnano',
    'Fiorentino', 'Montegiardino', 'Acquaviva', 'Faetano',
    'Chiesanuova', 'Dogana', 'Murata', 'Santa Mustiola',
    'Cà Ragni', 'Valdragone', 'Falciano', 'Rovereta'
  ],
  states: [
    'Città di San Marino', 'Serravalle', 'Borgo Maggiore', 'Domagnano',
    'Fiorentino', 'Montegiardino', 'Acquaviva', 'Faetano', 'Chiesanuova'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingegnere Software', 'Project Manager', 'Analista Dati', 'Responsabile Marketing',
    'Rappresentante Vendite', 'Commercialista', 'Responsabile HR', 'Designer',
    'Responsabile Operazioni', 'Analista di Business', 'Product Manager', 'Amministratore di Sistema'
  ],
  departments: [
    'Ingegneria', 'Marketing', 'Vendite', 'Risorse Umane', 'Finanza', 'Operazioni',
    'Servizio Clienti', 'IT', 'Ricerca e Sviluppo', 'Legale', 'Amministrazione'
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
    return '47890';
  },

  phoneFormats: [
    '+378 #### ######',
    '+378 #### ######',
    '#### ######',
    '+378-###-###',
    '+378 0### ######',
    '+378 6### ######'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.it', 'outlook.it', 'hotmail.it',
    'libero.it', 'sanmarino.sm', 'pec.sm'
  ],

  companyNames: [
    'Banca Centrale della Repubblica di San Marino', 'Banca di San Marino',
    'Banca Generali San Marino', 'San Marino Telecom', 'Titancom',
    'Azienda Autonoma di Stato per i Servizi', 'San Marino RTV',
    'Eneldinergia San Marino', 'Zafferani Group', 'Marlanvi',
    'Vernici San Marino', 'Assicoop San Marino', 'Materiaudit',
    'San Marino Touring Club'
  ],

  industries: [
    'Tecnologia', 'Finanza', 'Sanità', 'Istruzione', 'Vendita al dettaglio',
    'Bancario', 'Telecomunicazioni', 'Energia', 'Trasporti', 'Immobiliare',
    'Consultenza', 'Alberghiero', 'Farmaceutico', 'Turismo'
  ],

  catchPhrases: [
    'Innovare per il futuro', 'Il vostro successo è la nostra missione', 'Costruire il futuro insieme',
    'Qualità e fiducia', 'Eccellenza sammarinese', 'Tradizione e innovazione',
    'La più antica repubblica', 'Il vostro partner di fiducia', 'Soluzioni sostenibili'
  ]
};
