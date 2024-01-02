import React from 'react'


function Results() {
 return (
   <div className="bg-[#ecf0f1]">
 <div className="bg-cover bg-center rounded-3xl relative mx-5 md:mx-10 md:my-10 p-10 md:p-20" style={{ backgroundImage: 'url("bgresults.png")' }}>
   <div className="absolute inset-0 opacity-50"></div>
   <div className="container mx-auto flex flex-col md:flex-row relative z-10">
     {/* Coluna à Esquerda */}
     <div className="w-full md:w-7/12 p-4 md:p-8">
       <h2 className="text-4xl lg:text-5xl font-normal w-4/5 text-white mb-8 md:mb-12">
         Alcance Resultados Mais Rápido Com a Lima Web
       </h2>


       {/* Cards de Resultados */}
       <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {/* Card 1 */}
         <div className="bg-white shadow p-6 h-42 md:h-64 rounded-3xl md:text-center">
           <h3 className="text-6xl md:text-7xl ml-6 md:ml-0 font-light text-cyan-900 mb-4">99%</h3>
           <p className="text-gray-600 ml-6 md:ml-0 text-lg md:text-xl">Satisfação do Cliente</p>
           <button className="md:hidden mt-6 w-full text-sm bg-transparent border border-black text-black px-2 md:py-2 py-4 rounded-full md:w-28">Entrar no time</button>
         </div>


         {/* Card 2 */}
         <div className="bg-white shadow p-6 h-42 md:h-64 rounded-3xl md:text-center">
           <h3 className="text-6xl md:text-7xl ml-6 md:ml-0 font-light text-cyan-900 mb-4">+10</h3>
           <p className="text-gray-600 ml-6 md:ml-0 text-lg md:text-xl">Projetos Concluídos</p>
           <button className="md:hidden mt-6 w-full text-sm bg-transparent border border-black text-black px-2 md:py-2 py-4 rounded-full md:w-28">Entrar no time</button>
         </div>


         {/* Card 3 */}
         <div className="bg-white shadow p-6 h-50 md:h-64 rounded-3xl md:text-center">
           <h3 className="text-6xl md:text-7xl ml-6 md:ml-0 mb-4 font-light text-cyan-900 ">10x</h3>
           <p className="tjustify-betweenext-gray-600 ml-6 md:ml-0 text-sm md:text-xl">Crescimento no Lucro</p>
           <button className="md:hidden mt-6 w-full text-sm bg-transparent border border-black text-black px-2 md:py-2 py-4 rounded-full md:w-28">Entrar no time</button>
         </div>
       </div>
     </div>


     {/* Coluna à Direita (Imagem) */}
     <div className="hidden md:block w-5/12">
       {/* Adicione a imagem aqui */}
     </div>
   </div>
 </div>
</div>
 )
}


export default Results