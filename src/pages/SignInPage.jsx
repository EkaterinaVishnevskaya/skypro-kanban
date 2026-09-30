import SignIn from "../components/SignInUp/SignIn";
import {
  SSignUpPage,
  SSignUpContainer,
  SSignUpModal,
} from "../components/SignInUp/SIgnInUp.styled";


function SignInPage() {

  return (
    <SSignUpPage>
      <SSignUpContainer>
        <SSignUpModal>
          <SignIn />
        </SSignUpModal>
      </SSignUpContainer>
    </SSignUpPage>
  );
}
export default SignInPage;
