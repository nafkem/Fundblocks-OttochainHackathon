import React from "react";
import arrow from "../../assets/arrow.png";




const Projects = () => {
  return (
    <div className="bg-[#121113]">
      <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
        <div class='mx-72 px-6 text-white mb-3 '>
          <h2 className="text-white text-3xl font-bold leading-10">
            Projects, Restrictions and Caveat
          </h2>
          <img src={arrow} alt='arrow' className='mx-36' />
          <h3 class='text-base'>Find more information about projects, restrictions and caveat</h3>
        </div>
        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[50%] mb-5 h-full">


            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <hr class='w-1/4'/>
              <p className=" text-white text-sm font-normal leading-relaxed">
                Types of
                <br></br>project we are
                <br></br>accepting
              </p>


            </div>
          </div>

          <div className="content-card w-full md:w-[50%] mb-5 h-full">


            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <p className=" text-white text-sm font-normal leading-relaxed">
                Our current emphasis is on aiding tech start-ups that have secured seed funding and
                <br></br>moved beyond the ideation phase. We hold the belief that 
                <br></br>start-ups at this juncture hold more significant potential for 
                <br></br>success and are better poised to provide value to both their customers and investors
              </p>
              <p className=" text-white text-sm font-normal leading-relaxed">
                Through our stipulation of seed funding, our intention is to ascertain that the start-ups
                <br></br>we engage with possess a proven concept and have exhibited their capability to attract
                <br></br>investments. This enables us to concentrate our resources and 
                <br></br>assistance on start-ups that exhibit a greater potential for success, 
                <br></br>thereby increasing the probability of yielding returns for our investors.
              </p>
              <p className=" text-white text-sm font-normal leading-relaxed">Though we acknowledge the ingenuity and novelty involved in conceptualizing a new
                <br></br>tech start-up, our conviction lies in the notion that extending support during the seed
                <br></br>funding phase can wield a more substantial influence on the start-up's prosperity. This
                <br></br>developmental stage usually demands advanced expertise, strategic counsel, and
                <br></br>operational backing - areas in which our capabilities are most adept</p>

             

            </div>
          </div>
        </div>
      </div>


      <div className="grid-cols-4 gap-4 md:flex md:flex-row">
        <div className="content-card w-full md:w-[50%] mb-5 h-full   ">


          <div className="w-full h-1/2 pb-5 p-2 shadow-md mx-24">
            <hr class='w-1/4' />
            <p className=" text-white  text-sm font-normal leading-relaxed">
              Possible
              <br></br>requirement to
              <br></br>be aware of

            </p>
            <hr className='color-[#FFDAB9] w-1/4' />
            <p className=" text-white  text-sm font-normal leading-relaxed">Caveat you
              <br></br>should know
            </p>
          </div>
        </div>

        <div className="content-card w-full md:w-[50%] mb-5 h-full ">


          <div className="w-full h-1/2 pb-5 p-2 shadow-md">

            <p className=" text-white  text-sm font-normal leading-relaxed">
              The project must be functional
              <br></br>Must already have a community or a group of clients
              <br></br>Must have a received a seed funding
              <br></br>Must have passed the ideation stage

            </p>
            <p className=" text-white  text-sm font-normal leading-relaxed">
              0% of your cryptocurrency will be allocated to the FundBlock platform from
              <br></br>your investment
            </p>


          </div>
        </div>


      </div>



    </div>


  )
}

export default Projects;
