import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { send } from './services/emailjs.service';

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


interface FormData {
  yourname: string;
  email: string;
  message: string;
}

const initialState: FormData = { yourname: 'ewfwef', email: 'wefwe@ewfew.efe', message: 'wefwefewfewfwefwefwe' };

export const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setSuccess(!!localStorage.getItem('sent'));
  }, [])


  async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false)
    const { email, message, yourname} = formData;
    send( email, message, yourname )
      .then(() => {
        setSuccess(true);
        localStorage.setItem('sent', 'true')
      })
      .catch(err => setError(true))

    /*
    const data = {
      service_id: 'service_h3aq19u',
      template_id: 'template_i583f5c',
      user_id: 'user_cIFUFcsaVXxVhJEAhG2nv',
      template_params: {
        from_name: formData.yourname,
        email: formData.email,
        message: formData.message,
      }
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      if (await res.text() === 'OK') {
        setSuccess(true);
        localStorage.setItem('sent', 'true')
      } else {
        setError(true)
      }
    } catch(e) {
      setError(true)
    }*/

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

  )
};
