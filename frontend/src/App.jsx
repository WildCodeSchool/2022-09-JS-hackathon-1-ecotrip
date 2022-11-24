import Home from "./pages/Home";

import "./App.css";

function App() {
  const url = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  return (
    <div className="App">

    </div>
  );
}

export default App;
