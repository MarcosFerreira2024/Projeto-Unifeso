import React from "react";
import CardAgendamento from "./CardAgendamento";
import Titulo from "../geral/Titulo";

function Agendamento() {
  return (
    <section className="mt-20  flex-col mx-auto max-w-[1280px] gap-[60px]  flex justify-center">
      <div className="mx-auto max-w-[1280px]">
        <Titulo titulo="Agendamento" />
      </div>
      <div className="flex flex-wrap gap-[180px] justify-center max-w-[1280px] ">
        <CardAgendamento label="Cancelamento" src="/Agendamento/Cancelamento.svg" color="#DD2929" />
        <CardAgendamento label="Agendar" src="/Agendamento/Agendar.svg" color="#04887F"/>
        <CardAgendamento label="Reagendamento" src="/Agendamento/Reagendar.svg" color="#2563EB"/>
      </div>
    </section>
  );
}

export default Agendamento;
