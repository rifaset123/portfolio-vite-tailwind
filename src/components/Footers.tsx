import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface Navigation {
  main: NavigationItem[];
}

const navigation: Navigation = {
  main: [
    { name: "Vite", href: "https://vitejs.dev/" },
    { name: "React", href: "https://react.dev/" },
    { name: "Tailwind", href: "https://tailwindcss.com/" },
  ],
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-white" id="footers">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
        
        <h1 className="font-bold mt-10 text-center text-md leading-5 mb-2 text-creamDark">
          Powered by
        </h1>
        <nav
          className="columns-3 flex space-x-12 justify-center md:columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className=" md:ml-3">
              <a
                href={item.href}
                className="text-md leading-6 text-gray-600 hover:text-creamDark"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex pb-5 justify-center items-center gap-10 ml-2">
          <a href="https://vitejs.dev/" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
            <img
              className="h-10 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
              alt="vite"
            />
          </a>
          <a href="https://react.dev/" className=" -m-1.5 p-1.5 py-5">
            <span className="sr-only"></span>
            <img
              className="h-10 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react"
            />
          </a>
          <a href="https://tailwindcss.com/" className="-m-1.5 p-1.5 py-5">
            <img
              className="h-8 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png"
              alt="tailwind_logo"
            />
          </a>
          {/* Add more <a> tags with images as needed */}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-gray-500">
          &copy;2024 copyright by Rifa Indra Setiawan for portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
