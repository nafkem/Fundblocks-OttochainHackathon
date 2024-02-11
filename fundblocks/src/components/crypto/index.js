import React from "react";
import arrow from "../../assets/arrow.png";
import partners from "../../assets/partners.png";


const Crypto = () => {
    return (
        <div className="bg-[#121113]">
            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div class='mx-80 px-10 text-white mb-3 '>
                    <h2 className="text-white text-3xl font-bold leading-10 mx-4">
                        Cryptocurrency Token
                    </h2>
                    <img src={arrow} alt='arrow' className='mx-28' />
                    <h3 class='text-base'>Cryptocurrency tokens the platform accepts</h3>
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row">

            <p className=" text-white text-base font-normal leading-relaxed mx-80">
                        Matic, Ethereum, and other Polygon-compatible tokens
                    </p>


                </div>
                <div class='mx-80 px-10 text-white mb-3 '>
                    <h2 className="text-white text-3xl font-bold leading-10 mx-12">
                        Our Partners
                    </h2>
                    <img src={arrow} alt='arrow' className='mx-28' />
                    <h3 class='text-base'>Meet our well renowned and regonised partners</h3>
                </div>

                <div className="grid-cols-4 gap-4 md:flex md:flex-row">

                    <img src={partners} alt="partners" class='mx-11' />
                    
                            
                    </div>

                    
                </div>

                



           
        </div>
    )
}

export default Crypto;
