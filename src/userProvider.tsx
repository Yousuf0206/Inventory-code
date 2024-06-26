// userProvider.tsx
import React, { useState } from 'react';
import acl, { Acl } from 'acl';
import { MemoryBackend } from 'acl';
import  UserContext  from './userContext';

const backend = new MemoryBackend();
const aclInstance = new acl(backend);

aclInstance.allow([
  {
    roles: ['user'],
    allows: [
      { resources: '/', permissions: 'view' }
    ]
  },
  {
    roles: ['admin'],
    allows: [
      { resources: '/', permissions: 'view' },
      { resources: '/profile', permissions: 'edit' }
    ]
  }
]);

const UserProvider: React.FC = ( children)  => {
    const [user, setUser] = useState<IUser | null>(null);
    const [role, setRole] = useState<string | null>(null);
  
    const saveUser = (user: IUser) => {
      setUser(user);
      setRole(user.role); // Save the user's role
    };
  
    return (
      <UserContext.Provider value={{ user, saveUser, role }}>
        (children)
      </UserContext.Provider>
    );
  };


export default UserProvider;