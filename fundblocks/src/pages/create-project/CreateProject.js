import React, {useState, useEffect} from "react";
import arrow from "../../assets/arrow.png";
import { addCampaign, getAllCampaigns } from "../../contracts/call";






const CreateProject = () => {

    const [isCampaign, setIsCampaign] = useState(false);
    
    const target = 1000;
    const createCampaign = async () => {
        await addCampaign('Viralsafe', 'AI-driven virus detection and prevention software for public health', target, 'deadline');

    }

    const fetchCampaign = async () => {
        const campaign = await getAllCampaigns('0x3a713416811728E7Ab977C6A3E3DC20F5aC9d1c7');
        console.log(campaign)
        if (campaign) {
            setIsCampaign(true);
        }
    };

    useEffect(() => {
        fetchCampaign();
    }, []);




    return (
        <main className='bg-[#121113]'>
            <section class='w-[90%] md:w-[80%] mx-auto py-10'>
                

                <h1 className="text-[30px] md:text-[34px] font-bold text-white mx-10">
                    Create a Project{" "}
                </h1>
                <img src={arrow} alt="arrow" class='mx-32' />
                <p class='text-white'>Create a new project by filling out the form below</p>

                <form class='mt-64 w-1/2'>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectTitle">
                            Project title
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="A catchy and descriptive name for your project" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectCategory">
                            Project category
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="projectCategory" type="text" placeholder="The category of your project. E.g Blockchain, AI, Robotic, etc" required> </input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="fundingGoals">
                            Funding goals
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="fundingGoals" type="text" placeholder="Specify the amount of funded needed to complete the project" required> </input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="cryptocurrencyChoice">
                            Cryptocurrency of choice
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="cryptocurrencyChoice" type="amount" placeholder="This platform accepts Matic, Ethereum, & other Polygon-compatible tokens" required> </input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectTimeline">
                            Project timeline
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="projectTimeline" type="duration" placeholder="Duration needed to complete the project with deadlines and milestones" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="teamBackground">
                            Team background
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="teamBackground" type="text" placeholder="Brief background of team members; their qualifications & experience" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="projectImpact">
                            Roadmap
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="projectImpact" type="text" placeholder="A plan of action highlighting the key stages of the project" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="rewards">
                            Reward for the Investors
                        </label>
                        <input class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline" id="rewards" type="text" placeholder="What do investors stand to gain" required></input>
                    </div>

                    <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] hover:bg-blue-700'
                     onClick={() => createCampaign()}>Create Project</button>
                </form>
                
            </section>
        </main>
    );
};

export default CreateProject;