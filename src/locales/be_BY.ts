import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const be_BY: LocaleDefinition = {
  firstNamesMale: [
    'Alexander', 'Dmitry', 'Sergey', 'Ivan', 'Andrey', 'Mikhail', 'Alexey', 'Vladimir',
    'Nikolay', 'Pavel', 'Denis', 'Yevgeny', 'Yaroslav', 'Vladislav', 'Roman',
    'Viktor', 'Ilya', 'Kirill', 'Artyom', 'Artur', 'Yuri', 'Stanislav', 'Oleg',
    'Gleb', 'Danila', 'Timofey', 'Yegor', 'Maksim', 'Boris', 'Vasily'
  ],
  firstNamesFemale: [
    'Anna', 'Olga', 'Elena', 'Irina', 'Yulia', 'Natalia', 'Tatiana', 'Svetlana',
    'Anastasia', 'Marina', 'Darya', 'Alina', 'Ksenia', 'Ekaterina', 'Lyudmila',
    'Galina', 'Tamara', 'Nadezhda', 'Valentina', 'Oksana', 'Polina', 'Larisa',
    'Viktoria', 'Arina', 'Maria', 'Alexandra', 'Yana', 'Elizaveta', 'Veronika',
    'Margarita'
  ],
  lastNames: [
    'Ivanov', 'Petrov', 'Sidorov', 'Smirnov', 'Kuznetsov', 'Popov', 'Volkov',
    'Kozlov', 'Novikov', 'Kovalev', 'Zaitsev', 'Morozov', 'Solovyov', 'Vasilyev',
    'Mikhailov', 'Fedorov', 'Belov', 'Semenov', 'Frolov', 'Yakovlev', 'Bogdanov',
    'Kiselev', 'Alexandrov', 'Romanov', 'Tarasov', 'Grigoryev', 'Savin', 'Golubev',
    'Tikhonov', 'Baranovsky'
  ],
  streets: [
    'Independence Avenue', 'Victory Avenue', 'Francysk Skaryna Street',
    'Kirova Street', 'Lenina Street', 'Pobediteley Avenue', 'Nemiga Street',
    'Moscow Street', 'Mayakovskogo Street', 'Yanka Kupala Street',
    'Partizansky Avenue', 'Dzerzhinsky Street', 'Pervomaiskaya Street',
    'Sovetskaya Street', 'Gorky Street', 'Pushkina Street', 'Komsomolskaya Street',
    'Molodyozhnaya Street', 'Pritytskogo Street', 'Rokossovsky Street'
  ],
  cities: [
    'Minsk', 'Gomel', 'Mogilev', 'Vitebsk', 'Grodno', 'Brest', 'Bobruysk',
    'Baranovichi', 'Borisov', 'Pinsk', 'Orsha', 'Mozyr', 'Novopolotsk',
    'Lida', 'Soligorsk', 'Slutsk', 'Zhlobin', 'Rechitsa', 'Kobrin', 'Molodechno'
  ],
  states: [
    'Brest Region', 'Gomel Region', 'Grodno Region', 'Minsk Region',
    'Mogilev Region', 'Vitebsk Region'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Inzhynier Prgramnaga Zabespyachennya', 'Manager Prajekta', 'Analitik Danykh', 'Marketingovy Menedzher',
    'Pradstavnik Pa Prodazhakh', 'Buhgalter', 'Menedzher pa Kadravyh Pytannyakh', 'Dyzayner',
    'Apieratsyiny Manager', 'Biznes-analitik', 'Product Manager',
    'Sistamny Administrator', 'Inzhynier Yakastsi', 'Tekhnichny Pisar'
  ],
  departments: [
    'Inzhynirynh', 'Marketing', 'Stazh', 'Lyudskiya Resursy', 'Finansy',
    'Apieratsii', 'Padtrymka Kliyentau', 'IT', 'DASledavanne i Razvitstso',
    'Yurydychny Addzel', 'Administratsyya'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street}, ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+375 ## ### ####',
    '8 0## ### ####',
    '+375 (0##) ### ####',
    '8 02# ### ####',
    '8 01# ### ####',
    '8 029 ### ####',
    '8 033 ### ####',
    '8 044 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yandex.by', 'mail.ru', 'tut.by', 'yandex.ru',
    'outlook.com', 'yahoo.com', 'gmx.com', 'protonmail.com', 'rambler.ru'
  ],

  companyNames: [
    'Belarusian Potash Company', 'MTZ Minsk Tractor Works', 'MAZ Minsk Automobile Plant',
    'Belarusneft', 'BelAZ', 'Horizon', 'Atlant', 'Milavitsa', 'Marko',
    'Beltelecom', 'Belgazprombank', 'Priorbank', 'Belinvestbank',
    'Belarusbank', 'Belshina', 'Naftan', 'Grodno Azot', 'Mozyr Oil Refinery',
    'Integral', 'Savushkin Product'
  ],

  industries: [
    'Technologii', 'Finansy', 'Akhova Zdarow\'ya', 'Adukatsyya', 'Robel',
    'Vyrobnytstva', 'Medya', 'Telekomunikatsii', 'Energetyka', 'Transport',
    'Nerukhomast', 'Kansaltynh', 'Gateli', 'Aўtamabilnaya Pramyslovast', 'Aviatsyya'
  ],

  catchPhrases: [
    'Innovatsii dlya budushchego', 'Vash uspekh nashe delo', 'Stroim budushchee vmeste',
    'Kachestvo i doverie', 'Sovershenstvo i predannost', 'Ustoichivye resheniya',
    'Sozdaem tsennost', 'Vash nadezhny partner', 'Vedem peremeny'
  ]
};
