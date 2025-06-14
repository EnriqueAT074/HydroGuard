import { useTheme } from "../../context/ThemeContext";
import { Droplet } from "lucide-react";
import { motion } from "framer-motion";

const WaterGauge = ({ consumption, percentage, status }) => {
  const { isDarkMode } = useTheme();

  const statusColors = {
    excelente: "bg-emerald-500",
    bueno: "bg-primary-500",
    alto: "bg-red-500",
  };

  const statusMessages = {
    excelente: "¡Excelente! Estás ahorrando agua",
    bueno: "Buen trabajo, puedes mejorar",
    alto: "¡Alerta! Consumo por encima del promedio",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-primary-100"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-100 dark:text-gray-50">
            Mi Consumo
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Este mes</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-100 dark:text-gray-50">
            {consumption}
          </div>
          <div className="text-gray-600 dark:text-gray-300">Litros</div>
        </div>
      </div>

      <div className="mb-2 flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>Promedio: 100 Lts</span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          className={`h-2 rounded-full ${statusColors[status]}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div
        className={`text-xs font-medium ${statusColors[status]} text-white px-3 py-1 rounded-full inline-block`}
      >
        {statusMessages[status]}
      </div>
    </motion.div>
  );
};

export default WaterGauge;
