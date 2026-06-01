import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_CV: LocaleDefinition = {
  firstNamesMale: [
    'João', 'José', 'Manuel', 'Carlos', 'António', 'Francisco', 'Miguel',
    'Pedro', 'Paulo', 'Luís', 'Rui', 'Bruno', 'Ricardo', 'Hugo', 'André',
    'Nuno', 'David', 'Daniel', 'Jorge', 'Mário', 'Fernando', 'Sérgio',
    'Vítor', 'Eduardo', 'Marco', 'Rafael', 'Diogo', 'Tiago', 'Fábio'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Beatriz', 'Sofia', 'Mariana', 'Inês', 'Carolina',
    'Catarina', 'Rita', 'Joana', 'Francisca', 'Teresa', 'Helena', 'Isabel',
    'Sara', 'Marta', 'Margarida', 'Diana', 'Alice', 'Lara', 'Leonor',
    'Cláudia', 'Sandra', 'Patrícia', 'Lúcia', 'Rosa', 'Carla', 'Mónica'
  ],
  lastNames: [
    'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues',
    'Martins', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques',
    'Alves', 'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira', 'Moreira',
    'Correia', 'Mendes', 'Nunes', 'Soares', 'Vieira', 'Monteiro', 'Rocha',
    'Cardoso', 'Neves'
  ],
  streets: [
    'Avenida Cidade de Lisboa', 'Rua 5 de Julho', 'Avenida Amílcar Cabral',
    'Rua da Liberdade', 'Avenida da Independência', 'Rua de Moçambique',
    'Avenida dos Descobrimentos', 'Rua de São Pedro', 'Avenida da Praia',
    'Rua dos Pescadores', 'Avenida de São Vicente', 'Rua de Santo António',
    'Avenida do Mar', 'Rua da Igreja', 'Avenida da Primavera',
    'Rua do Hospital', 'Avenida de Ceuta', 'Rua do Mercado',
    'Avenida da República', 'Rua Principal'
  ],
  cities: [
    'Praia', 'Mindelo', 'Santa Maria', 'Assomada', 'São Filipe', 'Espargos',
    'Tarrafal', 'Porto Novo', 'Ribeira Brava', 'Cidade Velha',
    'Sal Rei', 'Vila do Maio', 'Ponta do Sol', 'Calheta', 'Pedra Badejo',
    'São Domingos', 'Santa Cruz', 'Picos', 'Ribeira Grande', 'Mosteiros'
  ],
  states: [
    'Santiago', 'São Vicente', 'Santo Antão', 'Fogo', 'Sal',
    'Boa Vista', 'Maio', 'Brava', 'São Nicolau', 'Barlavento'
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
    '+238 ### ## ##',
    '+238 9## ## ##',
    '9## ## ##',
    '91# ## ##',
    '92# ## ##',
    '93# ## ##',
    '97# ## ##',
    '98# ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'cvtelecom.cv', 'stp.net', 'africa.com', 'sapo.cv', 'cvmail.cv'
  ],

  companyNames: [
    'CV Telecom', 'Unitel T+', 'Banco de Cabo Verde', 'Caixa Económica',
    'Ecobank Cabo Verde', 'Bank of Africa CV',
    'Cabo Verde Airlines', 'Transportes Aéreos de Cabo Verde',
    'Enacol', 'CEG Energia',
    'Águas de Santiago', 'Sociedade de Desenvolvimento',
    'Aeroporto de Cabo Verde', 'Portos de Cabo Verde',
    'Cabo Verde Fast Ferry', 'Cimpor Cabo Verde',
    'TACV' 
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Manufatura', 'Média', 'Telecomunicações', 'Energia', 'Transportes',
    'Imobiliário', 'Consultoria', 'Hotelaria', 'Turismo'
  ],

  catchPhrases: [
    'Inovar no futuro', 'O seu sucesso é o nosso negócio',
    'Construir o futuro juntos', 'Qualidade e confiança',
    'Excelência cabo-verdiana', 'Crescer em união'
  ]
};
