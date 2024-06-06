// privileges.ts
export enum Permissions {
    READ,
    WRITE,
    PUBLISH,
  }
  
  export enum Features {
    FEATURE_A,
    FEATURE_B,
  }
  
  export interface TPrivileges {
    [feature: string]: Permissions[];
  }
  
  export const PRIVILEGES_MOCKS: Record<Permissions, TPrivileges> = {
    [Permissions.READ]: {
      [Features.FEATURE_A]: [Permissions.READ],
    },
    [Permissions.WRITE]: {
      [Features.FEATURE_A]: [Permissions.READ, Permissions.WRITE],
    },
    [Permissions.PUBLISH]: {
      [Features.FEATURE_A]: [Permissions.READ, Permissions.WRITE, Permissions.PUBLISH],
    },
  };