import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserLoginData } from '../types/UserLoginData';
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
interface AuthState {
  sessionToken: string;
  isLogin: boolean;
  error: string;
}

const initialState: AuthState = {
  sessionToken: '',
  isLogin: false,
  error: '',
};

type AuthAction =
| { type: 'LOGIN_SUCCESS'; payload: { sessionToken: string } }
| { type: 'LOGIN_FAILURE'; payload: { errorMessage: string }  }
| { type: 'LOGOUT' };

interface AuthContextType {
  authState: AuthState;
  login: (data: UserLoginData) => Promise<void>;
  registerUser: (data: UserLoginData) => Promise<void>;
  logout: () => void;
}

type ProviderProps = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
case 'LOGIN_SUCCESS':
      return { ...state, isLogin: true, sessionToken: action.payload.sessionToken, error: '' };
    case 'LOGIN_FAILURE':
      return { ...state, isLogin: false, error: action.payload.errorMessage };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const authenticate = async (url: string, data: UserLoginData) => {
    try {    console.log('Data object:', data);
        console.log('Data being sent:', JSON.stringify(data));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
    

        body: JSON.stringify(data),
   
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch({ type: 'LOGIN_FAILURE', payload: { errorMessage: getErrorMessage(errorData) } });
        return;
      }

      const result = await response.json();
      dispatch({ type: 'LOGIN_SUCCESS',  payload: { sessionToken: result.sessionToken } });
      setTimeout(() => navigate('/home'), 0); 
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { errorMessage: getErrorMessage(error) } });
    }
  };

  const login = (data: UserLoginData) => authenticate('http://localhost:2323/auth/login', data);
  const registerUser = (data: UserLoginData) => authenticate('http://localhost:2323/auth/register', data);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authState, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
