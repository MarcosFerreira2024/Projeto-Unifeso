import React from "react";

function Texto({texto,color}:{texto:string,color?:string}) {
  return (
    <div>
      <p className="max-w-[540px] min-w-[200px] font-roboto font-normal mt-5 lg:mt-0 text-sm sm:text-base  text-subtitle" style={{color:color}}>{texto}</p>
    </div>
  );
}

export default Texto;
