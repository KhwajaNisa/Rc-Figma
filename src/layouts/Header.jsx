import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/Logo (12).png'
import { Link } from 'react-router-dom'
import { ChartNoAxesGantt } from 'lucide-react';
import { Search } from 'lucide-react';


const Header = () => {
  return (
    <>
      <div className={"py-10 border-b border-[#979797]"}>
        <Container>
          <Flex>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgSrc={logo} imgAlt={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className={'flex items-center gap-x-10 font-dm text-[14px] text-[#767676]'}>
                <li>
                  <Link to={"/"} className={"hover:text-[#262626] hover:font-bold"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shop"} className={"hover:text-[#262626] hover:font-bold"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/about"} className={"hover:text-[#262626] hover:font-bold"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"} className={"hover:text-[#262626] hover:font-bold"}>Contact</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-4">
        <Container>
          <Flex>
            <div className="flex items-center gap-x-3 w-1/4">
              <ChartNoAxesGantt />Shop by Category
            </div>
            <div className="w-1/2 relative">
              <input type="text" className="p-5 bg-white w-full " placeholder="Search Product" />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
            <div className="w-1/4"></div>
          </Flex>
        </Container>
      </div>
    </>

  )
}

export default Header 