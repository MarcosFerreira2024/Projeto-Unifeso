import React from "react";
type input = {
  type : "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "checkbox" | "radio" | "range" | "color" | "submit" | "reset" | "button";
  id:string,
  label:string,
  outros?: React.InputHTMLAttributes<HTMLInputElement>;
  length?:number
}
function Input({type,id,label,outros,length}:input) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-title font-roboto text-xl">
        {label} :
      </label>
      <input
        type={type}
        maxLength={length}
        {...outros}
        id={id}
        className="w-[233px]  placeholder:focus:text-white hover:bg-background placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle focus:bg-[#2e8b85] bg-white  focus:text-[white] transition-all ease-linear text-title  font-roboto rounded-[10px] "
      />
    </div>
  );
}

export default Input;
