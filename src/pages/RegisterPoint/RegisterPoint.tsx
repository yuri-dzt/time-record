import { useState } from "react";
import "../../styles/RegisterPoint.css";

const RegisterPoint = () => {
  const [records, setRecords] = useState<{
    entry: string | null;
    lunchOut: string | null;
    lunchIn: string | null;
    exit: string | null;
  }>({
    entry: null,
    lunchOut: null,
    lunchIn: null,
    exit: null,
  });

  const handlePunch = (type: keyof typeof records) => {
    const currentTime = new Date().toLocaleTimeString();
    setRecords((prev) => ({ ...prev, [type]: currentTime }));
  };

  return (
    <div className="register-container">
      <h2>Registrar Ponto</h2>
      <div className="button-group">
        <button onClick={() => handlePunch("entry")}>Marcar Entrada</button>
        <button onClick={() => handlePunch("lunchOut")}>
          Saída para Almoço
        </button>
        <button onClick={() => handlePunch("lunchIn")}>
          Retorno do Almoço
        </button>
        <button onClick={() => handlePunch("exit")}>Marcar Saída</button>
      </div>
      <div className="records">
        <h3>Registros do Dia</h3>
        <ul>
          <li>Entrada: {records.entry || "---"}</li>
          <li>Saída para Almoço: {records.lunchOut || "---"}</li>
          <li>Retorno do Almoço: {records.lunchIn || "---"}</li>
          <li>Saída: {records.exit || "---"}</li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterPoint;
