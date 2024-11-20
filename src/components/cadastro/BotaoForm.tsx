import React from 'react'
type formbotao ={
    action?: "button" | "submit" | "reset";
    label: string; 
    outros?: React.ButtonHTMLAttributes<HTMLButtonElement>; 

}
function BotaoForm({action="submit",label,outros}: formbotao){
  return (
            <button {...outros} className='w-[133px] self-center   bg-background dark:bg-background-dark   px-5 botao outline-none h-[38px] border-[2px] hover:bg-white dark:border-gray-500 dark:hover:text-white dark:text-gray-400 hover:text-title border-subtitle focus:bg-[white]   focus:text-title transition-all ease-linear text-white  font-roboto rounded-[10px] ' type={action}>{label}</button>
  )
}

export default BotaoForm
