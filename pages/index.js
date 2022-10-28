import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>O QUE DE QUE</title>
        <meta name="description" content="Site da Cia. O Que De Que" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <div className="mt-10">
        <p className="text-center text-white text-sm">
          Sponsor´s Choice – V Visiting Arlekin Festival{" "}
          <span className="m-3">|</span> Medalha de Prata de Melhor Ator – V
          Marionette Festival Ha Nói <span className="m-3">|</span> Children´s
          Choice – II Karaganda Puppet Festival
        </p>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-4 sm:[flex flex-wrap justify-center] p-24 ">
        <div className="ml-auto mr-auto mb-10">
          <h2 className="text-xl text-dourado font-thin pb-5">
            O JARDINEIRO DA LUA
          </h2>
          <p className="text-white pb-5 font-thin">
            Dia 15/10 na Vila Itororó, às 16h (gratuito)
          </p>
          <p className="text-dourado">+ info</p>
        </div>
        <div className="ml-auto mr-auto mb-10">
          <h2 className="text-xl text-dourado font-thin pb-5">
            A ILHA DO TESOURO
          </h2>
          <p className="text-white pb-5 font-thin">
            O espetáculo participará do evento de abertura da MOSTRA
            INTERNACIONAL DAS FORMAS ANIMADAS nesta sexta (30/9), às 21h – Mais
            info no site do evento
          </p>
          <p className="text-dourado">+ info</p>
        </div>
        <div className="ml-auto mr-auto mb-10">
          <h2 className="text-xl text-dourado font-thin pb-5">
            DE ONDE VEM O BAIÃO
          </h2>
          <p className="text-white pb-5 font-thin">
            Dia 15/12 na Casa de Cultura de Sto Amaro, às 16h
          </p>
          <p className="text-dourado">+ info</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-24 bg-no-repeat bg-cover bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2018/04/darkwood_02-compressor.jpg')]">
        
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
        <div className="w-64 h-64 bg-red-100 relative m-5">
          <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('https://oquedeque.com.br/novo/wp-content/uploads/2022/05/WhatsApp-Image-2022-03-14-at-11.49.18-AM-3-200x200.jpeg')]"></div>
          <div class="opacity-0 hover:opacity-100  hover:bg-black hover:bg-opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-dourado font-semibold">
            Quebra-nozes
          </div>
        </div>
      </div>
    </>
  );
}
