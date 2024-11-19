import { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type ContextType = {
    openModal:(event:MouseEvent)=> void; 
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
    function openModal(event: MouseEvent){
        if(event && event.currentTarget) {
            const data = (event.currentTarget as HTMLElement).getAttribute("data-descricao")
            setModalData(data as string)
            setModal(true)
        }
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