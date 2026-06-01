import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const tr_CY: LocaleDefinition = {
  firstNamesMale: [
    'Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Osman',
    'Yusuf', 'Ömer', 'Ramazan', 'Salih', 'Serdar', 'Hakan', 'Emir',
    'Kaan', 'Burak', 'Orhan', 'Murat', 'Bülent', 'Rıza', 'Kemal',
    'Cemal', 'Erdal', 'İsmail', 'Cafer', 'Turgut', 'Cem', 'İlker', 'Halil'
  ],
  firstNamesFemale: [
    'Ayşe', 'Fatma', 'Zeynep', 'Emine', 'Meryem', 'Hatice', 'Elif', 'Sibel',
    'Nuran', 'Gülsün', 'Leyla', 'Ülkü', 'Canan', 'Arzu', 'Nazife',
    'Ayten', 'Mine', 'Sevgi', 'Hayriye', 'Dilek', 'Nurten', 'Gülay',
    'Naciye', 'Filiz', 'Şerife', 'Perihan', 'Nadire', 'Sıdıka', 'Gülbahar', 'Fadime'
  ],
  lastNames: [
    'Kaya', 'Demir', 'Çelik', 'Yılmaz', 'Şahin', 'Öztürk', 'Arslan', 'Doğan',
    'Koç', 'Yıldız', 'Kurt', 'Can', 'Aksoy', 'Özkan', 'Sayın',
    'Erdoğan', 'Güneş', 'Ünal', 'Ayhan', 'Çağlar', 'Keleş', 'Aydın',
    'Şen', 'Yetkin', 'Köse', 'Duman', 'Toros', 'Yücel', 'Sözen', 'Akdoğan'
  ],
  streets: [
    'Dr. Fazıl Küçük Bulvarı', 'Lefkoşa-Girne Anayolu', 'Osmanpaşa Caddesi',
    'Şehit İdris Serdar Caddesi', 'Girne Caddesi', 'Sivil Havacılık Caddesi',
    'İsmet İnönü Bulvarı', 'Metehan Caddesi', 'KKTC Cumhuriyet Caddesi',
    'Rauf Denktaş Caddesi', 'Atatürk Caddesi', 'Limanda Caddesi',
    'Cumhuriyet Caddesi', 'Selimiye Meydanı', 'Ebul Eşref Caddesi',
    'Atilla Sokak', 'Ziya Rızkı Caddesi', 'Salih Miroğlu Caddesi',
    'Mustafa Kemal Bulvarı', 'Güzelyurt Caddesi'
  ],
  cities: [
    'Lefkoşa (Kuzey)', 'Girne', 'Gazimağusa', 'Güzelyurt', 'İskele',
    'Lefke', 'Değirmenlik', 'Alsancak', 'Lapta', 'Karşıyaka',
    'Esentepe', 'Taşkent', 'Yedidalga', 'Kılıçaslan', 'Mevlevi',
    'Çamlıbel', 'Arapköy', 'Vadili', 'Akkar', 'Serdarlı'
  ],
  states: [
    'Lefkoşa İlçesi', 'Girne İlçesi', 'Gazimağusa İlçesi', 'Güzelyurt İlçesi',
    'İskele İlçesi', 'Lefke İlçesi'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Yazılım Mühendisi', 'Proje Yöneticisi', 'Veri Analisti', 'Pazarlama Müdürü',
    'Satış Temsilcisi', 'Muhasebeci', 'İK Müdürü', 'Tasarımcı',
    'Operasyon Müdürü', 'İş Analisti', 'Ürün Müdürü', 'Sistem Yöneticisi',
    'Kalite Mühendisi', 'Teknik Yazar'
  ],
  departments: [
    'Mühendislik', 'Pazarlama', 'Satış', 'İnsan Kaynakları', 'Finans', 'Operasyonlar',
    'Müşteri Hizmetleri', 'BT', 'Araştırma ve Geliştirme', 'Hukuk', 'Yönetim'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street} No:${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+90 392 ### ####',
    '+90 533 ### ####',
    '+90 542 ### ####',
    '0533 ### ####',
    '0542 ### ####',
    '0392 ### ####',
    '0 392 ### ####',
    '(0392) ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'kktc.net', 'isim.com', 'gmx.com', 'protonmail.com', 'yandex.com'
  ],

  companyNames: [
    'KKTC Telekomünikasyon Dairesi', 'Kıb-Tek', 'Girne Amerikan Üniversitesi',
    'Akfinans Bank', 'Yakın Doğu Üniversitesi', 'Doğu Akdeniz Üniversitesi',
    'Kıbrıs İlim Üniversitesi', 'Kıbrıs Türk Hava Yolları', 'Sistem Teknik',
    'İş Bankası Kıbrıs', 'Vakıflar Bankası Kıbrıs', 'Ekonomi Bankası',
    'Limasol Turizm', 'Filoğlu İnşaat', 'Kıbrıs Türk Petrolleri',
    'Cemmer İlaç', 'Rüya Turizm', 'Ada Haber', 'Telsim Vodafone',
    'KKTC Devlet Bütçe ve Planlama'
  ],

  industries: [
    'Teknoloji', 'Finans', 'Sağlık', 'Eğitim', 'Perakende',
    'Üretim', 'Medya', 'Telekomünikasyon', 'Enerji', 'Ulaşım',
    'Gayrimenkul', 'Danışmanlık', 'Otelcilik', 'Turizm', 'Havacılık'
  ],

  catchPhrases: [
    'Yenilik gelecek için', 'Başarınız bizim işimiz', 'Birlikte geleceği inşa ediyoruz',
    'Kalite ve güven', 'Mükemmellik ve bağlılık', 'Sürdürülebilir çözümler',
    'Değer yaratıyoruz', 'Güvenilir ortağınız', 'Değişime liderlik ediyoruz'
  ]
};
