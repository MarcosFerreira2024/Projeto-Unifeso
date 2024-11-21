import React, { useState } from "react";
import Titulo from "../geral/Titulo";
import Input from "./Input";
import BotaoForm from "./BotaoForm";
import Image from "next/image";
import Link from "next/link";
type form = {
  onSwitch: () => void;
};
function FormEntrar({ onSwitch }: form) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col  justify-center">
          <div className="md:hidden absolute top-20">
            <Link href="/">
              <Image
                src="NavBar/logo-unifeso-verde.svg"
                alt="logo unifeso"
                width="250"
                height="66"
                className="min-w-[250px] min-h-[66px] object-contain filter dark:brightness-0 dark:invert "
              />
            </Link>
          </div>
          <div className="text-center text-5xl">
            <Titulo subtitulo="ㅤ" titulo="Entrar" />
          </div>
        </div>
        <div>
          <form action="post" className="flex flex-col gap-5">
            <Input
              type="email"
              label="Email"
              id="email"
              outros={{ required: true }}
            />
            <div className="flex relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Senha"
                id="Senha"
                outros={{ required: true }}
              />
              <Image
                onClick={() => setShowPassword(!showPassword)}
                src={`Geral/senha.svg`}
                width={30}
                height={30}
                alt="mostrar senha"
                className="absolute cursor-pointer filter dark:brightness-[1.8] dark:grayscale right-[-35px] bottom-[7px]"
              />
            </div>
            <BotaoForm label="Logar" action="submit" />
          </form>
          <div className="text-title mt-2 dark:text-title-dark text-lg">
            <h1>
              Nao possui conta ?{" "}
              <button className="text-subtitle dark:text-subtitle-dark underline" onClick={onSwitch}>
                {" "}
                Registre-se
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormEntrar;
