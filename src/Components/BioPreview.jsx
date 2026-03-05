import { useState } from "react";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import html2pdf from "html2pdf.js";

function BioPreview({ formData }) {

  const [template, setTemplate] = useState(1);

  const downloadPDF = () => {
    const element = document.getElementById("biodata-preview");

    const options = {
      margin: 0.5,
      filename: "shaadi_biodata.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div style={{ flex: 1, padding: "20px" }}>

      <h2>Biodata Preview</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setTemplate(1)}>Template 1</button>
        <button onClick={() => setTemplate(2)} style={{ marginLeft: "10px" }}>
          Template 2
        </button>
        <button
          onClick={downloadPDF}
          style={{ marginLeft: "10px", background: "#4CAF50", color: "white" }}
        >
          Download PDF
        </button>
      </div>

      <div id="biodata-preview" style={{ marginTop: "20px" }}>
        {template === 1 && <TemplateOne formData={formData} />}
        {template === 2 && <TemplateTwo formData={formData} />}
      </div>

    </div>
  );
}

export default BioPreview;