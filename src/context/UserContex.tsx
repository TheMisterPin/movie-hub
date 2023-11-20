/* eslint-disable react-hooks/exhaustive-deps */
import { ProviderProps } from '../types/MoviesContextType';
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContextType, UserInDB } from '../types/UserContextType';




const UserContext = createContext<UserContextType>({
    userLogged: null,
    updateUser: async () => { },
    deleteUser: async () => { },
    fetchUser: async () => { },
});



export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
}
export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [userLogged, setUserLogged] = useState<UserInDB | null>(null);
    const { isAuthenticated, user } = useAuth0();


    const fetchUser = async (id: number) => {
        
        const url = `http://localhost:2323/users/'${id}'`;
        try {
            const response = await axios.get(url);
            setUserLogged(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }


    }



    const updateUser = async (username: UserInDB['username'], userData: { email: UserInDB['email'], username: UserInDB['username'] }) => {
        const encodedUsername = encodeURIComponent(username);
        const url = `http://localhost:2323/users/'${encodedUsername}'`
        try {
            await axios.put(url, userData);
            console.log(`UserInDB"${username}" updated successfully`);
        } catch (error) {
            console.error(`Error updating user with ID "${username}":`, error);
        }
    };


    const deleteUser = async (username: UserInDB['username']) => {
        const encodedUsername = encodeURIComponent(username);
        const url = `http://localhost:2323/users/'${encodedUsername}'`;

        try {
            await axios.delete(url);
            console.log(`UserInDB with ID "${username}" deleted successfully`);
        } catch (error) {
            console.error(`Error deleting user with ID "${username}":`, error);
        }
    };
    const createNewUser = async (email: string) => {
        const url = `http://localhost:2323/auth0`;
        try {
            const response = await axios.post(url, { email });
            setUserLogged(response.data);
            return userLogged
        } catch (error) {
            console.error(`Error posting user with email "${email}":`, error);
        }
    };


    const getUserByEmail = async (email: string) => {
        // const encodedEmail = encodeURIComponent(email);
        const url = `http://localhost:2323/users/email/${email}`;
        try {
            const response = await axios.get(url);
            setUserLogged(response.data); console.log(`UserInDB with email "${email}" found successfully`);
            return (userLogged)

        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                console.log('User not found, creating new user');
                createNewUser(email);
            } else {
                console.error(`Error fetching user with email "${email}":`, error);
            }
        }
        console.log(setUserLogged);

    };
    useEffect(() => {

        if (isAuthenticated && user?.email && !userLogged) {
            getUserByEmail(user.email);
        }
    }, [isAuthenticated, user?.email, getUserByEmail]);



    return (
        <UserContext.Provider value={{
            fetchUser,
            userLogged,
            updateUser,
            deleteUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};

