import BotaoEvent from '@/components/geral/BotaoEvent';
import Image from 'next/image';
import React from 'react';

function FormAgenda() {
    function handleClick(e:React.FormEvent){
        e.preventDefault()
        alert('Solicitação Enviada com sucesso')
        window.location.href='/'
    }
  return (
      <section className='max-w-[1280px] justify-between pt-[200px] lg:pt-[119px] pb-[80px] mx-auto lg:flex items-center'>
          <div>
              <form onSubmit={handleClick} className=' max-w-[380px] mx-auto flex gap-5 flex-col font-roboto'>
                <select name="naf-options" id="naf-options" className='text-xl  shadowMarquee bg-background sombra   outline-none  rounded-[5px] py-2 px-5 dark:bg-background-dark text-white'>
                  <option value="">Solicitação de Agendamento </option>
                  <option value="declaracao-imposto">Declaração de Imposto de Renda</option>
                  <option value="cadastro-cpf">Cadastro ou Regularização de CPF</option>
                  <option value="orientacao-tributaria">Orientação Tributária</option>
                  <option value="mei">Abertura ou Regularização de MEI</option>
                  <option value="consultoria-fiscal">Consultoria Fiscal</option>
                  <option value="parcelamento-dividas">Parcelamento de Dívidas Tributárias</option>
                </select>
                <select name="naf-horarios" id="naf-horarios" className='text-xl shadowMarquee bg-background sombra  outline-none rounded-[5px] py-2 px-5 dark:bg-background-dark text-white'>
                  <option value="">Selecione um Horário</option>
                  <option value="08:00">08:00 - 09:00</option>
                  <option value="09:00">09:00 - 10:00</option>
                  <option className='text-red-500' value="10:00" disabled>10:00 - 11:00 (Indisponível)</option>
                  <option value="11:00">11:00 - 12:00</option>
                  <option className='text-red-500' value="12:00" disabled>12:00 - 13:00 (Indisponível)</option>
                  <option value="13:00">13:00 - 14:00</option>
                  <option value="14:00">14:00 - 15:00</option>
                  <option value="15:00">15:00 - 16:00</option>
                  <option className='text-red-500' value="16:00" disabled>16:00 - 17:00 (Indisponível)</option>
                  <option value="17:00">17:00 - 18:00</option>
                  <option value="18:00">18:00 - 19:00</option>
                  <option value="19:00">19:00 - 20:00</option>
                </select>
                <div>
                  <label htmlFor="naf-assunto" className='text-xl text-title dark:text-title-dark'>Assunto: </label>
                  <input required type="text" id='naf-assunto' className='border-background  dark:border-gray-300 dark:text-title-dark overflow-y-auto  focus:text-title focus:dark:text-title-dark focus:border-[2px] text-title   bg-transparent border-[2px] rounded-[5px] shadowMarquee outline-none' />
                </div>
                <div className='flex'>
                  <textarea required name="naf-mensagem" className='min-h-[300px] max-h-[400px] flex-1  dark:text-title-dark overflow-y-auto  border-background focus:text-title focus:dark:text-title-dark focus:border-[2px] text-title  dark:border-gray-300 bg-transparent border-[2px] rounded-[5px] shadowMarquee outline-none' id=""></textarea>
                </div>
                <BotaoEvent type='submit' label='Enviar Solicitação' />
             </form>
          </div>
          <div className='hidden lg:block' >
                <Image
                src="/Main/imagem-agenda.png"
                alt="pessoa agendando"
                width="1000"
                height="800"
                quality={100}
                className="max-w-[600px]   object-cover"
              />
          </div>


      </section>
  );
}

export default FormAgenda;