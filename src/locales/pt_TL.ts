import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_TL: LocaleDefinition = {
  firstNamesMale: [
    'João', 'Francisco', 'Miguel', 'Rodrigo', 'Pedro', 'Tiago', 'José', 'Carlos',
    'António', 'Manuel', 'Paulo', 'Luís', 'Rui', 'Bruno', 'Ricardo', 'Hugo',
    'André', 'Nuno', 'Rafael', 'Daniel', 'David', 'Tomás', 'Bernardo', 'Martim',
    'Gabriel', 'Gustavo', 'Mário', 'Vítor', 'Eduardo', 'Jorge', 'Fernando'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Beatriz', 'Sofia', 'Mariana', 'Inês', 'Carolina', 'Catarina',
    'Rita', 'Joana', 'Francisca', 'Teresa', 'Helena', 'Isabel', 'Leonor', 'Sara',
    'Marta', 'Margarida', 'Diana', 'Matilde', 'Alice', 'Gabriela', 'Luísa',
    'Cristina', 'Lara', 'Sandra', 'Patrícia', 'Cláudia', 'Eva', 'Lúcia'
  ],
  lastNames: [
    'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins',
    'Jesus', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques', 'Alves',
    'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira', 'Moreira', 'Correia', 'Mendes',
    'Nunes', 'Soares', 'Vieira', 'Monteiro', 'Cardoso', 'Rocha', 'Neves'
  ],
  streets: [
    'Avenida Nicolau dos Reis Lobato', 'Rua de Moçambique', 'Rua de Jacarta',
    'Avenida dos Direitos Humanos', 'Rua 12 de Novembro', 'Rua de Balide',
    'Rua de Colmera', 'Avenida da Liberdade', 'Rua de São José',
    'Rua de Caicoli', 'Rua de Bidau', 'Rua de Becora', 'Rua de Formosa',
    'Avenida Almirante Lacerda', 'Rua de Santa Cruz'
  ],
  cities: [
    'Díli', 'Baucau', 'Same', 'Suai', 'Ainaro', 'Maliana', 'Lospalos',
    'Viqueque', 'Liquiçá', 'Ermera', 'Pante Macassar', 'Manatuto', 'Gleno',
    'Aileu', 'Maubisse', 'Baguia', 'Venilale', 'Tutuala'
  ],
  states: [
    'Díli', 'Baucau', 'Manatuto', 'Viqueque', 'Lautém',
    'Ainaro', 'Ermera', 'Bobonaro', 'Liquiçá', 'Covalima',
    'Manufahi', 'Oecussi', 'Aileu'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Engenheiro de Software', 'Gestor de Projeto', 'Analista de Dados', 'Gestor de Marketing',
    'Representante de Vendas', 'Contabilista', 'Gestor de RH', 'Designer',
    'Gestor de Operações', 'Analista de Negócios', 'Gestor de Produto', 'Administrador de Sistemas'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Finanças', 'Operações',
    'Apoio ao Cliente', 'TI', 'Investigação e Desenvolvimento', 'Jurídico', 'Administração'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+670 ### ####',
    '+670 #### ####',
    '### ####',
    '+670-###-####',
    '+670 7### ####',
    '+670 2### ####',
    '+670 3### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'timorpost.tl', 'telkomcel.tl', 'telemor.tl'
  ],

  companyNames: [
    'Petróleos de Timor', 'Banco Central de Timor-Leste', 'Banco Nacional de Comércio',
    'Telkomcel', 'Telemor', 'Timor Telecom',
    'Air Timor', 'Timor Plaza', 'Café Timor', 'East Timor Coffee',
    'Tropical Timor', 'MEG', 'Tasi Timor', 'Fábrica de Bebidas de Timor'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Manufactura', 'Media', 'Telecomunicações', 'Petróleo', 'Turismo',
    'Agricultura', 'Construção'
  ],

  catchPhrases: [
    'Inovar para o futuro', 'O sucesso de Timor', 'Construir a nação juntos',
    'Qualidade e confiança', 'Excelência e dedicação', 'Soluções sustentáveis',
    'Criar valor para todos', 'Orgulho timorense'
  ]
};
