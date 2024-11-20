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
      <label htmlFor={id} className="text-title dark:text-gray-300 font-roboto text-xl">
        {label} :
      </label>
      <input
        type={type}
        maxLength={length}
        {...outros}
        id={id}
        className="w-[250px]   placeholder:focus:text-white hover:bg-background dark:hover:bg-gray-300 dark:focus:bg-gray-300 dark:placeholder:focus:text-gray-600 placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle dark:border-gray-600 focus:bg-[#2e8b85] bg-white dark:bg-gray-600  focus:text-[white] dark:focus:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 dark:placeholder:text-gray-300  transition-all ease-linear text-title  font-roboto rounded-[10px] "
      />
    </div>
  );
}

export default Input;
