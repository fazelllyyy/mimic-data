import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_GN: LocaleDefinition = {
  firstNamesMale: [
    'Mamadou', 'Sékou', 'Alpha', 'Moussa', 'Ibrahima', 'Souleymane', 'Lansana',
    'Amadou', 'Boubacar', 'Ousmane', 'Mori', 'Karamoko', 'Sidiki', 'Fodé',
    'Drissa', 'Cheick', 'Makan', 'Yacouba', 'Samba', 'Hassane', 'Bassirou',
    'Abdoulaye', 'Kassoum', 'Naman', 'Soumaïla', 'Issiaga', 'Kèfa', 'Mamadi'
  ],
  firstNamesFemale: [
    'Fatoumata', 'Mariam', 'Aminata', 'Kadiatou', 'Maimouna', 'Hawa', 'Aissatou',
    'Safiatou', 'Bintou', 'Ramata', 'Djeneba', 'Nènè', 'Oumou', 'Assa',
    'Salématou', 'Mariame', 'Kaba', 'Nantènè', 'Yè', 'Fanta', 'Makélè',
    'Diama', 'Saran', 'Kanny', 'Madina', 'Rouguiatou', 'Ibrahima', 'Massa'
  ],
  lastNames: [
    'Camara', 'Diallo', 'Bah', 'Sow', 'Barry', 'Soumah', 'Sylla', 'Keïta',
    'Doumbouya', 'Condé', 'Touré', 'Sidibé', 'Cissé', 'Kaba', 'Diakité',
    'Mané', 'Sako', 'Kanté', 'Traoré', 'Fofana', 'Baldé', 'Diarra',
    'Coulibaly', 'Bérété', 'Fadiga', 'Bamba', 'Kourouma', 'Bangoura',
    'Dabo', 'Sano'
  ],
  streets: [
    'Avenue de la République', 'Avenue Charles de Gaulle', 'Rue du Niger',
    'Boulevard du Commerce', 'Avenue de l\'Indépendance', 'Rue des Artisans',
    'Avenue Kassa Keita', 'Boulevard de la Gare', 'Rue de la Liberté',
    'Avenue de l\'Hôpital', 'Rue des Écoles', 'Avenue de la Paix',
    'Rue du Marché', 'Boulevard de l\'Union', 'Avenue du Président',
    'Rue de la Poste', 'Avenue de la Plage', 'Rue des Cocotiers'
  ],
  cities: [
    'Conakry', 'Nzérékoré', 'Kankan', 'Kindia', 'Boké', 'Labé', 'Faranah',
    'Mamou', 'Siguiri', 'Dabola', 'Kouroussa', 'Kissidougou', 'Télimélé',
    'Pita', 'Dalaba', 'Macenta', 'Beyla', 'Yomou', 'Lola', 'Guéckédou',
    'Gaoual', 'Tougué', 'Koundara', 'Koubia'
  ],
  states: [
    'Conakry', 'Nzérékoré', 'Kankan', 'Kindia', 'Boké', 'Labé', 'Faranah',
    'Mamou', 'Siguiri', 'Dabola', 'Kouroussa', 'Kissidougou', 'Télimélé',
    'Pita', 'Dalaba', 'Macenta', 'Beyla', 'Yomou', 'Lola', 'Guéckédou',
    'Gaoual', 'Tougué', 'Koundara', 'Koubia'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données', 'Responsable Marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des Opérations',
    'Analyste d\'Affaires', 'Gestionnaire de Comptes', 'Conseiller Juridique'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Commercial', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'Informatique', 'Recherche et Développement',
    'Juridique'
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
    '+224 6## ### ###',
    '+224 6# ## ## ##',
    '6## ### ###',
    '6# ## ## ##',
    '+224 30# ### ###',
    '+224 31# ### ###',
    '+224 60# ### ###',
    '+224 62# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr', 'icloud.com',
    'orange-guinee.com', 'sotelgui.net.gn', 'afribone.net.gn'
  ],

  companyNames: [
    'Orange Guinée', 'MTN Guinée', 'Sotelgui', 'Guinée Telecom',
    'Société des Mines de Mangbé', 'Compagnie des Bauxites de Guinée',
    'Air Guinée', 'Banque Centrale de la République de Guinée',
    'Société Générale Guinée', 'Ecobank Guinée', 'BICIGUI',
    'Guinée Alumina Corporation', 'Diamond Cement Guinée', 'Colas Guinée',
    'Gestion des Hydrocarbures', 'Soguipeche'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Télécommunications', 'Énergie', 'Transport', 'Agriculture',
    'Mines', 'Construction', 'Hôtellerie'
  ],

  catchPhrases: [
    'Innover pour la Guinée', 'Votre partenaire de confiance',
    'Bâtir l\'avenir ensemble', 'Qualité et engagement',
    'L\'excellence au service de tous', 'Ensemble vers le progrès'
  ]
};
