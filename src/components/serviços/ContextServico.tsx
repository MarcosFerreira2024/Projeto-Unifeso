import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type ContextType = {
    openModal:(event:any)=> void; 
    closeModal:()=> void;
    modalData:string;
    setModalData:(e:string)=>void;
    setModal:(e:boolean)=>void;
    modal:boolean; 
    
    
};


export const ContextService = createContext({} as ContextType);

export const ServiceProvider = ({ children }: ContextProviderProps) => {
    const [modal,setModal] = useState(false);
    const [modalData,setModalData] = useState("")

    function closeModal(){
        setModal(false)
    }
    function openModal(event:any){
        setModalData(event.currentTarget.getAttribute("data-descricao"))
        setModal(true)
    }

    return (
        <ContextService.Provider
            value={{
                closeModal,
                openModal,
                setModal,
                modalData,
                setModalData,
                modal,
                
            }}
        >
            {children}
        </ContextService.Provider>
    );
};