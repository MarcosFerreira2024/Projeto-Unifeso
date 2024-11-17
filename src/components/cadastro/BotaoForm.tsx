import React from 'react'
type formbotao ={
    action?: "button" | "submit" | "reset";
    label: string; 

}
function BotaoForm({action="submit",label}: formbotao){
  return (
            <button className='w-[133px] self-center   bg-background  px-5 botao outline-none h-[38px] border-[2px] hover:bg-white hover:text-title border-subtitle focus:bg-[white]   focus:text-title transition-all ease-linear text-white  font-roboto rounded-[10px] ' type={action}>{label}</button>
  )
}

export default BotaoForm
