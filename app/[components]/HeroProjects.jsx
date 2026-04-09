"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useState } from "react"
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Container from './Container';
import Link from 'next/link';

const HeroProjects = () => {

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {})

    return () => {
      Fancybox.destroy()
    }
  }, [])

   const containerRef = useRef(null)

  useEffect(() => {
    let mixer

    const loadMixitup = async () => {
      const mixitup = (await import("mixitup")).default

      if (containerRef.current) {
        mixer = mixitup(containerRef.current, {
          selectors: {
            target: ".mix",
          },
          animation: {
            duration: 500,
          },
        })
      }
    }

    loadMixitup()

    return () => mixer && mixer.destroy()
  }, [])

  return (
    <div>
          <section className="lg:rounded-2xl my-3 lg:shadow-2xl w-full py-10 px-12">
            <Container>
        <h1 className='text-[42px] font-semibold text-center pb-5'>Works & Projects</h1>
      {/* FILTER BUTTON */}
      <div className=" md:flex md:justify-center text-center items-center gap-3 my-6">
                <button className="filter-btn py-2 px-3 m-2 rounded-2xl bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter="all">All</button>
        <button className="filter-btn py-2 px-3 rounded-2xl m-2 bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".web">Web Designs</button>
        <button className="filter-btn py-2 px-3 rounded-2xl m-2 bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".dev">Web Development</button>
        <button className="filter-btn py-2 px-3 rounded-2xl m-2 bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".dd">Designs with Development</button>
        </div>

      {/* ITEMS */}
      <div ref={containerRef} className="grid items-center md:grid-cols-3 gap-6">
        
        <div className="mix web bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
                  <a
          href="/webd2.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/webd2.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
        </a>
       <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/Figma/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

        <div className="mix dev bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
                   <a
          href="/web.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/web.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://e-commerce-pi-wine-42.vercel.app/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

         <div className="mix web bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
                  <a
          href="/webd4.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/webd4.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/Botex/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

        <div className="mix dd bg-gray-200 px-6 pt-6 pb-3 rounded-xl ">
        <a
          href="/valent.png"
          data-fancybox
          className="block overflow-hidden rounded-xl w-full"
        >
          <div className="relative w-full h-64">
            <Image
              src="/valent.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
  </a>
   <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://vullet-time.vercel.app/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

        <div className="mix dev bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
        <a
          href="/gd2.png"
          data-fancybox
          className="block overflow-hidden rounded-xl w-full"
        >
          <div className="relative w-full h-64">
            <Image
              src="/gd2.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={1000}
               height={800}
            />
          </div>
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/PortoStar/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>
                
        <div className="mix dd bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
        <a
          href="/mfs.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/mfs.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/MFS-payoo-/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

            <div className="mix dev bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
        <a
          href="/gd1.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/gd1.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={1000}
               height={800}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://innovate-react-beta.vercel.app/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

            <div className="mix web bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
        <a
          href="/webd.png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/webd.png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/portfolio2/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

            <div className="mix web bg-gray-200 px-6 pt-6 pb-3 rounded-xl">
        <a
          href="/webd3 (2).png"
          data-fancybox
          className="block overflow-hidden rounded-xl"
        >
          <div className="relative w-full h-64">
            <Image
              src="/webd3 (2).png"
              alt="portfolio"
              className="object-cover hover:scale-110 transition duration-300"
                width={500}
               height={400}
            />
          </div>
         
        </a>
         <div className="p-2.5 mt-2 rounded-2xl border border-blue-500 hover:border-amber-50">
         <Link href={"https://najatul-islam.github.io/game/"} target="_blank">
              <h3 className='text-lg text-center text-gray-800 hover:text-blue-400'>View Live</h3>
            </Link>
       </div>
        </div>

      </div>
      </Container>
    </section>
    </div>
  )
}

export default HeroProjects