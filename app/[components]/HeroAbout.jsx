import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from 'next/image'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiNpm } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import {TbPercentage10 , TbPercentage20 ,TbPercentage25,TbPercentage50, TbPercentage75, TbPercentage70, TbPercentage80, TbPercentage90, TbPercentage100 } from "react-icons/tb";



const HeroAbout = () => {
  return (
    <div className='py-15 px-14 my-5 shadow-2xl rounded-2xl'>
      <Container>
        <h1 className='text-[42px] font-semibold text-center pb-16'>About Myself</h1>
        <Flex className={"justify-between gap-x-20"}>
            <div className=" bg-white py-15 px-22 border rounded-2xl" data-aos="flip-left">
                <Image src="/najat(2).jpg"
                      alt="author's photo"
                      width={300}
                      height={500}
                    />
            </div>
            <div className="font-mono" data-aos="fade-left">
               <h3 className='font-semibold text-[32px] text-blue-500'>Skills</h3>
               <p className='text-lg py-5 text-neutral-500'>PASSIONIATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
               <div className="flex justify-center gap-x-5 py-2 text-gray-500">
                <FaHtml5 className='text-6xl'/>
                <IoLogoCss3 className='text-6xl'/>
                <SiTailwindcss className='text-6xl'/>
                <FaBootstrap className='text-6xl'/>
                <FaJsSquare className='text-6xl'/>
                <FaGithub className='text-6xl'/>
               </div>
               <div className="flex justify-center gap-x-5 py-2 pt-5 text-gray-500">
                <FaGitAlt className='text-6xl'/>
                <FaFigma className='text-6xl'/>
                <SiNpm className='text-6xl'/>
                <SiCanva className='text-6xl'/>
                  <FaReact className='text-6xl'/>
                <RiNextjsFill className='text-6xl'/>
               </div>
               <div className="pt-6.5">
                <h3 className='text-lg font-mono'>🔹Frontend Development-Build responsive and modern user interfaces using HTML, CSS, Tailwind CSS, JavaScript, React & Next.js.</h3>
                 <h3 className='text-lg font-mono py-3.5'>🔹 Interactive UI & UX Create smooth, user-friendly interfaces with animations (AOS, Framer Motion).</h3>
                  {/* <h3 className='text-lg font-mono pb-2'>🔹 API Integration Work with REST APIs and Firebase for authentication and dynamic data.</h3> */}
                    <h3 className='text-lg font-mono pb-2'>🔹Soft skills - Strong communication-presentation, teamwork, creativity, adaptability and learning mindset.</h3>
               </div>
            </div>
        </Flex>
         <div className="py-10">
            <h1 className='font-semibold font-mono text-[32px] text-blue-500'>Proficiency</h1>
           <div className="flex gap-x-2  pt-5">
             <h3 className='font-sans text-lg'>Frontend/Design</h3> <TbPercentage20  className='text-center text-lg'/><p className='text-gray-500'>(80%)</p>
           </div>
           <div className="flex gap-x-2 py-2.5">
             <h3 className='font-sans text-lg'>Language -</h3>
             <p className='text-gray-400'>English</p><TbPercentage25 className='text-center text-lg'/> <p className='text-gray-500'>(70%)</p>
             <p className='text-gray-400'>Hindi</p><TbPercentage10 className='text-center text-lg'/> <p className='text-gray-500'>(90%)</p>
             <p className='text-gray-400'>Korean</p><TbPercentage70 className='text-center text-lg'/> <p className='text-gray-500'>(30%)</p>
             <p className='text-gray-400'>Chinese</p><TbPercentage75 className='text-center text-lg'/> <p className='text-gray-500'>(25%)</p>
             <p className='text-gray-400'>Japanese</p><TbPercentage80 className='text-center text-lg'/> <p className='text-gray-500'>(20%)</p>
             <p className='text-gray-400'>Bangla</p><TbPercentage100 className='text-center text-lg'/> <p className='text-gray-500'>(100%)</p>
           </div>
            <div className="flex gap-x-2">
              <h3 className='font-sans text-lg'>Programming -</h3>
              <p className='text-gray-400'>HTML</p><TbPercentage10 className='text-center text-lg'/> <p className='text-gray-500'>(90%)</p>
              <p className='text-gray-400'>CSS</p><TbPercentage10 className='text-center text-lg'/> <p className='text-gray-500'>(90%)</p>
              <p className='text-gray-400'>JavaScript</p><TbPercentage50 className='text-center text-lg'/> <p className='text-gray-500'>(50%)</p>
            </div>
            </div>
            <div className="">
              <h1 className='font-semibold font-mono text-[32px] text-blue-500'>Education</h1>
              <p className='font-mono text-lg  text-gray-400'>Running...</p>
        <div className="flex justify-between my-5">
              <div className="" data-aos="fade-up-right">
              <Image className='rounded-full shadow-2xl w-[40%]'
                    src="/bbggc.png"
                    alt="my college logo"
                    width={150}
                    height={50}
                  />
                  <h1 className='font-sans text-lg pt-6  font-semibold'>Begum Badrunnesa Govt. Girls College(BBGGC)</h1>
                  <h3 className='font-sans text-[15px] py-1.5 font-semibold'>HSC-27</h3>
                  <p className='text-gray-400'>15 Sep 2025 - Present</p>
                       </div>
                 <div className=" w-px h-60 bg-gray-300 mx-4"></div>
            <div className="" data-aos="fade-up-left">
                 <Image className='rounded-full bg-black shadow-2xl w-[60%]'
                    src="/cambridge.png"
                    alt="my school logo"
                    width={150}
                    height={50}
                  />
                   <h1 className='font-sans text-lg pt-7  font-semibold'>Cambridge School</h1>
                  <h3 className='font-sans text-[15px] py-1.5 font-semibold'>SSC-25</h3>
                  <p className='text-gray-400'>Jan 2015 - April 2025</p>
            </div>
        </div>
            </div>
      </Container>
    </div>
  )
}

export default HeroAbout
