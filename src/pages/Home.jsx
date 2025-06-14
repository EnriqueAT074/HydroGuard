import { useState } from "react";
import { motion } from "framer-motion";
import WaterGauge from "../components/dashboard/WaterGauge";
import ConsumptionStats from "../components/dashboard/ConsumptionStats";
import QuickActions from "../components/dashboard/QuickActions";
import { useWater } from "../context/WaterContext";
import ConsumptionModal from "../components/common/ConsumptionModal";
import { Droplets, ChevronRight } from "lucide-react";

const Home = () => {
  const { consumption, history } = useWater();
  const [showModal, setShowModal] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "Reducir 1 minuto de ducha ahorra ~10 litros de agua",
    "Un grifo que gotea puede perder 100 litros al mes",
    "Lavar el auto con cubeta en lugar de manguera ahorra 300 litros",
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  // Calcular progreso
  const averageConsumption = 100;
  const consumptionPercentage = Math.min(
    (consumption / averageConsumption) * 100,
    100
  );
  const status =
    consumption <= 80 ? "excelente" : consumption <= 100 ? "bueno" : "alto";

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="p-4 pb-20 max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {showModal && <ConsumptionModal onClose={() => setShowModal(false)} />}

      <motion.div variants={itemVariants}>
        <WaterGauge
          consumption={consumption}
          percentage={consumptionPercentage}
          status={status}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ConsumptionStats />
      </motion.div>

      <motion.div variants={itemVariants}>
        <QuickActions onAddRecord={() => setShowModal(true)} />
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="card cursor-pointer" onClick={nextTip}>
          <div className="flex items-start">
            <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
              <Droplets
                className="text-primary-600 dark:text-primary-400"
                size={22}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg dark:text-gray-300 mb-2">
                  Consejo de ahorro
                </h3>
                <ChevronRight
                  className="text-primary-500/60 dark:text-primary-400/60"
                  size={18}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {tips[currentTip]}
              </p>
              <div className="flex items-center">
                {tips.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mr-1 ${
                      currentTip === index
                        ? "bg-primary-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
                <span className="text-xs text-primary-500 dark:text-primary-400 ml-2">
                  {currentTip + 1}/{tips.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="card">
          <h3 className="font-medium mb-3 dark:text-gray-300">
            Último registro
          </h3>
          {history.length > 0 && (
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Mes actual
                </p>
                <p className="dark:text-gray-300">
                  {history[0].month} {history[0].year}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-primary-500 dark:text-primary-400">
                  {history[0].consumption} m³
                </p>
                <p
                  className={`text-xs ${
                    consumption < history[1]?.consumption
                      ? "text-emerald-500"
                      : "text-amber-500"
                  }`}
                >
                  {consumption < history[1]?.consumption
                    ? "↓ Menor que el mes anterior"
                    : "↑ Mayor que el mes anterior"}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
