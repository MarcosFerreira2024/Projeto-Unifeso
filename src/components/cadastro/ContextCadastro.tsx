import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type ContextType = {
    modal: boolean
    setModal: (e: boolean) => void
};

export const ContextCadastro = createContext({} as ContextType);

export const ContextCadastroProvider = ({ children }: ContextProviderProps) => {
    const [modal, setModal] =  useState(false);

    return (
        <ContextCadastro.Provider
            value={{
                modal,
                setModal,
                
            }}
        >
            {children}
        </ContextCadastro.Provider>
    );
};