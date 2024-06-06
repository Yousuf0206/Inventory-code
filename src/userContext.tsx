// userContext.tsx
import React from 'react';

interface IUser {
  role: string;
}

interface IUserContext {
    user: IUser | null;
    saveUser: (user: IUser) => void;
    role: string | null; // Add this property
  }

const UserContext = React.createContext<IUserContext | undefined>(undefined);

export default UserContext;