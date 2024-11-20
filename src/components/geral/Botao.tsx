import React from "react";

function Botao({
  label,
  href,
  action = "button",
}: {
  label: string;
  href?: string;
  action?: "button" | "submit" | "reset";
}) {
  function handleClick() {
    if (href?.trim()) {
      window.location.href = href;
    }
  }
  return (
    <div className="pt-5">
      <button
        className="w-[168px] botao h-[38px] border-[2px] border-subtitle hover:bg-[#2e8b85] dark:border-gray-300 bg-white dark:bg-pagina-dark dark:text-gray-300 dark:hover:bg-[white] dark:hover:text-background-dark  focus:bg-[#2e8b85] dark:focus:bg-[white] dark:focus:text-background-dark focus:text-title  hover:text-[white] transition-all ease-linear text-title  font-roboto text-base rounded-[10px] "
        type={action}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Botao;
