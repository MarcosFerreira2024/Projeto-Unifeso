import React from 'react'
type cabecalho = {
    subtitulo?:string,
    titulo:string,
}
function Titulo({subtitulo, titulo}:cabecalho) {
  return (
    <>
      <p className='text-xl font-roboto text-subtitle'>{subtitulo}</p>
      <h1 className='text-6xl font-roboto text-title text-nowrap'>{titulo}</h1>
    </>
  )
}

export default Titulo
