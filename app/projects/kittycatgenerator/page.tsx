import Image from "next/image";
import kittyCatImg from "/public/images/Kittycat Generator Img.png";
import Link from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 filter blur-sm"
          src={kittyCatImg}
          alt="/"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Kitty-Cat Generator</h2>
          <h3>JavaScript / external API</h3>
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
                The Kitty-Cat Generator is a fun pass-time that allows users to
                create new and unique kittens by choosing two existing cats. The
                cats all have unique “DNA”-strings and combining any two cats
                generates a new kitty whose “DNA”-string is a result of
                interlacing the strings of the parent cats (much like human DNA
                sequencing). New kittens are added to the page gallery, and are
                available to combine with others to make even more new kitties.
                The user can “like” their favorites or “set them free” to
                remove. Endless entertainment ahead!
              </p>
              <p className="py-2 xt-gray-600 mb-8">
                This project was developed to showcase skills learned in the
                first phase of Flatiron School's Software Engineering program.
                It is a single page application developed with HTML, CSS, and
                JavaScript for the frontend. It communicates with a the public
                API,
                <a
                  href="https://robohash.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Robohash.org
                </a>
                .
              </p>
            </div>
            <div className="col-span-10 md:col-span-4 m-auto p-4">
              <Image
                className="rounded-xl"
                src={kittyCatImg}
                alt="/"
                width={400}
                height={400}
              />
            </div>
          </div>
          <nav className="max-w-[960px] mb-8">
            <a
              href="https://harmonious-frangipane-7f3815.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Live Site</button>
            </a>

            <a
              href="https://youtu.be/u_BDeWXC1mk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-8 py-2 mt-4 mr-8 ">Video Demo</button>
            </a>
            <a
              href="https://github.com/mariareedstrom/Phase-1-Project-Kitty-Cat-Generator"
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
