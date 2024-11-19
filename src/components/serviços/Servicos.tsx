import React from "react";
import CardServicos from "./CardServicos";
import Titulo from "../geral/Titulo";

function Servicos() {
  return (
    <section id="servicos">
        <div  className="flex border-subtitle border-[1px] sombraServico  mx-auto justify-center py-10 mt-[80px]">
            <Titulo titulo="Serviços" />
        </div>
      <section  className="flex flex-wrap gap-5 mt-[80px]  justify-center mx-auto max-w-[1280px]">
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/agenda.svg`}
            height={50}
            width={50}
            titulo="Gerenciar  Agendamento"
            descricao="permite que os clientes organizem e administrem seus agendamentos de forma prática e eficiente."
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/coracao.svg`}
            height={50}
            width={50}
            titulo="Suporte 24 horas"
            descricao="Nosso suporte esta disponível 24 horas para ajudar com qualquer dúvida ou agendamento"
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/seguranca.svg`}
            height={50}
            width={50}
            titulo="Segurança de Dados"
            descricao="Todos os dados são criptografados para a segurança de nossos clientes e colaboradores."
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/feedback.svg`}
            height={50}
            width={50}
            titulo="FeedBack"
            descricao="Após o atendimento, os usuários podem fornecer feedback para melhoria dos serviços."
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/email.svg`}
            height={50}
            width={50}
            titulo="Notificações por E-mail"
            descricao="O sistema  da NAF envia notificações por e-mail para confirmar o agendamento e lembrar os usuários da data do atendimento."
          />
        </div>
        <div className="flex-1">
          <CardServicos
            alt="agenda"
            url={`/servicos/cadeado.svg`}
            height={50}
            width={50}
            titulo="Controle de Acesso"
            descricao="Diferencia permissões entre população, estudantes, professores e administradores."
          />
        </div>
      </section>
    </section>
  );
}

export default Servicos;
