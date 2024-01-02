import React from 'react'



function Hero() {
 return (
  <section className="bg-[#142b42] overflow-x-hidden">
   <div className=" text-white py-4 w-full ">
     <div className=" container lg:mx-auto lg:ml-15 flex flex-col lg:flex-row items-center justify-between">
       <div className="order-1  mx-12 lg:mx-10 lg:order-1 lg:w-1/2 lg:pl-10">
         <h1 className="text-5xl text-white lg:text-6xl font-black mb-4">Construa sua presença online com a <span className="bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-transparent"> Lima Web</span> </h1>
         <p className="text-base text-gray-300 lg:text-lg mt-8 mb-8">
           Desenvolvemos websites incríveis para elevar o seu negócio. Tenha uma presença online
           impressionante com a Lima Web.
         </p>
         <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
           <button className="bg-primary-color text-white py-2 px-6 rounded-full">
             Comece Agora
           </button>
           <button className="border border-white text-white py-2 px-6 rounded-full hover:bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb]">
             Saiba Mais
           </button>
         </div>
       </div>
       <div className="hidden md:block order-2 lg:order-1 lg:w-1/2 w-3/4 mt-12 mb-0">
         <img src="herolima(2).png" alt="Hero Image" className="w-full lg:rounded-md" />
       </div>
       
     </div>
     
   </div>
   <div className="md:hidden bg-gradient-to-b from-[#142b42] to-slate-100 mt-8 flex flex-col justify-between items-center">
       <img
         src="limaabout(1).png"
         overflow-x-hidden alt="Imagem"
         className="w-3/5 h-auto rounded-md"
       />
     </div>
     <div className="hidden md:block h-40 bg-gradient-to-b from-[#142b42] to-slate-100">
       
     </div>
   </section>
   
   
 )
}


export default Hero