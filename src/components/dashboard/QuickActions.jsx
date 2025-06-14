import { BarChart3, Lightbulb, Plus, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const QuickActions = ({ onAddRecord }) => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: BarChart3,
      label: "Historial",
      action: () => navigate("/consumo"),
      color: "text-primary-500",
    },
    {
      icon: Lightbulb,
      label: "Consejos",
      action: () => navigate("/recomendaciones"),
      color: "text-amber-500",
    },
    {
      icon: Plus,
      label: "Registrar",
      action: onAddRecord,
      color: "text-emerald-500",
    },
    {
      icon: Leaf,
      label: "Impacto",
      action: () => navigate("/impacto"),
      color: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {actions.map((action, index) => (
        <motion.button
          key={index}
          onClick={action.action}
          className="card flex flex-col items-center justify-center p-4"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
        >
          <div className="p-3 rounded-lg mb-2 bg-gray-100 dark:bg-gray-700">
            <action.icon
              size={20}
              className={`${action.color}`}
              strokeWidth={1.8}
            />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {action.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickActions;
