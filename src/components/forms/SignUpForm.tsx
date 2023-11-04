import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import type { UserLoginData } from '../../types/UserLoginData';

export const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginData>();
  const { register: registerUser } = useAuth(); // Use the register function from the context

  const onSubmit: SubmitHandler<UserLoginData> = async (data) => {
    try {
      await registerUser(data); // Use the register function from the context
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>
        Username:
        <input {...register('username', { required: 'Username is required' })} />
      </label>
      {errors.username && <p>{errors.username.message}</p>}
    </div>
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
    <button type="submit">Register</button>
  </form>
);
};
