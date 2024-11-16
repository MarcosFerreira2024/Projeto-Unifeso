import React from "react";

function Texto({texto}:{texto:string}) {
  return (
    <>
      <p className="max-w-[540px] min-w-[420px] font-roboto font-normal  mt-2 text-base text-subtitle">{texto}</p>
    </>
  );
}

export default Texto;
