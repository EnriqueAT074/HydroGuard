import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useWater } from "../context/WaterContext";
import { useMemo } from "react";

Chart.register(...registerables);

const Consumption = () => {
  const { history } = useWater();

  const yearlyData = useMemo(() => {
    const years = {};
    history.forEach((record) => {
      if (!years[record.year]) {
        years[record.year] = {
          total: 0,
          count: 0,
          months: [],
        };
      }
      years[record.year].total += record.consumption;
      years[record.year].count++;
      years[record.year].months.push(record);
    });
    return years;
  }, [history]);

  const chartData = {
    labels: history.slice(0, 6).map((item) => `${item.month} ${item.year}`),
    datasets: [
      {
        label: "Consumo (Lts)",
        data: history.slice(0, 6).map((item) => item.consumption),
        borderColor: "#4361ee",
        backgroundColor: "rgba(67, 97, 238, 0.1)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">
        Historial de Consumo
      </h2>

      <div className="card">
        <h3 className="font-medium mb-4 dark:text-gray-300">
          Evolución Mensual
        </h3>
        <div style={{ height: "300px" }}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.parsed.y} m³`,
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "#6b7280",
                  },
                },
                y: {
                  grid: {
                    color: "#e5e7eb",
                  },
                  ticks: {
                    color: "#6b7280",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="card mt-6">
        <h3 className="font-medium mb-4 dark:text-gray-300">Resumen por Año</h3>
        <div className="space-y-3">
          {Object.entries(yearlyData).map(([year, data]) => (
            <div key={year} className="p-3 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium dark:text-gray-300">
                  Año {year}
                </span>
                <span className="dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  Promedio: {(data.total / data.count).toFixed(1)} Lts
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {data.months.map((record) => (
                  <div
                    key={`${year}-${record.month}`}
                    className="flex justify-between p-2 dark:rounded border border-gray-200 dark:border-gray-600"
                  >
                    <span className="dark:text-gray-400">{record.month}</span>
                    <span className="font-medium dark:text-gray-300">
                      {record.consumption} Lts
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-6">
        <h3 className="font-medium mb-3 dark:text-gray-300">
          Comparativa de Ahorro
        </h3>
        <div className="flex items-center justify-between p-3">
          <span className="dark:text-gray-400">Último mes:</span>
          <span className="font-medium dark:text-gray-300">
            {history[0]?.consumption || 0} Lts
          </span>
        </div>
        <div className="flex items-center justify-between p-3 dark:rounded">
          <span className="dark:text-gray-400">Hace 6 meses:</span>
          <span className="font-medium dark:text-gray-300">
            {history[5]?.consumption || 0} Lts
          </span>
        </div>
        <div
          className={`mt-2 p-3 rounded font-medium text-center ${
            history[0]?.consumption < history[5]?.consumption
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
              : "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
          }`}
        >
          {history[0]?.consumption < history[5]?.consumption
            ? `¡Estás ahorrando ${(
                history[5].consumption - history[0].consumption
              ).toFixed(1)} Lts!`
            : "Puedes mejorar tu consumo"}
        </div>
      </div>
    </div>
  );
};

export default Consumption;
