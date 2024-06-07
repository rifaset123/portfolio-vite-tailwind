import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Tech() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32" id="tech">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="700"
          >
            Tech Stack
          </h2>
          <p
            className="mt-2 text-lg leading-8 text-gray-600"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="600"
            data-aos-offset="200"
          >
            Here are some of the programming languages andd tech-related stuff that I've profficient with
          </p>
          <div className="mt-8 ">
            <div className="flex item-center justify-center flex-wrap aos-init aos-animate mx-auto">
              <div
                className="mx-auto mt-16 grid sm:grid-cols-6 grid-cols-2 md:grid-cols-9  gap-x-4 lg:mx-0  lg:grid-cols-10"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-offset="100"
              >
                {/* atas */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/640px-Android_Studio_icon_%282023%29.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-gray-400 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ubuntu-logo-no-wordmark-solid-o-2022.svg/640px-Ubuntu-logo-no-wordmark-solid-o-2022.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-orange-400 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-violet-500 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-violet-950 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-blue-300 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Java-logo.png/640px-Java-logo.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-rose-400 bg-white "
                  alt=""
                />
              </div>
              <div
                className="mx-auto mt-2 grid sm:grid-cols-6 grid-cols-2 md:grid-cols-9 gap-x-4 lg:mx-0  lg:grid-cols-10"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-offset="100"
              >
                {/* tengah */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-yellow-400 bg-white md:col-start-2 lg:col-start-3"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/640px-Kotlin_Icon.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-orange-400 bg-white "
                  alt=""
                />
                <img
                  src="/src/public/laravel.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-red-500 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MySQL_Dolphin.jpg/640px-MySQL_Dolphin.jpg"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-blue-700 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/PHP_Logo%2C_text_only.svg/640px-PHP_Logo%2C_text_only.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-gray-600 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-yellow-300 bg-white "
                  alt=""
                />
              </div>
              <div
                className="mx-auto mt-2 grid sm:grid-cols-6 grid-cols-2 md:grid-cols-9 gap-x-4 lg:mx-0  lg:grid-cols-10"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-offset="100"
              >
                {/* bawah */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-blue-300 bg-white md:col-start-3 lg:col-start-5"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
                  className="h-24 object-fill rounded-full p-3 m-3 shadow-lg shadow-blue-400 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
                  className="h-24 object-fill rounded-full p-3 m-3 shadow-lg shadow-green-400 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/640px-Docker-svgrepo-com.svg.png"
                  className="h-24 object-fill rounded-full p-3 m-3 shadow-lg shadow-blue-300 bg-white "
                  alt=""
                />
                <img
                  src="/src/public/firebase.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-yellow-400 bg-white "
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png"
                  className="h-24 object-contain rounded-full p-3 m-3 shadow-lg shadow-blue-800 bg-white "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Tech;
