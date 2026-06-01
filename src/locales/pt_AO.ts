import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_AO: LocaleDefinition = {
  firstNamesMale: [
    'João', 'José', 'Manuel', 'António', 'Carlos', 'Francisco', 'Paulo',
    'Luís', 'Pedro', 'Miguel', 'Mário', 'Jorge', 'Ricardo', 'Fernando',
    'Rui', 'Nuno', 'André', 'David', 'Daniel', 'Eduardo', 'Adilson',
    'Valdemar', 'Hélder', 'Arnaldo', 'Domingos', 'Eusébio', 'Januário',
    'Gabriel', 'Leonardo', 'Mateus'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Isabel', 'Catarina', 'Sofia', 'Joana', 'Teresa',
    'Rosa', 'Filomena', 'Paula', 'Helena', 'Mariana', 'Beatriz', 'Inês',
    'Lúcia', 'Cláudia', 'Patrícia', 'Marta', 'Sandra', 'Cristina',
    'Fátima', 'Domingas', 'Albertina', 'Natália', 'Eulália', 'Francisca',
    'Olívia', 'Amélia', 'Aurora', 'Josefa'
  ],
  lastNames: [
    'Silva', 'Santos', 'Fernandes', 'Gonçalves', 'Rodrigues', 'Martins',
    'Lopes', 'Pereira', 'Dos Santos', 'Almeida', 'Simão', 'Caetano',
    'Tavares', 'Nascimento', 'Domingos', 'Vicente', 'André', 'Adriano',
    'Kiala', 'Isaías', 'Quituma', 'Tchipili', 'Cafunda', 'Katchiungo',
    'Ganja', 'Sambongo', 'Mbala', 'Vunge', 'Sebastião', 'Manuel'
  ],
  streets: [
    'Rua Amílcar Cabral', 'Avenida 4 de Fevereiro', 'Rua Rainha Ginga',
    'Avenida Ho Chi Min', 'Rua Alfredo Troni', 'Avenida Deolinda Rodrigues',
    'Rua dos Missionários', 'Avenida Revolução de Outubro',
    'Rua Comandante Sika', 'Avenida 11 de Novembro', 'Rua Salvador Allende',
    'Avenida Fidel Castro', 'Rua Karl Marx', 'Avenida Brasil',
    'Rua da Missão', 'Avenida 21 de Janeiro', 'Rua da Banda',
    'Avenida da Independência'
  ],
  cities: [
    'Luanda', 'Lubango', 'Huambo', 'Benguela', 'Cabinda', 'Namibe',
    'Lobito', 'Sumbe', 'Malanje', 'Kuito', 'Menongue', 'Uíge',
    'Saurimo', 'Dundo', "N'dalatando", 'Caxito', 'Ondjiva', 'Luena',
    'Mbanza Kongo', 'Caála', 'Catumbela', 'Cachiungo', 'Chibia',
    'Caconda', 'Porto Amboim'
  ],
  states: [
    'Luanda', 'Benguela', 'Huambo', 'Huíla', 'Cabinda',
    'Namibe', 'Kwanza Sul', 'Malanje', 'Bié', 'Cuando Cubango',
    'Uíge', 'Lunda Sul', 'Lunda Norte', 'Kwanza Norte',
    'Zaire', 'Moxico', 'Bengo', 'Kuando Kubango'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Engenheiro de Software', 'Gestor de Projectos', 'Analista de Dados',
    'Gestor de Marketing', 'Representante de Vendas', 'Contabilista',
    'Gestor de Recursos Humanos', 'Designer', 'Gestor de Operações',
    'Consultor Financeiro', 'Técnico de Redes', 'Administrador de Sistemas'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Finanças',
    'Operações', 'Atendimento ao Cliente', 'Tecnologias de Informação',
    'Pesquisa e Desenvolvimento', 'Jurídico', 'Logística'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    return `Casa ${houseNumber}, ${street}, Bairro ${Random.pick(['Central', 'Ingombota', 'Samba', 'Maianga', 'Talatona', 'Viana', 'Benfica', 'Kilamba'])}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+244 ### ### ###',
    '+244 91# ### ###',
    '+244 92# ### ###',
    '+244 93# ### ###',
    '+244 94# ### ###',
    '+244 95# ### ###',
    '9## ### ###',
    '91# ### ###',
    '92# ### ###',
    '93# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'netcabo.co.ao',
    'snet.co.ao', 'ebonet.net', 'angola.co.ao', 'nexus.ao'
  ],

  companyNames: [
    'Sonangol EP', 'Endiama EP', 'TAAG Angola Airlines', 'Unitel',
    'Banco Nacional de Angola', 'Banco BIC', 'Banco de Fomento Angola',
    'Standard Bank Angola', 'Movicel', 'ENSA Seguros',
    'Odebrecht Angola', 'Petromar', 'Choba', 'AngoGold',
    'SODIBA', 'ZAP', 'TV Zimbo', 'Edições Novembro'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Varejo',
    'Manufatura', 'Mídia', 'Telecomunicações', 'Energia', 'Transporte',
    'Imobiliário', 'Construção', 'Hotelaria', 'Mineração', 'Agricultura',
    'Pesca', 'Petróleo e Gás'
  ],

  catchPhrases: [
    'Inovando para o futuro',
    'O sucesso é a nossa missão',
    'Construindo Angola juntos',
    'Qualidade e excelência em primeiro lugar',
    'Comprometidos com o desenvolvimento',
    'O seu parceiro de confiança',
    'Soluções que transformam vidas'
  ]
};
