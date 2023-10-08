import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div class="flex justify-center items-start h-screen">
      <div class="flex flex-col mx-4 bg-white w-3/5 my-4 mb-4">
        <Header />
        <div className="flex-col items-start mx-32 my-10">
          <h1 className="text-3xl font-medium text-gray-500">Conatact Us</h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            There is a twitter
            <a href="https://twitter.com/Ravinderfzk" className="text-rose-600">
              {" "}
              @Ravinderfzk
            </a>
          </h1>
          <h1 className="text-1xl font-medium text-gray-500 my-10">
            There is a github
            <a href="https://github.com/Ravinder-coder" className="text-rose-600">
              {" "}
              @Ravinder-coder
            </a>
          </h1>
          <hr className="border-2 mt-1" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
