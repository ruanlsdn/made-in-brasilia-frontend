import { AxiosError } from "axios";
import { useEffect } from "react";
import { Alphabet, CitiesCard, Navbar, Snackbar } from "../../components";
import { useApplicationControlContext } from "../../contexts/ApplicationControlContext";
import { useDataControlContext } from "../../contexts/DataControlContext";
import { listAllCityRequest } from "../../services/api";
import "./cities.css";

const Cities = () => {
  const { setIsSnackbarOpen, setSnackbarMessage, setSnackbarSeverity } =
    useApplicationControlContext();
  const { filteredCities, setFilteredCities, setCities } =
    useDataControlContext();

  const fetchCities = async () => {
    try {
      const response = await listAllCityRequest();
      setCities(response.data);
      setFilteredCities(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsSnackbarOpen(true);
      setSnackbarMessage(axiosError.message);
      setSnackbarSeverity("error");
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
      <Snackbar />
    </>
  );
};

export default Cities;
