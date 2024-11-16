import Image from 'next/image'
import React from 'react'

function CardAgendamento({label,src,height=40,width=40,color="red"}:{label:string,height?:number,width?:number,src:string,color?:string}) {
  return (
    <div className='flex-1 min-w-[284px] max-w-[284px] min-h-[400px] max-h-[400px] rounded-[10px] flex  flex-col justify-center gap-[60px] items-center' style={{border: `2px solid ${color}`, color: color}}>
        <div className='w-[90px] h-[90px] rounded-full flex items-center justify-center'style={{border:`2px solid ${color}`}}>
            <Image src={src} height={height} width={width} alt={label}/>
        </div>
        <div>
            <h1 className='text-2xl font-roboto'>{label}</h1>
        </div>
    </div>
  )
}

export default CardAgendamento
