import React from "react";
import Titulo from "../geral/Titulo";
import Texto from "../geral/Texto";
import Input from "./Input";
import BotaoForm from "./BotaoForm";
import Image from "next/image";
import Link from "next/link";
function Cadastro() {
  return (
    <section className="grid md:grid-cols-2">
      <section className=" bg-background md:h-screen h-[60vh]">
        <div className="max-w-[640px] ml-auto flex    min-w-[100%] pt-60 justify-center md:justify-normal items-center flex-col md:h-screen h-[60vh]">

          <div className="flex flex-col gap-5 relative ">
            <div className="absolute top-[-217px] left-[25%] md:left-0">
              <Link href="/">
                <Image
                  src="NavBar/unifeso.svg"
                  alt="logo unifeso"
                  width="250"
                  height="66"
                  className="min-w-[250px] min-h-[66px] object-contain "
                />
              </Link>
            </div>
            <Titulo
              titulo="Cadastre-se"
              subtitulo="Agenda Facil NAF"
              color="white"
            />
            <Texto
              color="white"
              texto="Oferecemos à população serviços especializados em contabilidade e fiscalidade,
           como auxílio na declaração de Imposto de Renda, regularização de CPF, consultoria para
            Microempreendedores Individuais (MEI) e outras orientações fiscais, todos prestados gratuitamente 
          por nossos estudantes e professores do Núcleo de Apoio Contábil e Fiscal (NAF)."
            />
          </div>
        </div>
      </section>
      <section className=" bg-white md:h-screen h-[60vh]   ">
        <div className="max-w-[640px] flex flex-col items-center gap-5 pt-60 justify-center md:justify-normal  min-w-[100%] md:h-screen h-[60vh]">
          <div className="flex flex-col gap-5">
            <div>
              <Titulo titulo="Entrar" />
            </div>
            <div>
              <form action="post" className="flex flex-col gap-5">
                <Input
                  type="email"
                  label="Email"
                  id="email"
                  outros={{ required: true }}
                />
                <Input
                  type="password"
                  label="Senha"
                  id="Senha"
                  outros={{ required: true }}
                />
                <BotaoForm label="Enviar" action="submit" />
              </form>
              <div className="text-title mt-2 text-lg">
                <h1>
                  Nao possui conta ?{" "}
                  <button
                    className="text-subtitle underline"
                    onClick={() => "dps faço isso aqui"}
                  >
                    {" "}
                    Registre-se
                  </button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Cadastro;
