import Image from 'next/image'
import React from 'react'
type card = {
    url?:string; 
    alt:string; 
    width?:number; 
    height?:number; 
    titulo:string; 
}
function CardServicos({titulo,url="/servicos/agenda.svg",alt,height=81,width=81}:card) {

  return (
    <div className=' min-h-[250px] sm:min-h-[350px] min-w-[250px] sm:min-w-[350px] max-h-[250px] sm:max-h-[350px] max-w-[250px] sm:max-w-[350px]  mx-auto flex-1 hover:border-[4px]  hover:border-[#f3f3f3] border-[4px] border-[transparent] flex-wrap rounded-[20px] flex justify-around flex-col cardservicos bg-white'>
        <div className='flex hover:opacity-80 flex-col text-center gap-2'>
            <div className='flex self-center' >
                <Image src={url} alt={alt} height={height} width={width}   className='object-fit object-bottom min-h-[81px] '/>
            </div>
            <div className='mt-5 text-nowrap' >
                <h1 className='sm:text-3xl text-xl  text-title font-roboto'>{titulo}</h1>
            </div>
        </div>
    </div>
  )
}

export default CardServicos
