import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section" style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: "20px" }}>
        <Document file={`${window.location.origin}/Assets/resume.pdf`}>
  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
</Document>


      </div>
    </Container>
  );
}

export default ResumeNew;
