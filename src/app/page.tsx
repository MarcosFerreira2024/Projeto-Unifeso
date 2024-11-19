"use client";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import Main from "@/components/main/Main"
import Marquee from "@/components/marquee/Marquee";
import Agendamento from "@/components/agendamento/Agendamento";
import Servicos from "@/components/serviços/Servicos";
import { ServiceProvider } from "@/components/serviços/ContextServico";
export default function Home() {
  return (
    <>
    <NavBar/>
    <Main />
    <Marquee />
    <Agendamento />
    <ServiceProvider><Servicos /></ServiceProvider>
    <div className="mt-[200px]">

    </div>
    </>
  );
}
