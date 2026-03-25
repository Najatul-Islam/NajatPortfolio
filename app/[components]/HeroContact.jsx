"use client";

import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from 'next/link';


const HeroContact = () => {
    
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ad4noar", // তোমার service ID
        "template_hwxptt9", // তোমার template ID
        form.current,
        "p61YAPERdLwdVqLi8" // তোমার public key
      )
      .then(
        () => {
          alert("Message Sent ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed ❌");
        }
      );
  };

  return (
    <>
        <Container>
    <div className="rounded-2xl shadow-2xl w-full pt-15 px-12">
      <Flex className={""}>
        <div className="">
          <h1 className='text-[42px] font-semibold'>Contact Me</h1>
          <p className='py-8 w-[65%] font-mono text-gray-400'>Got a project in mind, or just want to say hello? My inbox is always open for passionate people to connect, collaborate, and discuss work ideas.
            Feel free to reach out anytime — let’s build something amazing together! 🚀</p>
            <div className="flex gap-x-5 text-blue-400 pt-10">
          <Link href={"https://github.com/Najatul-Islam"} target='_blank'> <FaGithubSquare className='text-4xl'/> </Link>
           <Link href={"https://www.linkedin.com/in/najatul-islam-5941b33b0/"} target='_blank'><FaLinkedin className='text-4xl'/></Link>
           <Link href={"mailto:najatulislam111@gmail.com"} target='_blank'><IoMail className='text-4xl'/></Link>
           <Link href={"https://www.instagram.com/_s43ka_/?hl=en"} target='_blank'><FaInstagramSquare className='text-4xl'/></Link>
           <Link href={"https://www.facebook.com/mesadika01"} target='_blank'><FaSquareFacebook className='text-4xl'/></Link>
            </div>
        </div>
            <div className="flex w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-6 rounded-2xl shadow mb-5"
      >
  <div className="flex gap-x-2.5">
            {/* Name */}
        <div className='pb-2 w-1/2'>
          <label className="text-md font-medium font-mono text-blue-500 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border rounded-lg text-gray-500 px-3 py-2 outline-0 focus:ring-2 focus:ring-blue-500"
            placeholder="Type your name"
          />
        </div>

        {/* Email */}
        <div className='pb-2'>
          <label className="text-md font-medium font-mono text-blue-500 mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border rounded-lg text-gray-500 px-3 py-2 outline-0 focus:ring-2 focus:ring-blue-500"
            placeholder="Type your email"
          />
        </div>
  </div>

        {/* Service Of Interest */}
        <div className='pb-2'>
          <label className="block text-md font-medium font-mono text-blue-500 mb-1">
            Service Of Interest
          </label>
          <input
            type="text"
            name="Service Of Interest"
            className="w-full border rounded-lg text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type Service Of Interest"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-md font-medium font-mono text-blue-500 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border rounded-lg text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-1/2 mt-5 text-lg bg-blue-500 text-white py-2 rounded-lg hover:bg-transparent hover:border hover:text-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
      </Flex>
    </div>
    </Container>
    </>
  )
}

export default HeroContact
