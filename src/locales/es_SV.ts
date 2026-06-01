import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_SV: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Francisco', 'Manuel', 'Antonio',
    'Jorge', 'David', 'Mario', 'Óscar', 'Rafael', 'Pedro', 'Henry',
    'René', 'Víctor', 'Roberto', 'Edgar', 'Hugo', 'Marvin', 'Samuel',
    'Eduardo', 'Diego', 'Alexánder', 'Julio', 'César', 'Wilfredo', 'Daniel', 'Ricardo'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Rosa', 'Sofía', 'Marta', 'Elena', 'Sandra',
    'Claudia', 'Diana', 'Patricia', 'Gabriela', 'Karla', 'Leticia', 'Silvia',
    'Laura', 'Verónica', 'Mónica', 'Andrea', 'Beatriz', 'Iris', 'Julia',
    'Glenda', 'Xenia', 'Liliana', 'Yanira', 'Esmeralda', 'Fátima', 'Isabel', 'Mayra'
  ],
  lastNames: [
    'Martínez', 'García', 'Hernández', 'López', 'Rodríguez', 'Pérez', 'González',
    'Rivera', 'Ramírez', 'Flores', 'Díaz', 'Reyes', 'Cruz', 'Morales',
    'Mejía', 'Mendoza', 'Portillo', 'Vásquez', 'Villatoro', 'Alvarado',
    'Aguilar', 'Castillo', 'Molina', 'Navarro', 'Rivas', 'Orellana', 'Huezo', 'Miranda', 'Lemus', 'Quintanilla'
  ],
  streets: [
    'Paseo General Escalón', 'Alameda Franklin Delano Roosevelt', 'Avenida Masferrer',
    'Calle San Antonio Abad', 'Boulevard de los Héroes', 'Calle El Progreso',
    'Avenida Cuscatlán', 'Calle Gerardo Barrios', 'Boulevard del Ejército Nacional',
    'Calle Circunvalación', 'Avenida Bernal', 'Calle San Salvador',
    'Avenida La Revolución', 'Calle Santa Marta', 'Calle Las Palmas'
  ],
  cities: [
    'San Salvador', 'Santa Ana', 'San Miguel', 'Soyapango', 'Mejicanos',
    'Apopa', 'Santa Tecla', 'Zacatecoluca', 'Ahuachapán', 'Usulután',
    'Sonsonate', 'San Vicente', 'Cojutepeque', 'Chalatenango', 'Metapán',
    'Ilobasco', 'Chinameca', 'Jiquilisco', 'Santiago de María', 'San Francisco Gotera'
  ],
  states: [
    'San Salvador', 'Santa Ana', 'San Miguel', 'La Libertad', 'Usulután',
    'Sonsonate', 'La Paz', 'Chalatenango', 'Ahuachapán', 'Cuscatlán',
    'Morazán', 'Cabañas', 'San Vicente', 'La Unión'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Ventas', 'Contador', 'Abogado',
    'Médico', 'Profesor', 'Diseñador Gráfico', 'Administrador de Empresas',
    'Analista Financiero', 'Arquitecto', 'Ingeniero Industrial', 'Periodista',
    'Marketing Digital', 'Técnico en Sistemas', 'Gerente de Recursos Humanos'
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
    const number = Random.int(1, 5000);
    return `Colonia ${Random.pick(['Escalón', 'San Benito', 'Cuscatlán', 'El Paraíso', 'La Mascota', 'Montefresco', 'Flor Blanca'])}, Calle ${street} #${number}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1101, 99999));
  },

  phoneFormats: [
    '+503 #### ####',
    '#### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'sv.edu.sv', 'telefonica.com', 'navegante.com.sv', 'live.com'
  ],

  companyNames: [
    'Grupo Roble', 'Banco Agrícola', 'Tigo El Salvador', 'Claro El Salvador',
    'La Constancia', 'Holcim El Salvador', 'Grupo Calleja', 'Pollo Campestre',
    'Avianca El Salvador', 'Banco de América Central'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Agricultura', 'Manufactura', 'Turismo',
    'Construcción', 'Telecomunicaciones', 'Educación', 'Salud', 'Textiles'
  ],

  catchPhrases: [
    'Trabajar por El Salvador', 'Innovación y desarrollo', 'Compromiso con el país',
    'Calidad y servicio', 'Juntos hacia el progreso', 'Pasión por la excelencia',
    'Crecimiento sostenible', 'Liderazgo y dedicación'
  ]
};
