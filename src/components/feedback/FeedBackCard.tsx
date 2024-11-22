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
    const max = 5
    const [like,setLike] = React.useState(true)
  return (
    <>

      <div className=" absolute top-0 p-5 flex items-center justify-end rounded-full">
        {like?<BotoesNavBar onClick={()=>setLike(false)}  src="FeedBack/like.svg" alt="like"/>:<BotoesNavBar onClick={()=>setLike(true)} src="FeedBack/like-ativo.svg" alt="dislike"/>}
      </div>
      <div>
        <Texto texto={name} size="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl" />
      </div>
      <div className="flex self-center rounded-full overflow-hidden mt-5 ">
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="object-fit"
        />
      </div>
      <div className="text-4xl text-yellow-400  lg:mb-5 mt-2 flex self-center">{"★".repeat(stars)+"☆".repeat(max-stars)}</div>
      <div className="min-h-[100px] ">
        <Texto texto={comentario} size="text-base md:text-base xl:text-xl" />
      </div>
    </>
  );
}

export default FeedBackCard;
