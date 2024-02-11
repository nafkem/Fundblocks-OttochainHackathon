import React from "react";
import arrow from "../../assets/arrow.png";
import jerome from "../../assets/jerome.svg";
import eleanor from "../../assets/eleanor.svg";
import brooklyn from "../../assets/brooklyn.svg";
import { BsStarFill } from "react-icons/bs";




const Testimonies = () => {
    return (
        <div className="bg-[#121113]">
            <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div class='mx-96 px-6 text-white mb-3 '>
                    <h2 className="text-white text-3xl font-bold leading-10 mx-6">
                        Testimonials
                    </h2>
                    <img src={arrow} alt='arrow' className='mx-16' />
                    <h3 class='text-base'>Get inspired straight from the source</h3>
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
                        <div class=' mt-2 mx-2'>
                            <img alt="" src={jerome} className="h-1/3  object-left rounded" />
                            <span><h3 class='text-white'>Jerome Bell</h3>
                                <BsStarFill /> </span>
                        </div>
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">

                            <p className=" text-white text-base font-normal leading-relaxed">
                                Just the support I needed
                            </p>

                            <p class='text-white mt-2'>I had a vision for a groundbreaking tech
                                <br></br>startup, but turning it into reality seemed
                                <br></br>like an insurmountable task. Then I
                                <br></br>stumbled upon this website. Their
                                <br></br>step-by-step guidance, from refining my
                                <br></br>idea to creating a solid business plan,
                                <br></br>propelled my startup to success.
                            </p>
                        </div>
                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
                        <div class='mt-2 mx-2'>
                                                                                                                                                                    <img alt="" src={eleanor} className="h-1/3  object-left rounded" />
                                                                                                                                                                    <span><h3 class='text-white'>Eleanor Pena</h3><BsStarFill /></span>
                        </div>
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <p className=" text-white text-base font-normal leading-relaxed">
                                I’m glad I found this website
                            </p>

                            <p class='text-white '>"Launching my tech startup was a nerve-
                                <br></br>wracking journey until I discovered this
                                <br></br>website. Their comprehensive resources,
                                <br></br> expert mentorship, and interactive tools
                                <br></br>provided me with the roadmap I needed.
                                <br></br>With their unwavering support, my startup
                                <br></br>took flight, and I'm now living my dream’’
                            </p>
                        </div>
                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-[#181B19]">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div class='mt-2 mx-2'>
                                                                                                                                                                    <img alt="" src={brooklyn} className="h-1/3  object-left rounded mt-2 mx-2" />
                                                                                                                                                                    <span><h3 class='text-white'>Brooklyn Simmons</h3><BsStarFill /></span>
                        </div>
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <p className=" text-white text-base font-normal leading-relaxed">
                                Launching made easy
                            </p>

                            <p class='text-white'>"I'm not a tech-savvy person, but I had this
                                <br></br>ingenious app concept. The thought
                                <br></br>of launching a startup overwhelmed me
                                <br></br>until I found this website. Their
                                <br></br>user-friendly interface and insightful
                                <br></br>resources transformed my idea into a
                                <br></br>full-fledged business’’
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Testimonies;
