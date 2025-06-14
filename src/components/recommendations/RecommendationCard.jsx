import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PriorityTag from "./PriorityTag";

const RecommendationCard = ({ recommendation, delay = 0 }) => {
  const { title, description, priority, icon } = recommendation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="card"
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg ${
            priority === "high"
              ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
              : priority === "medium"
              ? "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400"
              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400"
          }`}
        >
          {icon || "💧"}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-100 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
          <PriorityTag priority={priority} />
        </div>

        <button
          className={`w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800 rounded-md shadow-sm transition duration-200`}
        >
          <CheckCircle size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
