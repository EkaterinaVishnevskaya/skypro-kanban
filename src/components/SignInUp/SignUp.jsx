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
import { signUp } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
      isValid = false;
    }

    if (!emailPattern.test(formData.login)) {
      newErrors.login = "Введите корректный email";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      const response = await signUp(formData);
      localStorage.setItem("userInfo", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (requestError) {
      setErrors({ form: requestError.message });
    }
  }
  return (
    <SModalBlock>
      <SModalTitle>Регистрация</SModalTitle>
      <SSignUpForm id="formLogUp" action="#">
        <SSignUpInput
          error={errors.name}
          type="text"
          name="name"
          id="first-name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
        />
        <SSignUpInput
          error={errors.login}
          type="text"
          name="login"
          id="loginReg"
          placeholder="Эл. почта"
          value={formData.login}
          onChange={handleChange}
        />
        <SSignUpInput
          error={errors.password}
          type="password"
          name="password"
          id="passwordFirst"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error}</p>
        <SSignUpButton id="SignUpEnter">
          <SSignUpLinkButton onSubmit={handleSubmit}>
            Зарегистрироваться
          </SSignUpLinkButton>
        </SSignUpButton>
        <SSignUpFormGroup>
          <SSignUpFormGroupP>
            Уже есть аккаунт?{" "}
            <SSignUpFormGroupA href="/signin">Войдите здесь</SSignUpFormGroupA>
          </SSignUpFormGroupP>
        </SSignUpFormGroup>
      </SSignUpForm>
    </SModalBlock>
  );
}
export default SignUp;
