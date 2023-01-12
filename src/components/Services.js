import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Investment Management',
    description: 'We strive to deliver exceptional results by allocating capital to leading institutional minds across portfolios. In doing so, we can participate in uncorrelated growth across public and private markets.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Impact',
    description: 'We believe in leverging our expertise to make an impact at scale. This means providing families with best-in-class resources to benefit the communities, people, and causes that are most important to them.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tax Strategy',
    description: 'We view the world through a tax-focused lens and integrate its planning deeply into each of our decisions. This includes forward-looking projections, return analysis, and working in lockstep with existing counsel.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Enhanced Diligence',
    description: 'Whether we\'re focusing on equity compensation, QSBS, charitable giving, generational wealth transfer, or managing cash flow, we provide a thorough, data-informed decision for any finance-related questions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Institutional Access',
    description: 'We believe you need to think outside of stocks and bonds for diversified growth and asset protection. We utilize assets like institutional real estate, private debt, and venture capital to enhance risk-adjusted returns.',
    icon: CogIcon,
  },
  {
    name: 'Knowledge Network',
    description: 'With deep roots in the technological ecosystems of the world, we believe we can leverage our network to promote best-in-class thinking and disseminate unique ideas to our partners.',
    icon: ServerIcon,
  },
]

export default function Services() {
  return (
    <div id='services' className="relative bg-transparent py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative animate-wiggle left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1d3a72" />
              <stop offset={1} stopColor="#1d6572" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold uppercase text-sky-800">What We Do</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Differentiated Thinking, Differentiated Outcomes.
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 hover:-translate-y-3 hover:drop-shadow-2xl ease-in-out duration-300">
                <div className="flow-root rounded-lg bg-gray-50 hover:bg-gray-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-sky-700 p-3 shadow-lg">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative animate-wiggle left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
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
