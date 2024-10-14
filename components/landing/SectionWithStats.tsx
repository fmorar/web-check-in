// components/landing/SectionWithStats.tsx

export default function SectionWithStats() {
    return (
      <section className="grid w-full grid-cols-1 gap-32 lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold leading-7 text-gray-900 md:text-3xl">
              Boost your workflow with AIRCHK
            </h2>
            <p className="text-base font-medium leading-7 text-gray-600">
              Urna duis convallis convallis tellus interdum velit laoreet pellentesque aliquam tortor consequat porta.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {/* Add your statistics items */}
          </div>
        </div>
        <div className="hidden rounded-2xl bg-[url('/img/cta-3-bg.png')] bg-cover bg-center lg:block"></div>
      </section>
    );
  }
  