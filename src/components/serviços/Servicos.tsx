import React from "react";
import CardServicos from "./CardServicos";
import Titulo from "../geral/Titulo";
import ModalServico from "./ModalServico";
import { ContextService } from "./ContextServico";

function Servicos() {
  const { modal } = React.useContext(ContextService);
  return (
    <section id="servicos" >
      <div className="flex border-subtitle border-[1px] sombraServico  mx-auto justify-center py-10 mt-[80px]">
        <Titulo titulo="Serviços" />
      </div>
      <section  className={`sm:flex  flex-wrap relative  grid grid-cols-1 h-[300px] sm:h-[900px]  gap-5 pt-[80px]  justify-center mx-auto ${modal?"h-[screen]":"max-w-[1280px]"}`}>
        {modal ? <ModalServico /> : ""}
        {!modal ? (
          <>
            <div className="flex-1  animacaoCardServicos  ">
              <CardServicos
                data="Permite que os clientes organizem e administrem seus agendamentos de forma prática e eficiente."
                alt="agenda"
                url={`/Servicos/agenda.svg`}
                height={50}
                width={50}
                titulo="Gerenciar Agendamento"
              />
            </div>
            <div className="flex-1  animacaoCardServicos ">
              <CardServicos
                data="Nosso suporte esta disponível 24 horas para ajudar com qualquer dúvida ou agendamento"
                alt="suporte"
                url={`/Servicos/coracao.svg`}
                height={50}
                width={50}
                titulo="Suporte 24 horas"
              />
            </div>
            <div className="flex-1  animacaoCardServicos ">
              <CardServicos
                data="Todos os dados são criptografados para a segurança de nossos clientes e colaboradores."
                alt="Segurança"
                url={`/Servicos/seguranca.svg`}
                height={50}
                width={50}
                titulo="Segurança de Dados"
              />
            </div>
            <div className="flex-1  animacaoCardServicos ">
              <CardServicos
                data="Após o atendimento, os usuários podem fornecer feedback para melhoria dos serviços."
                alt="FeedBack"
                url={`/Servicos/feedback.svg`}
                height={50}
                width={50}
                titulo="FeedBack"
              />
            </div>
            <div className="flex-1  animacaoCardServicos ">
              <CardServicos
                data="O sistema da NAF envia notificações por e-mail para confirmar o agendamento e lembrar os usuários da data do atendimento."
                alt="Notificações"
                url={`/Servicos/email.svg`}
                height={50}
                width={50}
                titulo="Notificações por E-mail"
              />
            </div>
            <div className="flex-1  animacaoCardServicos ">
              <CardServicos
                data="Diferencia permissões entre população, estudantes, professores e administradores."
                alt="Controle de Acesso"
                url={`/Servicos/cadeado.svg`}
                height={50}
                width={50}
                titulo="Controle de Acesso"
              />
            </div>
          </>
        ) : ""}
      </section>
    </section>
  );
}

export default Servicos;
