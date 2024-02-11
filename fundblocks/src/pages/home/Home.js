import React from "react";
import landingimage from "../../assets/landingimage.png";
import Welcome from "../../components/welcome/Welcome";
import OngoingProjects from "../../components/ongoing-projects/index";
import FundedProjects from "../../components/funded-projects/index";
import Testimonials from "../../components/testimonials/index";
import Projects from "../../components/projects/index";
import Crypto from "../../components/crypto/index";
import Subfooter from "../../components/sub-footer/Subfooter";
import { Link } from "react-router-dom";




const Home = () => {






    return (
        <main class='bg-[#121113] w-screen'>
            
            <div class='grid grid-cols-1 md:flex md:flex-row gap-2'>
                <div>
                    <h1 className="text-[60px] md:text-[60px] font-bold capitalize  text-white mx-10 mt-24 ">Revolutionizing Tech
                        <br></br>Startup Financing </h1>
                    <h3 className="text-[20px] md:text-[20px] font-light capitalize  text-white mx-10 ">Unleash the Potential of Your Startup with Decentralized
                        <br></br>Funding and Support</h3>
                    <div className="flex item-centre gap-8  mx-8 mt-4">

                    <Link to='/launch-project'><button class="text-black bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] hover:bg-[#5DE4F7] border-[#5DE4F7] border-2 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 dark:bg-[#69FEB0] dark:hover:bg-[#69FEB0] focus:outline-none dark:focus:ring-[#69FEB0]">
                            Launch Project</button></Link>

                        <Link to='/project-details'><button class="text-white bg-[#121113] hover:bg-[#5DE4F7] border-[#5DE4F7] border-2 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 dark:bg-[#69FEB0] dark:hover:bg-[#69FEB0] focus:outline-none dark:focus:ring-[#69FEB0]">
                            Explore more</button></Link>

                    </div>
                </div>
                <div>
                    <img src={landingimage} alt="landingimage" class='mt-16' />
                </div>
            </div>
            <div className="mx-10 justify-center">
                <Welcome />
            </div>
            <div className="justify-center pr-6">
                <OngoingProjects />

            </div>
            <FundedProjects />
            <Testimonials />
            <Projects />
            <Crypto />


            <div>
                <Subfooter />
            </div>
           
        </main>

    )



}


export default Home;