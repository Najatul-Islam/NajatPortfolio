import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroResume = () => {
  return (
    <div className="relative my-5 mx-auto">
      <Image
        className="w-full h-auto rounded-2xl shadow-2xl"
        src="/resumepart.jpg"
        alt="my resume"
        width={2000}
        height={1000}
        priority
      />
      <Link
        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:9a176591-963f-424c-821f-6a27a137688d"
        target="_blank"
      >
        <button className="absolute top-1/2 left-1/2 transform  -translate-y-1/2 px-6 py-3 bg-blue-400 text-white rounded-xl hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500 transition text-sm sm:text-base md:text-lg">
          Download My Resume
        </button>
      </Link>
    </div>
  )
}

export default HeroResume
