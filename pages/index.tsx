import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import cn from 'classnames';

interface FormData {
  yourname: string;
  email: string;
  message: string;
}

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const initialState: FormData = { yourname: '', email: '', message: '' };

function Home() {
  // ==============================
  // hero
  const [opened, setOpened] = useState<boolean>()

  function closeMenu() {
    setOpened(false)
  }

  function generatePDFHandler() {

  }

  function downloadFile(data: Blob, filename: string) {

  }
  // ==============================
  // contact section
  const [formData, setFormData] = useState<FormData>(initialState);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setSuccess(!!localStorage.getItem('sent'));
  }, [])


  async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function changeInputHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value}
    )
  }

  const isYourNameValid = formData.yourname.length >= 2;
  const isEmailValid = formData.email.match(EMAIL_REGEX);
  const isMessageValid = formData.message.length > 10;
  const isFormValid = isYourNameValid && isEmailValid && isMessageValid;

  return (
    <>
      {/* hero section */}
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
                        <img width={54.66} height={50}  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo"/>
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
                        <img width={35} height={32} className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/hero/fabiobiondi-mountain.jpg" width={1000 / 2} height={750 / 2}
            alt="Fabio Biondi Photo"
          />
        </div>
      </div>

      {/* skills section */}
      <div className="bg-gray-50 overflow-hidden" id="skills">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>
          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                My Skills
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <img width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1920px-Cumulus_Clouds_over_Yellow_Prairie2.jpg" alt="landscape" />
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Title</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta, illum iste officia recusandae voluptate. Alias at dolore et eveniet, fuga id illum, ipsum, laudantium nulla quaerat reprehenderit sequi veritatis?
                </dd>
              </div>
              <div>
                <dt>
                  <img width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1920px-Cumulus_Clouds_over_Yellow_Prairie2.jpg" alt="landscape" />
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Title</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta, illum iste officia recusandae voluptate. Alias at dolore et eveniet, fuga id illum, ipsum, laudantium nulla quaerat reprehenderit sequi veritatis?
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/*portfolio section*/}
      <div className="relative max-w-7xl mx-auto px-4 xl:px-0 py-16">
        <div className="grid sm:grid-cols-3 gap-x-4 gap-y-16 grid">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1920px-Cumulus_Clouds_over_Yellow_Prairie2.jpg"
                   width={1920/4} height={1080/4} alt="landscape"/>

            <h2 className="text-3xl mb-2">Title</h2>

            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus, dolore enim esse fugiat hic impedit iusto minima neque nisi, perspiciatis ratione reiciendis repellendus, veritatis. Eos, illum, necessitatibus? Impedit.
            </div>

            <div className="flex gap-2">
              <div className="bg-slate-800 px-2 py-1 rounded-xl text-xs text-white">
               TECH
              </div>
            </div>

            <div className="mt-6">
              <a className="text-pink-800 hover:text-pink-800"
                 href="http://www.google.com" target="_blank" rel="noreferrer">
                Visit WebSite {'>>'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* client section */}
      <div className="bg-indigo-200 bg-opacity-25" id="clients">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">
              The world most innovative companies use Workflow
            </h2>
            <div className="flow-root self-center mt-8 lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img width={100} height={50} src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg" alt="Workcation" />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img width={100} height={50} src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img width={100} height={50} src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg className="absolute left-full transform translate-x-1/2" width={404} height={404} fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width={404} height={404} fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              { success ? <div className="text-green-700">Email Inviata</div> : 'Contattami'}
              <div className="text-red-700">{ error && 'Errore invio email' }</div>
            </div>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={sendEmail}>
              {/*Sender Email*/}
              <div className="sm:col-span-2">
                <label htmlFor="yourname" className="block text-sm font-medium text-gray-700">Your Name</label>
                <div className="mt-1">
                  <input
                    value={formData.yourname}
                    onChange={changeInputHandler}
                    type="text"
                    id="yourname"
                    name="yourname"
                    readOnly={success}
                    className={cn(
                      { '!border-red-500 focus:!border-red-500 focus:!ring-red-500': !isYourNameValid},
                      'py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md read-only:opacity-50'
                    )}
                  />
                </div>
              </div>
              {/*Email address*/}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input
                    value={formData.email}
                    onChange={changeInputHandler}
                    id="email"
                    name="email"
                    type="email"
                    readOnly={success}
                    autoComplete="email"
                    className={cn(
                      { '!border-red-500 focus:!border-red-500 focus:!ring-red-500': !isEmailValid},
                      'py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md read-only:opacity-50'
                    )}
                  />
                </div>
              </div>

              {/*Message*/}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                <textarea
                  value={formData.message}
                  onChange={changeInputHandler}
                  id="message"
                  name="message" rows={4}
                  readOnly={success}
                  className={cn(
                    { '!border-red-500 focus:!border-red-500 focus:!ring-red-500': !isMessageValid},
                    'py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md read-only:opacity-50'
                  )}
                />
                </div>
              </div>

              {/*Privacy Policy*/}
              <div className="sm:col-span-2 hidden">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
                    <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                      <span className="sr-only">Agree to policies</span>
                      {/* Enabled: "translate-x-5", Not Enabled: "translate-x-0" */}
                      <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      By selecting this, you agree to the
                      <a href="#" className="font-medium text-gray-700 underline">Privacy Policy</a>
                      and
                      <a href="#" className="font-medium text-gray-700 underline">Cookie Policy</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  disabled={!isFormValid || success}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*footer section*/}
      <footer className="bg-black" >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-white hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white">
              © 2022 Fabio Biondi, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home
