import React from "react";
import Subscriber from "../subscribe/Subscribe";


const Subfooter = () => {
  return (
    <div className="bg-[#181B19]">
      <div className="container mx-auto sm:px-[80px] pb-[100px]">
     
      <h2 className="text-white text-xl sm:text-3xl font-bold leading-10 mt-4">
        Subscribe to our mailing list
      </h2>
      <p className="text-justify pt-[10px] text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7">
        Join our mailing list today for exclusive updates
        <br /> on this cutting-edge solution and more.{" "}

      </p>

      <Subscriber />
      
      </div>
    </div>
    


  )
}

export default Subfooter;   