import React from "react";
import Titulo from "../geral/Titulo";
import Image from "next/image";
import Texto from "../geral/Texto";
import Botao from "../geral/Botao";

function Main() {
  return (
    <main className="lg:mt-[79px] mt-40 max-w-[1440px] mx-auto  justify-center items-center lg:justify-between flex lg:flex-row flex-col">
      <div>
        <Titulo titulo="Agende Conosco" subtitulo="Agenda Facil NAF" />
        <Texto texto="Oferecemos à população serviços especializados em contabilidade e fiscalidade,
         como auxílio na declaração de Imposto de Renda, regularização de CPF, 
         consultoria para Microempreendedores Individuais (MEI) e outras orientações fiscais, 
         todos prestados gratuitamente por nossos estudantes e professores do Núcleo de Apoio Contábil e Fiscal (NAF)." />
        <div>
            <Botao label="REGISTRE-SE" href="/cadastro"/>
        </div>
      </div>
      <div>
        <Image
          src="/Main/imagem-agenda.png"
          alt="pessoa agendando"
          width="535"
          height="440"
          quality={100}
          className="min-w-[435px]  object-cover"
        />
      </div>
    </main>
  );
}

export default Main;
