import React from "react";
import Titulo from "../geral/Titulo";
import Texto from "../geral/Texto";
import Image from "next/image";
import Link from "next/link";
import FormEntrar from "./FormEntrar";
import Registro from "./Registro";
function Cadastro() {
  const [entrar,setEntrar]=React.useState(true)
  return (
    <section className="grid md:grid-cols-2 ">
      <section className=" bg-background dark:bg-background-dark md:h-screen">
        <div className="max-w-[640px] ml-auto hidden md:flex min-w-[100%] justify-center md:justify-normal pt-60 items-center flex-col md:h-screen h-[60vh]">

          <div className="flex flex-col gap-2 relative ">
            <div className="absolute top-[-100px] left-[25%] md:left-0">
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
      <section className="bg-white dark:bg-gray-900 md:h-screen h-screen sombraRegistro  ">
        <div className="max-w-[640px] flex flex-col items-center gap-5 justify-center md:justify-normal pt-60   min-w-[100%] md:h-screen h-[60vh]">
          {entrar?<FormEntrar onSwitch={()=> setEntrar(!entrar)}/>:<Registro onSwitch={()=> setEntrar(!entrar)} />}
        </div>
      </section>
    </section>
  );
  
}

export default Cadastro;
