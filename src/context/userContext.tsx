'use client';

import React, { createContext } from 'react';

interface UserContextData {
  name: string;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export function UserProvider({
  data,
  children,
}: React.PropsWithChildren<{ data?: UserContextData }>) {
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
