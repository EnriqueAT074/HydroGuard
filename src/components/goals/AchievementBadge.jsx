const AchievementBadge = ({ title, description, unlocked, icon }) => {
  return (
    <div
      className={`p-3 rounded-lg border mb-2 transition ${
        unlocked
          ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800"
          : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg ${
            unlocked
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300"
              : "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
          }`}
        >
          {icon || "🏆"}
        </div>
        <div>
          <h4
            className={`font-medium ${
              unlocked
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {title}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="mt-1">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                unlocked
                  ? "bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200"
                  : " text-gray-500 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {unlocked ? "Desbloqueado" : "Bloqueado"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;
