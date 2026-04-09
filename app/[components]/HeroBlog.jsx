import React from 'react'
import Flex from './Flex'
import Link from 'next/link'

const HeroBlog = () => {
  return (
    <div className="md:my-5">
      <section className="lg:rounded-2xl my-3 lg:shadow-2xl w-full py-6 md:py-8 px-6 sm:px-7 md:px-12">
        <h1 className='text-3xl sm:text-4xl md:text-[41px] font-semibold text-center'>Blogs</h1>
        <p className='text-sm sm:text-base md:text-lg py-3 sm:py-4 text-center text-neutral-500'>
          Driven by a passion for development, I create, write, and inspire others by sharing what I learn!
        </p>

        <Flex className="flex-wrap justify-center gap-5 mt-5">
          {/* Blog Card 1 */}
          <div className="flex-1 min-w-70  mt-2.5 lg:mt-6  py-4 px-5 border border-gray-300 rounded-2xl hover:shadow-2xl transition duration-500" data-aos="zoom-in-right">
            <h3 className='w-full text-blue-500 font-mono text-lg sm:text-xl pb-2.5'>🔹Common Beginner Mistakes in Web Development & Staying Consistent</h3>
            
            <div className="mb-2.5">
              <p className='text-[16px] sm:text-[17px] font-mono py-1'>✨ Beginner Mistakes:</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Skipping HTML, CSS, JS basics</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Learning too many tools at once</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Copy-pasting without understanding</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Ignoring documentation</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Neglecting daily practice</p>
            </div>

            <div className="mb-2.5">
              <p className='text-[16px] sm:text-[17px] font-mono py-1'>✨ Tips to Stay Consistent:</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Set clear, achievable goals</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Code daily, even 30–60 min</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Build small, real projects</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Track your progress</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Join coding communities</p>
            </div>

            <h3 className='text-[15px] sm:text-[17px] font-mono pt-2'>🔹Consistency + avoiding common mistakes = faster, smoother learning.</h3>
          </div>

          {/* Blog Card 2 */}
          <div className="flex-1 min-w-70  mt-2.5 lg:mt-6 py-4 px-5 border border-gray-300 rounded-2xl hover:shadow-2xl transition duration-500" data-aos="zoom-in-left">
            <h3 className='text-center text-blue-500 font-mono text-lg sm:text-xl pb-2.5'>🔹Hard Skill & Soft Skill</h3>
            
            <div className="mb-2.5">
              <p className='text-[16px] sm:text-[17px] font-mono py-1'>✨ Hard Skill Definition:</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Teachable, technical abilities (e.g., coding, design, Excel etc)</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Learnable & measurable</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Can be replaced by AI or tools</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Important for specific tasks</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Contributes ~10% of career success</p>
            </div>

            <div className="mb-2.5">
              <p className='text-[16px] sm:text-[17px] font-mono py-1'>✨ Soft Skill Definition:</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Personal, interpersonal abilities (e.g., communication, teamwork, adaptability etc)</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Builds relationships, leadership, and trust</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Hard to replace by AI</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Essential in every career & situation</p>
              <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-0.5'>Contributes ~90% of career success</p>
            </div>

            <h3 className='text-[15px] sm:text-[17px] font-mono pt-2'>🔹Hard skills get your foot in the door, soft skills help you grow, lead, and succeed long-term.</h3>
          </div>
        </Flex>
      </section>
    </div>
  )
}

export default HeroBlog
