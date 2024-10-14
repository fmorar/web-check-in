import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function LandingHeader() {
  return (
    <div className="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2">
      <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
        <div className="mb-4 flex items-center justify-center lg:justify-start">
          <Image 
            src="/img/logos/logo-1.png" 
            alt="logo" 
            width={60} 
            height={20} 
            style={{ width: 'auto', height: 'auto' }} 
          />
          <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
            TRENDIEST TAILWIND TEMPLATES
          </h4>
        </div>
        <h1 className="mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
          Take your website to the next level with AIRCHK UI
        </h1>
        <p className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
          Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
        </p>
        <Button className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-white">
          <Image 
            className="mr-2 h-6" 
            src="/img/icons/phone.png" 
            alt="phone icon" 
            width={24} 
            height={24} 
            style={{ width: 'auto', height: 'auto' }}
          />
          Get started now
        </Button>
      </div>
      <div className="col-span-1 hidden items-center justify-end lg:flex">
        <Image 
          className="w-4/5 rounded-2xl" 
          src="/img/header-1.png" 
          alt="header image" 
          width={400} 
          height={300} 
          priority 
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
}
