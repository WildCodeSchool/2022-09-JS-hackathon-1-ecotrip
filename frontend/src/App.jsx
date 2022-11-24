import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import logo from "./assets/logo.png";

function App() {
  const [page, setPage] = useState("home");
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  // const API_KEY = "5ae2e3f221c38a28845f05b68cf48f0d6ec43d9e6ddf39c4dddf702e";

  // function apiGet(query) {
  //   return new Promise((resolve, reject) => {
  //     let otmAPI = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${API_KEY}`;
  //     if (query !== undefined) {
  //       otmAPI += `&${query}`;
  //     }
  //     fetch(otmAPI)
  //       .then((response) => response.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => {
  //         console.error("Fetch Error :-S", err);
  //       });
  //   });
  // }

  return (
    <div className="App">
      {page === "home" && (
        <HomePage
          logo={logo}
          startingPoint={startingPoint}
          setStartingPoint={setStartingPoint}
          destination={destination}
          setDestination={setDestination}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;
