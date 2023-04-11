import postcardImg from "/public/images/postcard.png";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest text-[#915BC1] uppercase">
          Projects
        </p>
        <h2 className="py-4">These Are Some Things I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="PostCard App"
            backgroundImg={postcardImg}
            projectUrl="/projects/postcard"
          />
          <ProjectItem
            title="Your Street"
            backgroundImg={postcardImg}
            projectUrl="/projects/yourstreet"
          />
          <ProjectItem
            title="Made For You"
            backgroundImg={postcardImg}
            projectUrl="/projects/madeforyou"
          />
          <ProjectItem
            title="Margarita Mania"
            backgroundImg={postcardImg}
            projectUrl="/projects/margaritamania"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/#home">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}
