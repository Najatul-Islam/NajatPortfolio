import React from 'react'
import Flex from './Flex'
import Link from 'next/link'
import Container from '../[components]/Container'

const HeroAchieve = () => {
  return (
    <div className="md:my-5">
       <section className="lg:rounded-2xl lg:mt-2.5 lg:shadow-2xl w-full py-6 md:py-8 px-6 sm:px-7 md:px-12">
        <h1 className='text-3xl pt-5 sm:text-4xl md:text-[41px] font-semibold text-center'>My Achievements</h1>
        <p className=' text-sm sm:text-base md:text-lg py-3 sm:py-5 text-center text-neutral-500'>
          Achievements + Role Impact, Certifications, Letters, Badges and Some Cool Stuff that I have done & Got!
        </p>

        {/* First Row px-4 sm:px-6 md:px-10*/}
        <Flex className="flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-70 mt-5 py-4 px-5 border border-gray-300 hover:scale-105 hover:shadow-2xl transition duration-500 rounded-2xl">
            <h3 className='text-center  text-blue-500 font-mono text-lg pb-2'>🔹Computer based</h3>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Successfully Completed Certification from Creative It for ✨ Frontend Development with React</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Successfully Completed Certification from 10 Minute School for ✨ Freelancing</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Working as a Frontend Developer at SARULF Group Tech Company ✨ developing and maintaining modern web interfaces.</p>
          </div>
          <div className="flex-1 min-w-70 mt-5 py-4 px-5 border border-gray-300 hover:scale-105 hover:shadow-2xl transition duration-500 rounded-2xl">
            <h3 className='text-center text-blue-500 font-mono text-lg pb-2'>🔹Academic Based</h3>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Achieved Golden A+ in SSC examination ✨ awarded crest, certificate, and prize money for outstanding academic performance.</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Completed English Language Course from British Council & 10 Minute School ✨ earning certificates for proficiency in English.</p>
          </div>
        </Flex>

        {/* Second Row */}
        <Flex className="flex-wrap justify-center gap-5">
          <div className="flex-1 py-4 min-w-70 mt-5 px-5 border border-gray-300 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-500">
            <h3 className='text-center text-blue-500 font-mono text-lg pb-2'>🔹Leadership & Skill Based</h3>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Executive Officer - Workshop & Bootcamp Department and Volunteer Department - YouthVerse Union ✨ Selected among top candidates</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Content Moderator - Lobdhi Physics (ACS) ✨ Selected among top candidates</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Campus Ambassador – HP Life ✨ promoting digital skills and online learning initiatives.</p>
          </div>
          <div className="flex-1 min-w-70 mt-5 py-4 px-5 border border-gray-300 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-500">
            <h3 className='text-center text-blue-500 font-mono text-lg pb-2'>🔹Extra-Curricular based</h3>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Debating Club member - BBGGC ✨ improving communication & critical thinking</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Volunteer - Cambridge School ✨ Selected among top candidates</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Convener – Dreams on the Way ✨ Selected among top candidates</p>
            <p className='text-[14px] sm:text-[15px] text-gray-500 font-mono py-1'>🏆 Campus Ambassador – Let's Know The World ✨ assisted in events & community activities.</p>
          </div>
        </Flex>

        {/* Button */}
        <div className="flex justify-center pt-5">
          <Link
            href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:5d31bd44-8f66-4295-af3b-13b89c4c5c56"
            target='_blank'
          >
            <button className="text-center px-6 py-5 bg-blue-400 text-white rounded-xl hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500 transition text-sm sm:text-base md:text-lg">
              View My All Achievements
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default HeroAchieve
