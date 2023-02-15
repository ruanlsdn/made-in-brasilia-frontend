import { useEffect } from "react";
import { Alphabet, CitiesCard, Navbar } from "../../components";
import { useDataControlContext } from "../../contexts/DataControlContext";
import { listAllCityRequest } from "../../services/api";
import "./cities.css";

const Cities = () => {
  const { filteredCities, setFilteredCities, setCities } =
    useDataControlContext();

  const fetchCities = async () => {
    try {
      const response = await listAllCityRequest();
      setCities(response.data);
      setFilteredCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Alphabet />
      </div>
      <div className="cities-content">
        {filteredCities.map((city, index) => (
          <CitiesCard key={index} index={index} city={city} />
        ))}
      </div>
    </>
  );
};

export default Cities;
