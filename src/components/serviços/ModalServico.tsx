import React from "react";
import { ContextService } from "./ContextServico";

function ModalServico() {
  const { modal, closeModal, modalData } = React.useContext(ContextService);
  return (
    <div
      onClick={closeModal}
      className={`teste w-[100vw] h-[100vh] ${modal ? "anima" : ""} dark:bg-transparent`}
    >
      <div className=" h-[100%] flex justify-center items-center ">
        <div className=" hover:scale-105 transition-all flex items-center dark:hover:bg-gray-800 hover:opacity-90 hover:border-[4px] border-[4px] border-[transparent] text-title mx-auto font-roboto text-center text-2xl justify-center h-[350px] w-[350px] px-5 cardservicos rounded-[20px] dark:bg-transparent dark:text-title-dark dark:border-title-dark">
          {modalData}
        </div>
      </div>
    </div>
  );
}

export default ModalServico;