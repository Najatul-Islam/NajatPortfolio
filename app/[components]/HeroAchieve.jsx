import React from 'react'
import Flex from './Flex'
import Link from 'next/link'

const HeroAchieve = () => {
  return (
    <div>
           <section className="rounded-2xl mt-2.5 shadow-2xl w-full py-15 px-12">
        <h1 className='text-[41px] font-semibold text-center'>My Achievements</h1>
        <p className='text-lg py-5 text-center text-neutral-500'>Achievements + Role Impact, Certifications, Letters, Badges and Some Cool Stuff that I have done & Got!</p>
        <Flex className={"justify-center gap-x-5"}>
            <div className="mt-8 py-4 px-5 border border-gray-300 hover:scale-105 hover:shadow-2xl transition duration-500 rounded-2xl">
                 <h3 className='text-center text-blue-500 font-mono text-lg pb-1.5'>🔹Computer based</h3>
                 <p className='w-100 py-3 text-[15px] text-gray-500 font-mono'>🏆 Successfully Completed Certifcation from Creative It for ✨ Frontend Development with react</p>
                 <p className='w-100 text-[15px] text-gray-500 font-mono'>🏆 Successfully Completed Certifcation from 10 minute school for ✨ Freelancing</p>
                 <p className='w-100 pt-3 text-[15px] text-gray-500 font-mono'>🏆 Working as a Frontend Developer at SARULF Group Tech Company ✨ developing and maintaining modern web interfaces.</p>
            </div>
             <div className="mt-8 py-4 px-5 border border-gray-300 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-500">
                 <h3 className='text-center text-blue-500 font-mono text-lg pb-1.5'>🔹Academic Based</h3>
                 <p className='w-100 py-3 text-[15px] text-gray-500 font-mono'>🏆Achieved Golden A+ in Secondary School Certificate ✨ (SSC) examination and was awarded a crest, certificate, and prize money in recognition of outstanding academic performance.</p>
                 <p className='w-100 text-[15px] text-gray-500 font-mono'>🏆 Successfully completed an English Language Course from the British Council and 10 Minute School ✨ earning official certificates for proficiency and skill development in English communication.</p>
                 </div>
        </Flex>
        <Flex className={"justify-center gap-x-5"}>
           <div className="my-5 py-4 px-5 border border-gray-300 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-500">
                 <h3 className='text-center text-blue-500 font-mono text-lg pb-1.5'>🔹Leadership & Skill Based</h3>
                 <p className='w-100 py-3 text-[15px] text-gray-500 font-mono'>🏆 Executive Officer- Workshop & Bootcamp Department and Volunteer Department - YouthVerse Union ✨ Selected among top candidates</p>
                 <p className='w-100 text-[15px] text-gray-500 font-mono'>🏆 Content Moderator - Lobdhi Physics (ACS) ✨ Selected among top candidates</p>
                 <p className='w-100 pt-3 text-[15px] text-gray-500 font-mono'>🏆 Campus Ambassador – HP Life ✨promoting digital skills and online learning initiatives.</p>
            </div>
             <div className="my-5 py-4 px-5 border border-gray-300 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-500">
                 <h3 className='text-center text-blue-500 font-mono text-lg pb-1.5'>🔹Extra-Curricular based</h3>
                 <p className='w-100 py-3 text-[15px] text-gray-500 font-mono'>🏆 Debating Club member - BBGGC ✨ improving communication & critical thinking</p>
                 <p className='w-100 text-[15px] text-gray-500 font-mono'>🏆 Volunteer - Cambridge School ✨ Selected among top candidates</p>
                 <p className='w-100 py-3 text-[15px] text-gray-500 font-mono'>🏆 Convener – Dreams on the Way ✨ Selected among top candidates</p>
                 <p className='w-100 text-[15px] text-gray-500 font-mono'>🏆 Campus Ambassador – Let's Know The World ✨assisted in events & community activities.</p>
</div>
        </Flex>
        <div className="flex justify-center pt-2.5">
        <Link href={"https://acrobat.adobe.com/id/urn:aaid:sc:ap:5d31bd44-8f66-4295-af3b-13b89c4c5c56"}target='_blank'> <button className="text-center px-6 py-3 bg-blue-400 text-white rounded-xl hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500  transition">
                    View My All Achievements
                  </button></Link>
        </div>
        </section>
    </div>
  )
}

export default HeroAchieve
