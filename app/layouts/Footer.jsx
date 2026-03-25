"use client";

import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail , IoCall } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <div>
    <Container>
      <div className="p-4 sm:p-4 md:p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] rounded-2xl">

        <Flex className={"justify-center flex-col md:flex-row items-center text-center md:text-left"}>
          
          {/* Logo */}
          <div className="mb-4 md:mb-0 md:mr-20">
            <Link href="/">
              <Image
                src="/logoO.png"
                alt="logo of the portfolio"
                width={150}
                height={100}
                className="mx-auto md:mx-0"
              />
            </Link>
          </div>

          {/* Heading */}
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-blue-400'>
            Work Together, Build Together
          </h1>

        </Flex>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 py-6 text-center">

          <div className="flex items-center gap-2">
            <IoMail className='text-xl'/>
            <h3 className="text-sm sm:text-base break-all">
              najatulislam111@gmail.com
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <IoCall className='text-xl'/>
            <h3 className="text-sm sm:text-base">
              +8801629575745
            </h3>
          </div>

        </div> 

        {/* Bottom */}
        <div className="text-center">
          <h1 className='font-sans text-gray-500 py-2 text-sm sm:text-base'>
            Made with love by 
            <span className='text-blue-500 border-b ml-1'>
              NajatFolio
            </span>
          </h1>

          <p className='font-sans text-gray-500 text-xs sm:text-sm'>
            Theme by NajatFolio Creative PersonalⓃ
          </p>
        </div>

        <h3 className='font-sans text-gray-400 pb-1.5 text-center text-xs sm:text-sm'>
          © Copyright 2026
        </h3>

      </div>
    </Container>
    </div>
  )
}

export default Footer