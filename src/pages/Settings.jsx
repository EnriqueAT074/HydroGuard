import ThemeToggle from "../components/common/ThemeToggle";

const Settings = () => {
  return (
    <div className="p-4 pb-20">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">
        Configuración
      </h2>

      <div className="card mb-6">
        <h3 className="font-medium mb-3 dark:text-gray-300">Preferencias</h3>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Settings;
