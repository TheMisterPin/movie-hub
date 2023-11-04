import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserLoginData } from '../types/UserLoginData';

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
  | { type: 'LOGIN_SUCCESS'; payload: string }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' };

interface AuthContextType {
  authState: AuthState;
  login: (data: UserLoginData) => Promise<void>;
  register: (data: UserLoginData) => Promise<void>;
  logout: () => void;
}

type ProviderProps = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLogin: true, sessionToken: action.payload, error: '' };
    case 'LOGIN_FAILURE':
      return { ...state, isLogin: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const login = async (data: UserLoginData) => {
    const response = await fetch('http://localhost:2323/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });

    if (response.ok) {
      const result = await response.json();
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.sessionToken });
      navigate('/home');
    } else {
      const error = await response.text();
      dispatch({ type: 'LOGIN_FAILURE', payload: error });
    }
  };

  const register = async (data: UserLoginData) => {
    const response = await fetch('http://localhost:2323/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate('/login');
    } else {
      const error = await response.text();
      dispatch({ type: 'LOGIN_FAILURE', payload: error });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
