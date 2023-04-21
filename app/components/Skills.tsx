import Image from "next/image";

import HTML_PNG from "/public/images/html.png";
import JS_PNG from "/public/images/javascript.png";
import CSS_PNG from "/public/images/css.png";
import REACT_PNG from "public/images/react.png";
import NEXT_PNG from "/public/images/nextjs.png";
import TAILWIND_PNG from "/public/images/tailwind.png";
import RUBY_PNG from "/public/images/ruby.png";
import RAILS_PNG from "/public/images/rails.png";
import POSTGRESQL_PNG from "/public/images/postgresql.png";
import MATERIALUI_PNG from "/public/images/materialui.png";
import GITHUB_PNG from "/public/images/github.png";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-[960px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#915BC1]">
          Skills
        </p>
        <h2 className="py-4 ">This Is What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image src={HTML_PNG} alt="html badge" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={JS_PNG}
                  alt="javascript badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image src={CSS_PNG} alt="css badge" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={REACT_PNG}
                  alt="react badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={NEXT_PNG}
                  alt="nextjs badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={TAILWIND_PNG}
                  alt="tailwind css badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image src={RUBY_PNG} alt="ruby badge" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Ruby</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={RAILS_PNG}
                  alt="rails badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Rails</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={MATERIALUI_PNG}
                  alt="material ui badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4 h-full ">
              <div className="m-auto ">
                <Image
                  src={GITHUB_PNG}
                  alt="github badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300 filter grayscale">
            <div className="grid grid-cols-2 justify-center items-center gap-4  h-full ">
              <div className="m-auto ">
                <Image
                  src={POSTGRESQL_PNG}
                  alt="postgreSQL badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
