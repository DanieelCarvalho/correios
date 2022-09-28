import React, { useState } from "react";
import axios from "axios";
import Correios from './Components/Props'
export default function App() {
  
  const [input, setInput] = useState("");
  const [endereco, setEndereco] = useState({});
  const [fechar, setFechar] = useState(false);
 
  const Api = `https://viacep.com.br/ws/${input}/json/`;

  function getCep() {
    axios.get(Api).then((res) => {
      if (input.length > 0) {
        setEndereco({
          rua: res.data.logradouro,
          bairro: res.data.bairro,
          if: res.data.uf,
          cidade: res.data.localidade
        });
        setFechar(true)
      }
    });
  }

  function remove() {
    setEndereco({
      rua: "",
      bairro: "",
      if: "",
      cidade: ""
    });
  }
  return (
    <div>
      <h2>Correios</h2>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getCep();
        }}
      >
        Buscar
      </button>
      <button
        onClick={() => {
          setFechar(false)
        }}
      >
        Fechar
      </button>
      {fechar && (
          <Correios
          rua={endereco.rua}
          bairro={endereco.bairro}
          uf={endereco.if}
          cidade={endereco.cidade}
        />
      )}
    
    </div>
  );
}
