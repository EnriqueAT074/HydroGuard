import { createContext, useContext, useState } from "react";

const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [consumption, setConsumption] = useState(85);
  const [waterPrice] = useState(2.5);
  const [goals, setGoals] = useState([]);
  const [history, setHistory] = useState([
    { month: "Enero", year: 2023, consumption: 90 },
    { month: "Febrero", year: 2023, consumption: 85 },
    { month: "Marzo", year: 2023, consumption: 82 },
  ]);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const addConsumptionRecord = (newRecord) => {
    const existingIndex = history.findIndex(
      (item) => item.month === newRecord.month && item.year === newRecord.year
    );

    const updatedHistory =
      existingIndex >= 0
        ? history.map((item, index) =>
            index === existingIndex ? newRecord : item
          )
        : [...history, newRecord].sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return months.indexOf(b.month) - months.indexOf(a.month);
          });

    setHistory(updatedHistory);

    // Actualizar consumo actual si corresponde
    const currentMonth = new Date().toLocaleString("es-ES", { month: "long" });
    if (
      newRecord.month === currentMonth &&
      newRecord.year === new Date().getFullYear()
    ) {
      setConsumption(newRecord.consumption);
    }
  };

  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <WaterContext.Provider
      value={{
        consumption,
        waterPrice,
        history,
        goals,
        addConsumptionRecord,
        addGoal,
        months,
      }}
    >
      {children}
    </WaterContext.Provider>
  );
};

export const useWater = () => useContext(WaterContext);
