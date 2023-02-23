import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import bsb_1 from "../../assets/bsb_1.jpg";
import bsb_2 from "../../assets/bsb_2.jpg";
import bsb_3 from "../../assets/bsb_3.jpg";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { iLoginDto } from "../../interfaces/iLoginDto";
import "./login.css";

const Login = () => {
  const [image, setImage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuthControlContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dto: iLoginDto = {
      username: newUsername,
      password: newPassword,
    };

    const response = await signIn(dto);

    if (response) navigate("/cities");
  };

  useEffect(() => {
    const imagesArray = [bsb_1, bsb_2, bsb_3];
    const random = Math.floor(Math.random() * 3);
    setImage(imagesArray[random]);
  }, []);

  return (
    <div className="login-container scale-up-hor-center-02">
      <div className="login-icons">
        <FiSun size={30} />
        <h3>Made in Brasília</h3>
      </div>
      <div className="login-image-container">
        <img className="login-image" src={image} alt="image" />
      </div>
      <div className="login-form-container gradient-bg ">
        <h1>Bem-vindo de volta</h1>
        <p>Preencha o formulário abaixo para entrar</p>
        <form className="login-form " onSubmit={handleSubmit}>
          <div className="login-form-input-container">
            <TextField
              className="login-form-input"
              id="username"
              placeholder="Usuário"
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <TextField
              className="login-form-input"
              type={"password"}
              id="password"
              placeholder="Senha"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <a href="">Esqueci a senha</a>
          </div>
          <button className="gradient-bg-colorful" type="submit">
            <span>Entrar</span>
          </button>
        </form>
        <div></div>
      </div>
      <div className="login-register">
        <Link to={"/register"}>Registrar-se</Link>
      </div>
    </div>
  );
};

export default Login;
