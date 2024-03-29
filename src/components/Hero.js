import { useState, useEffect, Fragment } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import blueLogo from '../assets/blueLogo.svg'
import TextTransition, { presets } from 'react-text-transition'
import bgVideo from '../assets/bgVideo.mp4'

const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
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

const clients = ['venture capitalists', 'executives', 'private equity partners', 'entrepreneurs'];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => 
      setIndex(index => index + 1), 3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="isolate bg-white" id='hero'>
      <div className='m-0 p-0 w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-white -z-20'></div>
        <video autoPlay loop muted className='absolute -z-30 object-fill h-full w-full'>
          <source src={bgVideo} type='video/mp4'/>
        </video>
      </div>

      {/* NAVBAR */}
      <div className="px-6 pt-6 lg:px-8 z-10">
        <div>
          <nav className="flex h-9 align-middle items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
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
                href="/contact"
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
      <main>
        <div className="relative px-6 lg:px-8 h-screen z-20">
          <div className="flex justify-start items-end max-w-full pt-20 mt-72 pb-20 sm:pt-48 sm:pb-40 xl:mt-56 2xl:pt-[34rem] 2xl:pb-0">
            <div>
              <div>
                <h1 className="text-4xl mb-4 font-light tracking-tight text-left sm:text-5xl xl:mb-6 xl:text-6xl 2xl:text-8xl 2xl:mb-16">
                  Premier family office services for <TextTransition springConfig={presets.default}><span className='font-semibold text-sky-700'>{clients[index % clients.length]}</span>.</TextTransition>
                </h1>
                <div className="mt-6 xl:mt-2 flex gap-x-4 sm:justify-start">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-slate-600 px-4 py-1.5 sm:text-base text-sm font-semibold leading-7 text-white shadow-sm ring-1 ring-slate-600 hover:bg-sky-700 hover:ring-sky-700 ease-in duration-300 hover:scale-105 hover:drop-shadow-2xl"
                  >
                    Learn More{' '}
                    <span className="text-slate-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}