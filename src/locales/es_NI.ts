import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_NI: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Francisco', 'Manuel', 'Antonio',
    'Pedro', 'Mario', 'Jorge', 'David', 'Rafael', 'Roberto', 'Julio',
    'Henry', 'Óscar', 'César', 'Eduardo', 'Víctor', 'Marlon', 'Daniel',
    'Edwin', 'Marvin', 'Bayardo', 'Ernesto', 'Lenín', 'Sergio', 'Ramiro', 'Wilfredo'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Rosa', 'Marta', 'Elena', 'Sofía', 'Sandra',
    'Patricia', 'Diana', 'Gabriela', 'Karla', 'Leticia', 'Silvia', 'Mónica',
    'Andrea', 'Laura', 'Verónica', 'Alejandra', 'Beatriz', 'Iris', 'Julia',
    'Xenia', 'Claudia', 'Mayra', 'Glenda', 'Liliam', 'Yadira', 'Azucena', 'Nubia'
  ],
  lastNames: [
    'García', 'Hernández', 'Martínez', 'López', 'Rodríguez', 'Pérez', 'González',
    'Flores', 'Cruz', 'Ramírez', 'Rivera', 'Morales', 'Reyes', 'Díaz',
    'Castillo', 'Mendoza', 'Gutiérrez', 'Torres', 'Espinoza', 'Molina',
    'Talavera', 'Báez', 'Sandoval', 'Chávez', 'Lacayo', 'Medina', 'Solórzano', 'Alemán', 'Cuadra', 'Mayorga'
  ],
  streets: [
    'Pista Juan Pablo II', 'Carretera Masaya', 'Carretera Norte', 'Avenida Bolívar',
    'Calle Principal', 'Pista de la Resistencia', 'Calle Central', 'Avenida del Ejército',
    'Boulevard Jean Paul Genie', 'Calle 27 de Mayo', 'Calle Rubén Darío',
    'Avenida Peatonal', 'Colonia Centroamérica', 'Colonial Los Robles',
    'Boulevard de los Mártires'
  ],
  cities: [
    'Managua', 'León', 'Masaya', 'Granada', 'Estelí',
    'Chinandega', 'Matagalpa', 'Jinotega', 'Tipitapa', 'Ciudad Sandino',
    'Juigalpa', 'Rivas', 'Nueva Guinea', 'Ocotal', 'Rosita',
    'Somoto', 'Boaco', 'Puerto Cabezas', 'El Viejo', 'Diriamba'
  ],
  states: [
    'Managua', 'León', 'Masaya', 'Granada', 'Estelí',
    'Chinandega', 'Matagalpa', 'Jinotega', 'Rivas', 'Boaco',
    'Carazo', 'Nueva Segovia', 'Madriz', 'Chontales', 'Región Autónoma de la Costa Caribe Norte'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Sistemas', 'Gerente de Ventas', 'Contador', 'Abogado',
    'Médico', 'Profesor', 'Ingeniero Civil', 'Arquitecto',
    'Administrador de Empresas', 'Periodista', 'Economista', 'Mercadólogo',
    'Diseñador Gráfico', 'Técnico en TI', 'Gerente de Recursos Humanos'
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
    const distance = Random.pick(['200m al Sur', '100m al Este', '150m al Norte', '50m al Oeste', 'Media cuadra']);
    return `${street} #${number}, ${distance}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+505 #### ####',
    '#### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'claro.com.ni', 'tigo.com.ni', 'unan.edu.ni', 'movistar.com.ni'
  ],

  companyNames: [
    'Banco de la Producción', 'Claro Nicaragua', 'Tigo Nicaragua',
    'Cervecería Nacional', 'Lácteos Centroamericanos', 'Grupo Lala Nicaragua',
    'Flor de Caña', 'Gasolineras UNO', 'Grupo Q Nicaragua', 'Distribuidora García'
  ],

  industries: [
    'Tecnología', 'Agricultura', 'Finanzas', 'Ganadería', 'Turismo',
    'Construcción', 'Telecomunicaciones', 'Educación', 'Salud', 'Comercio'
  ],

  catchPhrases: [
    'Nicaragua es nuestra casa', 'Trabajo y dedicación', 'Compromiso con la excelencia',
    'Juntos construyendo sueños', 'Innovación con sabor nica', 'Calidad que trasciende',
    'Pasión y progreso', 'Un futuro mejor para todos'
  ]
};
