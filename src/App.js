import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  // let titulo = 0;
  // const mudaNumero = () => {
  //   titulo += 1;
  // };

  const [num, setNum] = useState(0);
  const mudaNovoNumero = () => {
    setNum(num + 1);
  };
  const [nome, setNome] = useState("Kayronny");

  return (
    <div className="App">
      <GlobalStyled />
      <button onClick={mudaNovoNumero}>muda titulo</button>
      <p>{num}</p>
      <Garagem nomeDaGaragem={nome} setNomeDaGaragem={setNome} />
    </div>
  );
}
