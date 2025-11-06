import { PieceTypeDossier as PieceTypeDossierType } from '../types';
import { Check } from 'lucide-react';

interface PieceTypeDossierProps {
  dossier: PieceTypeDossierType;
  onChange: (dossier: PieceTypeDossierType) => void;
}

export default function PieceTypeDossier({ dossier, onChange }: PieceTypeDossierProps) {
  const checklistItems = [
    { key: 'manufacturingProgram' as const, label: 'Programme de fabrication complet' },
    { key: 'moldingPlan' as const, label: 'Plan de moulage' },
    { key: 'radiographicControlPlan' as const, label: 'Plan de contrôle radiographique' },
    { key: 'examinationResults' as const, label: 'Résultats d\'examens (volumiques, surfaciques, dimensionnels)' },
    { key: 'defectAnalysis' as const, label: 'Analyse des défauts selon M163' },
    { key: 'successivePiecesDocuments' as const, label: 'Documents des pièces successives' },
  ];

  const toggleItem = (key: keyof PieceTypeDossierType) => {
    onChange({
      ...dossier,
      [key]: !dossier[key]
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        6️⃣ Dossier de pièce type
      </h2>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <div
              key={item.key}
              onClick={() => toggleItem(item.key)}
              className={`
                flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all
                ${dossier[item.key]
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 bg-gray-50 hover:border-primary-400 hover:bg-primary-50'
                }
              `}
            >
              <div className={`
                w-6 h-6 rounded border-2 flex items-center justify-center transition-all
                ${dossier[item.key]
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-400 bg-white'
                }
              `}>
                {dossier[item.key] && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <span className={`
                flex-1 font-medium
                ${dossier[item.key] ? 'text-green-700' : 'text-gray-700'}
              `}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

