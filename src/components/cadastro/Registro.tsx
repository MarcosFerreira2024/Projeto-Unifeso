import React, { useState } from "react";
import BotaoForm from "./BotaoForm";
import Input from "./Input";
import Titulo from "../geral/Titulo";
import Image from "next/image";

type registrar = {
  onSwitch: () => void;
};
function Registro({ onSwitch }: registrar) {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setCheck] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="pb-5">
          <Titulo titulo="Registrar" />
        </div>
        <div>
          <form action="post" className="grid lg:grid-cols-2 gap-5">
            <div className="gap-5 flex flex-col">
              <Input
                type="text"
                label="Nome"
                id="Nome"
                outros={{ required: true }}
              />
              <Input
                type="text"
                label="Sobrenome"
                id="Sobrenome"
                outros={{ required: true }}
              />
              <Input
                type="email"
                label="Email"
                id="Email"
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
                  className="absolute cursor-pointer right-[-20px] bottom-[7px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Input
                type="tel"
                label="Telefone"
                id="Telefone"
                outros={{ required: false }}
              />
              <Input
                type="text"
                label="Cpf"
                id="Cpf"
                length={11}
                outros={{
                  required: true,
                  pattern: "^[0-9]+$",
                  placeholder: "xxx.xxx.xxx.xx",
                  title: "Formato é xxx-xxx-xxx.xx sem Caracteres Especiais",
                }}
              />
            </div>

            <div className="text-title flex flex-col  text-lg">
              <div className="flex items-center">
                <button
                  style={{ backgroundColor: checked ? "#04887f" : "" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setCheck(!checked);
                  }}
                  className="rounded-full w-[30px] h-[30px] border-[2px] border-title"
                ></button>
                <p className="text-sm pl-2 max-w-[220px] break-words ">
                  Eu li e concordo com os{" "}
                  <a
                    className="underline text-subtitle"
                    href="/termos_de_uso"
                    target="blank"
                  >
                    Termos
                  </a>{" "}
                  e a{" "}
                  <a
                    className="underline text-subtitle"
                    href="/politica_de_privacidade"
                    target="blank"
                  >
                    Política de Privacidade
                  </a>
                </p>
              </div>
              <div className="pt-5">
                <BotaoForm
                  outros={{ disabled: checked ? false : true }}
                  label="Registrar"
                  action="submit"
                />
                <h1 className="">
                  Ja possui conta ?{" "}
                  <button
                    className="text-subtitle underline"
                    onClick={onSwitch}
                  >
                    {" "}
                    Logar
                  </button>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registro;
