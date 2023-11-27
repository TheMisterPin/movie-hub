import { useAuth0 } from "@auth0/auth0-react";
import { SignUpForm } from './SignUpForm';
import { FormContainer, PageTitle, LinkButton, BodyText, FormLink  } from "../../styled components";


export const LandingForm = () => {

  

  const { loginWithRedirect } = useAuth0();


  return (
    <FormContainer>
      <img width="100" height="100" src="https://img.icons8.com/external-others-iconmarket/256/22C3E6/external-tv-valentines-day-others-iconmarket.png" alt="external-tv-valentines-day-others-iconmarket"/>
      <PageTitle> MovieHub</PageTitle>
      <LinkButton onClick={() => loginWithRedirect()}> Login </LinkButton>
      <BodyText> Don't have an account? <FormLink onClick={() =>SignUpForm }> Register </FormLink></BodyText>
    </FormContainer>
  )
}