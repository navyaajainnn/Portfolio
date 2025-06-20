import React from "react";
import { Row } from "react-bootstrap";

function LeetCode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", flexDirection: "column", alignItems: "center" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Grind DSA</strong>
      </h1>
      <img
        src={`https://leetcard.jacoblin.cool/navyaajainnn?theme=dark&ext=heatmap`}
        alt="LeetCode stats"
        style={{ maxWidth: "90vw" }}
      />
    </Row>
  );
}

export default LeetCode;
