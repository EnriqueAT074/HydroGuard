import { useTheme } from "../../context/ThemeContext";
import { Droplets, Bell } from "lucide-react";

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header
      className={`p-4 border-b ${
        isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-lg ${
              isDarkMode
                ? "bg-primary-800 text-primary-400"
                : "bg-primary-100 text-primary-600"
            }`}
          >
            <Droplets size={20} />
          </div>
          <div>
            <h1
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Qan Yaku
            </h1>
          </div>
        </div>
        <button class="btn-notify">
          <svg
            class="bell-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 24c1.104 0 2-.897 2-2h-4c0 1.103.896 2 2 2zm6.364-6c-.693-1.036-1.364-2.64-1.364-6v-2c0-3.25-2.01-6-5-6s-5 2.75-5 6v2c0 3.36-.671 4.964-1.364 6-.547.817-.636 1.415-.636 2h14c0-.585-.089-1.183-.636-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
