'use client'
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Accordion from "./components/Accordion";
import Section3 from "./components/Section3";



const Home = () => {
  const [text] = useTypewriter({
    words: ["decisões", "intuições", "soluções"],
    loop: {},
  });
  return (
    <main>
      <Background>
        {" "}
        {/*Background padrão */}
        
          <Navbar /> {/* Menu superior */}
        
        {/* Seção - 1: Primeira Seção  */}
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-100 filter blur-3xl  absolute z-0 lg:ml-40 mt-4 "></div>
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-blue-100 filter blur-3xl  absolute z-0 ml-2 mt-44"></div>
        <div class="w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-orange-100 filter blur-3xl absolute z-0 lg:ml-96 mt-28"></div>
        
        <div class="flex h-screen
        sm: md:mt-2 lg:mt-[1rem] -pt-28 lg:pl-12   
        relative  z-10">

          <div class="flex flex-col lg:-mt-44  md:w-4/4
          lg:w-2/4
          md:pl-[0rem] 
          sm:text-center md:text-center  lg:text-left
          text-center 
          justify-center">
            
              <h1 class="text-black-4  font-semibold 
               text-6xl relative">
                Use dados para <br />
                guiar suas{" "}
                <span class="relative inline-block">
                  <div class="w-[16.5rem] h-4 bg-gradient-to-r from bg-orange-5 absolute top-10 left-0 z-0"></div>
                  <span class="relative z-10">{text}</span>
                  <Cursor />
                </span>
              </h1>
            
            
              <p class="text-orange-2   justify-center items-center mt-2 sm:mt-16 md:mt-12 lg:mt-4  lg:w-[98%]	 text-lg">
                Por meio da inteligência de dados, a MindsUp oferece uma visão
                ampla do 
                funcionamento da sua escola, além de possibilitar novas formas
                para 
                engajar pais, professores e estudantes.
              </p>
            
          </div>
          {/* ------------------ IMAGEM DA HOME ----------------- */}
          <div className="lg:block hidden">
            <img
            class=""
              src="/assets/images/SCENE.svg"
              alt="Logo da empresa"
              width="700"
            />
          </div>
        </div>
        {/*segunda seção:: soluções */}
        {/*container dropdown*/}
        {/*Titulo do Dropdown*/}
        {/*dropdown com informações sobre as soluções*/}
        <Accordion />
        <Section3 />
        <Footer />
      </Background>
    </main>
  );
};

export default Home;