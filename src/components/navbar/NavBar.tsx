"use client"
import React from 'react'
import Image from 'next/image'
import BotoesNavBar from './BotoesNavBar'

function NavBar() {
  function handleVisibility() {
    const menuMobile = document.getElementById('menu-mobile') as HTMLElement
    if (menuMobile.classList.contains('hidden')){
        menuMobile.classList.remove('hidden',)
        menuMobile.classList.add('flex','top-[120px]','right-0')
        setTimeout(() => {
            menuMobile.classList.add('bg-background','rounded-bl-sm')
            menuMobile.classList.remove('translate-x-[120px]','opacity-0')
        }, 150);
    }else{
        menuMobile.classList.add('translate-x-[120px]','opacity-0')
        setTimeout(()=>{
            menuMobile.classList.add('hidden')
        },150)
    }
   
  }

  return (
    <div className='bg-background fixed w-[100vw] min-h-[120px]'>
      <div className='max-w-[1440px] min-h-[120px] flex mx-auto justify-between px-5 md:px-0 items-center'>
        <Image src="NavBar/unifeso.svg" alt='logo unifeso' width={250} height={66} />
        
        <nav
          className='hidden md:flex-row flex-col opacity-0 md:opacity-100 md:flex p-10 rounded-bl-lg md:p-0 gap-5 transition-all ease-in translate-x-[120px] md:translate-x-0 md:static absolute'
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