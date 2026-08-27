import {
  SSignUpPage,
  SSignUpContainer,
  SSignUpModal,
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

function SignUpPage() {
  return (
    <SSignUpPage>
      <SSignUpContainer>
        <SSignUpModal>
          <SModalBlock>
            <SModalTitle>Регистрация</SModalTitle>
            <SSignUpForm id="formLogUp" action="#">
              <SSignUpInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <SSignUpInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <SSignUpInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <SSignUpButton id="SignUpEnter">
                <SSignUpLinkButton href="/">
                  Зарегистрироваться
                </SSignUpLinkButton>
              </SSignUpButton>
              <SSignUpFormGroup>
                <SSignUpFormGroupP>
                  Уже есть аккаунт?{" "}
                  <SSignUpFormGroupA href="/signin">
                    Войдите здесь
                  </SSignUpFormGroupA>
                </SSignUpFormGroupP>
              </SSignUpFormGroup>
            </SSignUpForm>
          </SModalBlock>
        </SSignUpModal>
      </SSignUpContainer>
    </SSignUpPage>
  );
}
export default SignUpPage;
