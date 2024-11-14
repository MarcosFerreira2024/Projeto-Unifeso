import React from 'react'
import Image from 'next/image'
import BotoesNavBar from './BotoesNavBar'

function NavBar() {
  function handleVisibility() {
    const menuMobile = document.getElementById('menu-mobile') as HTMLElement
    if (menuMobile.classList.contains('hidden')){
        menuMobile.classList.remove('hidden')
        menuMobile.classList.add('flex','opacity-0','absolute','md:static','right-0','p-5','translate-x-[120px]','md:translate-x-[0px]')
        setTimeout(() => {
            menuMobile.classList.add('opacity-100','translate-x-[0px]', 'bg-background','rounded-bl-sm','top-[120px]',)

        }, 100);
    }else{
        menuMobile.classList.remove('opacity-100','translate-x-[0px]')
        setTimeout(()=>{
            menuMobile.classList.add('hidden','opacity-100')
        },100)
    }
   
  }

  return (
    <div className='bg-background fixed w-[100vw] min-h-[120px]'>
      <div className='max-w-[1440px] min-h-[120px] flex mx-auto justify-between px-5 md:px-0 items-center'>
        <Image src="NavBar/unifeso.svg" alt='logo unifeso' width={250} height={66} />
        
        <nav
          className='hidden md:flex-row flex-col md:flex gap-5  transition-all ease-in '
          id='menu-mobile'
        >
          <BotoesNavBar href='#agendamento' src='NavBar/agenda.svg' alt='agendamento'/>
          <BotoesNavBar href='#servicos' src='NavBar/services.svg' alt='servicos'/>
          <BotoesNavBar href='#notificacoes' src='NavBar/notifications.svg' alt='notificações'/>
          <BotoesNavBar href='#feedback' src='NavBar/feedback.svg' alt='feedback'/>
          <BotoesNavBar href='#contato' src='NavBar/contact.svg' alt='contato'/>
          <BotoesNavBar href='/cadastro' src='NavBar/account.svg' alt='cadastrar'/>
        </nav>
        <nav className='md:hidden'>
          <button onClick={handleVisibility}>
            <Image src="NavBar/menu-hamburguer.svg" alt="menu mobile" width={24} height={10} />
          </button>
        </nav>
      </div>
    </div>
  )
}

export default NavBar