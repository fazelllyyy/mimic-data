import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_MO: LocaleDefinition = {
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
    'Avenida da Praia Grande', 'Avenida Almeida Ribeiro', 'Estrada de Cacilhas',
    'Rua da Praia do Manduco', 'Avenida do Infante D. Henrique',
    'Rua do Campo', 'Rua da Caldeira', 'Estrada de S. Francisco',
    'Avenida da República', 'Rua de S. Paulo', 'Rua de D. João IV',
    'Rua da Madeira', 'Avenida Marginal do Lam Mau', 'Rua do Teixeira',
    'Estrada da Areia Preta', 'Rua de Venceslau de Morais'
  ],
  cities: [
    'Sé', 'Nossa Senhora de Fátima', 'Santo António', 'São Lázaro',
    'São Lourenço', 'Taipa', 'Coloane', 'Cotai',
    'Nova Ásia', 'Areia Preta', 'Horta Seca', 'Portas do Cerco',
    'Barra', 'Penha', 'Patane', 'Conselheiro'
  ],
  states: [
    'Península de Macau', 'Taipa', 'Coloane', 'Cotai'
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
    const number = Random.int(1, 999);
    const floor = Random.int(1, 30);
    return `${street}, ${number}, ${floor}º andar, ${city}, ${state}`;
  },

  generateZipCode(): string {
    return '';
  },

  phoneFormats: [
    '+853 #### ####',
    '#### ####',
    '+853-####-####',
    '6### ####',
    '8### ####',
    '28## ####',
    '+853 6### ####',
    '+853 8### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'ctm.net', 'macau.ctm.net', 'icloud.com'
  ],

  companyNames: [
    'SJM Holdings', 'Galaxy Entertainment', 'Melco Resorts',
    'Wynn Macau', 'Sands China', 'MGM Macau',
    'Air Macau', 'CEM Macau', 'SAAM Macau',
    'CTM Macau', 'Banco Tai Fung', 'Banco Comercial de Macau',
    'STDM', 'Koi Kei Bakery', 'Pastelaria Keng Fai'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Jogo', 'Turismo', 'Telecomunicações', 'Energia', 'Transportes',
    'Imobiliário', 'Hotelaria', 'Restauração', 'Entretenimento', 'Aviação'
  ],

  catchPhrases: [
    'Inovar para o futuro', 'O sucesso de Macau', 'Construir o futuro juntos',
    'Qualidade e confiança', 'Excelência e compromisso', 'Soluções sustentáveis',
    'Criar valor para todos', 'Orgulho luso-chinês', 'Onde Oriente encontra o Ocidente'
  ]
};
