import React from "react";
import FeedBackCard from "./FeedBackCard";
import Titulo from "../geral/Titulo";
import { feedBackData } from "@/data/feedBackData";
import BotaoEvent from "../geral/BotaoEvent";

function FeedBack() {
  return (
    <section id="feedback">
      <div
        className={`flex border-subtitle dark:border-gray-600 dark:bg-gray-700 border-[1px] sombraServicos  mx-auto justify-center py-10 `}
      >
        <Titulo titulo="FeedBack" />
      </div>
      <section className="pt-[80px] pb-[80px]">
        <div className="grid grid-cols-1 md:flex gap-20 md:gap-10 lg:gap-20 animaFeedBack  flex-wrap   justify-center xl:justify-between max-w-[1280px] mx-auto ">
          {feedBackData.map((item, index) => (
            <div
              className=" text-center mx-auto md:mx-0 cardfeed flex max-h-[400px] min-h-[400px]  
              xl:max-h-[500px]
               xl:min-h-[500px] 
              lg:max-h-[425px]
               lg:min-h-[425px] md:max-h-[350px] md:min-h-[350px]
               hover:scale-105 cursor-default md:cursor-pointer 
              transition-all  dark:hover:bg-gray-800 dark:border-title-dark
               dark:shadow-gray-400   dark:shadow-md   
               lg:max-w-[275px] lg:min-w-[275px] xl:min-w-[350px] xl:max-w-[350px] md:max-w-[225px] md:min-w-[225px] min-w-[275px]
                max-w-[275px] flex-1 hover:border-[4px] 
                hover:border-[#f3f3f3] border-[4px] border-[transparent] flex-wrap rounded-[20px] justify-center 
                flex-col cardservicos dark:bg-transparent bg-white relative"
              key={index}
            >
              {" "}
              <FeedBackCard
                url={item.url}
                name={item.name}
                alt={item.alt}
                comentario={item.comentario}
                stars={item.stars}
              />
            </div>
          ))}
        </div>
          <div className="flex max-w-[1280px] justify-center mt-10 mx-auto ">
           <BotaoEvent  label="Deixe Sua Avaliação"/>
          </div>
      </section>
    </section>
  );
}

export default FeedBack;
