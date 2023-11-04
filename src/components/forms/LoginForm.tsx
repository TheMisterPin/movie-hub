import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext'; 
import type { UserLoginData } from '../../types/UserLoginData';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginData>();
  const { login } = useAuth(); 

  const onSubmit: SubmitHandler<UserLoginData> = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Email:
          <input type="email" {...register('email', { required: 'Email is required' })} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>
          Password:
          <input type="password" {...register('password', { required: 'Password is required' })} />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign in</button>
    </form>
  );
};