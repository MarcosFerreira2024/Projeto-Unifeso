import Image from "next/image";
import React from "react";

function CardAgendamento({
  label,
  src,
  height = 40,
  width = 40,
  color = "red",
}: {
  label: string;
  height?: number;
  width?: number;
  src: string;
  color?: string;
}) {
  const [hover,setHover] = React.useState(false)

  function handleMouseEnter(){
    setHover(true)
  }
  function handleMouseLeave(){
    setHover(false)
  }
  return (
    
      <div
        className={` h-[400px] w-[284px] dark:bg-pagina-dark cursor-pointer rounded-[10px] hover:scale-[0.99] dark:hover:text-pagina-dark  flex  flex-col justify-center gap-[60px] items-center`}
        style={{ border: `2px solid ${color}`, color: hover? "": color, backgroundColor: hover? color : "", transition:"all 0.5s linear"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-[90px] h-[90px] z-10 bg-white dark:bg-pagina-dark  rounded-full  shadowMarquee flex items-center justify-center"
          style={{ border: `2px solid ${color}` }}
        >
          <Image src={src} height={height} width={width} alt={label}   />
        </div>
        <div>
          <h1 className="text-3xl font-roboto">{label}</h1>
        </div>
      </div>
    
  );
}

export default CardAgendamento;
