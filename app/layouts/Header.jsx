import React, { useState } from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../[components]/ThemeToggle'
import { HiMenuAlt3, HiX } from 'react-icons/hi' 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link helper to keep code clean
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:9a176591-963f-424c-821f-6a27a137688d', target: '_blank' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative z-50">
      <Container>
        <div className="shadow-2xl rounded-2xl transition-all">
          <Flex className="justify-between items-center px-4 lg:px-0">
            
            {/* Logo Section */}
            <div className="lg:mr-20">
              <Link href="/">
                <Image 
                  className="w-[120px] lg:w-[150px] h-auto py-2"
                  src="/logoO.png"
                  alt="logo of the portfolio"
                  width={150}
                  height={100}
                />
              </Link>
            </div>     

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden lg:block mx-15">
              <ul className='flex justify-center gap-x-7'>
                {links.map((link) => (
                  <li key={link.name} className='font-medium hover:text-blue-300 hover:font-semibold hover:border-b-2 hover:border-b-blue-500 duration-100'>
                    <Link href={link.href} target={link.target || '_self'}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>     

            {/* Right Side Tools */}
            <div className="flex items-center gap-4 mx-2 p-2 lg:mx-6 lg:px-4 lg:py-2 lg:pb-0">
              <ThemeToggle className="size-3" />
              
              {/* Mobile Menu Button (Only shows on small screens) */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-3xl text-blue-200"
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div> 
          </Flex>

          {/* Mobile Dropdown Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
             <ul className='flex flex-col items-center gap-y-4 border-t border-gray-300  pt-4'>
                {links.map((link) => (
                  <li key={link.name} className='font-medium hover:bg-blue-300 duration-500 hover:font-semibold  w-full text-center'>
                    <Link 
                      onClick={() => setIsOpen(false)} 
                      href={link.href} 
                      target={link.target || '_self'}
                      className="block w-full py-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </Container>    
    </div>
  )
}

export default Header