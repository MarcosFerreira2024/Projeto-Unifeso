"use client";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import Main from "@/components/main/Main"
import Marquee from "@/components/marquee/Marquee";
import Agendamento from "@/components/agendamento/Agendamento";
import Servicos from "@/components/serviços/Servicos";
export default function Home() {
  return (
    <>
    <NavBar/>
    <Main />
    <Marquee />
    <Agendamento />
    <Servicos />
    </>
  );
}
