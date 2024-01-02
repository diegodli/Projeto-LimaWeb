import React from 'react';
import { FaHeadset, FaGlobe, FaCheckCircle } from 'react-icons/fa';


function TestAbout() {
 return (
   <section
     id="about-us"
     className="py-8 bg-[#142b42] overflow-x-hidden text-white flex flex-col md:flex-row items-center"
   >
    
    
     <div className="container md:w-3/5 mx-10 top-0 text-left md:px-16 lg:w-4/5 mb-8 md:mb-0">
       <h2 className="text-center mt-10 md:text-left mx-10 md:ml-0 text-4xl md:text-6xl font-light mb-6">
         Por que escolher a Lima Web?
       </h2>
       <p className="text-gray-200 w-4/5 text-base md:text-lg mb-2 mt-10 md:text-left text-center mx-14 md:mx-0">
       Na Lima Web, nossa missão é impulsionar o sucesso online de nossos clientes, oferecendo soluções de desenvolvimento web inovadoras e personalizadas.
        
       </p>
       <p className="hidden md:blocktext-gray-200 w-4/5 text-base md:text-lg mb-8 md:text-left text-center mx-14 md:mx-0">
  
        Buscamos ir além do convencional, reconhecendo a singularidade de cada cliente e desenvolvendo estratégias digitais adaptadas às suas necessidades exclusivas.
        
       </p>
       


       {/* Cards de Vantagens */}
       <div className="grid mx-auto grid-cols-1 w-4/5 mt-12 md:mx-auto md:grid-cols-3 gap-8">
         {/* Card 1 */}
         <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-4xl border border-white p-6 rounded-2xl flex flex-col items-center text-center">
           <FaHeadset className="text-4xl mb-4 text-white" />
           <p className="text-white font-semibold text-xl">Suporte 24h.</p>
         </div>


         {/* Card 2 */}
         <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-4xl border border-white p-6 rounded-2xl flex flex-col items-center text-center">
           <FaGlobe className="text-4xl mb-4 text-white" />
           <p className="text-white font-semibold text-xl">
             Conectamos sua loja.
           </p>
         </div>


         {/* Card 3 */}
         <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-4xl border border-white p-6 rounded-2xl flex flex-col items-center text-center">
           <FaCheckCircle className="text-4xl mb-4 text-white" />
           <p className="text-white font-semibold text-xl">Lucro garantido.</p>
         </div>
       </div>

       


       {/* Botões */}
       <div className="flex justify-center mr-2 mt-12 space-x-4">
         <button className="bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-3 px-12 rounded-full">
           Fale com a nossa equipe
         </button>
    
       </div>
     </div>


     {/* Imagem */}
     <div className="hidden md:block w-1/2 absolute-right-0 md:w-1/5">
       <img
         src="logoAbout.png"
         alt="Imagem"
         className="w-full mx-auto absolute-right-0 rounded-md"
       />
     </div>
   
   </section>
 );
}


export default TestAbout;