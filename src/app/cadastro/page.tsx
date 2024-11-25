"use client";
import React from "react";
import "@/app/globals.css";
import Cadastro from "@/components/cadastro/Cadastro";
import { ContextCadastroProvider } from "@/components/cadastro/ContextCadastro";
function page() {
  return (
    <>
      <ContextCadastroProvider><Cadastro /></ContextCadastroProvider>
    </>
  );
}

export default page;
