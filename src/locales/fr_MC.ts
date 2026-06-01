import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_MC: LocaleDefinition = {
  firstNamesMale: [
    'Gabriel', 'Raphaël', 'Léo', 'Louis', 'Lucas', 'Arthur', 'Hugo', 'Jules',
    'Pierre', 'Jean', 'Marc', 'François', 'Michel', 'Nicolas', 'Antoine',
    'Philippe', 'Jacques', 'Christophe', 'Olivier', 'Julien', 'David',
    'Alexandre', 'Sébastien', 'Laurent', 'Guillaume', 'Maxime', 'Benjamin',
    'Thomas', 'Vincent', 'Daniel', 'Patrick', 'Christian', 'Bernard'
  ],
  firstNamesFemale: [
    'Emma', 'Léa', 'Chloé', 'Manon', 'Camille', 'Zoé', 'Sarah', 'Louise',
    'Marie', 'Sophie', 'Isabelle', 'Julie', 'Nathalie', 'Caroline', 'Laura',
    'Émilie', 'Pauline', 'Charlotte', 'Lucie', 'Céline', 'Marine', 'Sandra',
    'Valérie', 'Sylvie', 'Catherine', 'Martine', 'Christine', 'Françoise',
    'Monique', 'Nicole', 'Véronique', 'Anne', 'Claire'
  ],
  lastNames: [
    'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand',
    'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy',
    'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet',
    'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefevre',
    'Faure', 'Andre', 'Mercier', 'Blanc', 'Guerin', 'Boyer', 'Garnier'
  ],
  streets: [
    'Boulevard Albert Ier', 'Avenue de la Costa', 'Rue Princesse Caroline',
    'Boulevard des Moulins', 'Avenue Saint-Michel', 'Rue de la Turbie',
    'Avenue d\'Ostende', 'Boulevard Rainier III', 'Rue de Spélugues',
    'Avenue de la Porte Neuve', 'Rue de l\'Église', 'Place du Casino',
    'Boulevard Louis II', 'Rue Emile de Loth', 'Avenue des Citronniers',
    'Boulevard Charles III', 'Rue des Oliviers', 'Avenue du Port'
  ],
  cities: [
    'Monte-Carlo', 'Monaco-Ville', 'Fontvieille', 'La Condamine',
    'Larvotto', 'Le Port', 'Les Moneghetti', 'Saint-Roman',
    'La Rousse', 'Spélugues', 'Basse Turbie', 'L\'Annonciade'
  ],
  states: [
    'Monte-Carlo', 'Monaco-Ville', 'Fontvieille', 'La Condamine',
    'Larvotto', 'Saint-Roman', 'Moneghetti', 'Les Révoires'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données', 'Responsable Marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer',
    'Responsable des Opérations', 'Analyste d\'Affaires', 'Chef de Produit',
    'Administrateur Système', 'Conseiller Financier', 'Gestionnaire de Fortune'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Commercial', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'IT', 'Recherche et Développement',
    'Juridique', 'Administration', 'Gestion de Patrimoine'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 200);
    return `${houseNumber} ${street}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return '98000';
  },

  phoneFormats: [
    '+377 ## ## ## ##',
    '## ## ## ##',
    '+377-###-###-###',
    '+377 4## ## ##',
    '+377 6## ## ##',
    '+377 9## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.fr', 'hotmail.fr',
    'monaco.mc', 'legend-monaco.mc', 'imc.mc'
  ],

  companyNames: [
    'Société des Bains de Mer', 'Bank Julius Baer Monaco', 'CFM Indosuez Wealth',
    'Monaco Telecom', 'SMEG', 'SBM Offshore',
    'Monte-Carlo Société des Bains de Mer', 'Chanel Monaco',
    'Louis Vuitton Monaco', 'Cartier Monaco', 'Hôtel de Paris Monte-Carlo',
    'Casino de Monte-Carlo', 'Monaco Marine', 'Grimaldi Forum'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Jeux', 'Hôtellerie', 'Télécommunications', 'Immobilier', 'Transport',
    'Conseil', 'Luxe', 'Événementiel', 'Nautisme'
  ],

  catchPhrases: [
    'L\'excellence monégasque', 'Votre réussite est notre métier', 'Le luxe à l\'état pur',
    'Qualité et tradition', 'Innovation et élégance', 'Rayonnement international',
    'L\'art de vivre méditerranéen', 'Votre partenaire de confiance sur la Côte d\'Azur'
  ]
};
