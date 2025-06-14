import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`p-4 rounded-xl shadow-sm ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center">
          {isDarkMode ? (
            <Moon className="text-primary-400 mr-2" size={18} />
          ) : (
            <Sun className="text-amber-500 mr-2" size={18} />
          )}
          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
            Modo Oscuro
          </span>
        </div>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs 
          ${isDarkMode ? "text-gray-800" : "text-gray-700"}`}
        >
          {isDarkMode ? "ON" : "OFF"}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
