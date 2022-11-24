/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cityDepart, setCityDepart] = useState("");
  const [cityArrivee, setCityArrivee] = useState("");

  const urlDepart = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${
    import.meta.env.VITE_API_KEY
  }&name=${cityDepart}`;
  const urlArrivee = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${
    import.meta.env.VITE_API_KEY
  }&name=${cityArrivee}`;
  const [filterNameDepart, setFilterNameDepart] = useState([]);
  const [filterNameArrivee, setFilterNameArrivee] = useState([]);

  const fetchDepart = async () => {
    const data = await fetch(urlDepart);
    if (data.status === 200) {
      const coordsDepart = await data.json();
      setFilterNameDepart(coordsDepart);
      console.log(filterNameDepart)
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key");
    }
  }; 
  const fetchArrivee = async () => {
    const data = await fetch(urlArrivee);
    if (data.status === 200) {
      const coordsArrivee = await data.json();
      setFilterNameArrivee(coordsArrivee);
      console.log(filterNameArrivee)
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key");
    }
  }; 

  function distance() {
    const radlat1 = Math.PI * filterNameDepart.lat/180;
    const radlat2 = Math.PI * filterNameArrivee.lat/180;
    const theta = filterNameDepart.lon-filterNameArrivee.lon;
    const radtheta = Math.PI * theta/180
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    dist *= 1.609344
    console.log(dist)
  }


  useEffect(() => {
    fetchDepart();
    fetchArrivee();
  }, [cityDepart, cityArrivee]);

return (
  <div>
    <form>        
      <label>
  Départ :
      <input type="text" value={cityDepart} onChange={(e) => setCityDepart(e.target.value)} />        
    </label>
    <label>
  Arrivée :
      <input type="text" value={cityArrivee} onChange={(e) => setCityArrivee(e.target.value)} />        
    </label>
    <input type="button" value="submit" onClick={() => distance()}/>
  </form>
  <section>{dist}</section>
</div>
)
}

export default App;
