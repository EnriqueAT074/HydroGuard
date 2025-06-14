import { useState, useEffect } from 'react';

const useWaterConsumption = (initialValue = 85) => {
  const [consumption, setConsumption] = useState(initialValue);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simular carga de historial desde localStorage
    const savedHistory = localStorage.getItem('waterConsumptionHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    } else {
      // Datos mock si no hay historial guardado
      const mockHistory = Array.from({ length: 6 }, (_, i) => ({
        date: new Date(Date.now() - (i * 30 * 24 * 60 * 60 * 1000)).toISOString(),
        value: initialValue + (6 - i) * 5
      }));
      setHistory(mockHistory);
    }
  }, [initialValue]);

  const addConsumptionRecord = (value) => {
    const newRecord = {
      date: new Date().toISOString(),
      value
    };
    const updatedHistory = [newRecord, ...history.slice(0, 5)];
    
    setConsumption(value);
    setHistory(updatedHistory);
    localStorage.setItem('waterConsumptionHistory', JSON.stringify(updatedHistory));
  };

  return {
    consumption,
    history,
    addConsumptionRecord
  };
};

export default useWaterConsumption;