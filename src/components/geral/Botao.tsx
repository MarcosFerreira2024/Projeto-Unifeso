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
        className="w-[168px] botao h-[38px] border-[2px] border-subtitle hover:bg-[#2e8b85] bg-white  hover:text-[white] transition-all ease-linear text-title  font-roboto text-base rounded-[10px] "
        type={action}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Botao;