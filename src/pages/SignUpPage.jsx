import {
  SSignUpPage,
  SSignUpContainer,
  SSignUpModal,
} from "../components/SignInUp/SIgnInUp.styled";
import SignUp from "../components/SignInUp/SignUp";

function SignUpPage() {
  return (
    <SSignUpPage>
      <SSignUpContainer>
        <SSignUpModal>
          <SignUp />
        </SSignUpModal>
      </SSignUpContainer>
    </SSignUpPage>
  );
}
export default SignUpPage;
