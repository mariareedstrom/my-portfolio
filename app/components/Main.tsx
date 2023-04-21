import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[960px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600 ">
            Let's build the future together...
          </p>
          <h1 className="py-4 text-gray-700 ">
            Hi y'all, I'm <span className="text-[#915BC1]">Maria</span>
          </h1>
          <h1 className="py-2 text-gray-700 ">I'm a Software Engineer</h1>
          <p className="py-4 text-gray-600 md:max-w-[70%] m-auto ">
            Recent Flatiron School graduate, proficient in JavaScript, React,
            Next.js, Ruby, Ruby on Rails, SQL, and RESTful APIs. I have a
            background in critical care nursing, bringing a unique perspective
            to problem-solving and collaboration in fast-paced environments. I'm
            a proud polyglot, fluent in English, Norwegian, Spanish, Swedish and
            Danish.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4   ">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/maria-reedstrom/"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer
                  hover:scale-110 ease-in duration-300 
                  hover:bg-[#915BC1] hover:text-[#ecf0f3]"
              >
                <FaLinkedinIn className="fill-current" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/mariareedstrom"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer 
                  hover:scale-110 ease-in duration-300 
                  hover:bg-[#915BC1] hover:text-[#ecf0f3]"
              >
                <FaGithub className="fill-current" />
              </div>
            </a>
            <a href="mailto:maria.reedstrom@gmail.com" rel="noopener noferrer">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer
                  hover:scale-110 ease-in duration-300  
                  hover:bg-[#915BC1] hover:text-[#ecf0f3]"
              >
                <AiOutlineMail className="fill-current" />
              </div>
            </a>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300  
                hover:bg-[#915BC1] hover:text-[#ecf0f3]"
            >
              <BsFillPersonLinesFill className="fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
