import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ms_BN: LocaleDefinition = {
  firstNamesMale: [
    'Ahmad', 'Ali', 'Hassan', 'Ismail', 'Ibrahim', 'Mohd', 'Abdullah', 'Yusof',
    'Rahman', 'Aziz', 'Zulkifli', 'Hamid', 'Halim', 'Hakim', 'Amin', 'Rashid',
    'Fahmi', 'Faiz', 'Hafiz', 'Amirul', 'Danial', 'Syafiq', 'Iqbal', 'Haikal',
    'Rizal', 'Ammar', 'Zikri', 'Arif', 'Ashraf', 'Firdaus', 'Nabil', 'Hakimi'
  ],
  firstNamesFemale: [
    'Siti', 'Nur', 'Norain', 'Farah', 'Aisha', 'Zainab', 'Fatimah', 'Maryam',
    'Amira', 'Sarah', 'Alya', 'Nadia', 'Sofea', 'Hanna', 'Aisyah', 'Najwa',
    'Qistina', 'Irdina', 'Balqis', 'Ain', 'Nasuha', 'Izyan', 'Natasha', 'Erina',
    'Fatin', 'Hanis', 'Syahirah', 'Insyirah', 'Marissa', 'Zulaikha', 'Nabila'
  ],
  lastNames: [
    'Abdullah', 'Ahmad', 'Mohamed', 'Ibrahim', 'Hassan', 'Ismail', 'Rahman', 'Ali',
    'Omar', 'Osman', 'Yusof', 'Aziz', 'Hamid', 'Salleh', 'Idris', 'Daud', 'Bakar',
    'Mansor', 'Hussain', 'Yasin', 'Karim', 'Samad', 'Sulaiman', 'Hashim', 'Ramli',
    'Harun', 'Wahab', 'Zain', 'Latif', 'Rashid', 'Ghani', 'Nasir', 'Rahim'
  ],
  streets: [
    'Jalan Sultan', 'Jalan Raja', 'Jalan McArthur', 'Jalan Roberts', 'Jalan Kianggeh',
    'Jalan Gadong', 'Jalan Muara', 'Jalan Tutong', 'Jalan Seria', 'Jalan Kuala Belait',
    'Jalan Sungai Akar', 'Jalan Pasir Berakas', 'Jalan Subok', 'Jalan Kota Batu',
    'Jalan Lambak Kanan', 'Jalan Tanjung Bunut', 'Jalan Bengkurong', 'Jalan Masjid'
  ],
  cities: [
    'Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong', 'Bangar',
    'Muara', 'Jerudong', 'Berakas', 'Gadong', 'Mentiri',
    'Lambak', 'Kianggeh', 'Sungai Akar', 'Subok', 'Kota Batu'
  ],
  states: [
    'Brunei-Muara', 'Belait', 'Tutong', 'Temburong'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Juruanalisis Data', 'Pengurus Projek', 'Jurutera Perisian', 'Pegawai Pemasaran',
    'Wakil Jualan', 'Akauntan', 'Pegawai Sumber Manusia', 'Pereka',
    'Pengurus Operasi', 'Penganalisis Perniagaan', 'Pengurus Produk', 'Pentadbir Sistem'
  ],
  departments: [
    'Kejuruteraan', 'Pemasaran', 'Jualan', 'Sumber Manusia', 'Kewangan',
    'Operasi', 'Perkhidmatan Pelanggan', 'IT', 'Penyelidikan dan Pembangunan', 'Pentadbiran'
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
    '+673 ### ####',
    '+673 ### ####',
    '### ####',
    '+673-###-####',
    '+673 2## ####',
    '+673 3## ####',
    '+673 4## ####',
    '+673 5## ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'brunet.bn', 'bnet.bn'
  ],

  companyNames: [
    'Brunei Shell Petroleum', 'Bank Islam Brunei Darussalam', 'Royal Brunei Airlines',
    'Brunei LNG', 'BaIduri Bank', 'TelBru', 'DST Group',
    'Progresif', 'Brunei Press', 'Brunei Fertilizer Industries',
    'Ghanim International', 'BMC Group', 'QAF Brunei', 'Hua Ho'
  ],

  industries: [
    'Teknologi', 'Kewangan', 'Kesihatan', 'Pendidikan', 'Runcit',
    'Perkilangan', 'Media', 'Telekomunikasi', 'Tenaga', 'Pengangkutan',
    'Pembinaan', 'Perhotelan'
  ],

  catchPhrases: [
    'Inovasi untuk negara', 'Kecemerlangan dalam perkhidmatan', 'Bersama memajukan Brunei',
    'Kualiti dan integriti', 'Membina masa depan', 'Komited kepada rakyat',
    'Penyelesaian terkemuka', 'Rakan kongsi dipercayai'
  ]
};
