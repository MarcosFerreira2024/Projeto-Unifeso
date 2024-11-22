import React from "react";
import CardAgendamento from "./CardAgendamento";
import Titulo from "../geral/Titulo";

function Agendamento() {
  const [slide, setSlide] = React.useState(0);
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const id = event.currentTarget.getAttribute("data-id");
    if (id) {
      setSlide(parseInt(id));
    }
  }
  React.useEffect(() => {
    const slides = document.querySelector(".slides");
    if (slides) {
      slides.className = "slides transition-all duration-300 ease-in-out";

      slides.classList.add(`translate-x-[${slide * -100}%]`);
    }

  }, [slide]); 

  return (
    <section id="agendamento">
      <div className="mx-auto max-w-[1280px] flex justify-center mt-20 mb-20">
        <Titulo titulo="Agendamento" />
      </div>
      <div className="slider ">
          <div className="slides transition-all duration-300 ease-in-out">
            <div className="slide">
                <CardAgendamento label="Cancelamento" src="Agendamento/Cancelamento.svg" color="#DD2929" />
                <CardAgendamento label="Agendar" src="Agendamento/Agendar.svg" color="#04887F" />
                <CardAgendamento label="Reagendamento" src="Agendamento/Reagendar.svg" color="#2563EB" />
            </div>
            <div className="slide">
                <CardAgendamento label="Consulta CPF" src="Agendamento/search.svg" color="#4CAF50" />
                <CardAgendamento label="Atualização Cadastral" src="Agendamento/update.svg" color="#2196F3" />
                <CardAgendamento label="Declaração de Imposto" src="Agendamento/documentoImposto.svg" color="#9C27B0" />
            </div>
            <div className="slide">
                <CardAgendamento label="Abertura de MEI" src="Agendamento/empresa.svg" color="#FF9800" />
                <CardAgendamento label="Emissao de Documentos" src="Agendamento/emissaoDocumentos.svg" color="#673AB7" />
                <CardAgendamento label="Confirmação de Agendamento" src="Agendamento/confirmacao.svg" color="#4CAF50" />
            </div>
          </div>
        <div className="flex justify-center pt-10 gap-2 ">
          <button data-id="0" onClick={handleClick} className={`${slide === 0 ? 'ativo' : ''} dark:invert dark:brightness-2 filter dark:grayscale shadow-sm hover:scale-105 w-[30px] botao h-[30px] rounded-full border-[2px]  border-background`}></button>
          <button data-id="1" onClick={handleClick} className={`${slide === 1 ? 'ativo' : ''} dark:invert dark:brightness-2 filter dark:grayscale shadow-sm hover:scale-105 w-[30px] botao h-[30px] rounded-full border-[2px]  border-background`}></button>
          <button data-id="2" onClick={handleClick} className={`${slide === 2 ? 'ativo' : ''} dark:invert dark:brightness-2 filter dark:grayscale shadow-sm hover:scale-105 w-[30px] botao h-[30px] rounded-full border-[2px]  border-background`}></button>
        </div>
      </div>

    </section>
  );
}

export default Agendamento;
