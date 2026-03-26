"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useState } from "react"
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Container from './Container';

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
          <section className="rounded-2xl my-5 shadow-2xl w-full py-15 px-12">
            <Container>
        <h1 className='text-[42px] font-semibold text-center pb-10'>Works & Projects</h1>
      {/* FILTER BUTTON */}
      <div className="flex justify-center gap-4 my-10">
                <button className="filter-btn py-2 px-3 rounded-2xl bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter="all">All</button>
        <button className="filter-btn py-2 px-3 rounded-2xl bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".web">Web Designs</button>
        <button className="filter-btn py-2 px-3 rounded-2xl  bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".dev">Web Development</button>
        <button className="filter-btn py-2 px-3 rounded-2xl  bg-blue-400 hover:border hover:border-blue-400 hover:bg-transparent" data-filter=".dd">Designs with Development</button>
        </div>

      {/* ITEMS */}
      <div ref={containerRef} className="grid items-center md:grid-cols-3 gap-6">
        
        <div className="mix web bg-gray-200 p-6 rounded-xl">
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
        </div>

        <div className="mix dev bg-gray-200 p-6 rounded-xl">
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
        </div>

         <div className="mix web bg-gray-200 p-6 rounded-xl">
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
        </div>

        <div className="mix dd bg-gray-200 p-6 rounded-xl ">
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
        </div>

        <div className="mix dev bg-gray-200 p-6 rounded-xl">
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
        </div>
                
        <div className="mix dd bg-gray-200 p-6 rounded-xl">
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
        </div>

            <div className="mix dev bg-gray-200 p-6 rounded-xl">
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
        </div>

            <div className="mix web bg-gray-200 p-6 rounded-xl">
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
        </div>

            <div className="mix web bg-gray-200 p-6 rounded-xl">
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
        </div>

      </div>
      </Container>
    </section>
    </div>
  )
}

export default HeroProjects