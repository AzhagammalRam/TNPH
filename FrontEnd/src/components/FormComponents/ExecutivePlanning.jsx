import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Calendar } from "../scenes";


function ExecutivePlanning() {
  return (
    <div className="container">
      <p className="sec_title">Planning</p>
      <StrictMode> 
        <div className="bg-white p-2"><Calendar/></div>
      </StrictMode>
    </div>
  );
}

export default ExecutivePlanning;
