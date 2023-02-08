
export default function About() {
  return (
    <div id="about" className="bg-transparent relative my-20 xl:mt-0 py-10 xl:pt-0">
      <div className="mx-auto w-11/12 lg:w-10/12 lg:px-8">
        <div className="py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
          <div className="lg:w-0 lg:flex-1 text-center items-center">
            {/* <h2 className="text-lg font-semibold text-gray-900 uppercase">About Us</h2>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-600 sm:text-4xl">
              Your Personal CFO
            </p> */}
            <p className="mt-4 text-4xl font-light text-gray-700 leading-normal">
              With over $4 billion in assets under management, we act as collaborative thought partners that build resilient portfolios, manage our clients' lives and legacies, and provide deep diligence on tax and estate strategy. 
              In doing so, we believe families can create leverage to benefit the people and causes they care about most.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0a465d" />
              <stop offset={1} stopColor="#0a5b5d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
