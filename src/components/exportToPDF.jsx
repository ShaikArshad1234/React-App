import jsPDF from 'jspdf';

export const exportToPDF = (content) => {
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save('summary.pdf');
};
