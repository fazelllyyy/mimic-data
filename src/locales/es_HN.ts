import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_HN: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Francisco', 'Manuel', 'Antonio',
    'Jorge', 'Marco', 'David', 'Óscar', 'Henry', 'Pedro', 'Mario',
    'Rigoberto', 'Roberto', 'Víctor', 'Edgardo', 'Héctor', 'Daniel', 'Rafael',
    'Nelson', 'Eduardo', 'Julio', 'César', 'Marlon', 'Alex', 'Kevin', 'Brayan'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Rosa', 'Sofía', 'Marta', 'Elena', 'Sandra',
    'Diana', 'Patricia', 'Gabriela', 'Karla', 'Leticia', 'Verónica', 'Silvia',
    'Andrea', 'Laura', 'Mónica', 'Alejandra', 'Beatriz', 'Lesly', 'Fernanda',
    'Xenia', 'Liliana', 'Iris', 'Karen', 'Melissa', 'Yolanda', 'Gladys', 'Miriam'
  ],
  lastNames: [
    'García', 'Hernández', 'Martínez', 'López', 'Rodríguez', 'Pérez', 'González',
    'Flores', 'Cruz', 'Ramírez', 'Rivera', 'Morales', 'Reyes', 'Díaz',
    'Castillo', 'Mendoza', 'Bermúdez', 'Valladares', 'Mejía', 'Álvarez',
    'Aguilar', 'Vásquez', 'Ortiz', 'Torres', 'Pineda', 'Alvarado', 'Zelaya', 'Lagos', 'Fuentes', 'Zavala'
  ],
  streets: [
    'Boulevard Morazán', 'Avenida Juan Pablo II', 'Calle Peatonal', 'Calle Real',
    'Avenida Circunvalación', 'Boulevard Centroamérica', 'Calle Principal',
    'Colonia Palmira', 'Colonia El Triunfo', 'Avenida Santos Guardiola',
    'Colonia Lomas del Guijarro', 'Avenida Cervantes', 'Boulevard Sur',
    'Carretera a Comayagua', 'Colonia Rubén Darío'
  ],
  cities: [
    'Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'Comayagua',
    'El Progreso', 'Choluteca', 'Danlí', 'Juticalpa', 'Puerto Cortés',
    'Catacamas', 'Yoro', 'Tela', 'Santa Rosa de Copán', 'Olanchito',
    'San Lorenzo', 'Cofradía', 'La Lima', 'Villanueva', 'Siguatepeque'
  ],
  states: [
    'Francisco Morazán', 'Cortés', 'Atlántida', 'Comayagua', 'Yoro',
    'Choluteca', 'Olancho', 'El Paraíso', 'Copán', 'Santa Bárbara',
    'Colón', 'Lempira', 'Intibucá', 'La Paz', 'Ocotepeque'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Sistemas', 'Gerente de Ventas', 'Abogado', 'Contador Público',
    'Médico General', 'Arquitecto', 'Ingeniero Civil', 'Profesor de Universidad',
    'Administrador de Empresas', 'Periodista', 'Mercadólogo', 'Diseñador Gráfico',
    'Analista de Negocios', 'Técnico en Redes', 'Economista'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas',
    'Operaciones', 'Servicio al Cliente', 'TI', 'Investigación y Desarrollo',
    'Legal', 'Gestión de Productos', 'Diseño', 'Aseguramiento de Calidad', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    return `${street} #${number}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+504 #### ####',
    '#### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'unah.edu.hn', 'tigo.hn', 'claro.com.hn', 'hondutel.hn'
  ],

  companyNames: [
    'Banco Atlántida', 'Cervecería Hondureña', 'Grupo Continental', 'Tigo Honduras',
    'Claro Honduras', 'Fosforera Centroamericana', 'Cargill Honduras',
    'Corporación Dinant', 'Granja Avícola Santa Inés', 'Banco de Occidente'
  ],

  industries: [
    'Tecnología', 'Agricultura', 'Finanzas', 'Manufactura', 'Construcción',
    'Turismo', 'Telecomunicaciones', 'Educación', 'Salud', 'Comercio'
  ],

  catchPhrases: [
    'Trabajo y progreso', 'Honduras es primero', 'Excelencia y compromiso',
    'Juntos construyendo futuro', 'Calidad que inspira confianza', 'Pasión por servir',
    'Innovación para el desarrollo', 'Un país de oportunidades'
  ]
};
