import React from 'react'
import { ContextService } from './ContextServico'

function ModalServico() {
    const {closeModal,modalData} = React.useContext(ContextService)
  return (
    <div onClick={closeModal} className='absolute top-0 bottom-0 left-0 right-0 w-[screen] h-[screen]'>
        <div className=' h-[100%] flex justify-center items-center'>
            <div className=' flex items-center hover:opacity-80 hover:border-[4px] border-[4px] border-[transparent] text-title mx-auto font-roboto text-center text-2xl justify-center h-[350px] w-[350px] px-5 cardservicos rounded-[20px]'>
                {modalData}
            </div>

        </div>
    </div>
  )
}

export default ModalServico
