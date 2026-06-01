import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GI: LocaleDefinition = {
  firstNamesMale: [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
    'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
    'Donald', 'Steven', 'Paul', 'Andrew', 'Kenneth', 'George', 'Edward', 'Brian',
    'Kevin', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Nicholas', 'Eric', 'Stephen'
  ],
  firstNamesFemale: [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica',
    'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra',
    'Ashley', 'Dorothy', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol',
    'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura',
    'Cynthia', 'Kathleen', 'Amy', 'Angela', 'Shirley'
  ],
  lastNames: [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
    'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker'
  ],
  streets: [
    'Main Street', 'Irish Town', 'John Mackintosh Square', 'Casemates Square',
    'Queensway', 'Devils Tower Road', 'Europa Road', 'Sandy Bay Road',
    'Prince Edwards Road', 'Winston Churchill Avenue', 'Rosia Road',
    'Cathedral Square', 'North Mole', 'South Mole', 'Castle Street',
    'Bomb House Lane', 'Line Wall Road', 'Governors Parade'
  ],
  cities: [
    'Gibraltar', 'Catalan Bay', 'Sandy Bay', 'Europa Point', 'Rosia',
    'North Front', 'Westside', 'South District', 'Town Area', 'Gibraltar Harbour'
  ],
  states: [
    'Gibraltar', 'Eastside', 'Westside', 'North District', 'South District', 'Town'
  ],
  zipCodePattern: 'GX11 1AA',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Product Manager', 'System Administrator',
    'Customer Service Representative', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    const letters1 = Random.pick(['G', 'H', 'J', 'K', 'L']);
    const letters2 = Random.pick(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    return `GX11 ${letters1}${letters2}${Random.int(1, 9)}`;
  },

  phoneFormats: [
    '+350 ### #####',
    '+350 200 #####',
    '+350 2## #####',
    '+350 5## #####',
    '+350 6## #####',
    '### #####',
    '200 #####',
    '+350-###-#####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'gibraltar.gi', 'gibtele.com', 'gbm.gi'
  ],

  companyNames: [
    'Gibraltar International Bank', 'Gibtelecom', 'Gibraltar Broadcasting Corporation',
    'Betway Gibraltar', 'GVC Holdings Gibraltar', '888 Holdings Gibraltar',
    'William Hill Gibraltar', 'Entain Gibraltar', 'Gibraltar Stock Exchange',
    'Gibraltar Port Authority', 'Gibraltar Bus Company', 'Rock Insurance',
    'Gibraltar Health Authority', 'Monarch Insurance'
  ],

  industries: [
    'Technology', 'Finance', 'Health', 'Education', 'Retail',
    'Gambling', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Insurance', 'Consulting', 'Hospitality', 'Maritime', 'Aviation'
  ],

  catchPhrases: [
    'Innovating for the future', 'Your success is our business', 'Building the future together',
    'Quality and trust', 'Excellence and commitment', 'Sustainable solutions',
    'Creating value', 'The Rock of Gibraltar', 'Your trusted partner'
  ]
};
