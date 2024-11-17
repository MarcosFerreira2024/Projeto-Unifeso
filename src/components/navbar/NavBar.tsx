"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BotoesNavBar from "./BotoesNavBar";

function NavBar({color="#006b64",border="#006b64"}:{color?:string,border?:string}) {
  function handleVisibility() {
    const menuMobile = document.getElementById("menu-mobile") as HTMLElement;
    if (menuMobile.classList.contains("hidden")) {
      menuMobile.classList.remove("hidden");
      menuMobile.classList.add("flex", "top-[120px]", "right-0");
      setTimeout(() => {
        menuMobile.classList.add("bg-background", "rounded-bl-sm");
        menuMobile.classList.remove("translate-y-[-40px]", "opacity-0");
      }, 300);
    } else {
      menuMobile.classList.add("translate-y-[-40px]", "opacity-0");
      setTimeout(() => {
        menuMobile.classList.add("hidden");
      }, 300);
    }
  }

  return (
    <div className="fixed  top-0  w-[100vw] min-h-[120px] border-b-[2px] border-b-subtitle z-[999]" style={{backgroundColor:color,border:border}}>
      <div className="sm:mx-5 xl:mx-auto max-w-[1280px] min-h-[120px] flex justify-between px-5 md:px-0 items-center ">
        <Link href="/">
          <Image
            src="NavBar/unifeso.svg"
            alt="logo unifeso"
            width="250"
            height="66"
            className="min-w-[250px] min-h-[66px] object-contain"
          />
        </Link>

        <nav
          className="md:mr-5 lg:mr-0 hidden md:flex-row flex-col opacity-0 md:opacity-100 md:flex p-10 w-[100vw] justify-center md:justify-end items-center  rounded-bl-lg md:p-0 gap-5 transition-all ease-in translate-y-[-40px] md:translate-y-0 md:static absolute"
          id="menu-mobile"
        >
          <BotoesNavBar
            href="#agendamento"
            src="NavBar/agenda.svg"
            alt="Agendamento"
          />
          <BotoesNavBar
            href="#servicos"
            src="NavBar/services.svg"
            alt="Serviços"
          />
          <BotoesNavBar
            href="#notificacoes"
            src="NavBar/notifications.svg"
            alt="Notificações"
          />
          <BotoesNavBar
            href="#feedback"
            src="NavBar/feedback.svg"
            alt="FeedBack"
          />
          <BotoesNavBar
            href="#contato"
            src="NavBar/contact.svg"
            alt="Contato"
          />
          <BotoesNavBar
            href="/cadastro"
            src="NavBar/account.svg"
            alt="Cadastrar"
          />
        </nav>
        <nav className="md:hidden">
          <button onClick={handleVisibility}>
            <Image
              src="NavBar/menu-hamburguer.svg"
              alt="menu mobile"
              width={24}
              height={10}
            />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
