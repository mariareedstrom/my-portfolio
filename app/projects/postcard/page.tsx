import Image from "next/image";
import postcardImg from "/public/images/postcard.jpg";
import Link from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative z-10'">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={postcardImg}
          alt="/"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PostCard App</h2>
          <h3>React JS / Rails / PostgreSQL / Material UI</h3>
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
                The PostCard App is an electronic version of sending, receiving
                and collecting postcards. Easy modern day technology, sprinkled
                with some good old nostalgia. This project was created to
                demonstrate skills learned in the 4th Phase of Flatiron School's
                Software Development program, including validations,
                serialization, authentication, and authorization.
              </p>
              <p className="py-2 xt-gray-600 mb-8">
                This is a single page application developed with a React
                frontend and React Router for navigation. I used PostgreSQL for
                the database, implemented the MVC pattern using Ruby on Rails,
                and deployed the app on Render. For user authentication I used
                BCrypt to securely hash and salt user passwords. Finally, I used
                Material UI to design and develop a sleek and userfirendly
                interface.
              </p>
              <p className=" xt-gray-600 mb-8">
                To login, enter username: maria@email.com and password:
                mariapassword
              </p>
            </div>
            <div className="col-span-10 md:col-span-4 m-auto p-4">
              <Image
                className="rounded-xl"
                src={postcardImg}
                alt="/"
                width={400}
                height={400}
              />
            </div>
          </div>
          <nav className="max-w-[960px] mb-8">
            <a
              href="https://postcard-app.onrender.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Live Site</button>
            </a>

            <a
              href="https://youtu.be/Az4l9lybzFQ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Video Demo</button>
            </a>
            <a
              href="https://github.com/mariareedstrom/Phase-4-Project-Postcard-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Code</button>
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
