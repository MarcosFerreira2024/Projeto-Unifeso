'use client'

import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'
import BotoesNavBar from '../navbar/BotoesNavBar';

function ThemeSwitcher() {
    const {setTheme} = useTheme();
    const [temaBotao,setTemaBotao] = React.useState<string>("");
    useEffect(() => {
        const pegaTema = localStorage.getItem('theme')
        if (pegaTema) {
          setTemaBotao(pegaTema)
        } else {
          setTemaBotao('light')
          setTheme('light')
        }
      }, [])
    function handleClick(event: React.MouseEvent<HTMLElement>){
            const tema = event.currentTarget.getAttribute("data-tema")
            localStorage.setItem('theme', tema as string);
            setTemaBotao(tema as string)
            setTheme(tema as string)
        }
       
  return (
    <div>
       {temaBotao === 'dark'?
       <BotoesNavBar src='NavBar/lua.svg' onClick={handleClick}  tema='light'  alt='To Light' />:""
       }
       {temaBotao === 'light'?
       <BotoesNavBar src='NavBar/sol.svg' onClick={handleClick} tema='dark' alt='To Dark' />:""
       }
    </div>
  )
}

export default ThemeSwitcher
