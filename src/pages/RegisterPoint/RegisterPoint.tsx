import { useNavigate } from "react-router-dom";
import { getRegisterPoint, registerPoint } from "../../api/requests/register";
import { Button } from "../../components/Button";

const RegisterPoint = () => {
  const registers = getRegisterPoint();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center flex-col bg-light gap-5 relative">
      <div className="absolute top-[5%] right-[5%]">
        <button
          onClick={() => {
            navigate("/history");
          }}
          className="text-sm font-semibold text-white p-3 rounded-lg bg-darkGray"
        >
          Ver Historico
        </button>
      </div>
      <div className="w-[60vw] flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold text-darkGray">Registrar Ponto</h2>
        <div className="w-full grid grid-cols-4 gap-5">
          <Button
            text="Marcar Entrada"
            type="button"
            onClick={() => registerPoint()}
          />
          <Button
            text="Saída para Almoço"
            type="button"
            onClick={() => registerPoint()}
          />
          <Button
            text="Retorno do Almoço"
            type="button"
            onClick={() => registerPoint()}
          />
          <Button
            text="Marcar Saída"
            type="button"
            onClick={() => registerPoint()}
          />
        </div>
        <div className="bg-white rounded-lg p-5 w-full shadow-md flex flex-col items-center justify-center gap-4">
          <h3 className="text-darkGray font-semibold text-lg">
            Registros do Dia
          </h3>
          <ul className="w-full flex flex-row items-start justify-start gap-2">
            <li className="w-full flex flex-col items-center gap-4 justify-start text-darkGray">
              <span className="font-semibold text-base text-darkGray">
                Entrada:
              </span>
              <span>08:00</span>
            </li>
            <li className="w-full flex flex-col items-center gap-4 justify-start text-darkGray">
              <span className="font-semibold text-base text-darkGray">
                Saída para Almoço:
              </span>
              <span>12:00</span>
            </li>
            <li className="w-full flex flex-col items-center gap-4 justify-start text-darkGray">
              <span className="font-semibold text-base text-darkGray">
                Retorno do Almoço:
              </span>
              <span>13:15</span>
            </li>
            <li className="w-full flex flex-col items-center gap-4 justify-start text-darkGray">
              <span className="font-semibold text-base text-darkGray">
                Saída:
              </span>
              <span>18:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterPoint;
