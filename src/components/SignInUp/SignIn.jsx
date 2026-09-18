import {
  SModalBlock,
  SModalTitle,
  SSignUpForm,
  SSignUpInput,
  SSignUpButton,
  SSignUpLinkButton,
  SSignUpFormGroup,
  SSignUpFormGroupA,
  SSignUpFormGroupP,
} from "./SIgnInUp.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../services/auth";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { login: "", password: "" };
    let isValid = true;

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = await signIn({
        login: formData.login,
        password: formData.password,
      });

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <SModalBlock>
      <SModalTitle>Вход</SModalTitle>
      <SSignUpForm id="formLogIn" action="#">
        <SSignUpInput
          error={errors.login}
          type="text"
          name="login"
          id="formlogin"
          placeholder="Эл. почта"
          value={formData.login}
          onChange={handleChange}
        />
        <SSignUpInput
          error={errors.password}
          type="password"
          name="password"
          id="formpassword"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error}</p>
        <SSignUpButton id="btnEnter">
          <SSignUpLinkButton onSubmit={handleSubmit}>Войти</SSignUpLinkButton>
        </SSignUpButton>
        <SSignUpFormGroup>
          <SSignUpFormGroupP>Нужно зарегистрироваться?</SSignUpFormGroupP>
          <SSignUpFormGroupA href="/signup">
            Регистрируйтесь здесь
          </SSignUpFormGroupA>
        </SSignUpFormGroup>
      </SSignUpForm>
    </SModalBlock>
  );
}
export default SignIn;
