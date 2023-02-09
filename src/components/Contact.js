import { useState, Fragment } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import blueLogo from '../assets/blueLogo.svg'

const navigation = [
  { name: 'About Us', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'Team', href: '#' },
  { name: 'Insights', href: '#' },
]

const solutions = [
  { 
    name: 'Portfolio Reporting', 
    description: 'View your portfolio reports', 
    href: 'https://bordeaux.portal.tamaracinc.com/' },
  {
    name: 'Client Vault',
    description: 'Secure document storage',
    href: 'https://wealth.emaplan.com/ema/SignIn?ema%2fria%2fbordeauxwa',
  },
  { 
    name: 'Schwab', 
    description: 'Log into your Schwab account', 
    href: 'https://www.schwab.com/public/schwab/nn/login/login.html&lang=en' 
  },
  { 
    name: 'Fidelity', 
    description: 'Log into your Fidelity account', 
    href: 'https://www.fidelity.com/' 
  },
  { 
    name: 'Pershing', 
    description: 'Log into your Pershing account', 
    href: 'https://investor.pershing.com/nxi/login' 
  },
]

// NAVBAR Requirement 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* NAVBAR */}
      <div className="px-6 pt-6 lg:px-8 z-10">
        <div>
          <nav className="flex h-9 align-middle items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Bordeaux Wealth Advisors</span>
                <img className="h-12" src={blueLogo} alt="Bordeaux Wealth Advisors" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-sky-700 ease-in duration-300">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Log In</span>
                      <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative text-left grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 hover:scale-105 hover:drop-shadow-xl"
                              >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 ease-in duration-300 hover:scale-105 hover:drop-shadow-2xl"
              >
                Get In Touch
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Bordeaux Wealth Advisors</span>
                    <img
                      className="h-8"
                      src={blueLogo}
                      alt="Bordeaux Wealth Advisors"
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      {/* --- NAVBAR END --- */}
      <main>
        {/* Header */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-md px-6 sm:max-w-lg lg:max-w-7xl lg:px-8">
            <h1 className="text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac
              consectetur mattis turpis tristique.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0 text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form opposite, or email us.
                </p>
                <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                        How can we help you?
                      </label>
                      <span id="how-can-we-help-description" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-sky-600">
          <div className="mx-auto max-w-md py-16 px-6 text-center sm:max-w-2xl sm:py-24 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="block text-white">Looking for a new career?</span>
              <span className="block text-sky-900">We’re hiring.</span>
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium text-sky-600 shadow-md hover:bg-sky-50 sm:w-auto"
            >
              <span>See open positions</span>
              <ArrowTopRightOnSquareIcon className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.136069994891!2d-122.19234218494768!3d37.45750907981842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4a71ffa89b1%3A0xfcab92880be635da!2sBordeaux%20Wealth%20Advisors!5e0!3m2!1sen!2sus!4v1675982972323!5m2!1sen!2sus" 
            className='h-80 w-full border-none'
            allowFullScreen="yes" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.505804959508!2d-122.20818568458522!3d47.65516957918793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490132ceb25e993%3A0x789a5c5fec581331!2s5110%20Carillon%20Point%2C%20Kirkland%2C%20WA%2098033!5e0!3m2!1sen!2sus!4v1675983920522!5m2!1sen!2sus" 
            className='h-80 w-full border-none'
            allowFullScreen="yes" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </main>
    </div>
  )
}
