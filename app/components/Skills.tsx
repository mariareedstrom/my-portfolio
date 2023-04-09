import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#915BC1]">
          Skills
        </p>
        <h2 className="py-4 ">This Is What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/html.png"
                  alt="html badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/javascript.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/css.png"
                  alt="css badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/react.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/nextjs.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/tailwind.png"
                  alt="tailwind badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/html.png"
                  alt="ruby badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Ruby</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/html.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/html.png"
                  alt="materialui badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 justify-center items-center gap-4 ">
              <div className="m-auto ">
                <Image
                  src="/../public/images/github.png"
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
        </div>
      </div>
    </div>
  );
}
