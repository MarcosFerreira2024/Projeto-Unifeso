"use client";
import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import React from "react";
import Main from "@/components/main/Main"
import Marquee from "@/components/marquee/Marquee";
export default function Home() {
  return (
    <>
    <NavBar />
    <Main />
    <Marquee />
    </>
  );
}
