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
  // console.warn(dist, "km");
  // const elecCar = dist * 0.1;
  // console.warn(Math.floor(elecCar), "kg CO2e pour une voiture électrique");
  // const carboncar = dist * 0.21;
  // console.warn(Math.floor(carboncar), "kg CO2e pour une voiture essence");
  // const train = dist * 0.0023;
  // console.warn(train, "kg CO2e pour un trajet en TGV");
  // const avion = dist * 0.23;
  // console.warn(avion, "kg CO2e pour un trajet en avion");
  return dist;
};

export default distance;
