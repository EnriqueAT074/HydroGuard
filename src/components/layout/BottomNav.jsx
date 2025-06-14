import { NavLink } from "react-router-dom";
import { Home, BarChart3, Lightbulb, Leaf, Settings, Goal } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { path: "/", icon: Home, label: "Inicio" },
    { path: "/consumo", icon: BarChart3, label: "Consumo" },
    { path: "/recomendaciones", icon: Lightbulb, label: "Tips" },
    { path: "/metas", icon: Goal, label: "Metas" },
    { path: "/calculadora", icon: Leaf, label: "Calculadora" },
    { path: "/configuracion", icon: Settings, label: "Configuración" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40">
      <div className="flex justify-center items-center gap-6 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary-500 dark:text-primary-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[11px] mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
