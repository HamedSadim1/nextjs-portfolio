import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="border flex flex-col w-[300px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-md overflow-hidden ">
      <div className="h-[244px]  border relative">
        <Image
          src="https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="project-Image"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-fit p-4 gap-4">
        <h2 className="font-semibold text-xl">
          Build GitHub User Search App With Next.js | Dark Mode #reactjs #nextjs
          #github
        </h2>
        <p className="text-gray-400">
          React SPA with Redux React SPA with Redux
        </p>
        <div>
          <Link
            href=""
            target="_blank"
            className="flex gap-2 border w-fit p-1 px-3 hover:opacity-60"
          >
            Live Demo
          </Link>
        </div>

        {/* technologies that i used in my project */}

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 p-2 bg-slate-950 rounded-lg ">
            React
          </span>
          <span className="text-sm text-gray-400">Redux</span>
          <span className="text-sm text-gray-400">Next.js</span>
          <span className="text-sm text-gray-400">TypeScript</span>
          <span className="text-sm text-gray-400">Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
