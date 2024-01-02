import React from 'react';

import 'swiper/swiper-bundle.css';
import { FaDesktop, FaMobileAlt, FaCode, FaChartBar } from 'react-icons/fa';




function Service() {
    const services = [
        {
          title: 'Desenvolvimento Web',
          description: 'Desenvolvemos websites responsivos e modernos para atender às necessidades do seu negócio.',
          icon: <FaDesktop className="text-4xl" />,
        },
        {
          title: 'Design Atraente',
          description: 'Criamos designs atraentes e personalizados que cativam seus clientes.',
          icon: <FaMobileAlt className="text-4xl" />,
        },
        {
          title: 'Desenvolvimento de Ecommerce',
          description: 'Desenvolvemos o seu ecommerce para impulsionar suas vendas online e otimizar o seu negócio.',
          icon: <FaCode className="text-4xl" />,
        },
        {
          title: 'Análise de Dados',
          description: 'Utilizamos análise de dados avançada para fornecer insights valiosos e impulsionar a tomada de decisões estratégicas.',
          icon: <FaChartBar className="text-4xl" />,
        },
      ];

      return (
        <section id="services" className="py-6 w-full bg-[#142b42] text-white">
        <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i}>
              <div className="border-2 border-gray-100 p-4 md:p-6 rounded-xl text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-full">
            Quero uma Estrutura Autêntica!
          </button>
        </div>
      </section>
    );
  }
  
  export default Service;
