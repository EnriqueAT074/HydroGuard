import { useState } from "react";
import { Droplet, Clock, Calendar } from "lucide-react";

const WaterCalculator = () => {
  const [activity, setActivity] = useState("ducha");
  const [duration, setDuration] = useState(10);
  const [frequency, setFrequency] = useState(7);
  const [result, setResult] = useState(null);

  const activities = [
    { id: "ducha", name: "Ducha", consumption: 10, unit: "litros/minuto" },
    {
      id: "lavamanos",
      name: "Lavado de manos",
      consumption: 5,
      unit: "litros/minuto",
    },
    {
      id: "riego",
      name: "Riego de jardín",
      consumption: 15,
      unit: "litros/minuto",
    },
    { id: "lavadora", name: "Lavadora", consumption: 50, unit: "litros/uso" },
  ];

  const calculateSavings = () => {
    const selected = activities.find((a) => a.id === activity);
    const totalConsumption =
      activity === "lavadora"
        ? frequency * selected.consumption
        : duration * frequency * selected.consumption;

    const potentialSavings = totalConsumption * 0.3;

    setResult({
      current: totalConsumption,
      potential: totalConsumption - potentialSavings,
      savings: potentialSavings,
      unit: selected.unit.split("/")[0],
    });
  };

  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Calculadora de Ahorro</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Actividad</label>
          <select
            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-400 dark:bg-gray-700 dark:text-white"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            {activities.map((act) => (
              <option key={act.id} value={act.id}>
                {act.name}
              </option>
            ))}
          </select>
        </div>

        {activity !== "lavadora" && (
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center">
              <Clock
                className="mr-2 text-primary-500 dark:text-primary-400"
                size={16}
              />{" "}
              Duración (minutos)
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-400 dark:bg-gray-700 dark:text-white"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value) || 0)}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1 flex items-center">
            <Calendar
              className="mr-2 text-primary-500 dark:text-primary-400"
              size={16}
            />{" "}
            Veces por semana
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-400 dark:bg-gray-700 dark:text-white"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value) || 1)}
          />
        </div>

        <button
          className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition"
          onClick={calculateSavings}
        >
          Calcular Ahorro
        </button>

        {result && (
          <div className="mt-4 p-3 dark:bg-gray-700 rounded-lg">
            <h4 className="font-medium mb-2 dark:text-gray-300">Resultados:</h4>
            <p className="text-sm mb-1 dark:text-gray-400">
              Consumo actual:{" "}
              <strong className="dark:text-gray-200">
                {result.current} {result.unit}/semana
              </strong>
            </p>
            <p className="text-sm mb-1 dark:text-gray-400">
              Consumo potencial:{" "}
              <strong className="dark:text-gray-200">
                {result.potential.toFixed(0)} {result.unit}/semana
              </strong>
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              Ahorro posible: {result.savings.toFixed(0)} {result.unit}/semana
              (30%)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterCalculator;
