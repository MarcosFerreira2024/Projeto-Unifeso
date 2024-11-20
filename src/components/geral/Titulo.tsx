import React from 'react'
type cabecalho = {
    subtitulo?:string,
    titulo:string,
    color?:string,
}
function Titulo({subtitulo, titulo,color}:cabecalho) {
  return (
    <div >
      <p className='lg:text-xl text-lg font-roboto text-subtitle dark:text-subtitle-dark ' style={{color:color}}>{subtitulo}</p>
      <h1 className='lg:text-6xl text-5xl sm:text-5xl font-roboto text-title dark:text-title-dark  text-nowrap'style={{color:color}}>{titulo}</h1>
    </div>
  )
}

export default Titulo
