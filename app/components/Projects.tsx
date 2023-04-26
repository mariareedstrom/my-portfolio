import postcardImg from "/public/images/postcard.jpg";
import kittcatImg from "/public/images/kittycatgenerator.jpg";
import margaritaImg from "/public/images/margaritamania.jpg";
import yourstreetImg from "/public/images/yourstreet.jpg";
import madeforyouImg from "/public/images/madeforyou1.jpg";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[960px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest text-[#915BC1] uppercase">
          Projects
        </p>
        <h2 className="py-4">These Are Some Things I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="PostCard App"
            backgroundImg={postcardImg}
            tech="React / Ruby / Rails / PostgreSQL / Material UI"
            projectUrl="/projects/postcard"
          />
          <ProjectItem
            title="Your Street"
            backgroundImg={yourstreetImg}
            tech="React / Ruby / Sinatra"
            projectUrl="/projects/yourstreet"
          />
          <ProjectItem
            title="Made For You"
            backgroundImg={madeforyouImg}
            tech="React / Ruby / Rails / PostgreSQL / Material UI"
            projectUrl="/projects/madeforyou"
          />
          <ProjectItem
            title="Margarita Mania"
            backgroundImg={margaritaImg}
            tech="React / JSON server"
            projectUrl="/projects/margaritamania"
          />
          <ProjectItem
            title="Kitty-Cat Generator"
            backgroundImg={kittcatImg}
            tech="JavaScript"
            projectUrl="/projects/kittycatgenerator"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/#home">
          <div className=" p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#915BC1]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}
