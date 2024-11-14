import React from 'react'
import Image from 'next/image'

type botao = {
    href:string; 
    src: string; 
    alt: string;
    width?: number; 
    height?: number;  
}
function BotoesNavBar({href,src,alt, width=14,height=14}: botao) {
  return (
        <a className='w-[32px] botao-NavBar h-[32px] border-[#02877E] border-[1px] bg-white justify-center flex items-center rounded-full' href={href}><Image src={src} alt={alt} width={width} height={height} /></a>
  )
}

export default BotoesNavBar
