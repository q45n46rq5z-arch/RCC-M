import { ProductConfiguration } from '../types';

export const productConfigs: Record<string, ProductConfiguration> = {
  forged: {
    type: 'forged',
    inputs: ['Nature des entrées'],
    elaboration: ['Mode/type d\'élaboration'],
    chemicalAnalysis: ['Analyse chimique visée'],
    additionalFields: {
      'Masse/type de lingot': '',
      '% chutes tête/pied': '',
      'Position dans le lingot': ''
    },
    steps: [
      'Élaboration',
      'Forgeage',
      'Usinage',
      'Traitements thermiques',
      'Prélèvements d\'échantillons',
      'Contrôles non destructifs'
    ],
    plans: [
      'Pièce brute',
      'Profil thermique',
      'Profil livraison',
      'Plan de prélèvements'
    ]
  },
  cast: {
    type: 'cast',
    inputs: ['Nature des entrées/sables de contact'],
    elaboration: ['Mode/type d\'élaboration'],
    chemicalAnalysis: ['Analyse chimique'],
    additionalFields: {
      'Principe de moulage': '',
      'Position des échantillons': ''
    },
    steps: [
      'Étuvage',
      'Élaboration',
      'Coulée',
      'Démoulage',
      'Réparations',
      'Usinage',
      'Traitements thermiques',
      'Contrôles non destructifs'
    ],
    plans: [
      'Pièce brute',
      'Traitement thermique',
      'Livraison',
      'Plan de prélèvements'
    ]
  },
  sheet: {
    type: 'sheet',
    inputs: ['Nature des entrées'],
    elaboration: ['Type d\'élaboration'],
    chemicalAnalysis: ['Analyse chimique'],
    additionalFields: {
      'Masse/type de lingot': '',
      '% chutes tête/pied': '',
      'Position dans le lingot (direction de laminage)': ''
    },
    steps: [
      'Élaboration',
      'Ébauchage',
      'Laminage',
      'Traitement thermique',
      'Prélèvements',
      'Contrôles non destructifs',
      'Sens de corroyage',
      'Traitements thermiques finaux'
    ],
    plans: [
      'Plan de prélèvements'
    ]
  },
  tube: {
    type: 'tube',
    inputs: ['Nature des entrées'],
    elaboration: ['Type d\'élaboration'],
    chemicalAnalysis: ['Analyse chimique'],
    additionalFields: {
      'Masse/type de lingot': '',
      '% chutes tête/pied': ''
    },
    steps: [
      'Élaboration/refusion',
      'Forgeage ou laminage à chaud',
      'Écroutage',
      'Usinage',
      'Forage ou extrusion (si applicable)',
      'Laminage/étirage à froid',
      'Traitement thermique',
      'Parachèvement',
      'Contrôles non destructifs'
    ],
    plans: [
      'Plans et prélèvements'
    ]
  },
  other: {
    type: 'other',
    inputs: ['Nature des entrées'],
    elaboration: ['Type d\'élaboration'],
    chemicalAnalysis: ['Analyse chimique'],
    additionalFields: {},
    steps: [
      'S\'inspirer des conditions du type le plus proche (forgé, moulé, tôle ou tube)'
    ],
    plans: []
  }
};

