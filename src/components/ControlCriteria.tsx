import { ControlCriteria as ControlCriteriaType } from '../types';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ControlCriteriaProps {
  criteria: ControlCriteriaType;
  onChange: (criteria: ControlCriteriaType) => void;
}

export default function ControlCriteria({ criteria, onChange }: ControlCriteriaProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['radiography']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const updateRadiography = (field: string, value: any) => {
    onChange({
      ...criteria,
      radiography: {
        ...criteria.radiography,
        [field]: value
      }
    });
  };

  const updateUltrasonics = (field: string, value: any) => {
    onChange({
      ...criteria,
      ultrasonics: {
        ...criteria.ultrasonics,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        3️⃣ Contrôles et critères de notation
      </h2>

      {/* Radiographie */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('radiography')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-800">Radiographie</h3>
          {expandedSections.has('radiography') ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {expandedSections.has('radiography') && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={criteria.radiography.rejectCracks}
                  onChange={(e) => updateRadiography('rejectCracks', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="text-gray-700">Refuser criques</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={criteria.radiography.rejectFissures}
                  onChange={(e) => updateRadiography('rejectFissures', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="text-gray-700">Refuser fissures</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={criteria.radiography.rejectSupportRemains}
                  onChange={(e) => updateRadiography('rejectSupportRemains', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="text-gray-700">Refuser restes de support</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={criteria.radiography.rejectInternalCoolers}
                  onChange={(e) => updateRadiography('rejectInternalCoolers', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <span className="text-gray-700">Refuser refroidisseurs internes</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveaux de sévérité selon NF EN 12681-1
              </label>
              <input
                type="text"
                value={criteria.radiography.severityLevels}
                onChange={(e) => updateRadiography('severityLevels', e.target.value)}
                placeholder="Ex: Niveau 2"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cas particuliers (aciers moulés ≤ 25,4 mm → ASTM E192)
              </label>
              <input
                type="text"
                value={criteria.radiography.specialCases}
                onChange={(e) => updateRadiography('specialCases', e.target.value)}
                placeholder="Spécifier les cas particuliers"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Ultrasons */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('ultrasonics')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-800">Ultrasons</h3>
          {expandedSections.has('ultrasonics') ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {expandedSections.has('ultrasonics') && (
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'acier
              </label>
              <select
                value={criteria.ultrasonics.steelType}
                onChange={(e) => updateUltrasonics('steelType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="non-alloyed">Aciers non alliés</option>
                <option value="low-alloyed">Aciers faiblement alliés</option>
                <option value="martensitic">Aciers martensitiques</option>
                <option value="austenitic">Aciers austénitiques</option>
              </select>
            </div>

            {criteria.ultrasonics.steelType !== 'austenitic' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Refuser si écho ≥ (% courbe de référence)
                  </label>
                  <input
                    type="number"
                    value={criteria.ultrasonics.rejectEchoThreshold}
                    onChange={(e) => updateUltrasonics('rejectEchoThreshold', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Refuser si perte d'écho &gt; (dB)
                  </label>
                  <input
                    type="number"
                    value={criteria.ultrasonics.rejectEchoLoss}
                    onChange={(e) => updateUltrasonics('rejectEchoLoss', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Refuser si surface défaut ≥ (mm²)
                  </label>
                  <input
                    type="number"
                    value={criteria.ultrasonics.rejectSurfaceDefect}
                    onChange={(e) => updateUltrasonics('rejectSurfaceDefect', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </>
            )}

            {criteria.ultrasonics.steelType === 'austenitic' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Validation fabricant/constructeur
                </label>
                <textarea
                  value={criteria.ultrasonics.validation}
                  onChange={(e) => updateUltrasonics('validation', e.target.value)}
                  placeholder="Spécifier les conditions de validation"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

