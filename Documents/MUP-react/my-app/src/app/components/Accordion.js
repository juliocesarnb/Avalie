'use client'
import React from "react";



const Accordion = () => {
  

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % accordionData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const accordionData = [
    {
      title: "Tenha um olhar completo sobre seus estudantes",
      description: "Sobre a satisfação dos pais com a escola e sobre as práticas de seus docentes.",
      imageUrl: "./assets/images/image-1.jpg",
    },
    {
      title: "Abandone práticas que não funcionam",
      description: "Identifique problemas para além das notas escolares.",
      imageUrl: "./assets/images/image-2.jpg",
    },
    {
      title: "Comunique além do boletim",
      description: "Identifique problemas para além das notas escolares.",
      imageUrl: "./assets/images/image-3.jpg",
    },
    {
      title: "Use dados de forma humanizada",
      description: "Vá além do que as outras escolas fazem!",
      imageUrl: "./assets/images/image-4.jpg",
    },
  ];

  return (
    <section
      id="secao2"
      className="min-h-screen bg-purple-1 rounded-xl m-3"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-12 lg:w-[36rem] min-h-screen z-10 bg-white lg:col-span-5 lg:col-start-1 pt-28 lg:rounded-r-3xl">
          <div className="divide-y w-[98%] divide-slate-700/20">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`relative py-4 rounded-lg ${
                  activeIndex === index ? "bg-purple-100" : "hover:bg-purple-100"
                }`}
              >
                <h3
                  className={`flex p-3 justify-start pl-9 ${
                    activeIndex === index ? "text-purple-300" : "hover:bg-purple-100"
                  } text-black-5 rounded-xl leading-130 text-20px lg:text-22px tracking-tighter`}
                >
                  <button
                    className={`w-full flex text-black hover:text-purple-300`}
                    type="button"
                    aria-expanded={activeIndex === index ? "true" : "false"}
                    aria-controls={`accordion1sect${index}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span>{item.title}</span>
                    {activeIndex === index && (
                      <div className="absolute text-purple-400 left-[90%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6 transition-opacity`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </h3>
                <div
                  id={`accordion1sect${index}`}
                  role="region"
                  className={`transition-all duration-100 ease-in-out ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  aria-labelledby={`accordion1btn${index}`}
                  style={{
                    height: activeIndex === index ? "auto" : "0px",
                    overflow: "hidden",
                  }}
                >
                  <div className="pl-9 text-black-5">{item.description}</div>
                  <div className="pt-2 lg:hidden">
                    <img
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:col-span-7 lg:col-start-6 lg:block">
          <div className="h-full">
            <div className="relative pt-20 pl-16 w-[95%]">
              <div className="rounded-3xl aspect-[3/2] overflow-hidden h-full">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={activeIndex === index ? "" : "hidden"}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="object-cover rounded-4xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
