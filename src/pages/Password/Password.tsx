import { TextField } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import bsb_1 from "../../assets/bsb_1.jpg";
import bsb_2 from "../../assets/bsb_2.jpg";
import bsb_3 from "../../assets/bsb_3.jpg";
import { Snackbar } from "../../components";
import { useApplicationControlContext } from "../../contexts/ApplicationControlContext";
import { iNewPasswordDto } from "../../interfaces/iNewPasswordDto";
import { changePassowrdRequest } from "../../services/api";
import "./password.css";

const Password = () => {
  const { setIsSnackbarOpen, setSnackbarMessage, setSnackbarSeverity } =
    useApplicationControlContext();
  const [image, setImage] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dto: iNewPasswordDto = {
        email: newEmail,
        password: newPassword,
      };

      const response = await changePassowrdRequest(dto);
      if (response.status == 200) navigate("/login");
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsSnackbarOpen(true);
      setSnackbarMessage(axiosError.message);
      setSnackbarSeverity("error");
    }
  };

  useEffect(() => {
    const imagesArray = [bsb_1, bsb_2, bsb_3];
    const random = Math.floor(Math.random() * 3);
    setImage(imagesArray[random]);
  }, []);

  return (
    <div className="register-container scale-up-hor-center-02">
      <div className="register-icons">
        <FiSun size={30} />
        <h3>Made in Brasília</h3>
      </div>
      <div className="register-image-container">
        <img className="register-image" src={image} alt="image" />
      </div>
      <div className="register-form-container gradient-bg">
        <h1>Altere sua senha</h1>
        <p>Preencha o formulário abaixo para alterar a senha</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-input-container">
            <TextField
              className="register-form-input"
              id="email"
              placeholder="Email"
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            <TextField
              className="register-form-input"
              type={"password"}
              id="password"
              placeholder="Senha"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button className="gradient-bg-colorful" type="submit">
            <span>Alterar</span>
          </button>
        </form>
        <div></div>
      </div>
      <div className="register-login">
        <Link to={"/login"}>Entrar</Link>
      </div>
      <Snackbar />
    </div>
  );
};

export default Password;
