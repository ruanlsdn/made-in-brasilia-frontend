import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import bsb_1 from "../../assets/bsb_1.jpg";
import bsb_2 from "../../assets/bsb_2.jpg";
import bsb_3 from "../../assets/bsb_3.jpg";
import { iLoginDto } from "../../interfaces/iLoginDto";
import { loginRequest } from "../../services/api";
import "./login.css";

const Login = () => {
  const [image, setImage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dto: iLoginDto = {
        username: newUsername,
        password: newPassword,
      };
      const response = await loginRequest(dto);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const imagesArray = [bsb_1, bsb_2, bsb_3];
    const random = Math.floor(Math.random() * 3);
    setImage(imagesArray[random]);
  }, []);

  return (
    <div className="login-container">
      <div className="login-icons">
        <FiSun size={30} />
        <h3>Made in Brasília</h3>
      </div>
      <div className="login-image-container">
        <img className="login-image" src={image} alt="image" />
      </div>
      <div className="login-form-container">
        <h1>Bem-vindo de volta!</h1>
        <p>Preencha o formulário abaixo para entrar</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-input-container">
            <TextField
              className="login-form-input"
              id="username"
              label="Usuário"
              variant="outlined"
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <TextField
              className="login-form-input"
              type={"password"}
              id="password"
              label="Senha"
              variant="outlined"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <a href="">Esqueci a senha</a>
          </div>
          <button type="submit">
            <span>Entrar</span>
          </button>
        </form>
        <div></div>
      </div>
      <div className="login-register">
        <a href="/register">Registrar-se</a>
      </div>
    </div>
  );
};

export default Login;
