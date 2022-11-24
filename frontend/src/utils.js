const distance = (arrivee, depart) => {
  const radlat1 = (Math.PI * depart.lat) / 180;
  const radlat2 = (Math.PI * arrivee.lat) / 180;
  const theta = depart.lon - arrivee.lon;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist *= 1.609344;

  return dist;
};

const fetchData = async (url, setFilter) => {
  const data = await fetch(url);
  if (data.status === 200) {
    const coordsDepart = await data.json();
    setFilter(coordsDepart);
  } else {
    const errorBody = await data.json();
    console.error(errorBody, "with API key");
  }
};
export { distance, fetchData };
