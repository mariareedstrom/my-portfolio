import Image from "next/image";
import yourstreetImg from "/public/images/yourstreet.jpg";
import Link from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 filter blur-sm"
          src={yourstreetImg}
          alt="/"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Your Street</h2>
          <h3>
            React JS / Ruby / Rails / SQL / ActiveRecord / Sinatra / Material UI{" "}
          </h3>
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
                Never forget a neighbor's name again! Your Street is an
                application that allows the user to keep track of their
                neighbors. They can also keep track of their own home(s) and
                household members.
              </p>
              <p className="py-2 xt-gray-600 mb-8">
                This application was built to showcase skills learned in Phase 3
                of Flatiron School's Software Engineering Program, including but
                not limited to, use of RESTful conventions, good object oriented
                design patterns, active record associations and full CRUD
                Sinatra API routes.
              </p>
              <p className=" xt-gray-600 mb-8">
                Please note that this application simulates a user being logged
                in and read only functionality is not implemented given no
                actual user or permissions.
              </p>
            </div>
            <div className="col-span-10 md:col-span-4 m-auto p-4">
              <Image
                className="rounded-xl"
                src={yourstreetImg}
                alt="/"
                width={400}
                height={400}
              />
            </div>
          </div>
          <nav className="max-w-[960px] mb-8">
            <a href="/" rel="noopener noreferrer" target="_blank">
              <button className="px-8 py-2 mt-4 mr-8 ">Live Site</button>
            </a>

            <a
              href="https://youtu.be/1j2PSpR_SrE"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Video Demo</button>
            </a>
            <a
              href="https://github.com/mariareedstrom/phase-3-project-yourStreet-frontend"
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
