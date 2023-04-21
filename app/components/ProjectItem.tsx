import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
}

export default function ProjectItem(props: ProjectProps) {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full 
      rounded-xl group hover:bg-gradient-to-r from-[#915BC1] to-[#cbade7]
      "
    >
      <Image
        className="rounded-xl  group-hover:opacity-10 border-solid border-2"
        src={props.backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl  text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className=" pb-4 pt-2 text-white text-center ">
          Developed with {props.tech}
        </p>
        <Link
          href={props.projectUrl}
          className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer 
          block hover:text-[#915BC1]"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
