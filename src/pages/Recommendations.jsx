import { useWater } from "../context/WaterContext";
import RecommendationCard from "../components/recommendations/RecommendationCard";
import { recommendations } from "../data/recommendations";

const Recommendations = () => {
  const { consumption } = useWater();

  const filteredRecommendations = recommendations
    .filter((rec) => {
      if (consumption > 100 && rec.priority === "high") return true;
      if (consumption > 80 && rec.priority === "medium") return true;
      return true;
    })
    .slice(0, 4);

  return (
    <div className="p-4 pb-20">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">
          Recomendaciones
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Consejos personalizados para ti
        </p>
      </div>

      <div className="space-y-3">
        {filteredRecommendations.map((rec, index) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
