import { ProductType } from '../types';
import { Factory, Hammer, Sheet, Pipe, Package } from 'lucide-react';

interface ProductTypeSelectorProps {
  selectedType: ProductType | null;
  onSelect: (type: ProductType) => void;
}

const productTypes: { type: ProductType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { type: 'forged', label: 'Pièce forgée', icon: Hammer },
  { type: 'cast', label: 'Pièce moulée', icon: Factory },
  { type: 'sheet', label: 'Tôle', icon: Sheet },
  { type: 'tube', label: 'Tube', icon: Pipe },
  { type: 'other', label: 'Autre', icon: Package },
];

export default function ProductTypeSelector({ selectedType, onSelect }: ProductTypeSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">1️⃣ Choix du type de produit</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {productTypes.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={`
              p-6 rounded-lg border-2 transition-all duration-200
              flex flex-col items-center justify-center gap-3
              ${selectedType === type
                ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-lg scale-105'
                : 'border-gray-300 bg-white text-gray-700 hover:border-primary-400 hover:bg-primary-50 hover:shadow-md'
              }
            `}
          >
            <Icon className={`w-8 h-8 ${selectedType === type ? 'text-primary-600' : 'text-gray-500'}`} />
            <span className="font-semibold text-sm text-center">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

