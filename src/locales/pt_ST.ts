import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_ST: LocaleDefinition = {
  firstNamesMale: [
    'João', 'José', 'Manuel', 'Carlos', 'António', 'Francisco', 'Miguel',
    'Pedro', 'Paulo', 'Luís', 'Rui', 'Bruno', 'Ricardo', 'Hugo', 'André',
    'Nuno', 'David', 'Daniel', 'Jorge', 'Mário', 'Fernando', 'Sérgio',
    'Vítor', 'Eduardo', 'Marco', 'Rafael', 'Diogo', 'Tiago', 'Fábio',
    'Horácio', 'Gaspar', 'Belmiro'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Beatriz', 'Sofia', 'Mariana', 'Inês', 'Carolina',
    'Catarina', 'Rita', 'Joana', 'Teresa', 'Helena', 'Isabel',
    'Sara', 'Marta', 'Margarida', 'Diana', 'Alice', 'Lara', 'Leonor',
    'Cláudia', 'Sandra', 'Patrícia', 'Lúcia', 'Rosa', 'Carla', 'Mónica',
    'Alda', 'Elsa', 'Gabriela', 'Lurdes', 'Natália'
  ],
  lastNames: [
    'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues',
    'Martins', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques',
    'Alves', 'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira',
    'Moreira', 'Correia', 'Mendes', 'Nunes', 'Soares', 'Vieira',
    'Monteiro', 'Rocha', 'Cardoso', 'Neves', 'Coelho', 'Vaz'
  ],
  streets: [
    'Avenida da Independência', 'Rua 12 de Julho',
    'Avenida dos Presidentes', 'Rua do Mercado',
    'Avenida da Liberdade', 'Rua de Moçambique',
    'Avenida Marginal', 'Rua do Hospital',
    'Avenida da República', 'Rua da Igreja',
    'Avenida das Nações Unidas', 'Rua dos Pescadores',
    'Avenida da Capital', 'Rua do Comércio',
    'Avenida da Praia', 'Rua de São Tomé',
    'Avenida de Angola', 'Rua dos Combatentes',
    'Avenida do Mar', 'Rua Principal'
  ],
  cities: [
    'São Tomé', 'Trindade', 'Neves', 'Pantufo', 'Guadalupe', 'Madalena',
    'Santo António', 'Santa Catarina', 'São João', 'Água Grande',
    'Mendes da Silva', 'Bom Sucesso', 'Monte Café', 'Ribeira Afonso',
    'Nova Moca', 'Caldeiras', 'Praia das Conchas', 'Morro Peixe',
    'Santa Margarida', 'Plancas'
  ],
  states: [
    'Água Grande', 'Cantagalo', 'Caué', 'Lembá', 'Lobata', 'Mé-Zóchi',
    'Pagué'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Engenheiro de Software', 'Gestor de Projeto', 'Analista de Dados',
    'Gestor de Marketing', 'Representante de Vendas', 'Contabilista',
    'Gestor de RH', 'Designer', 'Gestor de Operações', 'Analista de Negócios',
    'Gestor de Produto', 'Administrador de Sistemas',
    'Técnico de Atendimento', 'Engenheiro de Redes'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Finanças',
    'Operações', 'Apoio ao Cliente', 'TI', 'Investigação e Desenvolvimento',
    'Jurídico', 'Gestão de Produto', 'Design', 'Administração'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    return `${street}, ${number}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+239 ### ####',
    '+239 9## ####',
    '+239 8## ####',
    '9## ####',
    '8## ####',
    '91# ####',
    '92# ####',
    '98# ####',
    '99# ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'africa.com', 'cnet.st', 'stpmail.st', 'sao-tome.com', 'telecom.st'
  ],

  companyNames: [
    'Companhia Santomense de Telecomunicações', 'Unitel STP',
    'Banco Central de São Tomé e Príncipe', 'Banco Internacional',
    'Ecobank STP', 'Afriland STP',
    'STP Airways', 'África Air',
    'Câmara de Comércio', 'Cimentos de STP',
    'Empresa Nacional de Combustíveis', 'Águas de STP',
    'Nestlé STP', 'Sociedade de Desenvolvimento',
    'Marítima STP', 'Empresa de Pescas'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Manufatura', 'Telecomunicações', 'Energia', 'Transportes',
    'Agricultura', 'Imobiliário', 'Consultoria', 'Turismo', 'Pesca'
  ],

  catchPhrases: [
    'Inovar para o futuro', 'O seu sucesso é o nosso negócio',
    'Construir o futuro juntos', 'Qualidade e confiança',
    'Excelência santomense', 'Crescer juntos'
  ]
};
