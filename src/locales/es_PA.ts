import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_PA: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Ricardo', 'Manuel', 'Antonio',
    'Jorge', 'David', 'Pedro', 'Mario', 'Rafael', 'Francisco', 'Alberto',
    'Roberto', 'Óscar', 'Víctor', 'Eduardo', 'Julio', 'Fernando', 'Diego',
    'César', 'Sergio', 'Gabriel', 'Alejandro', 'Pablo', 'Enrique', 'Alonso', 'Rolando'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Rosa', 'Elena', 'Marta', 'Sofía', 'Sandra',
    'Patricia', 'Diana', 'Gabriela', 'Karla', 'Leticia', 'Mónica', 'Andrea',
    'Laura', 'Verónica', 'Alejandra', 'Beatriz', 'Isabel', 'Yolanda', 'Mayra',
    'Natalia', 'Claudia', 'Viviana', 'Liliana', 'Adriana', 'Silvia', 'Marina', 'Jimena'
  ],
  lastNames: [
    'García', 'Martínez', 'Rodríguez', 'Hernández', 'Pérez', 'López', 'González',
    'Flores', 'Díaz', 'Castillo', 'Cruz', 'Ramírez', 'Torres', 'Mendoza',
    'Moreno', 'Arosemena', 'Quintero', 'Ortega', 'Correa', 'Vásquez',
    'Arias', 'Rivas', 'Sánchez', 'Alemán', 'Espino', 'De León', 'Valdés', 'Cedeño', 'Polo', 'Mitre'
  ],
  streets: [
    'Vía Argentina', 'Vía España', 'Calle 50', 'Avenida Central', 'Boulevard El Dorado',
    'Avenida Balboa', 'Calle Ricardo Arias', 'Avenida Fernández de Córdoba',
    'Calle 76', 'Calle 13', 'Transístmica', 'Corredor Sur', 'Avenida de los Mártires',
    'Calle 5ta', 'Calle 3ra'
  ],
  cities: [
    'Ciudad de Panamá', 'Colón', 'David', 'La Chorrera', 'Penonomé',
    'Santiago de Veraguas', 'Chitré', 'Las Tablas', 'Bocas del Toro', 'Aguadulce',
    'Arraiján', 'San Miguelito', 'Tocumen', 'Chepo', 'Changuinola',
    'Puerto Armuelles', 'La Concepción', 'La Palestina', 'El Coco', 'Vista Alegre'
  ],
  states: [
    'Panamá', 'Colón', 'Chiriquí', 'Panamá Oeste', 'Veraguas',
    'Herrera', 'Los Santos', 'Coclé', 'Bocas del Toro', 'Darién',
    'Kuna Yala', 'Emberá', 'Ngäbe-Buglé'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Contador', 'Abogado',
    'Ejecutivo de Ventas', 'Médico', 'Arquitecto', 'Profesor',
    'Administrador de Empresas', 'Ingeniero Civil', 'Analista de Datos', 'Marketing Digital',
    'Gerente de Recursos Humanos', 'Analista Financiero', 'Diseñador Gráfico'
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
    const building = Random.pick(['Edificio', 'Torre', 'Plaza']);
    const buildingName = Random.pick(['Galeria', 'Concorde', 'Global', 'Condesa', 'Boreal']);
    return `${street}, ${building} ${buildingName} No. ${number}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+507 #### ####',
    '#### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'cwpanama.net', 'pancanal.com', 'udelas.ac.pa', 'utp.ac.pa'
  ],

  companyNames: [
    'Banco General', 'Copa Airlines', 'Colgate-Palmolive Panamá',
    'Grupo Melo', 'Empresa de Transmisión Eléctrica', 'Motta Internacional',
    'Súper 99', 'Banistmo', 'Panamá Ports', 'Cable & Wireless Panamá'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Transporte', 'Logística', 'Turismo',
    'Construcción', 'Telecomunicaciones', 'Comercio', 'Salud', 'Educación'
  ],

  catchPhrases: [
    'Puerta abierta al mundo', 'Innovación y excelencia', 'Compromiso con el progreso',
    'Juntos hacia el futuro', 'Calidad panameña', 'Liderazgo y dedicación',
    'Crecimiento sostenible', 'Pasión por servir'
  ]
};
