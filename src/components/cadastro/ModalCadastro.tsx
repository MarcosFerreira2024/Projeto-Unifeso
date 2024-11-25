import React from 'react'
import { ContextCadastro } from './ContextCadastro';
import BotaoEvent from '../geral/BotaoEvent';


function ModalCadastro() {
const {modal,setModal} = React.useContext(ContextCadastro);
     function handleform(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setModal(false)
        alert('Cadastro Enviado com sucesso')
        window.location.href='/cadastro'
     }
  return (
    <div className='absolute w-[360px] h-[280px] md:w-[560px] md:h-[300px] top-[50%] font-roboto  realtive  left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-[20px] border-[10px] z-10 border-subtitle shadowMarquee dark:border-gray-300 dark:bg-gray-900 bg-pagina text-subtitle dark:text-title-dark hover:scale-100'>
        <div className='text-3xl text-center py-[10px]'>Tipo de Usuario</div>
        <button onClick={()=>setModal(!modal)} className='text-xl w-[30px] h-[30px] absolute top-[10px] right-[10px] shadow-md shadow-black/20  text-subtitle dark:text-gray-600 font-bold border-subtitle dark:border-gray-300 bg-white border-[2px] flex self-center justify-center items-center rounded-full '>X</button>
        <form onSubmit={handleform} className='flex flex-col px-[10px] gap-5 text-lg'>
            <div className='flex items-center gap-2'>
                <input type="radio" name="tipoUsuario" required  value='professor'/>
                <label htmlFor="">Professor</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="tipoUsuario" required value='aluno'/>
                <label htmlFor="">Aluno</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="tipoUsuario" required value='visitante'/>
                <label htmlFor="">Visitante</label>
            </div>
            <div className='flex self-center absolute bottom-[10px]'>
                <BotaoEvent type='submit' label='Concluir Cadastro' />
            </div>

        </form>
    </div>
  )
}

export default ModalCadastro
