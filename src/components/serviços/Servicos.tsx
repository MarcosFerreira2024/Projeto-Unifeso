import React from "react";
import CardServicos from "./CardServicos";
import Titulo from "../geral/Titulo";

function Servicos() {
      React.useEffect(()=>{
        console.log('teste')
    },[])

  return (
    <section id="servicos">
        <div  className="flex border-subtitle border-[1px] sombraServico  mx-auto justify-center py-10 mt-[80px]">
            <Titulo titulo="Serviços" />
        </div>
      <section  className="sm:flex flex-wrap  grid grid-cols-1  gap-5 mt-[80px]  justify-center mx-auto max-w-[1280px]">
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/agenda.svg`}
            height={50}
            width={50}
            titulo="Gerenciar Agendamento"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/coracao.svg`}
            height={50}
            width={50}
            titulo="Suporte 24 horas"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/seguranca.svg`}
            height={50}
            width={50}
            titulo="Segurança de Dados"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/feedback.svg`}
            height={50}
            width={50}
            titulo="FeedBack"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/email.svg`}
            height={50}
            width={50}
            titulo="Notificações por E-mail"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/Servicos/cadeado.svg`}
            height={50}
            width={50}
            titulo="Controle de Acesso"
          />
        </div>
      </section>
    </section>
  );
}

export default Servicos;
