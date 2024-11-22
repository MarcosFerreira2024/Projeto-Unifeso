import Image from "next/image";
import React from "react";
import BotoesNavBar from "../navbar/BotoesNavBar";
import Texto from "../geral/Texto";
type card = {
  url: string;
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
}: card) {
  return (
    <>
      <div className="absolute right-0 top-0  m-5 ">
        <BotoesNavBar  src="FeedBack/like.svg" alt="like"/>
      </div>
      <div>
        <Texto texto={name} />
      </div>
      <div className="flex self-center rounded-full overflow-hidden ">
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="object-fit"
        />
      </div>
      <div>{stars}</div>
      <div>
        <Texto texto={comentario} />
      </div>
    </>
  );
}

export default FeedBackCard;
