import React, { createContext, useState} from 'react';

interface IUserContext{

    user?: unknown;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<IUserContext>({
    limit: 5000,
    setLimit: () => {},
});


interface IUserProviderProps{
    children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
    const [limit, setLimit] = useState<number>(5000);

    
    return (
        <UserContext.Provider value={{ limit, setLimit }}>
            {children}
        </UserContext.Provider>
    );
}
