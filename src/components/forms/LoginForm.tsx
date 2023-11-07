import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext'; 
import type { UserLoginData } from '../../types/UserLoginData';
import { FormContainer, MainButton, } from '../../styled components/ui/FormUIComponents';
import { InputField, Form } from '../../styled components/elements/FormElements';
import FormNavbar from '../../styled components/elements/FormHeader';



export const LoginForm = () => {
  const { register, handleSubmit } = useForm<UserLoginData>();
  const { login } = useAuth();

  const onSubmit: SubmitHandler<UserLoginData> = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <FormNavbar text="Log In" />
    <img width="100" height="100" src="https://img.icons8.com/external-others-iconmarket/128/22C3E6/external-tv-valentines-day-others-iconmarket.png" alt="external-tv-valentines-day-others-iconmarket"/>
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
      
          <InputField 
            label="Email Address" 
            type="email" 
            name="email"
            register={register} 
          />
      
        
          <InputField 
            label="Password" 
            type="password" 
            name="password"
            register={register} 
          />
       
        <MainButton type="submit">Sign in</MainButton>
      </Form>
    </FormContainer></>
  );
};

