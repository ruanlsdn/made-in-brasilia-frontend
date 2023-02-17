import { Link } from "react-router-dom";
import brasilia_banner from "../../assets/brasilia_banner.png";
import { HOME_PAGE } from "../../constants";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-content-texts">
          <h1 className="gradient-text">{HOME_PAGE.title_header}</h1>
          <p>{HOME_PAGE.description_header}</p>
          <div className="banner-content-get-started">
            <Link to={"/register"}>
              <button className="gradient-bg-colorful">
                <span>{HOME_PAGE.text_button_header}</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="banner-content-img">
          <img src={brasilia_banner} alt="catedral" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
