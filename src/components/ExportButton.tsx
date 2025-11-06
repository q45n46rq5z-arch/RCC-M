import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ExportButtonProps {
  elementId: string;
}

export default function ExportButton({ elementId }: ExportButtonProps) {
  const handleExport = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('rapport-rcc-m.pdf');
    } catch (error) {
      console.error('Erreur lors de l\'export PDF:', error);
      alert('Erreur lors de l\'export PDF. Veuillez réessayer.');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="fixed bottom-8 right-8 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2 z-50"
    >
      <Download className="w-5 h-5" />
      <span className="font-semibold">Exporter le rapport (PDF)</span>
    </button>
  );
}

