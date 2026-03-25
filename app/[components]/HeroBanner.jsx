"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Container from "./Container"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from 'next/link';


const HeroBanner = () => {
  return (
    <>
    <Container>
    <section className="w-full mt-3 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 transition-colors rounded-2xl shadow-2xl">
      {/* LEFT SIDE   bg-black dark:bg-gray-50 */}
      <div className="max-w-xl text-center md:text-left">
       <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Najatul Islam Sadika</span> 👋
        </h1>

        {/* 🔥 Animated Text */}
        <TypingText />

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          I build modern, responsive and interactive web apps using React & Next.js.
        </p>
      <div className="flex gap-x-5 text-blue-300 py-5">
         <Link href={"https://github.com/Najatul-Islam"} target='_blank'> <FaGithubSquare className='text-4xl'/> </Link>
        <Link href={"https://www.linkedin.com/in/najatul-islam-5941b33b0/"} target='_blank'><FaLinkedin className='text-4xl'/></Link>
         <Link href={"https://www.instagram.com/_s43ka_/?hl=en"} target='_blank'><FaInstagramSquare className='text-4xl'/></Link>
           <Link href={"https://www.facebook.com/mesadika01"} target='_blank'><FaSquareFacebook className='text-4xl'/></Link>
      </div>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-blue-400 text-white rounded-xl hover:text-blue-500 hover:bg-transparent hover:border hover:border-blue-500  transition">
            Hire Me
          </button>

          <button className="px-6 py-3 border-2 border-gray-400 dark:border-gray-300 rounded-xl text-gray-300 dark:text-gray-500 hover:text-gray-100 dark:hover:bg-gray-700 transition">
            View Work
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <BannerCard />
    </section>
    </Container>
    </>
  )
}

/* ================= TYPING TEXT ================= */

function TypingText() {
  const texts = [
    "Frontend Developer 💻",
    "React & Next.js Lover ⚡",
    "UI/UX Enthusiast 🎨",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.p
      key={index}
      initial={{ opacity: 0, y:10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5}}
      className="mt-4 text-2xl font-semibold text-blue-400"
    >
      {texts[index]}
    </motion.p>
  )
}

/* ================= CARD ================= */

function BannerCard() {
  return (
    <div className="hidden md:block mt-10 md:mt-0">
      <Card hueA={200} hueB={260} />
    </div>
  )
}

function Card({ hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6 }}
    >
      <div style={{ ...splash, background }} />

      <motion.div style={card} variants={cardVariants}>
        <Image
          src="/najat.jpg" // 👉 /public folder e rakhba
          alt="my pic"
          width={1000}
          height={1000}
          className="rounded-2xl w-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}

/* ================= ANIMATION ================= */

const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: -6,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 400,
    },
  },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/* ================= STYLES ================= */

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
}

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "30px",
}

const card = {
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#ffffff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  transformOrigin: "10% 60%",
}

export default HeroBanner;