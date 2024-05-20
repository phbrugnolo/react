import { useState } from "react";

function Soma() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [res, setRes] = useState("");

  function somar(e : any) : void{
    const resultado = parseInt(num1) + parseInt(num2);
    setRes(resultado.toString());
  }

  return (
    <div id="soma">
      <br />
      <br />
      <label htmlFor="numero1">Número 1: </label>
      <input type="text" id="num1" name="numero1" onChange={(e) => setNum1(e.target.value)} />
      <br />
      <br />
      <label htmlFor="numero2">Número 2: </label>
      <input type="text" id="num2" name="numero2" onChange={(e) => setNum2(e.target.value)}/>
      <br />
      <br />
      <button type="button" onClick={somar}>
        Somar
      </button>
      <h3>Resultado: {res}</h3>
    </div>
  );
}

export default Soma;
