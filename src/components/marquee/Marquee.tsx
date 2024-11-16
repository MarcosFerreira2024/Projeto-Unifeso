import React from "react";
import { cards } from "@/data/marquee-data";
const data = cards;

function Marquee() {
    const [anima,setAnima] = React.useState(true)
    function handleMouseEnter(){
        setAnima(false)
    }
    function handleMouseLeave(){
        setAnima(true)
    }

  return (
    <section className="bg-background" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto max-w-[1920px]">
        <ul className={`flex min-w-[100%] justify-between items-center mt-5 mb-5 flex-shrink-0 ${anima ? 'marqueeAnimation' : 'marqueeAnimationPaused'}`}>
          {data.map((item, index) => (
            <li key={index} className="ml-5 min-w-[345px] min-h-[136px] shadowMarquee font-roboto p-[10px] bg-white border-[1px] text-title flex flex-col justify-between rounded-[15px]">
              <div className="flex justify-between">
                <h3>{item.tipo}</h3>
                <p className="w-[9px] h-[9px] bg-background rounded-full"></p>
              </div>
              <p>
                {item.horario_inicio.toFixed(2).replace(".", ":")}- 
                {item.horario_termino.toFixed(2).replace(".", ":")}
              </p>
            </li>
          ))}
        </ul>

        <ul aria-hidden="true" className={`flex min-w-[100%]  justify-between items-center mt-5 mb-5 flex-shrink-0 ${anima ? 'marqueeAnimation' : 'marqueeAnimationPaused'}`}>
          {data.map((item, index) => (
            <li key={index} className="ml-5 min-w-[345px]  min-h-[136px] shadowMarquee font-roboto p-[10px] bg-white border-[1px] text-title flex flex-col justify-between rounded-[15px]">
              <div className="flex justify-between">
                <h3>{item.tipo}</h3>
                <p className="w-[9px] h-[9px] bg-background rounded-full"></p>
              </div>
              <p>
                {item.horario_inicio.toFixed(2).replace(".", ":")}- 
                {item.horario_termino.toFixed(2).replace(".", ":")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Marquee;