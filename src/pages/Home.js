import React from "react";
import FilteringTable from "../components/FilteringTable";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div class="flex justify-center items-start h-screen">
      <div class="flex flex-col mx-4 bg-white w-3/5 my-4 mb-4">
          <Header />
        <div className="mt-6 ml-6 mr:6 md:ml-28 md:mr-28">
          <h1 className="text-[30px] text-gray-500">
            Remote-friendly companies
          </h1>
          <h2 className="text-[17px] text-gray-500 mt-6">
            A list of semi to fully remote-friendly companies in or around tech.
          </h2>
          <h2 className="text-[17px] text-gray-500 mt-6">
            Contributions are very welcome! Please{" "}
            <span className="text-rose-600">
              review our contributing guidelines
            </span>{" "}
            and then submit a new entry or update.
          </h2>
        </div>
        <FilteringTable />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
