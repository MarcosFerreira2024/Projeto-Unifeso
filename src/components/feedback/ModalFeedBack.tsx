import React from "react";
import FeedBackCard from "./FeedBackCard";
import BotaoEvent from "../geral/BotaoEvent";

function ModalFeedBack() {
  const [stars, setStars] = React.useState(5);
  const [name, setName] = React.useState("");
  const [comentario, setComentario] = React.useState("");
  const [foto, setFoto] = React.useState<File | string>("");

  function handleFoto(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setFoto(event.target.files[0]);
    }
  }

  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    alert('Avaliação Enviada com sucesso');
  }

  return (
    <div className="max-w-[1280px] flex-1 flex flex-wrap gap-20 justify-around items-center">
      <form onSubmit={handleClick} className="flex flex-col gap-5 text-lg text-title dark:text-title-dark font-roboto">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input
            required
            className="min-w-[200px] flex-1 min-h-[40px] placeholder:focus:text-white hover:text-white hover:bg-background dark:hover:bg-gray-300 dark:focus:bg-gray-300 dark:placeholder:focus:text-gray-600 placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle dark:border-gray-600 focus:bg-[#2e8b85] bg-white dark:bg-gray-600 focus:text-[white] dark:focus:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 dark:placeholder:text-gray-300 transition-all ease-linear text-title font-roboto rounded-[10px]"
            type="text"
            id="nome"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="comentario">Comentario</label>
          <input
            required
            className="min-w-[200px] flex-1 min-h-[40px] placeholder:focus:text-white hover:text-white hover:bg-background dark:hover:bg-gray-300 dark:focus:bg-gray-300 dark:placeholder:focus:text-gray-600 placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle dark:border-gray-600 focus:bg-[#2e8b85] bg-white dark:bg-gray-600 focus:text-[white] dark:focus:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 dark:placeholder:text-gray-300 transition-all ease-linear text-title font-roboto rounded-[10px]"
            type="text"
            name="comentario"
            id="comentario"
            value={comentario}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComentario(event.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="estrelas">Avaliação</label>
          <input
            required
            className="max-w-[169px] flex-1 min-h-[40px] placeholder:focus:text-white hover:text-white hover:bg-background dark:hover:bg-gray-300 dark:focus:bg-gray-300 dark:placeholder:focus:text-gray-600 placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle dark:border-gray-600 focus:bg-[#2e8b85] bg-white dark:bg-gray-600 focus:text-[white] dark:focus:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 dark:placeholder:text-gray-300 transition-all ease-linear text-title font-roboto rounded-[10px]"
            type="number"
            name="estrelas"
            id="estrelas"
            min="0"
            max="5"
            value={stars}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = Number(event.target.value);
              if (value <= 5 && value >= 0) {
                setStars(value);
              }
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="flex self-start flex-col" htmlFor="file">
            Foto
            <span className="flex py-1 placeholder:focus:text-white hover:bg-background hover:text-white dark:hover:bg-gray-300 dark:focus:bg-gray-300 dark:placeholder:focus:text-gray-600 placeholder:text-title px-5 botao outline-none h-[38px] border-[2px] border-subtitle dark:border-gray-600 focus:bg-[#2e8b85] bg-white dark:bg-gray-600 focus:text-[white] dark:focus:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 dark:placeholder:text-gray-300 transition-all ease-linear text-title font-roboto rounded-[10px]">
              Selecionar Foto
            </span>
          </label>
          <input
            required
            className="hidden"
            type="file"
            id="file"
            onChange={handleFoto}
            accept="image/*"
          />
        </div>

        <div className="mt-2">
          <BotaoEvent label="Enviar Avaliação" />
        </div>
      </form>

      <div className="flex relative">
        <div
          className="text-center
          mx-auto md:mx-0 cardfeed
          flex max-h-[400px] min-h-[400px]
          xl:max-h-[500px]
          xl:min-h-[500px]
          lg:max-h-[425px]
          lg:min-h-[425px] md:max-h-[350px] md:min-h-[350px]
          transition-all dark:hover:bg-gray-800 dark:border-title-dark
          dark:shadow-gray-400 dark:shadow-md
          lg:max-w-[275px] lg:min-w-[275px] xl:min-w-[350px] xl:max-w-[350px] md:max-w-[225px] md:min-w-[225px] min-w-[275px]
          max-w-[275px] flex-1 hover:border-[4px]
          hover:border-[#f3f3f3] border-[4px] border-[transparent] flex-wrap rounded-[20px] justify-center
          flex-col cardservicos dark:bg-transparent bg-white "
        >
          <FeedBackCard
            stars={stars}
            url={foto}
            name={name}
            alt={name}
            comentario={comentario}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalFeedBack;