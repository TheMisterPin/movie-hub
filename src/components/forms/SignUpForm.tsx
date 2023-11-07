import { useForm, SubmitHandler } from 'react-hook-form';
import { UserLoginData } from '../../types/UserLoginData';
import { FormContainer, MainButton,  } from '../../styled components/ui/FormUIComponents';
import FormNavbar from '../../styled components/elements/FormHeader';
import { Form, InputField } from '../../styled components/elements/FormElements';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm<UserLoginData>();

  const onSubmit: SubmitHandler<UserLoginData> = async (data) => {
    try {
      const response = await fetch('http://localhost:2323/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <FormNavbar text="Sign Up" />
      <img width="100" height="100" src="https://img.icons8.com/external-others-iconmarket/128/22C3E6/external-tv-valentines-day-others-iconmarket.png" alt="external-tv-valentines-day-others-iconmarket"/>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Username"
            type="text"
            name="username"
            register={register}
          
          />
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
          <MainButton type="submit">Register</MainButton>
        </Form>
      </FormContainer>
    </>
  );
};