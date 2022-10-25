import { CarroContainer } from "./styles";
import { useState } from "react";

export function Carro(props) {
  const mudaCarro1 = (muda) => {
    props.setCarro1();
  };
  const mudaCarro2 = () => {
    props.setCarro2();
  };
  const mudaCarro3 = () => {
    props.setCarro3();
  };
  return (
    <CarroContainer>
      <h2>Modelo</h2>
      <ul>
        <li>modelo: {props.automovel.modelo}</li>
        <li>Cor: {props.automovel.cor} </li>
        <li>Ano: {props.automovel.ano}</li>
        <li>Flex: {props.automovel.flex ? "true" : "false"} </li>
        <li>Adicionado: {props.nomeDaGaragem}</li>
        <button onClick={props.setCarro1}>Muda carro</button>
      </ul>
    </CarroContainer>
  );
}
