import broken_robot from "../../assets/broken_robot.png";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import "./error.css";

const Error = () => {
  const { user } = useAuthControlContext();
  return (
    <div className="error-container gradient-bg">
      <img src={broken_robot} alt="error" />
      {user ? (
        <a href="/cities">Ocorreu um erro... volte para a página de cidades</a>
      ) : (
        <a href="/">Ocorreu um erro... volte para a página inicial</a>
      )}
    </div>
  );
};

export default Error;
