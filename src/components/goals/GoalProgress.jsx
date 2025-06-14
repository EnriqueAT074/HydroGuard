import { useState } from "react";
import { useWater } from "../../context/WaterContext";

const GoalProgress = () => {
  const { goals, addGoal } = useWater();
  const [newGoal, setNewGoal] = useState("");
  const [targetValue, setTargetValue] = useState("");

  const handleAddGoal = () => {
    if (newGoal && targetValue) {
      addGoal({
        id: Date.now(),
        title: newGoal,
        target: parseFloat(targetValue),
        current: 0,
        createdAt: new Date().toISOString(),
      });
      setNewGoal("");
      setTargetValue("");
    }
  };

  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Mis Metas de Ahorro</h3>

      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Descripción de la meta"
            className="flex-1 p-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-400 dark:bg-gray-700 dark:text-white"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <input
            type="number"
            placeholder="Meta (Lts)"
            className="w-20 p-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-400 dark:bg-gray-700 dark:text-white"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition"
          onClick={handleAddGoal}
        >
          Agregar Meta
        </button>
      </div>

      <div className="space-y-3">
        {goals.map((goal) => {
          const progress = Math.min((goal.current / goal.target) * 100, 100);
          const isAchieved = goal.current >= goal.target;

          return (
            <div
              key={goal.id}
              className="border border-gray-100 dark:border-gray-700 rounded-lg p-3"
            >
              <div className="flex justify-between mb-1">
                <h4 className="font-medium dark:text-gray-300">{goal.title}</h4>
                <span
                  className={`text-sm ${
                    isAchieved
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {isAchieved ? "¡Logrado!" : "En progreso"}
                </span>
              </div>

              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-1">
                <div
                  className={`h-2 rounded-full ${
                    isAchieved ? "bg-emerald-500" : "bg-primary-500"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{goal.current.toFixed(1)} Lts</span>
                <span>Meta: {goal.target} Lts</span>
              </div>
            </div>
          );
        })}

        {goals.length === 0 && (
          <p className="text-center text-gray-400 py-4">
            No has establecido metas aún. ¡Agrega una para comenzar!
          </p>
        )}
      </div>
    </div>
  );
};

export default GoalProgress;
