import Image from "next/image";
import React, { useState, useEffect } from "react";
import BotoesNavBar from "../navbar/BotoesNavBar";
import Texto from "../geral/Texto";

type Card = {
  url: File | string;
  stars: number;
  name: string;
  alt: string;
  width?: number;
  height?: number;
  comentario: string;
};

function FeedBackCard({
  name,
  url,
  alt,
  width = 110,
  height = 110,
  comentario,
  stars,
}: Card) {
  const max = 5;
  const [imagem, setImagem] = useState<string | null>(null); 
  const [like, setLike] = useState(true);

  useEffect(() => {
    if (url instanceof File) {
      setImagem(URL.createObjectURL(url)); 
    } else if (typeof url === "string") {
      setImagem(url);
    } else {
      setImagem(null);
    }
  }, [url]); 
  return (
    <>
      <div className="absolute top-0 p-5 flex items-center justify-end rounded-full">
        {like ? (
          <BotoesNavBar onClick={() => setLike(false)} src="FeedBack/like.svg" alt="deslike" />
        ) : (
          <BotoesNavBar onClick={() => setLike(true)} src="FeedBack/like-ativo.svg" alt="like" />
        )}
      </div>
      <div>
        <Texto texto={name} size="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl" />
      </div>
      <div className="flex self-center rounded-full overflow-hidden mt-5">
        {imagem ? (
          <Image src={imagem} alt={alt} width={width} height={height} className="rounded-full max-w-[110px] min-w-[110px] max-h-[110px] min-h-[110px] object-cover" />
        ) : (
          <Image src="/FeedBack/desconhecido.jpg" alt={alt} width={width} height={height} />
        )}
      </div>
      <div className="text-4xl text-yellow-400 lg:mb-5 mt-2 flex self-center">
        {"★".repeat(stars) + "☆".repeat(max - stars)}
      </div>
      <div className="min-h-[100px]">
        <Texto texto={comentario} size="text-base md:text-base xl:text-xl" />
      </div>
    </>
  );
}

export default FeedBackCard;