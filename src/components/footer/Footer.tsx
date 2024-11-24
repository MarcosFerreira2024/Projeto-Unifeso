import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer id='contato'>
        <section className='bg-subtitle dark:bg-background-dark'>
            <nav className='max-w-[1280px] mx-auto flex justify-center gap-10 py-5 '>
                <button className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><Image src="Footer/instagram.svg" alt="logo" width={32} height={32} /></button>
                <button className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><Image src="Footer/facebook.svg" alt="logo" width={32} height={32} /></button>
                <button className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><Image src="Footer/whatsapp.svg" alt="logo" width={32} height={30} /></button>
            </nav>
        </section>
        <section className='bg-background dark:bg-gray-600 '>
            <ul className='max-w-[1280px] font-roboto mx-auto flex items-center text-white dark:text-title-dark  justify-evenly gap-10 py-20 text-lg flex-wrap '>
                <li className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><a href="">Termos de Serviço</a></li>
                <li className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><a href="">Politica de Privacidade</a></li>
                <li className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><a href="">Suporte</a></li>
                <li className='filter hover:brightness-75 transition-all duration-300 ease-in-out'><a href="">Status de Serviço</a></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer
