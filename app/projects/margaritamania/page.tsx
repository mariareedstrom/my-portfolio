import Image from "next/image";
import margaritaImg from "/public/images/margaritamania.png";
import Link from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 filter blur-sm"
          src={margaritaImg}
          alt="/"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Margarita Mania</h2>
          <h3>React / JSON server / React Router</h3>
        </div>
      </div>

      <main className="lg:ml-8 lg:mr-8 ml-4 mr-4">
        <div className="max-w-[960px] m-auto ">
          <h2 className="mb-4 mt-4 uppercase tracking-widest text-[#915BC1]">
            Overview
          </h2>
          <div className="grid grid-cols-10 gap-2  ">
            <div className="col-span-10 md:col-span-6 order-last md:order-first">
              <p className="py-2 xt-gray-600 ">
                There are so many different types of margaritas to enjoy, so
                many in fact, that it has become hard to keep track. Not to
                worry amigos, with this React application there is a simple way
                to view and manage all your margaritas in one place.
              </p>
              <p className="py-2 xt-gray-600 mb-8">
                Margarita Mania is a React single page application that was
                created using create-react-app. For the backend for this project
                I used json-server. It provides the user with a collection of
                different margarita recipes, allows them to navigate between
                pages, save favorites as well as add and remove recipies from
                the collection. On page load, a fetch request is made to
                retreive all margaritas. Further more, POST, PATCH, and DELETE
                requests are made to add new, set to favorites, and remove
                margaritas. Thanks to dynamic component rendering and
                client-sided routing using React Router, this application both
                looks and feels like multiple pages.
              </p>
            </div>
            <div className="col-span-10 md:col-span-4 m-auto p-4">
              <Image
                className="rounded-xl"
                src={margaritaImg}
                alt="/"
                width={400}
                height={400}
              />
            </div>
          </div>
          <nav className="max-w-[960px] mb-8">
            <a
              href="https://nifty-euler-6e0775.netlify.app/margaritas"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Live Site</button>
            </a>

            <a
              href="https://youtu.be/-sT-ECI3M1c"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Video Demo</button>
            </a>
            <a
              href="https://github.com/mariareedstrom/Phase-2-Project-Margarita-ui"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <Link href="/#projects" className="text-[#915BC1] underline ">
              Have a look at my other projects
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
