import WaterCalculator from "../components/common/WaterCalculator";

const CalculatorPage = () => {
  return (
    <div className="p-4 pb-20">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Calculadora de Ahorro
      </h2>
      <WaterCalculator />
    </div>
  );
};

export default CalculatorPage;
