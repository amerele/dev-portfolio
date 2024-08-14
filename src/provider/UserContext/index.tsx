import { createContext } from 'react';

interface UserLoggedType {
  name: string;
}

const UserContext = createContext<{ UserLogged: UserLoggedType | null; setUserLogged: React.Dispatch<React.SetStateAction<UserLoggedType | null>> } | null>(null);

export default UserContext;
