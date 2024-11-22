import React from "react";

function Texto({texto,color,size}:{texto:string,color?:string,size?:string}) {
  return (
    <div>
      <p className={`${size?size:"text-sm sm:text-base"} max-w-[540px] min-w-[200px] font-roboto font-normal mt-5 dark:text-subtitle-dark lg:mt-0   text-subtitle `} style={{color:color}}>{texto}</p>
    </div>
  );
}

export default Texto;
