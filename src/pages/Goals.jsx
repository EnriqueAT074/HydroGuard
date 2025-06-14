import GoalProgress from "../components/goals/GoalProgress";
import AchievementBadge from "../components/goals/AchievementBadge";

const Goals = () => {
  const achievements = [
    {
      id: 1,
      title: "Ahorrador Novato",
      description: "Reduce tu consumo en un 10% durante 1 mes",
      unlocked: true,
      icon: "🥉",
    },
    {
      id: 2,
      title: "Guardián del Agua",
      description: "Mantén consumo bajo 80m³ por 3 meses",
      unlocked: false,
      icon: "🥈",
    },
    {
      id: 3,
      title: "Héroe del Planeta",
      description: "Ahorra más de 50m³ en 6 meses",
      unlocked: false,
      icon: "🏆",
    },
  ];

  return (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">
        Mis Metas y Logros
      </h2>

      <GoalProgress />

      <div className="mt-6">
        <h3 className="font-medium mb-3 dark:text-gray-300">Logros</h3>
        <div className="space-y-2">
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
