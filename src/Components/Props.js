import React from "react";

export default function Correios({ rua, bairro, uf, cidade }) {
  return (
    <div>
      {rua !== "" && <input value={rua} />}
      {bairro !== "" && <input value={bairro} />}
      {cidade !== "" && <input value={cidade} />}
      {uf !== "" && <input value={uf} />}
    </div>
  );
}
