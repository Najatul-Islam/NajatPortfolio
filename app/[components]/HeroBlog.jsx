import React from 'react'
import Flex from './Flex'
import Link from 'next/link'

const HeroBlog = () => {
  return (
    <div>
      <section className="rounded-2xl my-5 shadow-2xl w-full py-15 px-12">
        <h1 className='text-[41px] font-semibold text-center'>Blogs</h1>
       <p className='text-lg py-5 text-center text-neutral-500'>Driven by a passion for development, I create, write, and inspire others by sharing what I learn!</p>
        <Flex className={"justify-center gap-x-5"}>
            <div className="mt-8 py-4 px-5 border border-gray-300 rounded-2xl hover:shadow-2xl transition duration-500" data-aos="zoom-in-right">
                 <h3 className='w-100 text-blue-500 font-mono text-lg pb-2.5'>🔹Common Beginner Mistakes in Web Development & Staying Consistent</h3>
                    <div className="">
                        <p className='text-[17px] font-mono py-2'>✨ Beginner Mistakes:</p>
                 <p className='text-[15px] text-gray-500 font-mono '>Skipping HTML, CSS, JS basics</p>
<p className='text-[15px] text-gray-500 font-mono '>Learning too many tools at once</p>
<p className='text-[15px] text-gray-500 font-mono '>Copy-pasting without understanding</p>
<p className='text-[15px] text-gray-500 font-mono '>Ignoring documentation</p>
<p className='text-[15px] text-gray-500 font-mono '>Neglecting daily practice</p>
                    </div>
    <div className="">
 <p className='text-[17px] font-mono py-2'>✨ Tips to Stay Consistent:</p>
                 <p className='text-[15px] text-gray-500 font-mono'>Set clear, achievable goals</p>
<p className='text-[15px] text-gray-500 font-mono '>Code daily, even 30–60 min</p>
<p className='text-[15px] text-gray-500 font-mono '>Build small, real projects</p>
<p className='text-[15px] text-gray-500 font-mono '>Track your progress</p>
<p className='text-[15px] text-gray-500 font-mono '>Join coding communities</p>
               </div>
               <h3 className='text-[17px] font-mono pt-2'>🔹Consistency + avoiding common mistakes = faster, smoother learning.</h3>
            </div>
             <div className="mt-8 py-4 px-5 border border-gray-300 rounded-2xl hover:shadow-2xl transition duration-500" data-aos="zoom-in-left">
                 <h3 className='text-center text-blue-500 font-mono text-lg pb-2.5'>🔹Hard Skill & Soft Skill</h3>
                <div className="">
                     <p className='text-[17px] font-mono py-2'>✨Hard Skill Definition: Teachable, technical abilities (e.g., coding, design, Excel etc)</p>
               <p className='text-[15px] text-gray-500 font-mono'>Learnable & measurable</p>
               <p className='text-[15px] text-gray-500 font-mono'>Can be replaced by AI or tools</p>
               <p className='text-[15px] text-gray-500 font-mono'>Important for specific tasks</p>
               <p className='text-[15px] text-gray-500 font-mono'>Contributes ~10% of career success</p>
                </div>
                <div className="">
                     <p className='text-[17px] font-mono py-2'>✨Soft Skill Definition: Personal, interpersonal abilities (e.g., communication, teamwork, adaptability etc)</p>
               <p className='text-[15px] text-gray-500 font-mono'>Builds relationships, leadership, and trust</p>
               <p className='text-[15px] text-gray-500 font-mono'>Hard to replace by AI</p>
               <p className='text-[15px] text-gray-500 font-mono'>Essential in every career & situation (Often more important than technical skills)</p>
               <p className='text-[15px] text-gray-500 font-mono'>Contributes ~90% of career success</p>
                </div>
                <h3 className='text-[17px] font-mono pt-2'>🔹Hard skills get your foot in the door, soft skills help you grow, lead, and succeed long-term.</h3>
                 </div>
        </Flex>
      </section>
    </div>
  )
}

export default HeroBlog
