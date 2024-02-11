import React from "react";
import { Link } from "react-router-dom";




const Welcome = () => {


  return (
    <div className="bg-[#121113]">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h2 className="text-white text-3xl pb-[48px] font-bold leading-10">
          Welcome to FundBlock, where innovation <br /> intersects with blockchain prowess
        </h2>

        <div className="sm:grid sm:grid-cols-3 sm:space-x-0 gap-4">
          {/* first content */}
          <div>
            <div className=" w-80 h-px border border-white"></div>
            <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
              Decentralization and Security
            </h3>
            <p className="text-white text-xl font-normal leading-7">
              Fundblock utilizes blockchain's <br />decentralized architecture to enhance{" "}
              <br />
              security.
            </p>
          </div>

          {/* second content */}
          <div>
            <div className=" w-80 h-px border border-white"></div>
            <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
              Global Accessibility
            </h3>
            <p className="text-white text-xl font-normal leading-7">
              By integrating blockchain, FundBlock<br />
              creates a global stage for startups & <br />
              investors to engage in crowdfunding
            </p>
          </div>

          {/* third content */}
          <div>
            <div className=" w-80 h-px border border-white"></div>
            <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
              Efficiency and Speed
            </h3>
            <p className="text-white text-xl font-normal leading-7">
              Through integration with the Polygon <br />
              blockchain, FUNDBLOCK enables rapid <br />
              and streamlined transactions.
            </p>
          </div>
        </div>
        <div className="py-[40px]">
          <Link to="/create-project">
            <button className="bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] px-5 py-2.5  text-black rounded-sm text-center ">
              Launch Project
            </button>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default Welcome;