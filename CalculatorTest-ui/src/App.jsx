import { useState } from "react";
import axios, { Axios } from "axios";

function App() {

  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [result,setResult] = useState("");

const API_BASE ="https://calculatorprogram.azurewebsites.net/api/Arithmetic";

  const calculateAdd = async () => {

    const res= await axios.get(`${API_BASE}/calculate?a=${num1}&b=${num2}`);
   
    setResult(res.data.add);
  };

   const calculateSub = async() => {

    const res = await axios.get(`${API_BASE}/calculate?a=${num1}&b=${num2}`);

    setResult(res.data.sub);
  };

const clear=()=>{
  setNum1('');
  setNum2('');
  setResult('');
}

  return (
    <div>
<div style={{border:"1px solid grey",borderRadius:"10px",marginLeft:"500px",width: "265px"}}>
      <h2 style={{marginLeft:"50px"}}>Calculator</h2>

      <input type="number" placeholder="Enter first number" style={{marginLeft:"35px"}}
      value={num1} onChange={(e)=>setNum1(e.target.value)}/>

      <br/><br/>

      <input type="number"placeholder="Enter second number" style={{marginLeft:"35px"}}
      value={num2} onChange={(e)=>setNum2(e.target.value)}/>

      <br/><br/>

      <button onClick={calculateAdd} style={{borderColor:"green",marginLeft:"4px"}} >Add</button>
      <span style={{width:"20px" , display:"inline-block"}}></span>
      <button onClick={calculateSub} style={{borderColor:"red"}}>Sub</button>
       <span style={{width:"20px" , display:"inline-block"}}></span>
      <button onClick={clear} style={{borderColor:"black"}}>Clear</button>


      <h3 style={{marginLeft:"50px"}}>Result: {result}</h3>

    </div>
    </div>
  );
}

export default App;