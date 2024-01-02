import React from 'react';
import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';


function Verticais() {
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);

    const toggleText = (section: number) => {
        switch (section) {
            case 1:
                setShowText1(!showText1);
                break;
            case 2:
                setShowText2(!showText2);
                break;
            case 3:
                setShowText3(!showText3);
                break;
            default:
                break;
        }
    };

    return (
        <section className="py-16 bg-slate-100 overflow-x-hidden">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl w-4/5 md:w-3/5 font-light mb-4 text-black mx-auto">
                    Desperte sua Marca Online com a Lima Web
                </h1>
                <p className="text-gray-700 mb-6 w-2/3 mx-auto hidden md:block">
                    Na Lima Web, acreditamos no potencial do seu negócio online. Explore nossos serviços de e-commerce e descubra como podemos impulsionar seus resultados, aumentar suas vendas e fortalecer sua presença digital.
                </p>
                <p className="text-gray-700 mb-4 w-2/3 mx-auto md:hidden">
                    Na Lima Web, acreditamos no potencial do seu negócio online.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    <div className="md:w-1/2 w-8/12 mb-6 md:mb-0 order-2 md:order-1">
                        <img
                            src="picVerticais(1).png"
                            alt="Imagem de Vantagem"
                            className="w-2/3 mx-auto h-auto rounded-lg shadow-md"
                        />
                        <button className="md:hidden ml-4 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-16 text-left ml-6 md:ml-0 order-1 md:order-2">
                        <p className="text-[#5e17eb] inline-block text-sm my-2 text-left ml-4 rounded-full px-2 py-1 bg-[#91e4e7]">
                            Maior alcance
                        </p>
                        <h2 className="text-3xl md:text-5xl w-full md:w-4/5 mx-auto text-left ml-4 font-medium text-black mb-10">
                            Aumente sua Visibilidade Online. Alcance 10x mais clientes.
                        </h2>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="my-2 w-4/5 text-black text-left ml-4 text-lg" >
                                Destaque-se da concorrência e alcance um público mais amplo.

                            </h3>
                            <div onClick={() => toggleText(1)} className={`cursor-pointer text-black text-2xl mr-10 md:mr-16`}>
                                {showText1 ? <GoChevronUp /> : <GoChevronDown />}
                            </div>
                        </div>

                        {showText1 && (
                            <>

                                <p className="text-gray-600 w-4/5 text-left ml-4 mb-4">
                                    Com um e-commerce desenvolvido pela Lima Web, sua marca ganha visibilidade 24 horas por dia, 7 dias por semana.<span className="hidden md:block"> Essa presença constante no ambiente online amplia as oportunidades de interação com seu público-alvo.</span>
                                </p>
                            </>
                        )}

                        <button className="hidden md:block ml-4 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>


                    </div>
                </div>
                <div className="flex flex-col md:ml-10 md:flex-row items-center justify-center mb-8">

                    <div className="md:w-1/2 md:pl-8 mt-16 text-left ml-6 md:ml-0 order-1 md:order-2">
                        <p className="text-[#5e17eb] inline-block text-sm my-2 ml-4 text-left rounded-full px-2 py-1 bg-[#91e4e7]">
                            venda mais fácil
                        </p>
                        <h2 className="text-3xl md:text-5xl w-full md:w-4/5 mx-auto text-left ml-4 font-medium text-black mb-10">
                            Reduza Custos Operacionais.
                            Simplifique o Processo de Compra.
                        </h2>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="my-2 w-4/5 text-black text-left ml-4 text-lg">
                                Proporcione uma experiência de compra conveniente para seus clientes.
                            </h3>
                            <div onClick={() => toggleText(2)} className={`cursor-pointer text-black text-2xl mr-10 md:mr-16`}>
                                {showText2 ? <GoChevronUp /> : <GoChevronDown />}
                            </div>
                        </div>

                        {showText2 && (
                            <>
                                <p className="text-gray-600 w-4/5 text-left ml-4 mb-4">
                                    Um e-commerce permite que eles comprem seus produtos a qualquer hora, de qualquer lugar, facilitando o processo de compra e melhorando a satisfação do cliente.
                                </p>
                            </>
                        )}
                        <button className="hidden md:block ml-0 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>
                    </div>
                    <div className="md:w-1/2 w-8/12 mb-6 md:mb-0 mt-4 order-2">
                        <img
                            src="newpicverticais(3).png"
                            alt="Imagem de Vantagem"
                            className="w-2/3 mx-auto h-auto rounded-lg shadow-md"
                        />
                        <button className="md:hidden ml-0 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    <div className="md:w-1/2 w-8/12 mb-6 md:mb-0 order-2 md:order-1">
                        <img
                            src="newpicVerticais(4).png"
                            alt="Imagem de Vantagem"
                            className="w-2/3 mx-auto h-auto rounded-lg shadow-md"
                        />
                        <button className="md:hidden ml-4 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-16 text-left ml-6 md:ml-0 order-1 md:order-2">
                        <p className="text-[#5e17eb] inline-block text-sm my-2 text-left ml-4 rounded-full px-2 py-1 bg-[#91e4e7]">
                            Aumento nas vendas
                        </p>
                        <h2 className="text-3xl md:text-5xl w-full md:w-4/5 mx-auto text-left ml-4 font-medium text-black mb-10">
                            Potencialize suas Vendas com Promoções Online. Tenha seu faturamento triplicado.
                        </h2>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="my-2 w-4/5 text-black text-left ml-4 text-lg">
                                Utilize promoções online para impulsionar as vendas.
                            </h3>
                            <div onClick={() => toggleText(3)} className={`cursor-pointer text-black text-2xl mr-10 md:mr-16`}>
                                {showText3 ? <GoChevronUp /> : <GoChevronDown />}
                            </div>
                        </div>
                        {showText3 && (
                            <>
                                <p className="text-gray-600 w-4/5 text-left ml-4 mb-4">
                                    Com um e-commerce, é fácil implementar estratégias de descontos, cupons e ofertas especiais, incentivando os clientes a comprar mais e com mais frequência.
                                </p>
                            </>
                        )}
                        <button className="hidden md:block ml-4 mt-8 bg-gradient-to-r from-[#5ce1e6] to-[#5e17eb] text-white py-2 px-6 rounded-full">
                            Quero meu E-commerce
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Verticais;