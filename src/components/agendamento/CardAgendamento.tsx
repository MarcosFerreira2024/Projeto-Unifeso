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
        className={`min-w-[284px] max-w-[284px] min-h-[400px] max-h-[400px]  cursor-pointer rounded-[10px]  flex  flex-col justify-center gap-[60px] items-center`}
        style={{ border: `2px solid ${color}`, color: hover? "white": color, backgroundColor: hover? color : "white", transition:"all 0.5s linear"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-[90px] h-[90px] z-10 bg-white rounded-full shadowMarquee flex items-center justify-center"
          style={{ border: `2px solid ${color}` }}
        >
          <Image src={src} height={height} width={width} alt={label} />
        </div>
        <div>
          <h1 className="text-3xl font-roboto">{label}</h1>
        </div>
      </div>
    
  );
}

export default CardAgendamento;
