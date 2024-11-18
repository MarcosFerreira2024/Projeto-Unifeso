import React, { useState } from "react";
import Titulo from "../geral/Titulo";
import Input from "./Input";
import BotaoForm from "./BotaoForm";
import Image from "next/image";
type form = {
  onSwitch: () => void;
};
function FormEntrar({ onSwitch }: form) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex  justify-center">
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
                className="absolute cursor-pointer right-[-25px] bottom-[7px]"
              />
            </div>
            <BotaoForm
                  label="Logar"
                  action="submit"
                />
          </form>
          <div className="text-title mt-2 text-lg">
            <h1>
              Nao possui conta ?{" "}
              <button className="text-subtitle underline" onClick={onSwitch}>
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
