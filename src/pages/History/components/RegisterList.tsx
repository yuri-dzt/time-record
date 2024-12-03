// import { useState } from "react";
import { Register } from "../../../types/register";
import { RegisterItem } from "./RegisterItem";

const RegisterList = () => {
  // const [registries, setRegistries] = useState<Register[]>([]);

  const registers = [
    {
      action: "ENTER",
      id: "1",
      time: 1733212800000,
      user_id: "1",
    },
    {
      action: "LEAVE",
      id: "2",
      time: 1733227200000,
      user_id: "2",
    },
    {
      action: "ENTER",
      id: "3",
      time: 1733231700000,
      user_id: "3",
    },
    {
      action: "LEAVE",
      id: "4",
      time: 1733248800000,
      user_id: "4",
    },
  ] as Register[];

  return (
    <div
      style={{ width: "600px", padding: "16px 0", borderRadius: "8px" }}
      className="flex flex-col items-center justify-center py-4 gap-4 bg-white w-[600px]"
    >
      {registers.map((register) => {
        return <RegisterItem register={register} />;
      })}
    </div>
  );
};

export { RegisterList };
