import React from 'react'
import Image from 'next/image'

type botao = {
    href?:string; 
    src: string; 
    alt: string;
    width?: number;
    tema?:string;  
    height?: number;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void  
}
function BotoesNavBar({href,src,alt,width=14,height=14,tema, onClick}: botao) {
  return (
      <a className='w-[32px] botao botao-NavBar cursor-pointer  font-roboto h-[32px] border-[#02877E] dark:border-gray-600 dark:hover:bg-gray-200 hover:scale-110 dark:bg-white border-[1px] bg-white justify-center flex items-center rounded-full tooltip'onClick={onClick} data-tema={tema} data-tooltip={alt} href={href}><Image src={src} alt={alt} width={width} height={height}  className='filter dark:brightness-0'  /></a>
  )

}

export default BotoesNavBar
