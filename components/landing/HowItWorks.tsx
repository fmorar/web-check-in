// components/landing/HowItWorks.tsx

import { IoIosArrowForward } from "react-icons/io";

export default function HowItWorks() {
  return (
    <div className="container mx-auto my-32 flex flex-col items-center gap-16">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">How AIRCHK works?</h2>
      <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {/* Step 1 */}
        <Step number={1} title="Create your Account" description="Condimentum vit pellemsque habitant morbi at molestie." />
        <IoIosArrowForward className="rotate-90 lg:rotate-0" />
        {/* Step 2 */}
        <Step number={2} title="Setup your Account" description="Condimentum vit pellemsque habitant morbi at molestie." />
        <IoIosArrowForward className="rotate-90 lg:rotate-0" />
        {/* Step 3 */}
        <Step number={3} title="Start creating with AIRCHK" description="Condimentum vit pellemsque habitant morbi at molestie." />
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500">
        <span className="text-base font-bold leading-7 text-white">{number}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">{title}</h3>
        <p className="text-base font-medium leading-7 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
