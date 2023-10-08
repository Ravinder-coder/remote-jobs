import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div class="flex justify-center items-start h-screen">
      <div class="flex flex-col mx-4 bg-white w-3/5 my-4 mb-4">
        <Header />
        <div className="flex-col items-start mx-32 my-10">
          <h1 className="text-3xl font-medium text-gray-500">About</h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            RemoteInTech.company is primarily a list of semi to fully
            remote-friendly companies in tech.
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            This list is a file in a GitHub repository, of lots of companies,
            which links to another file, that tells you about each company that
            I hold information about.
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            That list is here – remoteintech.company{" "}
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            Anything beyond that list is a bonus. This site will be that bonus,
            maybe some advice, maybe some tips, maybe the odd interview.
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            A remote job isn’t just for “digital nomads”, it is for people who
            don’t want to be stuck in the “9 to 5 routine”, who don’t want to
            work from an office, who want flexibility.
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            It was started by Jessica and is now lead by Doug, previously with
            help from James.
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            If this has helped out at all, 
            <a href="" className="text-rose-600"> I happily accept small payments via GitHub Sponsors.</a>
          </h1>
          <hr className="border-2 mt-1" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
