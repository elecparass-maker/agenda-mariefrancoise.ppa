import { useEffect, useState } from 'react';

export default function Weather() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem('city') || 'Paris';
  });
  const [inputCity, setInputCity] = useState(city);
  const [weather, setWeather] = useState({ temp: 25, desc: 'Ensoleillé' });

  useEffect(() => {
    localStorage.setItem('city', city);
    // Simulation d'appel météo
    setWeather({ temp: 25, desc: 'Partiellement nuageux' });
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">🌤️ Météo</h2>
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="border px-2 py-1 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          Valider
        </button>
      </form>
      <p>Ville : {city}</p>
      <p>Température : {weather.temp}°C</p>
      <p>{weather.desc}</p>
    </div>
  );
}