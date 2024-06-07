import IconButton from "./IconButton";
import { FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import Aos from "aos";
import { TypeAnimation } from "react-type-animation";
import { SiGoogledocs } from "react-icons/si";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="hero">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] -z-50 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e4c9a9] to-[#C3C0B9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] -z-50 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e4c9a9] to-[#C3C0B9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(250%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] -z-50 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e4c9a9] to-[#C3C0B9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(400%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] -z-50 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e4c9a9] to-[#C3C0B9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="invisible 3xl:visible relative">
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0}
            perspective={1000}
            transitionEasing="cubic-bezier(.03,.98,.52,.99)"
            className="tilt-background z-0 absolute"
          >
            <img
              src="/src/public/bubble_front.png"
              alt="background"
              className="background-image"
            />
          </Tilt>
          <div>
            <Tilt
              glareEnable={true}
              tiltReverse={true}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareMaxOpacity={0}
              perspective={1000}
              transitionEasing="cubic-bezier(.03,.98,.52,.99)"
              className="tilt-background -z-10 absolute"
            >
              <img
                src="/src/public/bubble_back.png"
                alt="background"
                className="background-image"
              />
            </Tilt>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-20 z-10">
          <div className="flex-1 flex justify-center md:justify-end items-center mb-10 md:mb-0">
            <img
              src="/src/public/profile_frame.png"
              alt="img_profile"
              className=" max-w-md xl:max-w-xl h-96 md:h-auto object-cover"
            />
          </div>
          <div className="mr-5 md:py-32 lg:py-56 flex aos-init aos-animate ">
            <div
              className="text-center md:text-left lg:mr-52 z-10"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Hi there.",
                    2000,
                    "Nice to meet you!",
                    1000,
                    "I'm Rifa Indra Setiawan",
                    2000,
                    "You Can Call Me Rifa",
                    1000,
                  ]}
                  speed={40}
                  style={{ fontSize: "4rem" }}
                  repeat={0}
                />
                {/* <Tooltip
                  content=<span className="p-2 border-2 border-indigo-600 rounded-md bg-white text-black">
                    Rifa Indra Setiawan
                  </span>
                  animate={{
                    mount: { scale: 1.4, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <span className="text-indigo-600"> Rifa</span>
                </Tooltip> */}
                {""}
                <br />{" "}
                {/* <span className="text-4xl md:text-5xl">
                  a Software Engineering Student
                </span> */}
              </h1>
              <p className="mt-6 text-xl leading-8 text-grayLight">
                A passionate{" "}
                <span className="font-bold">Software Engineer</span> who is
                enthusiastic about tech-related topics.
              </p>
              <div className="mt-6">
                <p className="text-xl font-serif font-extrabold">
                  GET IN TOUCH <span aria-hidden="true">&#8628;</span>
                </p>
              </div>
              <div className="mt-5 md:flex gap-x-6">
                <div className="flex items-center justify-center gap-4">
                  <IconButton
                    text="Github"
                    link="https://github.com/rifaset123"
                  >
                    <FaGithub size={30} />
                  </IconButton>
                  <IconButton
                    text="Linkedin"
                    color="bg-blue-500"
                    link="https://www.linkedin.com/in/rifa-indra-setiawan"
                  >
                    <FaLinkedinIn size={30} />
                  </IconButton>
                  <IconButton
                    text="@rindraset"
                    color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
                    link="https://www.instagram.com/rindraset"
                  >
                    <GrInstagram size={30} />
                  </IconButton>
                  <IconButton
                    text="@wyzeve1"
                    color="bg-black"
                    link="https://www.tiktok.com/@wyzeve1?_t=8mwMa2G3A12&_r=1"
                  >
                    <FaTiktok size={30} />
                  </IconButton>
                  <IconButton
                    text="CV"
                    color="bg-blue-500"
                    link="https://docs.google.com/document/d/1dzcGAcLfqxAG2dAM03LKdoEDUit-Ig5WvlcXMJmAdyA/edit?usp=sharing"
                  >
                    <SiGoogledocs size={30} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e4c9a9] to-[#cbda6d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 rotate-180 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(200%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e4c9a9] to-[#cbda6d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 rotate-45 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(300%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e4c9a9] to-[#cbda6d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 rotate-90 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(400%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e4c9a9] to-[#cbda6d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
