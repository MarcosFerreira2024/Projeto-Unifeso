import Image from 'next/image'
import React from 'react'
type card = {
    url?:string; 
    alt:string; 
    width?:number; 
    height?:number; 
    titulo:string; 
    descricao:string; 
}
function CardServicos({descricao,titulo,url="/servicos/agenda.svg",alt,width=80,height=80}:card) {
  return (
    <div className='min-w-[400px] mx-auto  flex-1 hover:border-[4px] hover:border-[#f3f3f3] border-[4px] border-[transparent] flex-wrap rounded-[20px] flex justify-around flex-col cardservicos min-h-[420px] bg-white'>
        <div className='flex hover:opacity-80 flex-col text-center gap-2'>
            <div className='flex self-center'>
                <Image src={url} alt={alt} layout="responsive" width={width} height={height}  className='object-cover h-[81px] max-h-[81px]'/>
            </div>
            <div className='h-[150px] mt-5' >
                <h1 className='text-3xl  text-title font-roboto'>{titulo}</h1>
                <p className='text-lg text-center font-roboto text-subtitle '>{descricao}</p>
            </div>
        </div>
    </div>
  )
}

export default CardServicos
