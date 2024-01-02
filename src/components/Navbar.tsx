"use client";
import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (

        <div className="bg-[#142b42] w-full overflow-x-hidden flex py-8">
            <div className="container mx-auto flex items-center justify-between">
                <img src="LogoLima(1).png" alt="Logo Image" className="w-1/12 ml-12">
                    
                </img>
                <div className="hidden md:flex mr-16 text-1xl space-x-12">
                <a href="#services" className="text-white">
                        Home
                    </a>
                    <a href="#services" className="text-white">
                        Serviços
                    </a>
                    <a href="#about" className="text-white">
                        Quem Somos
                    </a>
                    <a href="#contact" className="text-white">
                        Contato
                    </a>
                    {/* Adicione mais links conforme necessário */}
                </div>
                <div className="md:hidden">
                    {isOpen ? (
                        <FaTimes onClick={toggleMenu} className="text-white cursor-pointer mr-8" size={24} />
                    ) : (
                        <FaBars onClick={toggleMenu} className="text-white cursor-pointer mr-8" size={24} />
                    )}
                </div>
                {isOpen && (
                    <div className="md:hidden absolute top-11 w-full transition-all left-0 right-0 bg-[#34495e]">
                        <a href="#services" className="block py-3 px-7 text-white">
                            Serviços
                        </a>
                        <a href="#about" className="block py-3 px-7 text-white">
                            Quem Somos
                        </a>
                        <a href="#contact" className="block py-3 px-7 text-white">
                            Contato
                        </a>
                        {/* Adicione mais links conforme necessário */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar