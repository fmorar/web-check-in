// components/landing/Testimonials.tsx

export default function Testimonials() {
    const testimonials = [
      {
        quote:
          "“A must needed kit for every single software architect. It makes your coding life easier and your final product will be blooming.”",
        name: "Wilson Torff",
        role: "CEO & Founder",
        avatar: "/img/avatars/avatar-3.jpeg",
      },
      {
        quote:
          "“A must needed kit for every single software architect. It makes your coding life easier and your final product will be blooming.”",
        name: "Wilson Torff",
        role: "CEO & Founder",
        avatar: "/img/avatars/avatar-3.jpeg",
      },
    ];
  
    return (
      <section className="container mx-auto my-32 flex flex-col gap-20">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Customer Testimonials
          </h2>
          <p className="text-base font-medium leading-7 text-gray-600 md:w-7/12">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
  
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-9 rounded-2xl bg-gray-200 p-8"
            >
              <p className="text-center text-xl font-bold leading-normal text-gray-900">
                {testimonial.quote}
              </p>
              <div className="flex flex-col items-center gap-4">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt="avatar"
                />
                <div className="flex flex-col items-center">
                  <p className="text-center text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-center text-xs font-semibold leading-normal text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  