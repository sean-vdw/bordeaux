export default function Cta() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 text-left">
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-sky-700">Start your free trial today.</span>
        </h5>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 ease-in duration-300 hover:scale-105 hover:drop-shadow-2xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
