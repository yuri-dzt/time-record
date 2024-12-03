import { getHour } from "../../../functions/getHour";
import { Register } from "../../../types/register";

interface RegisterItemProps {
  register: Register;
}

const RegisterItem = (props: RegisterItemProps) => {
  return (
    <div
      style={{
        width: "200px",
        padding: "8px 0",
        justifyContent: "space-between",
        display: "flex",
      }}
      className="flex-row items-center !py-4"
    >
      <span className="font-medium text-sm text-darkGray">
        {props.register.action === "ENTER" ? "Entrada" : "Saida"}
      </span>
      <span className="font-medium text-sm text-darkGray">
        {getHour(props.register.time)}
      </span>
    </div>
  );
};

export { RegisterItem };
