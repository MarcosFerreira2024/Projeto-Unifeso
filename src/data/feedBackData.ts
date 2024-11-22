type feed = {
    name: string,
    url: string,
    alt: string,
    comentario: string,
    stars: number,
  
}

export const feedBackData: feed[] = [
    {name:'Arthur', url:'/FeedBack/Pessoa1.jpeg',stars:5, alt:'Arthur', comentario:'Plataforma muito Boa,'},
    {name:'Jessica', url:'/FeedBack/Pessoa2.jpg',stars:4, alt:'Jessica', comentario:'Plataforma Excelente'},
    {name:'Eduarda', url:'/FeedBack/Pessoa3.jpg',stars:3, alt:'Eduarda', comentario:'Pode melhorar'},
]