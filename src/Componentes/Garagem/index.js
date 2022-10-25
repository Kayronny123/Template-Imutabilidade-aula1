import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";
import { useState } from "react";

export function Garagem(props) {
  const [carro, setCarro] = useState({
    modelo: "HB20",
    cor: "amarelo",
    ano: 2009,
    flex: false
  });
  const [carro1, setCarro1] = useState({
    modelo: "Corsa",
    cor: "preto",
    ano: 2022,
    flex: false
  });
  const [carro2, setCarro2] = useState({
    modelo: "Celta",
    cor: "azul",
    ano: 2022,
    flex: false
  });
  const [carro3, setCarro3] = useState({
    modelo: "Onix",
    cor: "roxo",
    ano: 2022,
    flex: false
  });

  const mudaNomeNoBotao = () => {
    props.setNomeDaGaragem("KayDev");
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {props.nomeDaGaragem}</h1>
      <button onClick={mudaNomeNoBotao}>Muda Nome da Garagem </button>
      <Botao>Muda nome</Botao>

      <Estacionamento>
        <Carro automovel={carro} />
        <Carro automovel={carro1} />
        <Carro automovel={carro2} />
        <Carro automovel={carro3} />
      </Estacionamento>
    </GaragemContainer>
  );
}
