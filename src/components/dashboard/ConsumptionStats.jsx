import { useWater } from "../../context/WaterContext";
import { TrendingDown, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const ConsumptionStats = () => {
  const { consumption, waterPrice } = useWater();
  const savings = Math.max(0, 100 - consumption);
  const moneySaved = (savings * waterPrice).toFixed(2);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Tarjeta de Ahorro */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ y: -2 }}
      >
        <div className="flex items-center mb-3">
          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
            <TrendingDown
              className="text-primary-600 dark:text-primary-400"
              size={20}
            />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Ahorro
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-100 dark:text-gray-50">
              {savings.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              metros cúbicos
            </div>
          </div>
          <div className="text-right">
            <div className="text-primary-600 dark:text-primary-400 font-medium">
              S/. {moneySaved}
            </div>
            <div className="text-xs text-primary-500 dark:text-primary-300 bg-primary-50 dark:bg-primary-900 px-2 py-1 rounded-full">
              +{((savings / 100) * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tarjeta de Puntos */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ y: -2 }}
      >
        <div className="flex items-center mb-3">
          <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg mr-3">
            <Trophy className="text-amber-600 dark:text-amber-400" size={20} />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Puntos
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-100 dark:text-gray-50">
              1,250
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              puntos acumulados
            </div>
          </div>
          <div className="text-right">
            <div className="text-amber-600 dark:text-amber-400 font-medium">
              Eco Warrior
            </div>
            <div className="text-xs text-amber-500 dark:text-amber-300 bg-amber-50 dark:bg-amber-900 px-2 py-1 rounded-full">
              Nivel 2
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsumptionStats;
