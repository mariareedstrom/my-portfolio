import postcardImg from "/public/images/postcard.png";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest text-[#915BC1] uppercase">
          Projects
        </p>
        <h2 className="py-4">These Are Some Things I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="PostCard App"
            backgroundImg={postcardImg}
            projectUrl="/postcard"
          />
          <ProjectItem
            title="Your Street"
            backgroundImg={postcardImg}
            projectUrl="/yourstreet"
          />
          <ProjectItem
            title="Made For You"
            backgroundImg={postcardImg}
            projectUrl="/madeforyou"
          />
          <ProjectItem
            title="Margarita Mania"
            backgroundImg={postcardImg}
            projectUrl="/margaritamania"
          />
        </div>
      </div>
    </div>
  );
}
