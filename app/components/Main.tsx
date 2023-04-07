import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600 ">
            Let's build the future together...
          </p>
          <h1 className="py-4 text-gray-700 ">
            Hi y'all, I'm <span className="text-[#915BC1]">Maria</span>
          </h1>
          <h1 className="py-2 text-gray-700 ">I'm a Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            Recent Flatiron School graduate, proficient in JavaScript, React,
            Next.js, Ruby, Ruby on Rails, SQL, and RESTful APIs. I have a
            background in critical care nursing, bringing a unique perspective
            to problem-solving and collaboration in fast-paced environments. I'm
            a proud polyglot, fluent in English, Norwegian, Spanish, Swedish and
            Danish.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4   ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
