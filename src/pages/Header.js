import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h1 className="mt-10 text-center font-medium text-rose-600 text-2xl">
          Remote In Tech
        </h1>
        <h1 className="ml-6 mr:6 md:mt-3 text-center text-slate-500	text-base">
          A list of semi to fully remote-friendly companies in tech
        </h1>
      </div>
      <hr className="border-2 mt-6" />
      <div className="my-2">
        <ul className="flex justify-center">
          <li className="p-3">
            <Link to="/" className="text-slate-500 hover:text-rose-600">
              The List
            </Link>
          </li>
          <li className="p-3">
            <Link to="/about" className="text-slate-500 hover:text-rose-600">
              About
            </Link>
          </li>
          <li className="p-3">
            <Link to="/contact" className="text-slate-500 hover:text-rose-600">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-2 mt-1" />
    </div>
  );
};

export default Header;
