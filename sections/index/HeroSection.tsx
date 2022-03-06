import React, { useState } from 'react';
import Image from 'next/image';
import { Portfolio } from '../../model/portfolio';
import axios from 'axios';
import { CONFIG } from '../../config';

interface HeroSectionProps {
  portfolio: Portfolio[];
  skills: any[];
}

export const HeroSection: React.VFC<HeroSectionProps> = ({ portfolio, skills }) => {
  const [opened, setOpened] = useState<boolean>()

  function closeMenu() {
    setOpened(false)
  }

  function generatePDFHandler() {
    console.log(window.location)
    axios.post('/api/convert-to-pdf', {
      portfolio,
      skills
    }, {
      responseType: 'blob',
    })
      .then((response) => downloadFile(response.data, 'fabiobiondi-cv'))
  }

  function downloadFile(data: Blob, filename: string) {
    const href = window.URL.createObjectURL(data);
    (Object.assign(document.createElement("a"), { href, download: filename }) as HTMLAnchorElement).click()
    URL.revokeObjectURL(href);
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Fabio Biondi</span>
                      <Image width={54.66} height={50}  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo"/>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        onClick={() => setOpened(true)}
                        type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* Heroicon name: outline/menu */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#skills" className="font-medium text-gray-500 hover:text-gray-900">Skills</a>
                  <a href="#portfolio" className="font-medium text-gray-500 hover:text-gray-900">Portfolio</a>
                  <a href="#clients" className="font-medium text-gray-500 hover:text-gray-900">Clients</a>
                </div>
              </nav>
            </div>
            {/*
                Mobile menu, show/hide based on menu open state.

                Entering: "duration-150 ease-out"
                  From: "opacity-0 scale-95"
                  To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                  From: "opacity-100 scale-100"
                  To: "opacity-0 scale-95"
              */}
            {
              opened && <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image width={35} height={32} className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                         alt=""/>
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={closeMenu}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>
                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>
                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>
                  <a href="#"
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <a href="#"
                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Log in
                </a>
              </div>
            </div>}


          </div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <div className="block xl:inline">
                  {CONFIG.yourname}
                </div>
                <div className="block text-indigo-600">
                  {CONFIG.headline}
                </div>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {CONFIG.bio}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button onClick={generatePDFHandler} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Download CV
                  </button>
                </div>
                {/*<div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>*/}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          objectFit={'cover'}
          layout="fill"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/hero/fabiobiondi-mountain.jpg" width={1000 / 2} height={750 / 2}
          alt="Fabio Biondi Photo"
        />

        {/*<img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/hero/hero.jpg" alt="" />*/}
      </div>
    </div>

  )
};
