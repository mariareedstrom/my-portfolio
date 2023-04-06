import Image from "next/image";

export default function About() {
  return (
    <div className="w-full md:h-screen p2 flex items-center py-16  ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  ">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#915BC1]   ">
            About
          </p>
          <h2 className="py-4  ">This Is Me</h2>
          <p className="py-2 xt-gray-600 ">
            I'm a recent graduate of the Flatiron School's Software Engineering
            program with a background in nursing. My experience in healthcare
            has taught me the importance of attention to detail, prioritization
            of tasks, and effective communication, all of which are valuable
            skills in the tech industry. I'm proficient in React, Ruby on Rails,
            SQL, and RESTful APIs, and have experience with JavaScript, HTML,
            and CSS.
          </p>
          <p className="py-2 xt-gray-600 ">
            As a bilingual professional fluent in Spanish, Norwegian, Danish,
            and Swedish, I have the ability to effectively communicate with
            clients and team members from diverse backgrounds. I'm passionate
            about using technology to improve people's lives, and I'm excited
            about pursuing a career in software engineering. I'm eager to apply
            my skills and experience to contribute to a dynamic team, and I'm
            always looking for new opportunities to learn and grow in this
            field.
          </p>
          <p className="py-2 xt-gray-600 underline cursor-pointer ">
            Have a look at some of my projects{" "}
          </p>
        </div>
        <div className="m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            className="border-4 border-gray-600 drop-shadow-xl shadow-black rounded-full mx-auto"
            src="/images/profile pic.jpeg"
            alt="Maria Reedstrom"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
