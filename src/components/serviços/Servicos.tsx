import React from "react";
import CardServicos from "./CardServicos";
import Titulo from "../geral/Titulo";
import ModalServico from "./ModalServico";
import { ContextService } from "./ContextServico";

function Servicos() {
  const { modal } = React.useContext(ContextService);
  return (
    <section id="servicos">
      <div className={`flex border-subtitle dark:border-gray-600  dark:bg-gray-700 border-[1px] sombraServicos  mx-auto justify-center py-10 mt-[80px]`}>
        <Titulo titulo="Serviços" />
      </div>
      <section className="relative " >
      {modal ? <ModalServico /> : "" }
          <div className={`${modal?"md:invisible md:h-[100vh]":"opacity-100"} grid grid-cols-1 sm:flex gap-20 md:gap-10 lg:gap-20   flex-wrap   justify-center xl:justify-between    pt-[80px] pb-[80px] max-w-[1280px]  mx-auto`}>
            <div className="animacaoCardServicos  ">
              <CardServicos
                data="Permite que os clientes organizem e administrem seus agendamentos de forma prática e eficiente."
                alt="agenda"
                url={`/Servicos/agenda.svg`}
                height={50}
                width={50}
                titulo="Gerenciar Agendamento"
              />
            </div>
            <div className="animacaoCardServicos ">
              <CardServicos
                data="Nosso suporte esta disponível 24 horas para ajudar com qualquer dúvida ou agendamento"
                alt="suporte"
                url={`/Servicos/coracao.svg`}
                height={50}
                width={50}
                titulo="Suporte 24 horas"
              />
            </div>
            <div className="animacaoCardServicos ">
              <CardServicos
                data="Todos os dados são criptografados para a segurança de nossos clientes e colaboradores."
                alt="Segurança"
                url={`/Servicos/seguranca.svg`}
                height={50}
                width={50}
                titulo="Segurança de Dados"
              />
            </div>
            <div className="animacaoCardServicos ">
              <CardServicos
                data="Após o atendimento, os usuários podem fornecer feedback para melhoria dos serviços."
                alt="FeedBack"
                url={`/Servicos/feedback.svg`}
                height={50}
                width={50}
                titulo="FeedBack"
              />
            </div>
            <div className="animacaoCardServicos ">
              <CardServicos
                data="O sistema da NAF envia notificações por e-mail para confirmar o agendamento e lembrar os usuários da data do atendimento."
                alt="Notificações"
                url={`/Servicos/email.svg`}
                height={50}
                width={50}
                titulo="Notificações por E-mail"
              />
            </div>
            <div className="animacaoCardServicos ">
              <CardServicos
                data="Diferencia permissões entre população, estudantes, professores e administradores."
                alt="Controle de Acesso"
                url={`/Servicos/cadeado.svg`}
                height={50}
                width={50}
                titulo="Controle de Acesso"
              />
            </div>
          </div>
      </section>
    </section>
  );
}

export default Servicos;
