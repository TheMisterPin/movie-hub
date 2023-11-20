import { UserLoginData } from "./UserLoginData";
import { Movie } from './MoviesContextType';

export type UserContextType = {
    userLogged: UserInDB | null;
    updateUser: (username: string, userData: UserLoginData) => Promise<void>;
    deleteUser: (username: string) => Promise<void>;
    fetchUser: (id: number) => Promise<void>;
    getUserByEmail?: (email: string) => Promise<void>;
    createNewUser?: (email: string) => Promise<void>;
};
export interface UserInDB {
    username: string;
    email: string;
    id: number;
    movies?: Movie[];
}
