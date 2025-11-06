import { Decision } from '../types';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DecisionSectionProps {
  decision: Decision;
  onChange: (decision: Decision) => void;
}

export default function DecisionSection({ decision, onChange }: DecisionSectionProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['decision']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        4️⃣ Décision pour la pièce type
      </h2>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('decision')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-800">Décision</h3>
          {expandedSections.has('decision') ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {expandedSections.has('decision') && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Évaluation des défauts
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="randomDefects"
                    value="acceptable"
                    checked={decision.randomDefects === 'acceptable'}
                    onChange={(e) => onChange({ ...decision, randomDefects: e.target.value as any })}
                    className="w-4 h-4 text-primary-600"
                  />
                  <div>
                    <span className="font-medium text-gray-700">Défauts aléatoires limités</span>
                    <p className="text-sm text-gray-500">→ Acceptable</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="randomDefects"
                    value="improve-method"
                    checked={decision.randomDefects === 'improve-method'}
                    onChange={(e) => onChange({ ...decision, randomDefects: e.target.value as any })}
                    className="w-4 h-4 text-primary-600"
                  />
                  <div>
                    <span className="font-medium text-gray-700">Défauts rares liés au moulage</span>
                    <p className="text-sm text-gray-500">→ Méthode à améliorer</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="randomDefects"
                    value="new-piece-required"
                    checked={decision.randomDefects === 'new-piece-required'}
                    onChange={(e) => onChange({ ...decision, randomDefects: e.target.value as any })}
                    className="w-4 h-4 text-primary-600"
                  />
                  <div>
                    <span className="font-medium text-gray-700">Défauts nombreux</span>
                    <p className="text-sm text-gray-500">→ Nouvelle pièce type obligatoire</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">
        5️⃣ Examens surfaciques
      </h2>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('surface')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-800">Examens surfaciques</h3>
          {expandedSections.has('surface') ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {expandedSections.has('surface') && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Référence à la spécification technique
              </label>
              <input
                type="text"
                value={decision.surfaceRepairs}
                onChange={(e) => onChange({ ...decision, surfaceRepairs: e.target.value })}
                placeholder="Référence de la spécification"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={decision.requalification}
                  onChange={(e) => onChange({ ...decision, requalification: e.target.checked })}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="text-gray-700">
                  Réparations majeures multiples → Pièce à requalifier
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

