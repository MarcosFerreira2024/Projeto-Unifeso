import React from 'react'
type cabecalho = {
    subtitulo?:string,
    titulo:string,
    color?:string,
}
function Titulo({subtitulo, titulo,color}:cabecalho) {
  return (
    <div>
      <p className='lg:text-xl text-lg font-roboto text-subtitle text-center lg:text-left' style={{color:color}}>{subtitulo}</p>
      <h1 className='lg:text-6xl text-4xl sm:text-5xl font-roboto text-title text-center lg:text-left text-nowrap'style={{color:color}}>{titulo}</h1>
    </div>
  )
}

export default Titulo
