import { useState, useEffect } from "react";
import "./Practices.css";
import PracticeItem from "./PracticeItem.jsx";

export default function Practices({ practices }) {
  const [data, setData] = useState();

  useEffect(() => {
    const sortByDate = (a, b) => b.date - a.date;
    const inData = practices.data;
    inData.sort(sortByDate);
    setData(inData);
  }, [practices]);

  return (
    <div className="practices">
      <div className="practices__header">
        <h1 className="big-title">{practices.title}</h1>
        <p>{practices.intro}</p>
      </div>
      <div className="practices__container">
        {data &&
          data.map((practice, index) => (
            // <h1>TEST</h1>;
            <PracticeItem key={index} practice={practice} />
          ))}
      </div>
    </div>
  );
}
