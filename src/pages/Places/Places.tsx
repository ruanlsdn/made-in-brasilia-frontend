import { AxiosError } from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alphabet, Navbar, PlacesCard, Snackbar } from "../../components";
import { useApplicationControlContext } from "../../contexts/ApplicationControlContext";
import { useDataControlContext } from "../../contexts/DataControlContext";
import { listAllPostRequest } from "../../services/api";
import "./places.css";

const Places = () => {
  const { setIsSnackbarOpen, setSnackbarMessage, setSnackbarSeverity } =
    useApplicationControlContext();
  const { filteredPosts, setPosts, setFilteredPosts } = useDataControlContext();
  const { cityId } = useParams();

  const fetchPosts = async () => {
    try {
      const response = await listAllPostRequest(cityId!);
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsSnackbarOpen(true);
      setSnackbarMessage(axiosError.message);
      setSnackbarSeverity("error");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Alphabet />
      </div>
      <div className="places-content">
        {filteredPosts.map((place, index) => (
          <PlacesCard key={index} place={place} />
        ))}
      </div>
      <Snackbar />
    </>
  );
};

export default Places;
