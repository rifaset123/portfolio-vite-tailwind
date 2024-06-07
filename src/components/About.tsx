import { useEffect } from "react";
import { about } from "../data/about";
import Aos from "aos";


export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 aos-init aos-animate">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="700"
            data-aos-offset="100"
          >
            About me
          </h2>
          <p
            className="mt-2 text-lg leading-8 text-gray-600"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="700"
            data-aos-offset="200"
          >
            I'm not only a software engineer, but also an editor, designer, and
            a gamer. I love to learn new things and share my knowledge with
            others. I'm passionate about technology and how it can be used to
            make the world a better place.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {about.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div
                className="group relative w-full"
                data-aos="zoom-out-down"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="transition-transform duration-200 ease-in-out group-hover:scale-110  aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] shadow-lg shadow-[#e4c9a9]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3
                    className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center"
                    data-aos="fade-top"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    data-aos-offset="200"
                  >
                    <p>
                      <span className="inset-0" />
                      {post.title}
                    </p>
                  </h3>
                  <p
                    className="mt-5 line-clamp-4 text-md leading-6 text-gray-600"
                    data-aos="fade-top"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    data-aos-offset="200"
                  >
                    {post.description}
                  </p>
                </div>
                <div
                  className="relative mt-8 flex items-center justify-center gap-x-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="200"
                >
                  {post.images.imageUrl.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      className="h-10 bg-gray-100"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
