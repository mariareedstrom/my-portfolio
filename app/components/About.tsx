import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 py-16  ">
      <div className="max-w-[960px] m-auto md:grid grid-cols-3 gap-8  ">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#915BC1]   ">
            About
          </p>
          <h2 className="py-4">This Is Me</h2>
          <p className="py-2 xt-gray-600 ">
            I'm a recent graduate of Flatiron School's Software Engineering
            program with a background in critical care nursing. I'm proficient
            in HTML, CSS, JavaScript, React, Ruby on Rails, SQL, and RESTful
            APIs, and have experience with TypeScript, Next.js, Tailwind CSS and
            Material UI. I'm passionate about object oriented programming and
            test driven development.
          </p>
          <p className="py-2 xt-gray-600 mb-8">
            I bring a strong and diverse skill set as I enter the tech field. My
            experience in healthcare has taught me the importance of attention
            to detail, prioritization of tasks and effective communication. I
            have lived and worked across multiple countries and cultures, which
            in turn has led me to become highly adaptable and resilient. As a
            bilingual professional fluent in multiple languages, I have the
            ability to effectively communicate with clients and team members
            from diverse backgrounds. I am well versed in the principles of
            self-management as well as the art of team work.
          </p>
          <p className="py-2 xt-gray-600 mb-8">
            I'm passionate about using technology to improve people's lives, and
            I'm excited about pursuing my career in software engineering. I'm
            eager to apply my skills and experience to contribute to a dynamic
            team, and I'm always looking for new opportunities to learn and grow
            in this field.
          </p>
          <Link href="/#projects" className="text-[#915BC1] underline">
            Have a look at some of my projects
          </Link>
        </div>
        <div className="m-auto p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="border-4 border-gray-600 rounded-full mx-auto "
            src="/images/profile pic.jpeg"
            alt="Maria Reedstrom"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
