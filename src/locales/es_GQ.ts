import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_GQ: LocaleDefinition = {
  firstNamesMale: [
    'Antonio', 'Manuel', 'José', 'Francisco', 'Juan', 'Pedro', 'Carlos', 'David',
    'Miguel', 'Javier', 'Daniel', 'Rafael', 'Pablo', 'Jesús', 'Ángel', 'Luis',
    'Alejandro', 'Fernando', 'Jorge', 'Santiago', 'Diego', 'Andrés', 'Vicente',
    'Jaime', 'Ignacio', 'Alberto', 'Eduardo', 'Francisco Javier', 'Juan Manuel', 'José Antonio'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Isabel', 'Carmen', 'Teresa', 'Rosa', 'Lucía', 'Paula',
    'Sara', 'Laura', 'Elena', 'Cristina', 'Beatriz', 'Sofía', 'Andrea',
    'Nuria', 'Silvia', 'Patricia', 'Raquel', 'Marina', 'Clara', 'Irene',
    'Julia', 'Natalia', 'Rocío', 'Eva', 'Mónica', 'Susana', 'Dolores', 'Pilar'
  ],
  lastNames: [
    'García', 'Fernández', 'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez',
    'Gómez', 'Martín', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Muñoz',
    'Álvarez', 'Romero', 'Alonso', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez',
    'Vázquez', 'Ramos', 'Gil', 'Ramírez', 'Serrano', 'Blanco', 'Molina'
  ],
  streets: [
    'Avenida de la Independencia', 'Calle de la Libertad', 'Avenida de la República',
    'Calle del Comercio', 'Avenida Hassan II', 'Calle de la Paz',
    'Avenida de la Playa', 'Calle del Mercado', 'Calle de la Estación',
    'Boulevard de la Unidad', 'Avenida de la Amistad', 'Calle del Hospital',
    'Avenida del Mar', 'Calle de la Escuela', 'Calle Principal',
    'Avenida del Presidente', 'Calle de la Iglesia', 'Carretera Nacional'
  ],
  cities: [
    'Malabo', 'Bata', 'Ebebiyín', 'Evinayong', 'Mongomo', 'Añisoc', 'Luba',
    'Palé', 'Niefang', 'Mikomeseng', 'Mbini', 'Nsok', 'Nsork', 'Ayene',
    'Aconibe', 'Acurenam', 'Bicurga', 'Corisco', 'Riaba', 'San Antonio de Palé',
    'Machinda', 'Mbengon', 'Mínfula', 'Ncue'
  ],
  states: [
    'Bioko Norte', 'Bioko Sur', 'Litoral', 'Centro Sur', 'Kié-Ntem', 'Wele-Nzas',
    'Annobón'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Jefe de Proyecto', 'Analista de Datos', 'Responsable de Marketing',
    'Comercial', 'Contable', 'Jefe de Recursos Humanos', 'Diseñador',
    'Responsable de Operaciones', 'Analista de Negocio', 'Jefe de Producto',
    'Administrador de Sistemas'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas', 'Operaciones',
    'Atención al Cliente', 'Tecnología de la Información', 'Investigación y Desarrollo',
    'Legal'
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
    '+240 ## ### ####',
    '## ### ####',
    '+240 222 ### ###',
    '+240 333 ### ###',
    '+240 555 ### ###',
    '+240 777 ### ###',
    '222 ### ###',
    '333 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.es', 'hotmail.es', 'icloud.com',
    'orange.gq', 'getesa.gq', 'hipernet.gq'
  ],

  companyNames: [
    'GEPetrol', 'EG LNG', 'Sonagas', 'Guinea Ecuatorial Airlines',
    'Banco Nacional de Guinea Ecuatorial', 'Banco de Crédito y Desarrollo',
    'Compañía de Petróleos de Guinea Ecuatorial', 'Hess Equatorial Guinea',
    'Getesa', 'Orange Guinea Ecuatorial', 'Hipernet',
    'Hotel Bahía', 'Hotel President', 'Compañía Nacional de Electricidad',
    'Puertos de Guinea Ecuatorial', 'Sociedad de Seguros de Guinea Ecuatorial'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Venta minorista',
    'Telecomunicaciones', 'Energía', 'Transporte', 'Petróleo y Gas',
    'Construcción', 'Turismo', 'Agricultura', 'Pesca'
  ],

  catchPhrases: [
    'Innovando para Guinea Ecuatorial', 'Su éxito es nuestra prioridad',
    'Construyendo el futuro juntos', 'Calidad y confianza',
    'Excelencia en el servicio', 'Su socio de confianza en el progreso'
  ]
};
