import React from 'react'
type cabecalho = {
    subtitulo?:string,
    titulo:string,
    color?:string,
}
function Titulo({subtitulo, titulo,color}:cabecalho) {
  return (
    <div>
      <h1 className='lg:text-6xl text-5xl sm:text-5xl font-roboto text-title  text-nowrap'style={{color:color}}>{titulo}</h1>
      <p className='lg:text-xl text-lg font-roboto text-subtitle ' style={{color:color}}>{subtitulo}</p>
    </div>
  )
}

export default Titulo
