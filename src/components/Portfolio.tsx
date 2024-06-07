import React, { useEffect } from "react";
import { portfolio } from "../data/portfolio";
import { FaFigma, FaGithub, FaItchIo } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32" id="porto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center aos-init aos-animate">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
            data-aos-offset="200"
          >
            Portfolio
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {portfolio.map((portfolio) => (
            <article
              key={portfolio.id}
              className="flex flex-col items-start justify-between "
            >
              <div
                className="group relative w-full h-60 lg:h-80 rounded-3xl overflow-hidden"
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="500"
              >
                <img
                  src={portfolio.bgImage}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                  <div className="p-4 text-white">
                    <p className="text-xl font-bold mb-2">{portfolio.title}</p>
                    <p>{portfolio.desc}</p>
                    <div className="space-x-4 mt-4">
                      {portfolio.link && (
                        <a
                          href={portfolio.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center">
                            <FaGithub className="fill-current w-5 h-5 mr-2" />
                            <span>Github</span>
                          </button>
                        </a>
                      )}
                      {portfolio.link2 && (
                        <a
                          href={portfolio.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <FaItchIo className="fill-current w-5 h-5 mr-2" />
                            <span>Itch.io</span>
                          </button>
                        </a>
                      )}
                      {portfolio.link3 && (
                        <a
                          href={portfolio.link3}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-[#333333] hover:bg-[#535151] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <FaFigma className="fill-current w-5 h-5 mr-2" />
                            <span>Figma</span>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p
            className="mt-2 text-lg leading-8 text-gray-600 text-center pt-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
            data-aos-offset="200"
          >
            There's more on <span className="font-bold">Github</span> or other <span className="font-bold">social media</span> platforms, check that out too!
          </p>
      </div>
    </div>
  );
};

export default Portfolio;
