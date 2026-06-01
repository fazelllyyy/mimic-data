import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_GW: LocaleDefinition = {
  firstNamesMale: [
    'João', 'José', 'Manuel', 'Carlos', 'António', 'Francisco', 'Mário',
    'Pedro', 'Paulo', 'Luís', 'Rui', 'Bruno', 'Ricardo', 'Hugo', 'André',
    'Nuno', 'David', 'Daniel', 'Jorge', 'Fernando', 'Sérgio', 'Vítor',
    'Eduardo', 'Marco', 'Rafael', 'Diogo', 'Tiago', 'Fábio', 'Amadu',
    'Mamadu', 'Suleimane', 'Bubacar', 'Umaro', 'Djamal'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Beatriz', 'Sofia', 'Mariana', 'Inês', 'Carolina',
    'Catarina', 'Rita', 'Joana', 'Teresa', 'Helena', 'Isabel',
    'Sara', 'Marta', 'Margarida', 'Diana', 'Alice', 'Lara', 'Leonor',
    'Cláudia', 'Sandra', 'Patrícia', 'Lúcia', 'Rosa', 'Carla', 'Mónica',
    'Fatumata', 'Aissato', 'Mariama', 'Ussumane'
  ],
  lastNames: [
    'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues',
    'Martins', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques',
    'Alves', 'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira',
    'Correia', 'Mendes', 'Nunes', 'Soares', 'Monteiro',
    'Sissé', 'Camará', 'Djaló', 'Indi', 'Nhaga', 'Turé'
  ],
  streets: [
    'Avenida dos Combatentes da Liberdade', 'Rua Principal',
    'Avenida da Independência', 'Rua do Comércio',
    'Avenida Pansau Na Isna', 'Rua de São José',
    'Avenida Amílcar Cabral', 'Rua do Hospital',
    'Avenida da República', 'Rua da Liberdade',
    'Avenida do Palácio', 'Rua dos Bancos',
    'Avenida de Portugal', 'Rua do Mercado',
    'Avenida da Unidade', 'Rua da Igreja',
    'Avenida de Bissau', 'Rua dos Pescadores',
    'Bairro de Belém', 'Estrada de Bor'
  ],
  cities: [
    'Bissau', 'Bafatá', 'Gabú', 'Cacheu', 'Bolama', 'Quinhámel',
    'São Domingos', 'Bissorã', 'Mansoa', 'Catió', 'Bambadinca',
    'Buba', 'Farim', 'Binar', 'Ingoré', 'Piche', 'Nova Lamego',
    'Canchungo', 'Teixeira Pinto', 'Nhacra'
  ],
  states: [
    'Bissau', 'Bafatá', 'Biombo', 'Bolama', 'Cacheu', 'Gabú',
    'Oio', 'Quinara', 'Tombali'
  ],
  zipCodePattern: '####',
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
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+245 ## ####',
    '+245 9## ####',
    '+245 6## ####',
    '9## ####',
    '6## ####',
    '91# ####',
    '92# ####',
    '96# ####',
    '97# ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'guinetel.com', 'africa.com', 'bissaunet.com', 'sapo.gw', 'spacetoon.gw'
  ],

  companyNames: [
    'GuineTel', 'Orange Guiné-Bissau', 'MTN Guiné-Bissau',
    'Ecobank Guiné-Bissau', 'Banco da União', 'Banco da África Ocidental',
    'Cores da Guiné', 'Nestlé Guiné-Bissau',
    'Companhia de Moçambique', 'Moinhos da Guiné',
    'Cimpor Guiné-Bissau', 'Águas da Guiné',
    'Bolloré Guiné-Bissau', 'Pesca Nova',
    'Galinha Branca', 'Sociedade do Tabaco'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Manufatura', 'Telecomunicações', 'Energia', 'Transportes',
    'Agricultura', 'Imobiliário', 'Consultoria', 'Pesca', 'Turismo'
  ],

  catchPhrases: [
    'Inovar para o futuro', 'O seu sucesso é o nosso negócio',
    'Construir o futuro juntos', 'Qualidade e confiança',
    'Excelência guineense', 'Crescer juntos'
  ]
};
