import React from "react";
import arrow from "../../assets/arrow.png";
import vira from "../../assets/vira.svg";
import auto from "../../assets/auto.svg";
import nano from "../../assets/nano.svg";
import mind from "../../assets/mind.svg";
import remote from "../../assets/remote.svg";
import cyber from "../../assets/cyber.svg";



const OngoingProjects = () => {
  return (
    <div className="bg-[#121113] ">
      <div
        className="container mx-auto px-8
 sm:px-[80px] pb-[100px]"
      ><div class='mx-96 px-6 text-white mb-3 '>
        <h2 className="text-white text-3xl font-bold leading-10">
          Ongoing Projects
        </h2>
        <img src={arrow} alt='arrow' className='mx-16' />
        <h3 class='text-base'>List of ongoing projects to invest in</h3>
        </div>
        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">

            <img alt="" src={vira} className="object-fit-object h-2/3 w-full object-center rounded" />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h2 className="text-white text-xl font-bold leading-loose">
                ViraSafe
              </h2>
              <p className=" text-white text-sm font-normal leading-relaxed">
                AI-driven virus detection and prevention<br /> software for public health
              </p>
              <hr />
              <p class='text-[#FFDAB9] mt-2'>Total raised <span class='mx-16 text-white'>$12,491,432</span>
                <br></br>Fundraising goal<span class='mx-10 text-white'>$78,204,512</span>
                <br></br>Starting date<span class='mx-16 text-white'>October 28</span>
              </p>
            </div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">

            <img alt="" src={auto} className="object-fit-object h-2/3 w-full object-center rounded" />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h2 className="text-white text-xl  font-bold leading-loose">
                AutoPilotAI
              </h2>
              <p className=" text-white text-sm font-normal leading-relaxed">
                Autonomous vehicle technology enhancing<br /> transportation safety and efficiency.
              </p>
              <hr />
              <p class='text-[#FFDAB9] mb-2'>Total raised <span class='mx-16 text-white'>$150,491,562</span>
                <br></br>Fundraising goal<span class='mx-10 text-white'>$190,204,512</span>
                <br></br>Starting date<span class='mx-16 text-white'>October 30</span>
              </p>
            </div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
            <img alt="" src={nano} className="object-fit-object h-2/3 w-full object-center rounded"/>
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl  font-bold leading-loose">
              NanoMedTech
            </h2>
            <p className=" text-white text-sm font-normal leading-relaxed">
              Developing nanotechnology for innovative<br />medical diagnostics and treatments.

            </p>
            <hr />
            <p class='text-[#FFDAB9] mb-2'>Total raised <span class='mx-16 text-white'>$70,555,198</span>
              <br></br>Fundraising goal<span class='mx-10 text-white'>$105,154,781</span>
              <br></br>Starting date<span class='mx-16 text-white'>December 29</span>
            </p>
          </div>
          </div>
        </div>

        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
           
          <img alt="" src={mind} className="object-fit-object h-2/3 w-full object-center rounded" />
           <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose">
              MindMeld
            </h2>
            <p className=" text-white  text-sm font-normal leading-relaxed">
              A start-up that develops natural language<br /> processing and speech recognition technology

            </p>
            <hr />
            <p class='text-[#FFDAB9] mb-4' >Total raised <span class='mx-16 text-white'>$40,255,133</span>
              <br></br>Fundraising goal<span class='mx-10 text-white'>$210,451,098</span>
              <br></br>Starting date<span class='mx-16 text-white'>December 29</span>
            </p>
            </div>
          </div>

           <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
              <img alt="" src={remote} className="object-fit-object h-2/3 w-full object-center rounded"  />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose mt-4">
              RemoteGuard Cybersecurity
            </h2>
            <p className=" text-white  text-sm font-normal leading-relaxed">
              A tech startup ensuring remote workers' <br /> cybersecurity,  and safeguarding sensitive data

            </p>
            <hr />
            <p class='text-[#FFDAB9]' >Total raised <span class='mx-16 text-white'>$40,255,133</span>
              <br></br>Fundraising goal<span class='mx-10 text-white'>$210,451,098</span>
              <br></br>Starting date<span class='mx-16 text-white'>December 21</span>
            </p>
            </div>
          </div>

           <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
            
              <img alt="" src={cyber} className="object-fit-object h-2/3 w-full object-center rounded" />
           <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h2 className="text-white text-xl font-bold leading-loose">
              CyberSolution
            </h2>
            <p className=" text-white text-sm font-normal leading-relaxed ">
              A start-up that develops cybersecurity <br /> solutions for individuals and small businesses.

            </p>
            <hr />
            <p class='text-[#FFDAB9] mb-4'>Total raised <span class='mx-16 text-white'>$120,491,432</span>
              <br></br>Fundraising goal<span class='mx-10 text-white'>$180,204,512</span>
              <br></br>Starting date<span class='mx-16 text-white'>August 29</span>
            </p>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default OngoingProjects;
