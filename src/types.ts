export type ProductType = 'forged' | 'cast' | 'sheet' | 'tube' | 'other';

export interface ProductConfiguration {
  type: ProductType;
  inputs: string[];
  elaboration: string[];
  chemicalAnalysis: string[];
  additionalFields: Record<string, string | number>;
  steps: string[];
  plans: string[];
}

export interface ControlCriteria {
  radiography: {
    rejectCracks: boolean;
    rejectFissures: boolean;
    rejectSupportRemains: boolean;
    rejectInternalCoolers: boolean;
    severityLevels: string;
    specialCases: string;
  };
  ultrasonics: {
    steelType: 'non-alloyed' | 'low-alloyed' | 'martensitic' | 'austenitic';
    rejectEchoThreshold: number;
    rejectEchoLoss: number;
    rejectSurfaceDefect: number;
    validation: string;
  };
}

export interface Decision {
  randomDefects: 'acceptable' | 'improve-method' | 'new-piece-required';
  surfaceRepairs: string;
  requalification: boolean;
}

export interface PieceTypeDossier {
  manufacturingProgram: boolean;
  moldingPlan: boolean;
  radiographicControlPlan: boolean;
  examinationResults: boolean;
  defectAnalysis: boolean;
  successivePiecesDocuments: boolean;
}

