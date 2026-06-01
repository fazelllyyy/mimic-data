import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_CU: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Pedro', 'Manuel', 'Antonio',
    'Jorge', 'Ramón', 'Alberto', 'Francisco', 'Raúl', 'Enrique', 'Alejandro',
    'Reynaldo', 'Omar', 'Yosvani', 'Lázaro', 'Orlando', 'Rolando', 'Mario',
    'Sergio', 'Iván', 'Julio', 'Rafael', 'Ángel', 'Víctor', 'Ernesto', 'Roberto'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Ana', 'Rosa', 'Marta', 'Juana', 'Milagros', 'Caridad',
    'Lourdes', 'Yolanda', 'Gloria', 'Nancy', 'Nilda', 'Yanet', 'Mónica',
    'Mayra', 'Lidia', 'Sandra', 'Yamila', 'Liz', 'Alicia', 'Lisset',
    'Dora', 'Bertha', 'Miriam', 'Elsa', 'Teresa', 'Celia', 'Yanara', 'Susana'
  ],
  lastNames: [
    'Rodríguez', 'García', 'Hernández', 'Martínez', 'Pérez', 'López', 'González',
    'Díaz', 'Fernández', 'Sánchez', 'Ramírez', 'Álvarez', 'Morales', 'Cruz',
    'Torres', 'Gutiérrez', 'Reyes', 'Ruiz', 'Mendoza', 'Castillo', 'Ortiz',
    'Medina', 'Moreno', 'Rivero', 'Jiménez', 'Ponce', 'Pardo', 'Vázquez', 'Lara', 'Rojas'
  ],
  streets: [
    'Calle 23', 'Calle Infanta', 'Calle Línea', 'Avenida 5ta', 'Avenida Primera',
    'Calle 12', 'Calle 31', 'Calle 70', 'Avenida Paseo', 'Calle 21',
    'Avenida 31A', 'Calle Concordia', 'Calle Galiano', 'Avenida de los Presidentes',
    'Calle San Lázaro', 'Calle Crespo', 'Calle 15', 'Avenida 7ma', 'Calle 80', 'Calle 100'
  ],
  cities: [
    'La Habana', 'Santiago de Cuba', 'Camagüey', 'Holguín', 'Santa Clara',
    'Guantánamo', 'Bayamo', 'Cienfuegos', 'Pinar del Río', 'Matanzas',
    'Ciego de Ávila', 'Moa', 'Manzanillo', 'Las Tunas', 'Sancti Spíritus',
    'Artemisa', 'Nueva Gerona', 'Morón', 'Mayabeque', 'San José de las Lajas'
  ],
  states: [
    'La Habana', 'Santiago de Cuba', 'Camagüey', 'Holguín', 'Villa Clara',
    'Guantánamo', 'Granma', 'Pinar del Río', 'Matanzas', 'Cienfuegos',
    'Las Tunas', 'Sancti Spíritus', 'Ciego de Ávila', 'Artemisa', 'Mayabeque'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Médico', 'Gerente de Proyecto', 'Profesor',
    'Contador', 'Arquitecto', 'Periodista', 'Abogado',
    'Técnico en Informática', 'Economista', 'Ingeniero Civil', 'Diseñador Gráfico',
    'Investigador', 'Administrador de Empresas', 'Ingeniero Agrónomo'
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
    const floor = Random.int(1, 15);
    const apt = String.fromCharCode(65 + Random.int(0, 5));
    return `${street} No. ${number}, Piso ${floor}, ${apt}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+53 # ### ####',
    '+53 ## ### ###',
    '## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'nauta.cu', 'infomed.sld.cu',
    'cubadebate.cu', 'enet.cu', 'minvers.cu'
  ],

  companyNames: [
    'Cubanacán', 'CIMEX', 'Habanos S.A.', 'Cubana de Aviación',
    'Empresa Nacional de Turismo', 'Cuba Ron S.A.', 'Empresa de Telecomunicaciones de Cuba',
    'Banca Cubana', 'Cubasol', 'BioCubaFarma'
  ],

  industries: [
    'Turismo', 'Tecnología', 'Salud', 'Educación', 'Agricultura',
    'Telecomunicaciones', 'Construcción', 'Transporte', 'Comercio', 'Medicina'
  ],

  catchPhrases: [
    'Patria y vida', 'Hasta la victoria siempre', 'Unidad y compromiso',
    'Trabajo y dedicación', 'Por un futuro mejor', 'Solidaridad y progreso',
    'Innovación cubana', 'Calidad y tradición'
  ]
};
