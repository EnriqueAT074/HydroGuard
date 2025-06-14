import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isKidsMode, setIsKidsMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("kids-mode", isKidsMode);
  }, [isDarkMode, isKidsMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (isKidsMode) setIsKidsMode(false);
  };

  const toggleKidsMode = () => {
    setIsKidsMode((prev) => !prev);
    if (isDarkMode) setIsDarkMode(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        isKidsMode,
        toggleDarkMode,
        toggleKidsMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
