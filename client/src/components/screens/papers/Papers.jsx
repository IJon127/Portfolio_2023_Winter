import { useState, useEffect } from "react";
// import PulseLoader from "react-spinners/PulseLoader";
import "./Papers.css";
import PaperItem from "./PaperItem";

export default function Papers({ papers }) {
  return (
    <div className="papers">
      <div className="papers__header">
        <h1 className="big-title">Research Papers</h1>
        {papers.intro.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className="papers__container">
        {papers.data.map((paper, index) => (
          <PaperItem key={index} paper={paper} />
        ))}
      </div>
    </div>
  );
}
