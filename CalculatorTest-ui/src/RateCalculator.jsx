import { useState } from "react";
import "./RateCalculator.css";

function RateCalculator() {

  const [hours,setHours] = useState(20);
  const [urgency,setUrgency] = useState(1);

  return (
    <div className="mainBlock">

      <h2 className="headtitle">Freelance Rate Calculator</h2>

      <p className="subtitle">
        Calculate accurate pricing for your freelance services with our
        comprehensive calculator featuring advanced parameters and
        real-time estimates.
      </p>


      <div className="calculatorContainer">
        <div className="leftPanel">

          <label>Experience Level</label>
          <select className="inputBox">
            <option>Fresher (0-1 years)</option>
            <option>Junior (2-5 years)</option>
            <option>Senior (5+ years)</option>
          </select>


          <label>Industry</label>
          <select className="inputBox">
            <option>Software Development</option>
            <option>Web Design</option>
            <option>Mobile Development</option>
          </select>


          <label>Rate Type</label>

          <div className="rateType">
            <button className="activeBtn">Hourly Rate</button>
            <button className="inactiveBtn">Project Based</button>
          </div>

        <div style={{display:"flex"}}>
          <label>Estimated Hrs/Week {hours}</label>
          <input type="range" min="5" max="40" value={hours}
            onChange={(e)=>setHours(e.target.value)} className="slider"/>
          <label>Urgency Factor {urgency}x</label>
          <input type="range"min="1" max="2.5" step="0.1" value={urgency}
            onChange={(e)=>setUrgency(e.target.value)} className="slider" />
          </div>
       
   <div>
     <label>YourName</label>
    <input type="text"></input>
   </div>

        </div>

        <div className="rightPanel">

          <h3>Estimated Cost (USD)</h3>

          <p className="smallText">
            Live pricing based on your selections
          </p>

          <div className="price">$61</div>

          <p className="perHour">per hour</p>


          <div className="breakdown">

            <div className="row">
              <span>Base Rate</span>
              <span>$30</span>
            </div>

            <div className="row">
              <span>Experience Multiplier</span>
              <span>1.2x</span>
            </div>

            <div className="row">
              <span>Industry Multiplier</span>
              <span>1.7x</span>
            </div>

            <div className="row">
              <span>Location Premium</span>
              <span>1.0x</span>
            </div>

            <div className="row">
              <span>Urgency Factor</span>
              <span>1.0x</span>
            </div>

            <div className="row">
              <span>Weekly Rate</span>
              <span>$1,220</span>
            </div>

            <div className="row">
              <span>Monthly Rate</span>
              <span>$5,283</span>
            </div>

            <div className="row total">
              <span>Total Rate</span>
              <span>$61/hr</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RateCalculator;