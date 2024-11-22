import React from "react";
import CardAgendamento from "./CardAgendamento";
import Titulo from "../geral/Titulo";

function Agendamento() {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const slides = document.querySelector(".slides");
    const button = event.currentTarget;
    const id = event.currentTarget.getAttribute("data-id");

    
    if (slides&&button){
      const currentClass = slides.classList[4];
      slides.classList.remove(currentClass);
      if (id){
        document.querySelectorAll('.botao').forEach((botao) => botao.classList.remove('ativo'));
        button.classList.add('ativo');
        slides.classList.add(`translate-x-[${+id *-100}%]`);
      }
    }
  

  }

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
          <button data-id="0" onClick={handleClick} className="ativo dark:invert dark:brightness-2 dark:grayscale shadow-sm hover:scale-105 w-[30px] botao h-[30px] rounded-full border-[2px]  border-background"></button>
          <button data-id="1" onClick={handleClick} className="w-[30px] dark:invert dark:brightness-2 dark:grayscale shadow-sm hover:scale-105 botao h-[30px] rounded-full border-[2px] border-background"></button>
          <button data-id="2" onClick={handleClick} className="w-[30px]  dark:invert dark:brightness-2 dark:grayscale shadow-sm hover:scale-105 botao h-[30px] rounded-full border-[2px] border-background"></button>
        </div>
      </div>

    </section>
  );
}

export default Agendamento;
