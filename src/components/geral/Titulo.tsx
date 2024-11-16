import React from 'react'
type cabecalho = {
    subtitulo?:string,
    titulo:string,
}
function Titulo({subtitulo, titulo}:cabecalho) {
  return (
    <>
      <p className='lg:text-xl text-lg font-roboto text-subtitle text-center lg:text-left'>{subtitulo}</p>
      <h1 className='lg:text-6xl mt-2 text-4xl sm:text-5xl font-roboto text-title text-center lg:text-left text-nowrap'>{titulo}</h1>
    </>
  )
}

export default Titulo
