
export default function About() {
  return (
    <div id="about" className="bg-transparent relative my-20">
      <div className="mx-auto max-w-md px-6 sm:max-w-6xl lg:max-w-7xl lg:px-8">
        <div className="rounded-3xl bg-gradient-to-l drop-shadow-2xl from-sky-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
          <div className="lg:w-0 lg:flex-1 text-center">
            <h2 className="text-lg font-semibold text-gray-900 uppercase">About Us</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-4xl">
              Your Personal CFO
            </p>
            <p className="mt-4 text-xl text-gray-100 leading-relaxed">
              With over $4 billion in assets under management, we act as collaborative thought partners that build resilient portfolios, manage our clients' lives and legacies, and provide deep diligence on tax and estate strategy. 
              In doing so, we believe families can create leverage to benefit the people and causes they care about most.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
