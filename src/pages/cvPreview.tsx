import React, { useState } from 'react';
import jsPDF from 'jspdf';
import Header from '../components/Header';
import { useAuth } from '../authProvider';
import Preview from '../components/Preview';

const CVPreview: React.FC = () => {
    const { cvContent } = useAuth();


    // Function to trigger PDF download
    const downloadPDF = () => {
        const doc = new jsPDF();

        // Add title or header
        doc.setFontSize(18);
        doc.text('Curriculum Vitae', 10, 10);

        // Set font size and add CV content
        doc.setFontSize(12);
        doc.text(cvContent, 10, 20);

        // Save the PDF
        doc.save('generated-cv.pdf');
    };

    return (
        <div>
            <Header title="User Data" title2="" />
            <Preview />
            {/* <div className="cv-preview-container">
                {cvContent && (
                    <div className="cv-preview">
                        <h2>Preview Your CV</h2>
                        <pre>{cvContent}</pre>
                        <button onClick={downloadPDF} className="download-btn">
                            Download as PDF
                        </button>
                    </div>
                )}

            </div> */}
        </div>
    );
};

export default CVPreview;
