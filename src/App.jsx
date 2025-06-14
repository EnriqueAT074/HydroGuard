import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { WaterProvider } from "./context/WaterContext";
import Header from "./components/layout/Header";
import BottomNav from "./components/layout/BottomNav";
import Home from "./pages/Home";
import Consumption from "./pages/Consumption";
import Recommendations from "./pages/Recommendations";
import Goals from "./pages/Goals";
import Calculator from "./pages/Calculator";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <WaterProvider>
          <div className="container mx-auto max-w-md min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consumo" element={<Consumption />} />
                <Route path="/recomendaciones" element={<Recommendations />} />
                <Route path="/metas" element={<Goals />} />
                <Route path="/calculadora" element={<Calculator />} />
                <Route path="/configuracion" element={<Settings />} />
              </Routes>
            </main>
            <BottomNav />
          </div>
        </WaterProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
