import { RegisterList } from "./components/RegisterList";

const History = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center flex-col bg-light gap-5 relative">
      <h1 className="text-2xl font-bold text-darkGray">
        Historico de pontos batidos
      </h1>
      <RegisterList />
    </div>
  );
};

export default History;
