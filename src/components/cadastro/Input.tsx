import React from "react";
type input = {
  type:string,
  id:string,
  label:string,
  outros?: React.InputHTMLAttributes<HTMLInputElement>;
}
function Input({type,id,label,outros}:input) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-title font-roboto text-xl">
        {label} :
      </label>
      <input
        type={type}
        {...outros}
        id={id}
        className="w-[266px]  placeholder:focus:text-white hover:bg-background placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle focus:bg-[#2e8b85] bg-white  focus:text-[white] transition-all ease-linear text-title  font-roboto rounded-[10px] "
      />
    </div>
  );
}

export default Input;
