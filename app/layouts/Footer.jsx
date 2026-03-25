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
      <div className=" p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
        <Flex className={"justify-center"}>
         <div className="mr-20">
      <Link href="/">
        <Image className=''
      src="/logoO.png"
      alt="logo of the portfolio"
      width={150}
      height={100}
    />
    </Link>
      </div>
      <h1 className='pt-6 text-4xl font-mono font-bold text-blue-400'>Work Together,Build Together</h1>
      </Flex>
      <div className="flex justify-center gap-x-2.5 py-6">
       <IoMail className='text-xl ml-10'/><h3>najatulislam111@gmail.com</h3>
        <IoCall className='text-xl ml-10'/><h3>+8801629575745</h3>
        </div> 
       <div className="m-auto text-center">
      <h1 className='font-sans text-gray-500 py-2'>Made with love by <span className='text-blue-500 border-b'>NajatFolio</span> </h1>
      <p className='font-sans text-gray-500'>Theme by NajatFolio Creative PersonalⓃ</p>
     </div>
     <h3 className='font-sans text-gray-400 pb-1.5'> © Copyright 2026</h3>
     </div>
    </Container>
    </div>
  )
}

export default Footer
