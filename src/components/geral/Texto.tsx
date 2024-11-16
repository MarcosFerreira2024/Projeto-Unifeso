import React from "react";

function Texto({texto}:{texto:string}) {
  return (
    <>
      <p className="max-w-[540px] min-w-[200px] font-roboto font-normal mt-5 lg:mt-2 text-sm sm:text-base text-center lg:text-left text-subtitle">{texto}</p>
    </>
  );
}

export default Texto;
