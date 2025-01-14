"use client"

import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
import Image from "next/image";
import avatar from "../../public/3d.png"
import code from "../../public/code.png"
import design from "../../public/design.png"
import consulting from "../../public/consulting.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] =useState(false);
  return (
    <div className={darkMode? "dark" : ""}>
      <main className=" bg-white px-10 md:px-20 lg:pd-40 dark:bg-gray-900">
        <section className="  min-h-screen">
            <nav className=" py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="text-xl font-Poppins">sujalRawat</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-2xl cursor-pointer"/></li>
                <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md ml-8" href="#">Resume</a></li>
              </ul>
            </nav>

            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Sujal Rawat</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">FullStack Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">I am a FullStack Developer. Ready to build websites that will blow your mind!</p>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover"/>
            </div>

        </section>

        <section>
            <div>
              <h3 className=" dark:text-white text-3xl py-1">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a fullstack developer, I've done work for
                <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">Google</span> and collaborated with talented people to create websites for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> I offer from a wide range of services, including programming and teaching.</p>
            </div>

            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white">
                  <Image src={design} width={100} height={100} className="mx-auto"/>
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Beautiful Designs</h3>
                  <p className="font-medium dark:text-white">Craeting elegant designs suited for your needs and design theory.</p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
                  <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
                  <p className="text-gray-800 py-1 dark:text-white">Figma</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white">
                  <Image src={code} width={100} height={100} className="mx-auto"/>
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Beautiful Designs</h3>
                  <p className="font-medium dark:text-white">Craeting elegant designs suited for your needs and design theory.</p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
                  <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
                  <p className="text-gray-800 py-1 dark:text-white">Figma</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white">
                  <Image src={consulting} width={100} height={100} className="mx-auto"/>
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Beautiful Designs</h3>
                  <p className="font-medium dark:text-white">Craeting elegant designs suited for your needs and design theory.</p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
                  <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
                  <p className="text-gray-800 py-1 dark:text-white">Figma</p>
                </div>
            </div>
        </section>

        <section>
          <div >
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a fullstack developer, I've done work for
                <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">Google</span> and collaborated with talented people to create websites for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> I offer from a wide range of services, including programming and teaching.</p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image src={web1} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={web2} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={web3} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={web4} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={web5} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image src={web6} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
