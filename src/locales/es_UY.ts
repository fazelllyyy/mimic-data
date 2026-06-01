import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_UY: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Pablo', 'Manuel', 'Antonio',
    'Jorge', 'Diego', 'Pedro', 'Mario', 'Rafael', 'Francisco', 'Alberto',
    'Roberto', 'Ricardo', 'Gustavo', 'Martín', 'Santiago', 'Andrés', 'Federico',
    'Nicolás', 'Gabriel', 'Marcelo', 'Álvaro', 'Joaquín', 'Bruno', 'Mateo', 'Ignacio'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Rosa', 'Elena', 'Marta', 'Sofía', 'Sandra',
    'Patricia', 'Diana', 'Gabriela', 'Laura', 'Mónica', 'Andrea', 'Verónica',
    'Silvia', 'Beatriz', 'Isabel', 'Adriana', 'Valentina', 'Florencia', 'Camila',
    'Lucía', 'Victoria', 'Valeria', 'Agustina', 'Julieta', 'Carolina', 'Paula', 'Daniela'
  ],
  lastNames: [
    'García', 'Martínez', 'Rodríguez', 'Hernández', 'Pérez', 'López', 'González',
    'Flores', 'Díaz', 'Silva', 'Ramírez', 'Cruz', 'Vázquez', 'Mendoza',
    'Moreno', 'Torres', 'Gutiérrez', 'Reyes', 'Uriarte', 'Suárez',
    'Pereira', 'Castro', 'Gómez', 'Álvarez', 'Píriz', 'Río', 'Da Costa', 'Soria', 'Selgas', 'Barreiro'
  ],
  streets: [
    '18 de Julio', 'Avenida Italia', 'Bulevar Artigas', 'Avenida Rivera',
    'Calle Colonia', 'Calle Soriano', 'Calle Durazno', 'Avenida Brasil',
    'Calle Río Negro', 'Calle Mercedes', 'Avenida 8 de Octubre',
    'Calle Chaná', 'Avenida Agraciada', 'Calle San José', 'Calle Paraguay'
  ],
  cities: [
    'Montevideo', 'Salto', 'Paysandú', 'Ciudad de la Costa', 'Las Piedras',
    'Rivera', 'Maldonado', 'Tacuarembó', 'Melo', 'Mercedes',
    'Artigas', 'Minas', 'San José de Mayo', 'Durazno', 'Florida',
    'Treinta y Tres', 'Rocha', 'San Carlos', 'Pando', 'Trinidad'
  ],
  states: [
    'Montevideo', 'Canelones', 'Maldonado', 'Salto', 'Paysandú',
    'Rivera', 'Tacuarembó', 'Artigas', 'Colonia', 'San José',
    'Durazno', 'Soriano', 'Río Negro', 'Lavalleja', 'Florida'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Contador', 'Abogado',
    'Médico', 'Profesor', 'Arquitecto', 'Licenciado en Marketing',
    'Administrador de Empresas', 'Economista', 'Ingeniero Civil', 'Periodista',
    'Diseñador Gráfico', 'Analista de Sistemas', 'Gestor de Recursos Humanos'
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
    const apt = Random.boolean() ? `, Apt. ${Random.int(1, 30)}` : '';
    return `${street} ${number}${apt}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+598 # #### ####',
    '+598 ## ### ###',
    '0# #### ####',
    '## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'adinet.com.uy', 'netgate.com.uy', 'montevideo.com.uy', 'ucu.edu.uy'
  ],

  companyNames: [
    'Antel', 'Banco República', 'ANCAP', 'UTE', 'CUTCSA',
    'Grupo Disco', 'Tienda Inglesa', 'Nuevo Siglo', 'FNC', 'Fábrica Nacional de Cerveza'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Energía', 'Agricultura', 'Transporte',
    'Telecomunicaciones', 'Turismo', 'Educación', 'Salud', 'Comercio'
  ],

  catchPhrases: [
    'Trabajo y progreso', 'Excelencia uruguaya', 'Compromiso con el país',
    'Innovación y tradición', 'Juntos construyendo futuro', 'Calidad y confianza',
    'Pasión por lo que hacemos', 'Un país de oportunidades'
  ]
};
