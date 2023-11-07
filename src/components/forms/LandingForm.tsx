import { FormProps, FormContainer, PageTitle, LinkButton, BodyText, FormLink} from '../../styled components/';



export const LandingForm: React.FC<FormProps> = ({ setCurrentForm }) => {

  const handleSetCurrentForm = (formName: string) => {
    if (setCurrentForm) {
      setCurrentForm(formName);
    } else {
      
      console.error(`Error: 'setCurrentForm' function is not defined but is required to navigate to the '${formName}' form.`);
    }
  };

  return (
    <FormContainer>
      <img width="100" height="100" src="https://img.icons8.com/external-others-iconmarket/128/22C3E6/external-tv-valentines-day-others-iconmarket.png" alt="external-tv-valentines-day-others-iconmarket"/>
      <PageTitle> MovieHub</PageTitle>
      <LinkButton onClick={() => handleSetCurrentForm('login')}> Login </LinkButton>
      <BodyText> Don't have an account? <FormLink onClick={() => handleSetCurrentForm('register')}> Register </FormLink></BodyText>
    </FormContainer>
  )
}