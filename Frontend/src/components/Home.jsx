"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
import { Button } from "./ui/moving-border.tsx";
import { Route } from "react-router-dom";
 export default function Home() {
  const words = [
    {
      text: "Generate",
    },
    {
        text: "a",
      },
    {
      text: "link",
    },
    {
      text: "to",
    },

    {
        text: "play",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Play chess with your friends
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-white border dark:border-white border-black text-black text-sm">
          Join now
        </button>
        <button className="p-[3px] relative transform translate-y-[-3px]" >
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="w-40 h-10 px-10 py-2 bg-black rounded-[11px] relative group transition duration-200 text-white hover:bg-transparent">
    Demo
  </div>
</button>

      </div>
    </div>
  );
}
