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
    <div className='py-5 sm:py-6 md:py-8 px-6 sm:px-7 md:px-12 lg:px-14 my-5 lg:shadow-2xl lg:rounded-2xl'>
      <Container>

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center pb-10 md:pb-16'>
          About Myself
        </h1>

        <Flex className={"flex-col lg:flex-row justify-between gap-8 lg:gap-x-20 items-center lg:items-start"}>

          {/* Image */}
          <div className="lg:mt-30 bg-white py-2.5 sm:py-5 px-2.5 sm:px-6 md:px-8 border rounded-2xl flex justify-center items-center" data-aos="flip-left">
            <Image
              src="/mypic2 (1).png"
              alt="author's photo"
              width={300}
              height={500}
              className="w-full sm:w-62.5 md:w-75 bg-blue-200 rounded-2xl mx-auto object-center h-auto"
            />
          </div>

          {/* Content */}
          <div className="font-mono text-center lg:text-left" data-aos="fade-left">

            <h3 className='font-semibold text-2xl sm:text-3xl text-blue-500'>Skills</h3>

            <p className='text-sm sm:text-base md:text-lg py-4 sm:py-5 text-neutral-500'>
              PASSIONIATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            {/* Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 py-2 text-gray-500">
              <FaHtml5 className='text-4xl sm:text-5xl md:text-6xl'/>
              <IoLogoCss3 className='text-4xl sm:text-5xl md:text-6xl'/>
              <SiTailwindcss className='text-4xl sm:text-5xl md:text-6xl'/>
              <FaBootstrap className='text-4xl sm:text-5xl md:text-6xl'/>
              <FaJsSquare className='text-4xl sm:text-5xl md:text-6xl'/>
              <FaGithub className='text-4xl sm:text-5xl md:text-6xl'/>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 py-2 pt-4 sm:pt-5 text-gray-500">
              <FaGitAlt className='text-4xl sm:text-5xl md:text-6xl'/>
              <FaFigma className='text-4xl sm:text-5xl md:text-6xl'/>
              <SiNpm className='text-4xl sm:text-5xl md:text-6xl'/>
              <SiCanva className='text-4xl sm:text-5xl md:text-6xl'/>
              <FaReact className='text-4xl sm:text-5xl md:text-6xl'/>
              <RiNextjsFill className='text-4xl sm:text-5xl md:text-6xl'/>
            </div>

            {/* Text */}
            <div className="pt-5 sm:pt-6">
              <h3 className='text-sm sm:text-base md:text-lg'>
                🔹Frontend Development-Build responsive and modern user interfaces using HTML, CSS, Tailwind CSS, JavaScript, React & Next.js.
              </h3>

              <h3 className='text-sm sm:text-base md:text-lg py-2 sm:py-3'>
                🔹 Interactive UI & UX Create smooth, user-friendly interfaces with animations (AOS, Framer Motion).
              </h3>

              <h3 className='text-sm sm:text-base md:text-lg pb-2'>
                🔹Soft skills - Strong communication-presentation, teamwork, creativity, adaptability and learning mindset.
              </h3>
            </div>
          </div>
        </Flex>

        {/* Proficiency */}
        <div className="py-8 sm:py-10">
          <h1 className='font-semibold font-mono text-2xl sm:text-3xl text-blue-500'>Proficiency</h1>

          <div className="flex flex-wrap gap-2 pt-5 items-center">
            <h3 className='text-sm sm:text-base'>Frontend/Design</h3>
            <TbPercentage20/>
            <p className='text-gray-500'>(80%)</p>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            <h3 className='text-sm sm:text-base'>Language -</h3>
            <p className='text-gray-400'>English</p><TbPercentage25/> <p>(70%)</p>
            <p className='text-gray-400'>Hindi</p><TbPercentage10/> <p>(90%)</p>
            <p className='text-gray-400'>Korean</p><TbPercentage70/> <p>(30%)</p>
            <p className='text-gray-400'>Chinese</p><TbPercentage75/> <p>(25%)</p>
            <p className='text-gray-400'>Japanese</p><TbPercentage80/> <p>(20%)</p>
            <p className='text-gray-400'>Bangla</p><TbPercentage100/> <p>(100%)</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <h3 className='text-sm sm:text-base'>Programming -</h3>
            <p className='text-gray-400'>HTML</p><TbPercentage10/> <p>(90%)</p>
            <p className='text-gray-400'>CSS</p><TbPercentage10/> <p>(90%)</p>
            <p className='text-gray-400'>JavaScript</p><TbPercentage50/> <p>(50%)</p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className='font-semibold font-mono text-2xl sm:text-3xl text-blue-500'>Education</h1>
          <p className='text-sm sm:text-base text-gray-400'>Running...</p>

          <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-8">

            {/* College */}
            <div className="text-center md:text-left" data-aos="fade-up-right">
              <Image className='rounded-full shadow-2xl mx-auto object-center w-30 sm:w-37.5'
                src="/bbggc.png"
                alt="my college logo"
                width={150}
                height={50}
              />
              <h1 className='text-base sm:text-lg pt-4 font-semibold'>
                Begum Badrunnesa Govt. Girls College(BBGGC)
              </h1>
              <h3 className='text-sm py-1 font-semibold'>HSC-27</h3>
              <p className='text-gray-400 text-sm'>15 Sep 2025 - Present</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-40 bg-gray-300"></div>

            {/* School */}
            <div className="text-center md:text-left" data-aos="fade-up-left">
              <Image className='rounded-full bg-black shadow-2xl w-30 sm:w-37.5'
                src="/cambridge.png"
                alt="my school logo"
                width={150}
                height={50}
              />
              <h1 className='text-base sm:text-lg pt-4 font-semibold'>Cambridge School</h1>
              <h3 className='text-sm py-1 font-semibold'>SSC-25</h3>
              <p className='text-gray-400 text-sm'>Jan 2015 - April 2025</p>
            </div>

          </div>
        </div>

      </Container>
    </div>
  )
}

export default HeroAbout
