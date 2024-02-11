import React from "react";
import arrow from "../../assets/arrow.png";
import brain from "../../assets/brain.svg";
import health from "../../assets/health.svg";
import data from "../../assets/data.svg";
import robo from "../../assets/robo.svg";
import edu from "../../assets/edu.svg";
import cloud from "../../assets/cloud.svg";


const FundedProjects = () => {
  return (
    <div className="bg-[#121113]">
      <div
        className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
        <div class='mx-80 px-10 text-white mb-3 '>
        <h2 className="text-white text-3xl font-bold leading-10 mx-12">
          Funded Projects
        </h2>
        <img src={arrow} alt='arrow' className='mx-28' />
        <h3 class='text-base'>Projects that achieved funding success via the platform</h3>
        </div>
        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">

            <img alt="" src={brain} className="object-fit-object h-2/3 w-full object-center rounded" />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h2 className="text-white text-xl font-bold leading-loose">
                BrainWave
              </h2>
              <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
              <p className=" text-white text-base font-normal leading-relaxed">
              A start-up that uses neuroscience to develop<br /> AI algorithms for better decision-making.
              </p>
              <hr />
              <p class='text-[#FFDAB9] mt-2'>
                  Total raised<span class='mx-20 text-white'>$3,003,212</span>
                <br></br>Participants<span class='mx-20 text-white'>3498</span>
              </p>
            </div>
            <div  className="bg-[#121113] w-full text-white"><p class='mx-32'>Token Sale</p></div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">

            <img alt="" src={health} className="object-fit-object h-2/3 w-full object-center rounded" />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h2 className="text-white text-xl  font-bold leading-loose">
              HealthBot
              </h2>
              <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
              <p className=" text-white text-base font-normal leading-relaxed">
              Startup creating AI chatbots, wearables for<br /> health advice and monitoring.
              </p>
              <hr />
              <p class='text-[#FFDAB9]'>Total raised <span class='mx-20 text-white'>$1,231,004</span>
                
                <br></br>Participants<span class='mx-20 text-white'>2232</span>
              </p>
            </div>
            <div  className="bg-[#121113] w-full text-white mt-2"><p class='mx-32'>Token Sale</p></div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
            <img alt="" src={data} className="object-fit-object h-2/3 w-full object-center rounded"/>
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl  font-bold leading-loose">
            DataFusion
            </h2>
            <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
            <p className=" text-white text-base font-normal leading-relaxed">
            Cutting-edge data integration solutions for<br />streamlined business insights

            </p>
            <hr />
            <p class='text-[#FFDAB9]'>Total raised <span class='mx-20 text-white'>$9,204,512</span>
              <br></br>Participants<span class='mx-20 text-white'>1287</span>
              
            </p>
          </div>
          <div  className="bg-[#121113] w-full text-white mt-2"><p class='mx-32'>Token Sale</p></div>
          </div>
          
        </div>

        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
           
          <img alt="" src={robo} className="object-fit-object h-2/3 w-full object-center rounded" />
           <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose">
            RoboServe
            </h2>
            <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
            <p className=" text-white  text-base font-normal leading-relaxed">
            Robotics start-up focusing on automation for<br /> food and hospitality industries.

            </p>
            <hr />
            <p class='text-[#FFDAB9]' >Total raised <span class='mx-20 text-white'>$1,678,189</span>
              <br></br>Participants<span class='mx-20 text-white'>789</span>
              
            </p>
            
            </div>
            <div  className="bg-[#121113] w-full text-white mt-4"><p class='mx-32'>Token Sale</p></div>
          </div>

           <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
              <img alt="" src={edu} className="object-fit-object h-2/3 w-full object-center rounded"  />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose mt-4">
            EduVirtuoso
            </h2>
            <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
            <p className=" text-white  text-base font-normal leading-relaxed">
            Virtual reality education platform for  and <br /> immersive interactive learning experiences.

            </p>
            <hr />
            <p class='text-[#FFDAB9]' >Total raised <span class='mx-20 text-white'>$9,345,004</span>
              <br></br>Participants<span class='mx-20 text-white'>1232</span>
              
            </p>
            </div>
            <div  className="bg-[#121113] w-full text-white"><p class='mx-32'>Token Sale</p></div>
          </div>

    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
          <img alt="" src={cloud} className="object-fit-object h-2/3 w-full object-center rounded" />
           <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose">
            CloudLap
            </h2>
            <h2 className="text-[#FFDAB9] text-base font-bold leading-loose">
             0.003 ETH
              </h2>
            <p className=" text-white text-base font-normal leading-relaxed ">
            A start-up that develops innovative virtual <br /> reality technology for educational purposes.

            </p>
            <hr />
            <p class='text-[#FFDAB9]'>Total raised <span class='mx-20 text-white'>$3,610,149</span>
              <br></br>Participants<span class='mx-20 text-white'>5210</span>
              
            </p>
            </div>
            <div  className="bg-[#121113] w-full text-white mt-4"><p class='mx-32 '>Token Sale</p></div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default FundedProjects;
