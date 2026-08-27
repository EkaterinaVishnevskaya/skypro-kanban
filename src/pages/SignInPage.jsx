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

function SignInPage() {
  return (
    <SSignUpPage>
      <SSignUpContainer>
        <SSignUpModal>
          <SModalBlock>
            <SModalTitle>Вход</SModalTitle>
            <SSignUpForm id="formLogIn" action="#">
              <SSignUpInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SSignUpInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <SSignUpButton id="btnEnter">
                <SSignUpLinkButton href="/">Войти</SSignUpLinkButton>
              </SSignUpButton>
              <SSignUpFormGroup>
                <SSignUpFormGroupP>Нужно зарегистрироваться?</SSignUpFormGroupP>
                <SSignUpFormGroupA href="/signup">Регистрируйтесь здесь</SSignUpFormGroupA>
              </SSignUpFormGroup>
            </SSignUpForm>
          </SModalBlock>
        </SSignUpModal>
      </SSignUpContainer>
    </SSignUpPage>
  );
}
export default SignInPage;
