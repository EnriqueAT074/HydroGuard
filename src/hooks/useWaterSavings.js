import { useWater } from '../context/WaterContext';

const useWaterSavings = () => {
  const { consumption, waterPrice } = useWater();
  const averageConsumption = 100; // m³
  
  const calculateSavings = () => {
    const savedWater = Math.max(0, averageConsumption - consumption);
    const savedMoney = savedWater * waterPrice;
    const co2Reduction = savedWater * 0.3; // kg CO2 por m³ aproximado
    const treesSaved = savedWater * 0.1; // Árboles salvados aproximados
    
    return {
      savedWater: savedWater.toFixed(1),
      savedMoney: savedMoney.toFixed(2),
      co2Reduction: co2Reduction.toFixed(2),
      treesSaved: treesSaved.toFixed(1),
      percentage: ((savedWater / averageConsumption) * 100).toFixed(1)
    };
  };

  return calculateSavings();
};

export default useWaterSavings;