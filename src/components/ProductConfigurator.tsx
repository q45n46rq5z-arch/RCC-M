import { ProductConfiguration } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProductConfiguratorProps {
  config: ProductConfiguration;
}

export default function ProductConfigurator({ config }: ProductConfiguratorProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['inputs', 'steps']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      forged: 'Pièce forgée',
      cast: 'Pièce moulée',
      sheet: 'Tôle',
      tube: 'Tube',
      other: 'Autre type'
    };
    return labels[type] || type;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        2️⃣ Configuration : {getTypeLabel(config.type)}
      </h2>

      {/* Nature des entrées */}
      <SectionCard
        title="Nature des entrées"
        isExpanded={expandedSections.has('inputs')}
        onToggle={() => toggleSection('inputs')}
      >
        <div className="space-y-2">
          {config.inputs.map((input, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded border border-gray-200">
              <input
                type="text"
                placeholder={input}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Mode/type d'élaboration */}
      <SectionCard
        title="Mode/type d'élaboration"
        isExpanded={expandedSections.has('elaboration')}
        onToggle={() => toggleSection('elaboration')}
      >
        <div className="space-y-2">
          {config.elaboration.map((elab, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded border border-gray-200">
              <input
                type="text"
                placeholder={elab}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Analyse chimique */}
      <SectionCard
        title="Analyse chimique"
        isExpanded={expandedSections.has('chemical')}
        onToggle={() => toggleSection('chemical')}
      >
        <div className="space-y-2">
          {config.chemicalAnalysis.map((chem, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded border border-gray-200">
              <input
                type="text"
                placeholder={chem}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Champs additionnels */}
      {Object.keys(config.additionalFields).length > 0 && (
        <SectionCard
          title="Informations complémentaires"
          isExpanded={expandedSections.has('additional')}
          onToggle={() => toggleSection('additional')}
        >
          <div className="space-y-2">
            {Object.entries(config.additionalFields).map(([key, value]) => (
              <div key={key} className="p-3 bg-gray-50 rounded border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">{key}</label>
                <input
                  type="text"
                  defaultValue={value as string}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Étapes */}
      <SectionCard
        title="Étapes de fabrication"
        isExpanded={expandedSections.has('steps')}
        onToggle={() => toggleSection('steps')}
      >
        <ol className="space-y-2 list-decimal list-inside">
          {config.steps.map((step, idx) => (
            <li key={idx} className="p-3 bg-blue-50 rounded border border-blue-200 text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </SectionCard>

      {/* Plans */}
      {config.plans.length > 0 && (
        <SectionCard
          title="Croquis et plans"
          isExpanded={expandedSections.has('plans')}
          onToggle={() => toggleSection('plans')}
        >
          <ul className="space-y-2">
            {config.plans.map((plan, idx) => (
              <li key={idx} className="p-3 bg-green-50 rounded border border-green-200 text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {plan}
              </li>
            ))}
          </ul>
        </SectionCard>
      )}
    </div>
  );
}

interface SectionCardProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function SectionCard({ title, isExpanded, onToggle, children }: SectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isExpanded && (
        <div className="p-6 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

