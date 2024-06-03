// userContext.tsx
import React from 'react';

interface IUser {
  role: string;
}

interface IUserContext {
  user: IUser | null;
  saveUser: (user: IUser) => void;
}

const UserContext = React.createContext<IUserContext | undefined>(undefined);

export default UserContext;