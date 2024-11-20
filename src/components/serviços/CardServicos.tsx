import Image from "next/image";
import React from "react";
import { ContextService } from "./ContextServico";
type card = {
  url?: string;
  alt: string;
  width?: number;
  height?: number;
  titulo: string;
  data: string;
};
function CardServicos({
  titulo,
  url = "/servicos/agenda.svg",
  alt,
  height = 81,
  width = 81,
  data,
}: card) {
  const { openModal } = React.useContext(ContextService);

  return (
    <div
      role="button"
      onClick={(event) => openModal(event)}
      data-descricao={data as string}
      className="min-h-[250px] hover:scale-105 transition-all hover:opacity-90 dark:hover:bg-gray-800 dark:border-title-dark dark:shadow-gray-400   dark:shadow-md  sm:min-h-[350px] min-w-[250px] sm:min-w-[350px] max-h-[250px] sm:max-h-[350px] max-w-[250px] sm:max-w-[350px]  mx-auto flex-1 hover:border-[4px]  hover:border-[#f3f3f3] border-[4px] border-[transparent] flex-wrap rounded-[20px] flex justify-around flex-col cardservicos dark:bg-transparent bg-white"
    >
      <div className="flex flex-col text-center gap-2">
        <div className="flex self-center">
          <Image
            src={url}
            alt={alt}
            height={height}
            width={width}
            className="object-fit object-bottom min-h-[81px] filter dark:brightness-0 dark:invert "
          />
        </div>
        <div className="mt-5 text-nowrap">
          <h1 className="sm:text-2xl text-xl  text-title dark:text-title-dark font-roboto">
            {titulo}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CardServicos;
