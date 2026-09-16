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

function SignUp({ setIsAuth }) {
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

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

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
      return;
    }
    try {
      const data = await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <SModalBlock>
      <SModalTitle>Регистрация</SModalTitle>
      <SSignUpForm id="formLogUp" action="#">
        <SSignUpInput
          error={errors.name}
          type="text"
          name="first-name"
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
          <SSignUpLinkButton onClick={handleSubmit}>
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
