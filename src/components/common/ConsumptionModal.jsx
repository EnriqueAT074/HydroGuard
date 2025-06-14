import { useState } from "react";
import { useWater } from "../../context/WaterContext";
import { useTheme } from "../../context/ThemeContext";
import { Calendar, ChevronDown } from "lucide-react";

const ConsumptionModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    monthOption: "current",
    selectedMonth: "",
    consumption: "",
  });

  const { addConsumptionRecord } = useWater();
  const { isDarkMode } = useTheme();

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

  const currentMonth = new Date().toLocaleString("es-ES", { month: "long" });
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consumption || isNaN(formData.consumption)) return;

    const monthToRegister =
      formData.monthOption === "current"
        ? currentMonth
        : formData.selectedMonth;

    addConsumptionRecord({
      month: monthToRegister,
      year: formData.monthOption === "current" ? currentYear : currentYear - 1,
      consumption: parseFloat(formData.consumption),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div
        className={`w-full max-w-md rounded-2xl p-6 animate-fade-in 
        ${isDarkMode ? "bg-gray-900" : "bg-white"} 
        shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`text-xl font-semibold flex items-center gap-2 
            ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            <Calendar
              className={isDarkMode ? "text-primary-400" : "text-primary-500"}
              size={20}
            />
            Registrar Consumo
          </h2>

          <button class="btn-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className={`block mb-3 font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Opción de mes
            </label>
            <div className="flex gap-3 mb-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, monthOption: "current" })
                }
                className={`flex-1 py-3 rounded-lg transition-all
                  ${
                    formData.monthOption === "current"
                      ? "bg-primary-500 text-white shadow-md"
                      : isDarkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Mes Actual
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, monthOption: "past" })
                }
                className={`flex-1 py-3 rounded-lg transition-all
                  ${
                    formData.monthOption === "past"
                      ? "bg-primary-500 text-white shadow-md"
                      : isDarkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Mes Pasado
              </button>
            </div>

            {formData.monthOption === "past" && (
              <div className="relative">
                <select
                  value={formData.selectedMonth}
                  onChange={(e) =>
                    setFormData({ ...formData, selectedMonth: e.target.value })
                  }
                  className={`w-full p-3 pr-10 appearance-none rounded-lg border transition-all
                    ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
                        : "bg-white border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                    }`}
                  required
                >
                  <option value="">Selecciona un mes</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className={`absolute right-3 top-3.5 pointer-events-none 
                    ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  size={18}
                />
              </div>
            )}
          </div>

          <div className="mb-8">
            <label
              className={`block mb-3 font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Consumo (Litros)
            </label>
            <div className="relative">
              <input
                type="number"
                className={`w-full p-3 rounded-lg border transition-all
                  ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-800 border-gray-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
                      : "bg-white border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                  }`}
                value={formData.consumption}
                onChange={(e) =>
                  setFormData({ ...formData, consumption: e.target.value })
                }
                placeholder="Ej: 85"
                step="0.1"
                min="0"
                required
              />
              <span
                className={`absolute right-3 top-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                L
              </span>
            </div>
          </div>

          <div className="flex gap-4 p-4">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 py-3 rounded-lg font-medium transition-all
                ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg font-medium text-white transition-all 
              bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-500 
              shadow-md hover:shadow-lg"
            >
              Guardar Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsumptionModal;
