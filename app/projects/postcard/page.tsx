import Image from "next/image";
import postcardImg from "/public/images/postcard.png";
import Link from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative z-10'">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={postcardImg}
          alt="/"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PostCard App</h2>
          <h3>React JS / Rails / PostgreSQL / Material UI</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p className="uppercase tracking-widest text-[#915BC1]">Overview </p>
          <p>
            This project was created to demonstrate skills learned in the 4th
            Phase of Flatiron School's Software Development program. This
            includes Rails, validations, serialization, authentication, and
            authorization. The project is developed with a React frontend and a
            Rails API, and deployed to Render.
          </p>
          <p>
            This is an electronic version of sending, receiving and collecting
            postcards. Easy modern day technology, sprinkled with some good old
            nostalgia. In this application users can sign up to create an
            account, log in with a secure password and remain logged in while
            navigating the pages of the application. Authentication and
            authorization is implemented using session cookies and the
            CookieStore to persist user information. Once logged in, users can
            view all postcards as well as create and share their own postcards.
            Authorization permits the current user to edit or delete postcards
            they have created. Users can view all postcard comments and create a
            their own comment to any postcard. Authorization permits the current
            user to delete their own comments.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2"></div>
          <p className="text-center font-bold pb-2">Image here, or video?</p>
        </div>
        <Link href="/#projects ">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
