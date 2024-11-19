import React from "react";
import CardAgendamento from "./CardAgendamento";
import Titulo from "../geral/Titulo";

function Agendamento() {
  const [active,setActive]= React.useState(true)
  return (
    <section id="agendamento">
      <div className="mx-auto max-w-[1280px] flex justify-center mt-20 mb-20">
        <Titulo titulo="Agendamento" />
      </div>
      <div className="slider">
        <div className="slides">
            <div className="slide">
                <CardAgendamento label="Cancelamento" src="/Agendamento/Cancelamento.svg" color="#DD2929" />
                <CardAgendamento label="Agendar" src="/Agendamento/Agendar.svg" color="#04887F"/>
                <CardAgendamento label="Reagendamento" src="/Agendamento/Reagendar.svg" color="#2563EB"/>
            </div>
            <div className="slide">
                <CardAgendamento label="Cancelamento" src="/Agendamento/Cancelamento.svg" color="#DD2929" />
                <CardAgendamento label="Teste2" src="/Agendamento/Agendar.svg" color="#04887F"/>
                <CardAgendamento label="Reagendamento" src="/Agendamento/Reagendar.svg" color="#2563EB"/>
            </div>
            <div className="slide">
                <CardAgendamento label="Cancelamento" src="/Agendamento/Cancelamento.svg" color="#DD2929" />
                <CardAgendamento label="Teste3" src="/Agendamento/Agendar.svg" color="#04887F"/>
                <CardAgendamento label="Reagendamento" src="/Agendamento/Reagendar.svg" color="#2563EB"/>
            </div>
        </div>
        <div className="flex justify-center pt-10 gap-2">
          <div data-id="1" className="w-[30px] h-[30px] rounded-full border-[2px] border-background"></div>
          <div data-id="2" className="w-[30px] h-[30px] rounded-full border-[2px] border-background"></div>
          <div data-id="3" className="w-[30px] h-[30px] rounded-full border-[2px] border-background"></div>
        </div>
      </div>

    </section>
  );
}

export default Agendamento;
