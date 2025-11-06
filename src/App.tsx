import { useState } from 'react';
import { ProductType, ControlCriteria, Decision, PieceTypeDossier } from './types';
import { productConfigs } from './config/productConfigs';
import ProductTypeSelector from './components/ProductTypeSelector';
import ProductConfigurator from './components/ProductConfigurator';
import ControlCriteriaComponent from './components/ControlCriteria';
import DecisionSection from './components/DecisionSection';
import PieceTypeDossierComponent from './components/PieceTypeDossier';
import ExportButton from './components/ExportButton';

function App() {
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const [controlCriteria, setControlCriteria] = useState<ControlCriteria>({
    radiography: {
      rejectCracks: true,
      rejectFissures: true,
      rejectSupportRemains: true,
      rejectInternalCoolers: true,
      severityLevels: '',
      specialCases: ''
    },
    ultrasonics: {
      steelType: 'non-alloyed',
      rejectEchoThreshold: 50,
      rejectEchoLoss: 18,
      rejectSurfaceDefect: 1000,
      validation: ''
    }
  });
  const [decision, setDecision] = useState<Decision>({
    randomDefects: 'acceptable',
    surfaceRepairs: '',
    requalification: false
  });
  const [dossier, setDossier] = useState<PieceTypeDossier>({
    manufacturingProgram: false,
    moldingPlan: false,
    radiographicControlPlan: false,
    examinationResults: false,
    defectAnalysis: false,
    successivePiecesDocuments: false
  });

  const config = selectedType ? productConfigs[selectedType] : null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl" id="report-content">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Simulateur RCC-M
          </h1>
          <p className="text-gray-600">
            Gestion et contrôle des pièces industrielles
          </p>
        </header>

        <ProductTypeSelector
          selectedType={selectedType}
          onSelect={setSelectedType}
        />

        {config && (
          <>
            <div className="mb-8">
              <ProductConfigurator config={config} />
            </div>

            <div className="mb-8">
              <ControlCriteriaComponent
                criteria={controlCriteria}
                onChange={setControlCriteria}
              />
            </div>

            <div className="mb-8">
              <DecisionSection
                decision={decision}
                onChange={setDecision}
              />
            </div>

            <div className="mb-8">
              <PieceTypeDossierComponent
                dossier={dossier}
                onChange={setDossier}
              />
            </div>
          </>
        )}

        {!selectedType && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            <p className="text-lg">Veuillez sélectionner un type de produit pour commencer</p>
          </div>
        )}
      </div>

      {selectedType && <ExportButton elementId="report-content" />}
    </div>
  );
}

export default App;

