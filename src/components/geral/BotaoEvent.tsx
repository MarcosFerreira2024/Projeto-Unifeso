import React from 'react'
type eventButton = {
    label: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void
    type?: "submit" | "reset" | "button" | undefined
}
function BotaoEvent({label,onClick,onMouseEnter,onMouseLeave,type=undefined}: eventButton) {
  return (
    <>
<button onClick={onClick} type={type} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-[168px] botao 
h-[38px] border-[2px] border-subtitle 
hover:bg-[#2e8b85] dark:border-gray-300
 bg-white dark:bg-pagina-dark dark:text-gray-300 
 dark:hover:bg-[white] dark:hover:text-background-dark 
  focus:bg-[#2e8b85] dark:focus:bg-[white] dark:focus:text-background-dark
   focus:text-title  hover:text-[white] transition-all ease-linear text-title 
    font-roboto text-base rounded-[10px] "
     > {label} </button>
    </>
  )
}

export default BotaoEvent

